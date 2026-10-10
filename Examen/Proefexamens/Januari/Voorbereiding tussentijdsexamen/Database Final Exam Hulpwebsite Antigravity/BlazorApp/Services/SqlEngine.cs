using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace DatabaseStudyGuide.Services
{
    public class SqlEngine
    {
        private Dictionary<string, Table> _tables = new();

        public SqlEngine()
        {
            InitializeData();
        }

        public class Table
        {
            public string Name { get; set; } = "";
            public List<string> Columns { get; set; } = new();
            public List<Dictionary<string, object>> Rows { get; set; } = new();
        }

        public class QueryResult
        {
            public List<string> Columns { get; set; } = new();
            public List<Dictionary<string, object>> Rows { get; set; } = new();
            public string Message { get; set; } = "";
            public bool IsError { get; set; }
        }

        private void InitializeData()
        {
            // Tennis.Speler
            var speler = new Table
            {
                Name = "Tennis.Speler",
                Columns = new List<string> { "id", "naam", "voornaam", "geb_datum", "geslacht", "adres", "postcode", "plaats", "telefoon", "bondsnr" }
            };
            // Seed data from Chapter 5 context (partial)
            speler.Rows.Add(new Dictionary<string, object> { { "id", 1 }, { "naam", "Moerman" }, { "voornaam", "R." }, { "geb_datum", "1963-12-08" }, { "geslacht", "M" }, { "adres", "Centuurbaan 111" }, { "postcode", "2532GK" }, { "plaats", "Den Haag" }, { "telefoon", "070-4444555" }, { "bondsnr", "5678" } });
            speler.Rows.Add(new Dictionary<string, object> { { "id", 2 }, { "naam", "Van de Berg" }, { "voornaam", "R." }, { "geb_datum", "1963-12-08" }, { "geslacht", "V" }, { "adres", "Centuurbaan 112" }, { "postcode", "2532GK" }, { "plaats", "Leiden" }, { "telefoon", "070-4444556" }, { "bondsnr", "5679" } });
            // Add more dummy data as needed
            for(int i=3; i<=10; i++)
            {
                speler.Rows.Add(new Dictionary<string, object> { { "id", i }, { "naam", $"Speler{i}" }, { "voornaam", $"V{i}" }, { "geb_datum", $"1980-01-{i:00}" }, { "geslacht", i%2==0?"V":"M" }, { "adres", "Straat 1" }, { "postcode", "1000AA" }, { "plaats", "Brussel" }, { "telefoon", "000" }, { "bondsnr", null } });
            }
            _tables.Add("tennis.speler", speler); // Store lowercase key

                 // Tennis.Team
            var team = new Table
            {
                Name = "Tennis.Team",
                Columns = new List<string> { "teamnr", "speler_id", "divisie" }
            };
            team.Rows.Add(new Dictionary<string, object> { { "teamnr", 1 }, { "speler_id", 1 }, { "divisie", "ere" } });
            team.Rows.Add(new Dictionary<string, object> { { "teamnr", 2 }, { "speler_id", 2 }, { "divisie", "tweede" } });
            _tables.Add("tennis.team", team);

            // Tennis.Boete
            var boete = new Table
            {
                Name = "Tennis.Boete",
                Columns = new List<string> { "betalingsnr", "speler_id", "datum", "bedrag" }
            };
            boete.Rows.Add(new Dictionary<string, object> { { "betalingsnr", 1 }, { "speler_id", 1 }, { "datum", "2020-01-01" }, { "bedrag", 100.00 } });
            _tables.Add("tennis.boete", boete);

            // Tennis.Wedstrijd
            var wedstrijd = new Table
            {
                Name = "Tennis.Wedstrijd",
                Columns = new List<string> { "wedstrijdnr", "teamnr", "speler_id", "gewonnen", "verloren" }
            };
             wedstrijd.Rows.Add(new Dictionary<string, object> { { "wedstrijdnr", 1 }, { "teamnr", 1 }, { "speler_id", 2 }, { "gewonnen", 3 }, { "verloren", 1 } });
            _tables.Add("tennis.wedstrijd", wedstrijd);
        }

        public QueryResult Execute(string sql)
        {
            try
            {
                sql = sql.Trim();
                if (string.IsNullOrWhiteSpace(sql)) return new QueryResult { Message = "Empty query" };

                if (sql.StartsWith("SELECT", StringComparison.OrdinalIgnoreCase))
                {
                    return HandleSelect(sql);
                }
                else if (sql.StartsWith("INSERT", StringComparison.OrdinalIgnoreCase))
                {
                    return new QueryResult { Message = "INSERT simulated successfully (no persistent change in demo)." };
                }
                else
                {
                    return new QueryResult { Message = $"Command not supported in simulated sandbox: {sql.Split(' ')[0]}" };
                }
            }
            catch (Exception ex)
            {
                return new QueryResult { IsError = true, Message = ex.Message };
            }
        }

        private QueryResult HandleSelect(string sql)
        {
            // Very basic regex parser for: SELECT * FROM Table
            var match = Regex.Match(sql, @"SELECT\s+(.+?)\s+FROM\s+([a-zA-Z0-9_\.]+)", RegexOptions.IgnoreCase);
            if (!match.Success)
            {
                return new QueryResult { IsError = true, Message = "Invalid syntax. Expected: SELECT ... FROM ..." };
            }

            var colPart = match.Groups[1].Value.Trim();
            var tablePart = match.Groups[2].Value.Trim().ToLower();

            if (!_tables.ContainsKey(tablePart))
            {
                 // Try looking for table without prefix
                 var found = _tables.Keys.FirstOrDefault(k => k.EndsWith("." + tablePart) || k == tablePart);
                 if (found != null) tablePart = found;
                 else return new QueryResult { IsError = true, Message = $"Table not found: {tablePart}" };
            }

            var table = _tables[tablePart];
            var result = new QueryResult();
            
            // Handle columns
            if (colPart == "*")
            {
                result.Columns = new List<string>(table.Columns);
                result.Rows = table.Rows; // Shallow copy of list is safer but for read-only simulation ok
            }
            else
            {
                var reqCols = colPart.Split(',').Select(c => c.Trim()).ToList();
                result.Columns = reqCols;
                
                // Filter rows
                foreach(var r in table.Rows)
                {
                    var newRow = new Dictionary<string, object>();
                    foreach(var c in reqCols)
                    {
                        // Handle aggregates roughly or just return matches
                        if (r.ContainsKey(c)) newRow[c] = r[c];
                        else if (c.ToLower() == "count(*)") newRow[c] = table.Rows.Count; // minimal hack
                        else newRow[c] = "NULL";
                    }
                    result.Rows.Add(newRow);
                }
            }
            
            result.Message = $"{result.Rows.Count} rows returned.";
            return result;
        }

        public List<Table> GetSchema() => _tables.Values.ToList();
    }
}
