SQL CHEAT SHEET - EXAMENVOORBEREIDING
1. Datatypes (DTC, DTR, DTN)
Gebruikt bij CREATE TABLE en ALTER TABLE om te definiëren wat er in een kolom mag.

DTC (Data Type Character - Tekst)
CHAR(n): Vaste lengte (bijv. landcode: CHAR(2)).

VARCHAR(n): Variabele lengte (bijv. naam: VARCHAR(100)).

TEXT: Voor zeer lange stukken tekst.

DTR / DTN (Numeric - Getallen)
INT / INTEGER: Gehele getallen.

DECIMAL(p,s): Precieze kommagetallen (totaal cijfers, cijfers achter komma). Gebruik dit voor geld.

FLOAT / REAL: Kommagetallen (wetenschappelijke benadering).

DTN (Date/Time - Tijd)
DATE: Datum (YYYY-MM-DD).

TIME: Tijd (HH:MM:SS).

DATETIME / TIMESTAMP: Datum en tijd samen.

2. Data Ophalen (SELECT)
Specifieke kolommen selecteren =

SQL

SELECT kolomnaam1, kolomnaam2
FROM Schemanaam.Tabelnaam;
Alle kolommen selecteren =

SQL

SELECT *
FROM Schemanaam.Tabelnaam;
Unieke waarden (duplicaten verwijderen) =

SQL

SELECT DISTINCT kolomnaam
FROM Schemanaam.Tabelnaam;
Alias (tijdelijke naam voor kolom) =

SQL

SELECT kolomnaam AS nieuwe_naam
FROM Schemanaam.Tabelnaam;
3. Data Filteren (WHERE)
Filtert rijen voordat ze gegroepeerd worden.

Operatoren =

SQL

SELECT * FROM Tabelnaam
WHERE kolom = 'waarde'      -- Gelijk aan
   OR kolom <> 'waarde'     -- Niet gelijk aan (!=)
   OR kolom > 10;           -- Groter dan
Range (tussen waarden) =

SQL

SELECT * FROM Tabelnaam
WHERE kolomnaam BETWEEN 10 AND 20;
Lijst (komt voor in lijst) =

SQL

SELECT * FROM Tabelnaam
WHERE kolomnaam IN ('Waarde A', 'Waarde B');
Patroonherkenning (Wildcards) =

SQL

SELECT * FROM Tabelnaam
WHERE kolomnaam LIKE 'S%';    -- Begint met S
-- % = nul of meer tekens
-- _ = precies één teken
Lege waarden zoeken =

SQL

SELECT * FROM Tabelnaam
WHERE kolomnaam IS NULL;      -- (of IS NOT NULL)
4. Data Sorteren (ORDER BY)
Sorteren =

SQL

SELECT * FROM Tabelnaam
ORDER BY kolomnaam ASC;  -- Oplopend (Standaard)
-- ORDER BY kolomnaam DESC; -- Aflopend
5. Scalaire Functies
Bewerkingen op individuele waarden.

Tekst samenvoegen (CONCAT) =

SQL

SELECT CONCAT(voornaam, ' ', achternaam) AS volledige_naam
FROM Tabelnaam;
Tekst functies =

SQL

SELECT UPPER(kolom),      -- Hoofdletters
       LOWER(kolom),      -- Kleine letters
       LENGTH(kolom),     -- Aantal tekens
       SUBSTRING(kolom,1,3) -- Deel van tekst
FROM Tabelnaam;
Rekenen =

SQL

SELECT prijs * 1.21 AS prijs_incl_btw
FROM Tabelnaam;
6. Groeperen (GROUP BY)
Gebruikt in combinatie met aggregatiefuncties (COUNT, SUM, AVG, MAX, MIN).

Groeperen =

SQL

SELECT categorie, COUNT(*)
FROM Producten
GROUP BY categorie;
Filteren op gegroepeerde data (HAVING) = Let op: WHERE filtert rijen, HAVING filtert groepen.

SQL

SELECT categorie, AVG(prijs)
FROM Producten
GROUP BY categorie
HAVING AVG(prijs) > 50;
7. Structuur Wijzigen (ALTER TABLE)
Nieuwe kolom toevoegen =

SQL

ALTER TABLE Tabelnaam
ADD kolomnaam datatype;
Kolom verwijderen =

SQL

ALTER TABLE Tabelnaam
DROP COLUMN kolomnaam;
Alternatieve Key (Unique) toevoegen =

SQL

ALTER TABLE Tabelnaam
ADD CONSTRAINT uq_naam UNIQUE (kolomnaam);
Index toevoegen (Snelheid) =

SQL

CREATE INDEX idx_naam
ON Tabelnaam (kolomnaam);
Achteraf Index of Constraint verwijderen =

SQL

DROP INDEX idx_naam ON Tabelnaam;
-- Of
ALTER TABLE Tabelnaam DROP CONSTRAINT constraint_naam;
8. Data Wijzigen (DML)
Rijen wijzigen (UPDATE) =

SQL

UPDATE Schemanaam.Tabelnaam
SET kolomnaam1 = 'nieuwe waarde',
    kolomnaam2 = 'andere waarde'
WHERE voorwaarde;
(Zonder WHERE worden alle rijen aangepast!)

Rijen verwijderen (DELETE) =

SQL

DELETE FROM Schemanaam.Tabelnaam
WHERE voorwaarde;
(Zonder WHERE wordt de hele tabel leeggegooid!)

Nieuwe rij toevoegen (INSERT) =

SQL

INSERT INTO Schemanaam.Tabelnaam (kolom1, kolom2)
VALUES ('waarde1', 'waarde2');
9. Tabellen Koppelen (JOINS)
INNER JOIN (Alleen matches) =

SQL

SELECT t1.kolom, t2.kolom
FROM TabelA t1
INNER JOIN TabelB t2 ON t1.id = t2.a_id;
LEFT JOIN (Alles links + matches rechts) =

SQL

SELECT t1.kolom, t2.kolom
FROM TabelA t1
LEFT JOIN TabelB t2 ON t1.id = t2.a_id;
RIGHT JOIN (Alles rechts + matches links) =

SQL

SELECT t1.kolom, t2.kolom
FROM TabelA t1
RIGHT JOIN TabelB t2 ON t1.id = t2.a_id;
10. Subqueries
Een query binnen een query.

In de WHERE clause (Filteren op resultaat) =

SQL

SELECT * FROM Producten
WHERE prijs > (SELECT AVG(prijs) FROM Producten);
In de SELECT clause (Berekende kolom) =

SQL

SELECT naam,
       (SELECT COUNT(*) FROM Orders WHERE Orders.klant_id = Klanten.id) AS aantal_orders
FROM Klanten;