// De taken van de takenlijst. Codes zijn dezelfde als in het Word-document.
window.TAKEN = {
 "titel": "Takenlijst Databaseproject",
 "ondertitel": "Projectopgave Databases WT · ERD, SQL en NoSQL · met Bouwcontrole als bron",
 "versie": "V1 · 10 oktober 2026",
 "secties": [
  {
   "id": "v",
   "code": "V",
   "naam": "Voorbereiding",
   "kort": "Voorbereiding",
   "intro": "Wat je regelt voor je aan het model begint. Een goede afbakening en een README vanaf dag één besparen je later het meeste werk.",
   "groepen": [
    {
     "naam": "Afspraken en planning",
     "taken": [
      {
       "t": "Zoek op Canvas de deadline van elk onderdeel op en vul ze bovenaan in.",
       "u": "De opgave zegt dat de deadline via een Canvas-opdracht wordt meegedeeld. Kijk meteen of je één ZIP inlevert of drie aparte: de opgave beschrijft per onderdeel een eigen upload.",
       "b": "Opgave · Upload",
       "id": "V01"
      },
      {
       "t": "Lees de regels van de opgave nog eens na.",
       "u": "Je werkt individueel, zonder samenwerking en zonder AI-tools tijdens het project. Het project telt voor 30% van je score: ERD 15%, SQL 10%, NoSQL 5%. Je gebruikt alle leerstof van het vak.",
       "b": "Opgave · inleiding",
       "id": "V02"
      },
      {
       "t": "Plan je tijd volgens de gewichten en de volgorde.",
       "u": "Het ERD weegt het zwaarst, en de twee andere delen bouwen erop verder: de SQL komt uit je ERD, de MongoDB-schema's ook. Een fout in het ERD werkt door in alles wat volgt (H1, het hefboomeffect). Reken dus de meeste tijd voor het ERD en begin pas aan de SQL als het ERD af is.",
       "b": "Opgave · H1",
       "id": "V03"
      }
     ]
    },
    {
     "naam": "Bestanden en programma's",
     "taken": [
      {
       "t": "Download het SQL-sjabloon van Canvas (Modules, deze opdracht).",
       "u": "De opgave noemt het bestand 15-project-sjabloon-rxxxxxxx.ipynb. In je map staat template-voornaam_achternaam-rxxxxxxx.ipynb. Ga na of dat hetzelfde bestand is; die vraag staat ook bij de vragen voor je leerkracht.",
       "b": "Opgave · Deel SQL",
       "id": "V04"
      },
      {
       "t": "Geef het sjabloon je eigen naam en r-nummer.",
       "u": "Zowel in de bestandsnaam als in de titel bovenaan het notebook (PE Project: Voornaam Achternaam).",
       "b": "Sjabloon",
       "id": "V05"
      },
      {
       "t": "Zet je werkomgeving klaar en test ze.",
       "u": "draw.io voor het ERD. SQL Server in Docker (de compose.yml in Cursus/Overig) en dezelfde notebookomgeving als bij de oefeningen voor het sjabloon. MongoDB Community Server en Compass voor de schema's. Test elk programma één keer voor je echt begint.",
       "b": "Cursus/Overig · H14",
       "id": "V06"
      },
      {
       "t": "Maak een projectmap met een vaste indeling.",
       "u": "Bijvoorbeeld één map per onderdeel (ERD, SQL, NoSQL) en je README. Zo stel je elke ZIP bij het inleveren in één keer samen, zonder te zoeken.",
       "b": "Opgave · Upload",
       "id": "V07"
      }
     ]
    },
    {
     "naam": "Bron en afbakening",
     "taken": [
      {
       "t": "Leg je bron vast in één zin.",
       "u": "De opgave vraagt een ERD via de synthesemethode \"dat gebruikt kan worden om de bron zo getrouw mogelijk na te bouwen\". Schrijf op wat je bron precies is en waar je de gegevens haalt. Die zin komt bovenaan je README.",
       "b": "Opgave · Deel Relationeel modelleren",
       "id": "V08"
      },
      {
       "t": "Baken af welk deel van je bron je modelleert.",
       "u": "Je bron is veel groter dan nodig, en de opgave raadt dat ook aan. Kies een samenhangend deel waarin alle eisen passen. De voorbeeldmodellen die je kreeg, hebben 11 tot 16 entiteiten. Zie aandachtspunt 1.",
       "b": "Opgave · Onderwerp",
       "id": "V09"
      },
      {
       "t": "Begin je README meteen.",
       "u": "Noteer vanaf dag één elke keuze die verwarring kan geven, met de reden erbij. De opgave laat uitdrukkelijk een README.md of Word-document toe om je keuzes te verantwoorden. Achteraf reconstrueren waarom je iets deed, lukt veel slechter.",
       "b": "Opgave · Verduidelijkingen",
       "id": "V10"
      }
     ]
    }
   ]
  },
  {
   "id": "e",
   "code": "E",
   "naam": "ERD — relationeel modelleren",
   "kort": "ERD",
   "gewicht": "15%",
   "deadline": true,
   "intro": "Het zwaarste deel, en de basis voor de twee andere. Werk in de volgorde van de synthesemethode: eerst conceptueel, dan logisch, dan fysiek.",
   "groepen": [
    {
     "naam": "Stap 1 · Conceptueel model",
     "taken": [
      {
       "t": "Lijst alles op waarover je gegevens wilt bijhouden.",
       "u": "Dat zijn je kandidaat-entiteiten: personen, plaatsen, dingen of gebeurtenissen die van blijvend belang zijn binnen je bron en die uniek identificeerbaar zijn.",
       "b": "H1 · Wat is een entiteit",
       "id": "E01"
      },
      {
       "t": "Bepaal welke kandidaten kernentiteiten zijn.",
       "u": "Een kernentiteit is onafhankelijk: ze bestaat op zichzelf, heeft op zichzelf betekenis en is datgene waar je toepassing over gaat.",
       "b": "H2 · Soorten entiteiten",
       "id": "E02"
      },
      {
       "t": "Teken het conceptuele model: alleen de kernentiteiten en hun relaties.",
       "u": "Nog geen attributen en geen details over de relaties. Veel-op-veel mag op dit niveau nog.",
       "b": "H1 · Conceptueel datamodel · Synthesemethode",
       "id": "E03"
      },
      {
       "t": "Kijk na of elke relatie nodig is.",
       "u": "Bestaat er al een pad tussen twee entiteiten, dan is een tweede pad meestal overbodig. Zo weinig mogelijk relaties is de vuistregel.",
       "b": "H1 · laatste dia",
       "id": "E04"
      }
     ]
    },
    {
     "naam": "Stap 2 · Logisch model",
     "taken": [
      {
       "t": "Geef elke entiteit haar attributen.",
       "u": "Een attribuut is een kenmerk dat één keer per record voorkomt en bij die ene entiteit hoort.",
       "b": "H1 · Entiteit en attribuut",
       "id": "E05"
      },
      {
       "t": "Splits samengestelde gegevens op.",
       "u": "Wat je ooit apart wilt gebruiken, sorteren of zoeken, staat in een eigen attribuut. Vraag je per attribuut af of het één gegeven is of meerdere.",
       "b": "H1 · Samengestelde gegevens",
       "id": "E06"
      },
      {
       "t": "Haal procesgegevens eruit.",
       "u": "Wat je kunt berekenen uit andere gegevens, bewaar je niet. Bewaar je toch iets berekends omdat je bron dat vraagt, verantwoord het dan in je README.",
       "b": "H1 · Procesgegevens",
       "id": "E07"
      },
      {
       "t": "Vervang elke veel-op-veelrelatie door een associatie-entiteit.",
       "u": "Een tussentabel met twee één-op-veelrelaties. In het fysieke model mag geen veel-op-veel meer staan. De opgave zegt letterlijk dat een niet-herkende veel-op-veel zware gevolgen heeft voor je score.",
       "b": "H2 · Optie 3 · H7 deel 1 · Opgave · Feedback",
       "id": "E08"
      },
      {
       "t": "Gebruik geen één-op-éénrelatie zonder goede reden.",
       "u": "H2 raadt aan de twee entiteiten dan samen te voegen. Houd je er toch één, verantwoord het in je README.",
       "b": "H2 · Connectiviteit",
       "id": "E09"
      }
     ]
    },
    {
     "naam": "Soorten en aantallen",
     "taken": [
      {
       "t": "Zet bij elke entiteit haar soort.",
       "u": "Kern, associatie of karakteristiek. De opgave vraagt de benoeming van de soort van elke entiteit. Het voorbeeldmodel van audible toont dat met een label boven elke entiteit.",
       "b": "Opgave · Vereisten · voorbeeldmodellen",
       "id": "E10"
      },
      {
       "t": "Tel na: minstens 10 entiteiten.",
       "u": "Alle entiteiten samen.",
       "b": "Opgave · Vereisten",
       "id": "E11"
      },
      {
       "t": "Tel na: minstens 3 kernentiteiten.",
       "u": "",
       "b": "Opgave · Vereisten",
       "id": "E12"
      },
      {
       "t": "Tel na: minstens 2 associatie-entiteiten.",
       "u": "Elke associatie-entiteit is een echte veel-op-veelsituatie uit je bron.",
       "b": "Opgave · Vereisten · H2",
       "id": "E13"
      },
      {
       "t": "Tel na: minstens 1 karakteristieke entiteit.",
       "u": "Een karakteristieke entiteit bestaat niet op zichzelf en dient om een andere entiteit te verduidelijken, te kwalificeren of te karakteriseren. H3 toont ze als zelfgemaakt type: weinig attributen, weinig relaties, een lijst die kan groeien.",
       "b": "Opgave · H2 · H3",
       "id": "E14"
      },
      {
       "t": "Tel na: 4 vrij gekozen entiteiten bovenop die 6.",
       "u": "",
       "b": "Opgave · Vereisten",
       "id": "E15"
      },
      {
       "t": "Tel na: één kernentiteit met minstens 8 attributen.",
       "u": "Tel voor de zekerheid zonder id en zonder foreign keys, tot je leerkracht zegt dat die meetellen.",
       "b": "Opgave · Vereisten",
       "id": "E16"
      },
      {
       "t": "Tel na: elke andere kernentiteit minstens 4 attributen.",
       "u": "Niet elke kandidaat-kernentiteit heeft er van zichzelf vier. Zie aandachtspunt 3.",
       "b": "Opgave · Vereisten",
       "id": "E17"
      }
     ]
    },
    {
     "naam": "Naamgeving",
     "taken": [
      {
       "t": "Entiteiten: hoofdletter, enkelvoud, een naam die zegt wat erin zit.",
       "u": "",
       "b": "H1 · Naamgeving · ERD-checklist",
       "id": "E18"
      },
      {
       "t": "Attributen: kleine letter, camelCase, enkelvoud, geen afkortingen, geen underscores.",
       "u": "",
       "b": "H1 · Naamgeving",
       "id": "E19"
      },
      {
       "t": "Zet de naam van de entiteit niet nodeloos in een attribuut.",
       "u": "Alleen als het verwarring voorkomt.",
       "b": "H1 · Logisch model",
       "id": "E20"
      },
      {
       "t": "Wees overal consequent, ook in de taal.",
       "u": "Kies Nederlands of Engels en blijf daarbij in het hele model. H1 zegt dat naamgeving consequent moet gebeuren.",
       "b": "H1 · Wat is hier niet goed?",
       "id": "E21"
      }
     ]
    },
    {
     "naam": "Sleutels",
     "taken": [
      {
       "t": "Geef elke entiteit een primaire sleutel id van type int.",
       "u": "Een surrogaatsleutel: zonder betekenis, minimaal, wordt nooit gewijzigd en is altijd ingevuld.",
       "b": "H1 · Primaire sleutel · H2 · Surrogaatsleutel",
       "id": "E22"
      },
      {
       "t": "Zoek voor elke kernentiteit een alternatieve sleutel.",
       "u": "Een kandidaatsleutel die je niet als PK gebruikt, wordt een AK. De ERD-checklist van H2: alle kernentiteiten hebben minimaal één alternatieve sleutel. Duid ze aan met AK.",
       "b": "H2 · Alternatieve sleutels",
       "id": "E23"
      },
      {
       "t": "Zet elke foreign key aan de veel-kant van zijn relatie.",
       "u": "Een FK bevat altijd de volledige PK van de entiteit aan de één-kant. De opgave: een FK in de foute tabel heeft zware gevolgen voor je score.",
       "b": "H2 · ERD-checklist · Opgave · Feedback",
       "id": "E24"
      },
      {
       "t": "Nummer je relaties en je foreign keys.",
       "u": "Relaties krijgen een volgnummer: R1, R2, … Elke FK krijgt het nummer van zijn relatie.",
       "b": "H2 · ERD-checklist",
       "id": "E25"
      }
     ]
    },
    {
     "naam": "Relaties",
     "taken": [
      {
       "t": "Zet bij elke relatie aard en connectiviteit, aan beide kanten.",
       "u": "0..1, 0..*, 1..1 of 1..*. De aard zegt of de relatie optioneel (0) of verplicht (1) is, de connectiviteit hoeveel (1 of *). Een relatie geldt in twee richtingen: bepaal ze allebei.",
       "b": "H2 · Aard en connectiviteit · H7 deel 1",
       "id": "E26"
      },
      {
       "t": "Toets elke relatie aan je bron met twee vragen.",
       "u": "Kan het ene bestaan zonder het andere? Dat is de aard. Hoeveel van het ene horen bij één van het andere? Dat is de connectiviteit. Neem het antwoord uit je bron, niet uit wat makkelijk tekent.",
       "b": "H2",
       "id": "E27"
      },
      {
       "t": "Schrijf voor elke relatie een relatiebeschrijving.",
       "u": "In gewone zinnen, van links naar rechts of van boven naar onder. Zet een pijl als verwarring mogelijk is. Een veel-op-veel mag je in één keer beschrijven. H3 en H4 tonen de vorm (R1: …).",
       "b": "H2 · Connectiviteit · H3 · H4",
       "id": "E28"
      }
     ]
    },
    {
     "naam": "Datatypes, NA/NNA en delete-opties",
     "taken": [
      {
       "t": "Geef elk attribuut een datatype, na een dubbelpunt.",
       "u": "Logisch gebruik je algemene types (int, float, string, date, time, datetime, boolean), fysiek de types van SQL Server. Vraag na welke soort je leerkracht in het ERD verwacht: de voorbeeldmodellen gebruiken beide.",
       "b": "H3 · Datatype bepalen",
       "id": "E29"
      },
      {
       "t": "Gebruik alleen een getal als je ermee rekent.",
       "u": "H3 geeft telefoonnummer, huisnummer en postcode als voorbeelden van tekst.",
       "b": "H3",
       "id": "E30"
      },
      {
       "t": "Zet bij elk attribuut NA of NNA tussen accolades.",
       "u": "De PK is altijd NNA. Bij een FK volgt het uit de aard van de relatie: aard 1 wordt NNA, aard 0 wordt NA.",
       "b": "H3 · Null",
       "id": "E31"
      },
      {
       "t": "Kies voor elke foreign key DTR, DTN of DTC.",
       "u": "DTC alleen als het verwijderen van de ouder de kinderen zinloos maakt, bijna uitsluitend bij associatietabellen. DTN kan alleen bij een optionele aard. DTR is het standaardgedrag. De voorbeeldmodellen zetten de keuze bij de NA/NNA tussen dezelfde accolades.",
       "b": "H3 · DTC/DTR/DTN · H4",
       "id": "E32"
      },
      {
       "t": "Kijk na of NA/NNA en de delete-opties elkaar niet tegenspreken.",
       "u": "Een FK die NNA is, kan niet DTN zijn.",
       "b": "H3",
       "id": "E33"
      }
     ]
    },
    {
     "naam": "Special topic en enumeratie",
     "taken": [
      {
       "t": "Kies minstens één special topic uit H12.",
       "u": "Recursieve relaties, tijdsafhankelijke attributen of overerving. Kies een topic dat echt in je bron voorkomt.",
       "b": "H12 · Opgave · Vereisten",
       "id": "E34"
      },
      {
       "t": "Kies bij je special topic bewust een variant en schrijf op waarom.",
       "u": "H12 geeft per topic meerdere opties met hun voor- en nadelen. Zet je keuze en de reden in je README, samen met de manier waarop je de entiteiten van je special topic benoemt (aandachtspunt 4).",
       "b": "H12",
       "id": "E35"
      },
      {
       "t": "Kies je een recursieve relatie: let op de delete-opties.",
       "u": "H12 legt uit welke delete-opties SQL Server bij een recursieve relatie niet ondersteunt. Hou daar in je ERD al rekening mee.",
       "b": "H12 · Recursieve relaties",
       "id": "E36"
      },
      {
       "t": "Voeg minstens één enumeratie toe en toon de mogelijke waarden.",
       "u": "Een enum is een vaste, kleine lijst waarden zonder eigen entiteit. Vuistregel: een enum als de lijst klein en stabiel is, een karakteristieke entiteit als ze vaak wijzigt of eigen eigenschappen krijgt.",
       "b": "H3 · Zelfgemaakte types · Opgave",
       "id": "E37"
      }
     ]
    },
    {
     "naam": "Afwerken en inleveren",
     "taken": [
      {
       "t": "Loop de zeven feedbackcriteria van de opgave af.",
       "u": "Datatypes · relaties (plaats van de FK's, herkende veel-op-veel) · delete-opties · multipliciteiten en NA/NNA · relatiebeschrijvingen · benoemen van de entiteiten · aantal tabellen en attributen.",
       "b": "Opgave · Feedback",
       "id": "E38"
      },
      {
       "t": "Loop de ERD-checklists van H1 en H2 af.",
       "u": "Ze staan verspreid over de dia's, telkens onder de titel ERD CHECKLIST.",
       "b": "H1 · H2",
       "id": "E39"
      },
      {
       "t": "Maak je model leesbaar.",
       "u": "Vermijd kruisende lijnen waar het kan, en zet relatienummers en multipliciteiten duidelijk bij de juiste lijn.",
       "b": "voorbeeldmodellen",
       "id": "E40"
      },
      {
       "t": "Werk je README af.",
       "u": "Elke keuze die in het algemeen fout lijkt maar in jouw geval klopt, met de reden. De opgave raadt dat aan om verkeerde interpretaties bij de beoordeling te vermijden.",
       "b": "Opgave · Verduidelijkingen",
       "id": "E41"
      },
      {
       "t": "Lever het .drawio-bestand en je README in.",
       "u": "Geen .png of .jpeg: die worden niet aanvaard.",
       "b": "Opgave · Upload",
       "id": "E42"
      }
     ]
    }
   ]
  },
  {
   "id": "s",
   "code": "S",
   "naam": "SQL op basis van het ERD",
   "kort": "SQL",
   "gewicht": "10%",
   "deadline": true,
   "intro": "Tabellen, data en 28 queries in het sjabloon. Elke query hoort bij een vraag die je zelf opstelt.",
   "groepen": [
    {
     "naam": "Voorbereiden",
     "taken": [
      {
       "t": "Begin pas als je ERD af is.",
       "u": "De opgave vraagt tabellen op basis van je ERD. Moet er toch iets veranderen, pas dan eerst het ERD aan en daarna de SQL, zodat die twee altijd overeenkomen.",
       "b": "Opgave · Deel SQL",
       "id": "S01"
      },
      {
       "t": "Vraag na waar je CREATE- en INSERT-statements komen.",
       "u": "Het sjabloon heeft alleen vakken voor queries. Zie de vragen voor je leerkracht.",
       "b": "Sjabloon",
       "id": "S02"
      },
      {
       "t": "Leg de volgorde vast waarin je tabellen aanmaakt.",
       "u": "Eerst de tabellen zonder foreign keys, daarna de tabellen waarvan de FK's naar al gemaakte tabellen verwijzen. Herhaal tot alles er is.",
       "b": "H4 · Volgorde van aanmaken",
       "id": "S03"
      }
     ]
    },
    {
     "naam": "Tabellen aanmaken",
     "taken": [
      {
       "t": "Maak een eigen schema voor je tabellen.",
       "u": "Een schema groepeert samenhorende tabellen. Je tabellen heten dan Schema.Tabel.",
       "b": "H4 · Schema",
       "id": "S04"
      },
      {
       "t": "Geef elke primaire sleutel autonummering.",
       "u": "Verplicht volgens de opgave.",
       "b": "Opgave · H4",
       "id": "S05"
      },
      {
       "t": "Geef elke kolom het juiste SQL Server-datatype.",
       "u": "Primaire en refererende sleutels zijn altijd int. Kies tekstlengtes die passen bij je echte data.",
       "b": "H4 · Datatypes",
       "id": "S06"
      },
      {
       "t": "Zet NULL of NOT NULL zoals in je ERD.",
       "u": "Altijd op kolomniveau.",
       "b": "H4 · Constraints",
       "id": "S07"
      },
      {
       "t": "Geef elke constraint een naam volgens de les.",
       "u": "PK_Tabel, FK_Tabel_TabelPK, UK_Tabel_kolom, CK_Tabel_kolom en DF_Tabel_kolom.",
       "b": "H4 · Constraints",
       "id": "S08"
      },
      {
       "t": "Zet je alternatieve sleutels om.",
       "u": "Een alternatieve sleutel krijgt meestal een UNIQUE-constraint.",
       "b": "H2 · H4",
       "id": "S09"
      },
      {
       "t": "Zet je delete-opties om, precies zoals in je ERD.",
       "u": "H4 toont wat je bij DTC, DTN en DTR schrijft.",
       "b": "H4 · DTC, DTR, DTN",
       "id": "S10"
      },
      {
       "t": "Dwing je enumeratie af in de database.",
       "u": "H4 toont een constraint die alleen bepaalde waarden toelaat.",
       "b": "H4 · Constraints",
       "id": "S11"
      },
      {
       "t": "Zorg dat je het hele script opnieuw kunt uitvoeren.",
       "u": "H4 legt uit in welke volgorde je tabellen weer verwijdert. Voer het script uit op een lege database en los elke fout op.",
       "b": "H4 · Volgorde van verwijderen",
       "id": "S12"
      },
      {
       "t": "Vergelijk elke tabel met je ERD.",
       "u": "Dezelfde tabellen, kolommen, types, NA/NNA, sleutels en delete-opties. Wat verschilt, maak je gelijk.",
       "b": "",
       "id": "S13"
      }
     ]
    },
    {
     "naam": "Data · 20 records per tabel",
     "taken": [
      {
       "t": "Voorzie minstens 20 records in elke tabel.",
       "u": "Ook in je associatie- en karakteristieke entiteiten. Zie aandachtspunt 2.",
       "b": "Opgave · Deel SQL",
       "id": "S14"
      },
      {
       "t": "Voeg data in in dezelfde volgorde als het aanmaken.",
       "u": "Een foreign key kan alleen verwijzen naar een record dat al bestaat.",
       "b": "H4",
       "id": "S15"
      },
      {
       "t": "Test hoe autonummering en je INSERTs samengaan.",
       "u": "Wie vult de id in, jij of de database? Test het op één tabel voor je de rest schrijft.",
       "b": "H4 · Rijen toevoegen",
       "id": "S16"
      },
      {
       "t": "Maak fictieve data die geloofwaardig is voor je bron.",
       "u": "De opgave vraagt fictieve data. Hoe dichter ze bij de werkelijkheid ligt, hoe zinvoller je vragen worden.",
       "b": "Opgave · Deel SQL",
       "id": "S17"
      },
      {
       "t": "Zorg dat je data de queries mogelijk maakt.",
       "u": "Denk vooraf aan wat de thema's nodig hebben: lege waarden in NA-kolommen, records zonder tegenhanger voor LEFT en RIGHT JOIN en NOT IN, herhaalde waarden om op te groeperen, datums verspreid over de tijd, tekst om stringfuncties op te gebruiken.",
       "b": "H5 tot H10",
       "id": "S18"
      },
      {
       "t": "Tel na dat elke tabel 20 records of meer heeft.",
       "u": "Met een telling per tabel uit H8.",
       "b": "H8",
       "id": "S19"
      }
     ]
    },
    {
     "naam": "Queries · 28 in totaal",
     "taken": [
      {
       "t": "Select & Where: 5 vragen, elk met een query.",
       "u": "WHERE met vergelijkingen, IN, BETWEEN, LIKE (ook met ESCAPE), IS NULL, DISTINCT, CASE en ORDER BY.",
       "b": "H5 · Sjabloon",
       "id": "S20"
      },
      {
       "t": "Scalaire functies: 5 vragen, elk met een query.",
       "u": "Stringfuncties, numerieke functies, datum- en tijdfuncties en geavanceerde functies (zoals CONVERT, ISNULL en NULLIF), en sorteren op een expressie. Spreid je keuze over de soorten.",
       "b": "H6 · Sjabloon",
       "id": "S21"
      },
      {
       "t": "Joins: 5 vragen, met minstens één INNER, één LEFT en één RIGHT JOIN.",
       "u": "Ook joins over drie of meer tabellen en het gebruik van aliassen.",
       "b": "H7 deel 1 en 2 · Sjabloon",
       "id": "S22"
      },
      {
       "t": "Subqueries: 5 vragen, elk met een query.",
       "u": "Met =, IN, NOT IN, geneste subqueries, een subquery in de SELECT en dubbele zoekvelden.",
       "b": "H9 · Sjabloon",
       "id": "S23"
      },
      {
       "t": "Set-functies: 3 vragen, elk met een query.",
       "u": "COUNT, MIN, MAX, AVG en SUM. Let op de regel over gewone kolommen naast een set-functie.",
       "b": "H8 · Sjabloon",
       "id": "S24"
      },
      {
       "t": "Group by: 5 vragen, elk met een query.",
       "u": "Groeperen op één of meer kolommen en op expressies, met NULL-waarden, en HAVING. De tekst in het sjabloon spreekt hier van set-functies, maar het thema is Group by.",
       "b": "H10 · Sjabloon",
       "id": "S25"
      },
      {
       "t": "Schrijf bij elk vak eerst de vraag, dan de query.",
       "u": "Een query moet uit een vraag voortvloeien. Een vergeten vraag kost bijkomend punten. Formuleer de vraag zoals het voorbeeld in de opgave: wat wil je weten, en welke gegevens toon je.",
       "b": "Opgave · Let op",
       "id": "S26"
      },
      {
       "t": "Kijk na of elke query precies op haar vraag antwoordt.",
       "u": "Niet meer en niet minder kolommen of rijen dan de vraag vraagt.",
       "b": "Opgave · Let op",
       "id": "S27"
      },
      {
       "t": "Maak de eerste thema's niet te eenvoudig.",
       "u": "De opgave zegt dat de beginnende thema's strenger beoordeeld worden vanwege de moeilijkheidsgraad. Vraag na hoe dat bedoeld is.",
       "b": "Opgave · Deel SQL",
       "id": "S28"
      },
      {
       "t": "Gebruik gerust leerstof uit latere lessen.",
       "u": "Het sjabloon laat dat in elk thema toe, zolang je het gevraagde aantal queries haalt.",
       "b": "Sjabloon",
       "id": "S29"
      },
      {
       "t": "Schrijf je SQL netjes, zoals in de les.",
       "u": "Sleutelwoorden in hoofdletters, SELECT, FROM en WHERE elk op een nieuwe regel, inspringen, afsluiten met een puntkomma, en altijd Schema.Tabel.",
       "b": "H4 · H5",
       "id": "S30"
      },
      {
       "t": "Voer elke query uit en controleer het resultaat met je eigen data.",
       "u": "Een query die zonder fout draait, kan nog altijd het verkeerde antwoord geven. H11 toont dat één vraag vaak meerdere juiste oplossingen heeft.",
       "b": "H11",
       "id": "S31"
      }
     ]
    },
    {
     "naam": "Inleveren",
     "taken": [
      {
       "t": "Voer het hele notebook nog één keer van boven naar onder uit.",
       "u": "Zo weet je dat alles in de juiste volgorde werkt, ook voor wie het nakijkt.",
       "b": "",
       "id": "S32"
      },
      {
       "t": "Lever het ingevulde sjabloon in, in een ZIP.",
       "u": "",
       "b": "Opgave · Upload",
       "id": "S33"
      }
     ]
    }
   ]
  },
  {
   "id": "n",
   "code": "N",
   "naam": "NoSQL — MongoDB",
   "kort": "NoSQL",
   "gewicht": "5%",
   "deadline": true,
   "intro": "Twee kernentiteiten uit je ERD worden JSON-schema's voor MongoDB. Per relatie kies je tussen embedden en refereren.",
   "groepen": [
    {
     "naam": "Keuze van de kernentiteiten",
     "taken": [
      {
       "t": "Bepaal je grootste kernentiteit.",
       "u": "Die moet je altijd omzetten. Twijfel je wat 'grootste' betekent, vraag het na.",
       "b": "Opgave · Deel NoSQL",
       "id": "N01"
      },
      {
       "t": "Kies een tweede kernentiteit.",
       "u": "Die is vrij te kiezen. Een kernentiteit met relaties naar andere entiteiten geeft je meer om te tonen.",
       "b": "Opgave · Deel NoSQL",
       "id": "N02"
      },
      {
       "t": "Lijst per gekozen kernentiteit al haar relaties op.",
       "u": "Uit je ERD, met de multipliciteit erbij.",
       "b": "ERD",
       "id": "N03"
      }
     ]
    },
    {
     "naam": "Embedden of refereren",
     "taken": [
      {
       "t": "Beslis per relatie: embedden of refereren.",
       "u": "Wat samen opgevraagd en samen aangepast wordt, bewaar je samen. Eén-op-één en één-op-weinig embed je. Bij veel-op-veel en één-op-veel refereer je meestal, zeker als het om duizenden kan gaan. Wat apart aangepast wordt, komt in een eigen collectie. Een document mag niet groter worden dan 16 MB.",
       "b": "H14 · Embed vs. reference",
       "id": "N04"
      },
      {
       "t": "Schrijf bij elke beslissing waarom.",
       "u": "In je README, of in de description van het schema.",
       "b": "H14",
       "id": "N05"
      },
      {
       "t": "Embed je een entiteit, neem ze dan op in het schema.",
       "u": "De opgave: in dat geval voeg je de andere entiteit toe in je document.",
       "b": "Opgave · Deel NoSQL",
       "id": "N06"
      },
      {
       "t": "Refereer je, maak dan geen schema voor het andere document.",
       "u": "De opgave: voor documenten waarnaar je verwijst, hoef je geen schema te maken. H14 toont hoe een verwijzing eruitziet.",
       "b": "Opgave · H14",
       "id": "N07"
      },
      {
       "t": "Denk na over je karakteristieke entiteiten.",
       "u": "In een documentdatabase wordt zo'n entiteit vaak een tekstveld of een gekopieerde waarde: duplicatie wordt daar in veel gevallen verkozen boven verwijzingen.",
       "b": "H14 · Relationeel vs. document",
       "id": "N08"
      }
     ]
    },
    {
     "naam": "JSON-schema opstellen",
     "taken": [
      {
       "t": "Maak per kernentiteit een eigen .json-bestand.",
       "u": "De opgave vraagt de schema's als JSON-bestanden.",
       "b": "Opgave · H14",
       "id": "N09"
      },
      {
       "t": "Geef elk veld het juiste bsonType.",
       "u": "object, array, string, int, decimal, date, objectId en zo verder. De volledige lijst staat bij MongoDB.",
       "b": "H14 · Schema definiëren",
       "id": "N10"
      },
      {
       "t": "Bepaal welke velden in required komen.",
       "u": "Laat je leiden door NA en NNA uit je ERD.",
       "b": "H14",
       "id": "N11"
      },
      {
       "t": "Maak de variabele structuur zichtbaar in het schema.",
       "u": "De opgave: NULL-waarden, optionele verwijzingen en andere variabele structuur moeten zichtbaar zijn. H14 toont hoe required en anyOf dat uitdrukken; anyOf is ook de aanpak voor overerving.",
       "b": "Opgave · H14 · Special topics",
       "id": "N12"
      },
      {
       "t": "Geef geneste objecten en arrays hun eigen structuur.",
       "u": "Een array krijgt items met daarin de beschrijving van wat erin zit.",
       "b": "H14",
       "id": "N13"
      },
      {
       "t": "Volg de naamregels van MongoDB.",
       "u": "Collecties in het meervoud. Geen spaties in de namen van databases en collecties; in veldnamen vermijd je spaties en speciale tekens.",
       "b": "H13 · H14",
       "id": "N14"
      },
      {
       "t": "Kijk na of elk bestand geldige JSON is.",
       "u": "Komma's tussen de eigenschappen, niet na de laatste, en teksten tussen dubbele aanhalingstekens.",
       "b": "H14",
       "id": "N15"
      }
     ]
    },
    {
     "naam": "Testen in MongoDB",
     "taken": [
      {
       "t": "Maak in Compass een database met per schema een collectie met validatie.",
       "u": "Via het tabblad Validation, zoals in de laatste dia's van H14.",
       "b": "H14 · Aan de slag met MongoDB",
       "id": "N16"
      },
      {
       "t": "Voeg testdocumenten toe die het schema moeten doorstaan.",
       "u": "Ook een document waarin de optionele velden ontbreken.",
       "b": "H13",
       "id": "N17"
      },
      {
       "t": "Voeg een testdocument toe dat geweigerd moet worden.",
       "u": "Bijvoorbeeld met een ontbrekend verplicht veld. Wordt het toch aanvaard, dan klopt je schema niet.",
       "b": "",
       "id": "N18"
      }
     ]
    },
    {
     "naam": "Inleveren",
     "taken": [
      {
       "t": "Lever je JSON-bestanden in, in een ZIP.",
       "u": "",
       "b": "Opgave · Upload",
       "id": "N19"
      }
     ]
    }
   ]
  },
  {
   "id": "a",
   "code": "A",
   "naam": "Aandachtspunten uit de haalbaarheidscontrole",
   "kort": "Aandachtspunten",
   "intro": "De vier punten die bij de controle van 10 oktober opvielen. Vink ze af wanneer je ze bewust beslist hebt.",
   "groepen": [
    {
     "naam": "Bewust beslissen",
     "taken": [
      {
       "t": "Afbakening",
       "u": "Je domein is veel groter dan het project vraagt. Kies bewust welk deel je modelleert. De voorbeeldmodellen die ik bekeek, hebben 11 tot 16 entiteiten.",
       "b": "Haalbaarheidscontrole V1",
       "id": "A01"
      },
      {
       "t": "20 records per tabel",
       "u": "Dat geldt voor elke tabel, ook voor je karakteristieke entiteiten. Sommige keuzelijsten in je domein hebben maar een handvol echte waarden. De vuistregel in H3 over enum tegenover karakteristieke entiteit helpt je kiezen.",
       "b": "Haalbaarheidscontrole V1 · H3",
       "id": "A02"
      },
      {
       "t": "Kernentiteiten met minstens 4 attributen",
       "u": "Niet elke kandidaat-kernentiteit heeft er van zichzelf vier. Tel na bij de entiteiten die je kiest.",
       "b": "Haalbaarheidscontrole V1",
       "id": "A03"
      },
      {
       "t": "Twee maatstaven",
       "u": "De opgave vraagt dat je je bron zo getrouw mogelijk nabouwt; je app houdt alleen bij wat een controle nodig heeft. Beslis vooraf welke maatstaf voorgaat en verantwoord je keuzes in je README, ook hoe je de delen van je special topic benoemt.",
       "b": "Haalbaarheidscontrole V1",
       "id": "A04"
      }
     ]
    }
   ]
  },
  {
   "id": "q",
   "code": "Q",
   "naam": "Vragen voor je leerkracht",
   "kort": "Vragen",
   "vraag": true,
   "intro": "Onduidelijkheden in de opgave en het sjabloon. Vink af wanneer je het antwoord hebt, en noteer het erbij.",
   "groepen": [
    {
     "naam": "Te vragen",
     "taken": [
      {
       "t": "Waar komen de CREATE TABLE- en INSERT-statements?",
       "u": "Het sjabloon heeft alleen vakken voor queries.",
       "b": "Sjabloon",
       "id": "Q01"
      },
      {
       "t": "Is template-voornaam_achternaam-rxxxxxxx.ipynb het juiste sjabloon?",
       "u": "De opgave noemt 15-project-sjabloon-rxxxxxxx.ipynb.",
       "b": "Opgave · Sjabloon",
       "id": "Q02"
      },
      {
       "t": "Tellen id en de foreign keys mee voor de 8 en de 4 attributen van de kernentiteiten?",
       "u": "",
       "b": "Opgave · Vereisten",
       "id": "Q03"
      },
      {
       "t": "Welke datatypes verwacht je in het ERD: de algemene of die van SQL Server?",
       "u": "H3 onderscheidt de twee; de voorbeeldmodellen gebruiken beide.",
       "b": "H3 · voorbeeldmodellen",
       "id": "Q04"
      },
      {
       "t": "Wat betekent 'de beginnende thema's worden strenger beoordeeld'?",
       "u": "",
       "b": "Opgave · Deel SQL",
       "id": "Q05"
      },
      {
       "t": "Wat is de 'grootste' kernentiteit voor het NoSQL-deel: de meeste attributen of de meeste relaties?",
       "u": "",
       "b": "Opgave · Deel NoSQL",
       "id": "Q06"
      },
      {
       "t": "Lever je één ZIP in of drie aparte, en wat zijn de deadlines?",
       "u": "",
       "b": "Opgave · Upload",
       "id": "Q07"
      },
      {
       "t": "Hoe benoem je de entiteiten van je special topic, en tellen ze mee in de verdeling over de soorten?",
       "u": "",
       "b": "Opgave · Vereisten · H12",
       "id": "Q08"
      }
     ]
    }
   ]
  },
  {
   "id": "b",
   "code": "B",
   "naam": "Na de inlevering — naar Bouwcontrole",
   "kort": "Na inlevering",
   "optioneel": true,
   "intro": "Optioneel en pas nadat alles beoordeeld is. Zo blijft het schoolproject volledig van jou en loop je in Bouwcontrole niet vooruit.",
   "groepen": [
    {
     "naam": "Overzetten",
     "taken": [
      {
       "t": "Wacht tot alle drie de delen ingeleverd en beoordeeld zijn.",
       "u": "Verander daarna niets meer aan wat je ingeleverd hebt.",
       "b": "",
       "id": "B01"
      },
      {
       "t": "Verwerk eerst de feedback van je leerkracht in een kopie van je ERD.",
       "u": "",
       "b": "",
       "id": "B02"
      },
      {
       "t": "Zet die kopie in je Bouwcontrole-repo.",
       "u": "Het ERD-bestand in de map Database schema is nog een leeg sjabloon; je kopie kan het vervangen.",
       "b": "Repo Bouwcontrole",
       "id": "B03"
      },
      {
       "t": "Leg de twee maatstaven naast elkaar en beslis per verschil.",
       "u": "Het schoolmodel bouwt de bron getrouw na; Bouwcontrole houdt alleen bij wat een controle nodig heeft.",
       "b": "ontwerp-bouwcontrole · sectie 5",
       "id": "B04"
      },
      {
       "t": "Hou rekening met de andere database.",
       "u": "Het vak werkt met SQL Server; Bouwcontrole staat op PostgreSQL met EF Core, waar de tabellen uit je C#-klassen komen. Je neemt het ontwerp over, niet het SQL-script of de testdata.",
       "b": "projectafspraken §6",
       "id": "B05"
      },
      {
       "t": "Volg het stappenplan: de database komt pas in fase 6.",
       "u": "Niet vooruitlopen op de lessen.",
       "b": "projectafspraken §1 · stappenplan",
       "id": "B06"
      }
     ]
    }
   ]
  }
 ]
};
