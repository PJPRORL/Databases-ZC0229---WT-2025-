Databases
Special topics datamodellering

Inhoud

•	Recursieve relaties
•	Tijdsafhankelijke attributen
•	Overerving

Graduaat programmeren	2

Special topics
Recursieve relaties

Graduaat programmeren

•	Entiteiten die met zichzelf in relatie staan
•	Recursieve relaties maken het modelleren van hiërarchische data mogelijk
•	Veel voorkomend bij boomstructuren
•	Organigrammen
•	Categorisatie met sub-categorieën
•	Stambomen
•	Software pakketten en hun dependencies

•	Een entiteit per niveau
•	De hiërarchische structuur wordt volledig overgenomen in het model

Text is not SVG - cannot display

Voordelen
•	Duidelijk model
•	Veel flexibiliteit omtrent (verplichte) relaties en attributen
Nadelen
•	Groter model
•	Duplicatie van verschillende attributen

Text is not SVG - cannot display

•	De hiërarchische structuur is niet meer expliciet aanwezig
•	Een algemene entiteit die een relatie met zichzelf heeft

Voordelen
•	Kleiner model
•	Attributen moeten niet in verschillende entiteiten gedefinieerd worden

Nadelen
•	Flexibiliteit is weg
•	bonus en budget waren NNA in de hiërarchische
versie maar moeten nu NA worden

Stel: elke medewerker heeft een HR vertegenwoordiger die garandeert dat een werknemer rechtvaardig behandeld wordt door zijn oversten
•	Hiërarchisch  nieuwe recursieve relatie tussen Medewerker en zichzelf

R3

Text is not SVG - cannot display

Stel: elke medewerker heeft een HR vertegenwoordiger die garandeert dat een werknemer rechtvaardig behandeld wordt door zijn oversten
•	Hiërarchisch  nieuwe recursieve relatie tussen
Medewerker en zichzelf
•	Recursief  nieuwe recursieve relatie tussen
Werknemer en zichzelf
•	Minder duidelijk en de directeur kan nu ook een HR verantwoordelijke hebben, het model geeft dus de werkelijkheid minder goed weer

Meervoudige recursieve

Beschouw een stamboom of vriend-relaties op
een sociaal netwerk
•	Een persoon kan geen of juist meerdere broers en zussen hebben
•	Een persoon kan geen vrienden hebben of met honderden mensen “bevriend” zijn op een sociaal netwerk

Graduaat programmeren

Beschouw een stamboom of vriend-relaties op een sociaal netwerk
•	Een persoon kan geen of juist meerdere broers en zussen hebben
•	Een persoon kan geen vrienden hebben of met honderden mensen “bevriend”
zijn op een sociaal netwerk

Veel-op-veel relatie
•	Recursieve associatie entiteiten bieden hier een oplossing

0. .*
1. .1
2. .*
3. .1
4. .1

R3

Viewer does not support full SVG 1.1

Viewer does not support full SVG 1.1

•	In recursieve relaties kunnen “in principe” verschillende keren een DTN/DTC
gebruikt worden.
•	Alhoewel dit logisch lijkt, ondersteund SQL Server dit niet, omdat dit tot
lussen of meerdere cascade paths kan leiden.
•	Stel dat we volgende rijen in een tabel hebben zitten (waar fk een foreign key
naar dezelfde tabel is)
•	Startwaardes (nog ok)	updaten eerste rij	rij 2 verwijderen

•	In recursieve relaties kunnen “in principe” verschillende keren een DTN/DTC
gebruikt worden.
•	Alhoewel dit logisch lijkt, ondersteund SQL Server dit niet, omdat dit tot
lussen of meerdere cascade paths kan leiden.
•	Stel dat we volgende rijen in een tabel hebben zitten (waar fk een foreign key
naar dezelfde tabel is)
•	Startwaardes (nog ok)	updaten eerste rij	rij 2 verwijderen

Special topics
Tijdsafhankelijke attributen

Graduaat programmeren

Attributen kunnen doorheen de tijd van waarde wijzigen en historische gegevens
moeten beschikbaar blijven
•	Optie 1: Enkel de actuele waarde

Bestellijn
PK	id: int {NNA}
FK1

FK2	productld: int {NNA}

bestellingld: int {NNA}

Viewer does not support full SVG 1.1

Attributen kunnen doorheen de tijd van waarde wijzigen en historische gegevens moeten beschikbaar blijven
•	Optie 1: Enkel de actuele waarde
•	Optie 2: Actuele waarde en de historische
waarden
•	Wijzigingen in prijs zijn zeer uitzonderlijk  booleaans attribuut toevoegen, een prijswijziging wordt beschouwd als een nieuw product

Bestellijn
PK	id: int {NNA}
FK1

FK2	productld: int {NNA}

bestellingld: int {NNA}

Viewer does not support full SVG 1.1

Attributen kunnen doorheen de tijd van waarde wijzigen en historische gegevens moeten beschikbaar blijven
•	Optie 1: Enkel de actuele waarde
•	Optie 2: Actuele waarde en de historische
waarden
•	Wijzigingen in prijs zijn zeer uitzonderlijk  booleaans attribuut toevoegen, een prijswijziging wordt beschouwd als een nieuw product
•	Frequente wijzigingen  Extra karakteristieke
entiteit met historische waarden

PrijsPerPeriode
PK	id: int {NNA}
FK4	productld: int {NNA} prijs: float {NNA} van: datetime {NNA}
tot: datetime {NA}

Bestellijn
PK	id: int {NNA}
FK1

FK2	productld: int {NNA}

bestellingld: int {NNA}
Viewer does not support full SVG 1.1

Special topics
Overerving

Graduaat programmeren

We bouwen een HR beheer applicatie voor een webshop.
•	Voor deze webshop werken magazijniers die de producten inpakken en verzenden en technisch personeel die de technische aspecten van de website up-to-date houden.
•	Van deze werknemers zijn NAW gegevens vereist.
•	Verder moeten we van magazijniers weten hoeveel uren ze gewerkt hebben en wanneer ze in dienst getreden zijn.
•	Tenslotte moeten we van de technische werknemers weten hoeveel jaar ervaring ze hebben in de sector, en of ze in een junior, medior, senior of lead positie werken en met welke technologieën ze bekend zijn.

Optie 1: Eén entiteit
•	Niet gemeenschappelijke attributen moeten NA zijn
•	Discriminator attribuut om onderscheid te maken
•	Voordelen
•	?	R7

Viewer does not support full SVG 1.1

Optie 1: Eén entiteit
•	Niet gemeenschappelijke attributen moeten NA zijn
•	Discriminator attribuut om onderscheid te maken
•	Voordelen
•	Geen SQL joins nodig	R7
•	Wijziging  slechts 1 INSERT/UPDATE
•	Geen redundante attribuutdefinities
•	Nadelen
•	?
Viewer does not support full SVG 1.1

Optie 1: Eén entiteit
•	Niet gemeenschappelijke attributen moeten NA zijn
•	Discriminator attribuut om onderscheid te maken
•	Voordelen
•	Geen SQL joins nodig	R7
•	Wijziging  slechts 1 INSERT/UPDATE
•	Geen redundante attribuutdefinities
•	Nadelen
•	De tabellen kunnen groot worden
•	Lege attributen
•	Bedrijfsregels niet geïmplementeerd

Functie
PK	id: int {NNA}
	naam: string {NNA}

Technologie
PK	id: int {NNA}
	naam: string {NNA}

website: string {NA}

V ewer does not support full SVG 1.1

Optie 1: Eén entiteit
•	Niet gemeenschappelijke attributen moeten NA zijn

R7

•	Nadelen
•	De tabellen kunnen groot worden
•	Lege attributen
•	Bedrijfsregels niet geïmplementeerd

Functie
PK	id: int {NNA}
	naam: string {NNA}

Technologie
PK	id: int {NNA}
	naam: string {NNA}

website: string {NA}

V ewer does not support full SVG 1.1

Optie 2: Entiteit per klasse
•	Duidelijker model
•	Geen NA/discriminator attribuut nodig
•	Voordelen
•	?

Viewer does not support full SVG 1.1

Optie 2: Entiteit per klasse
•	Duidelijker model
•	Geen NA/discriminator attribuut nodig
•	Voordelen
•	Subklassen eenvoudig toe te voegen	R7 zonder de bestaande entiteiten aan te passen
•	Geen SQL join nodig
•	Wijziging  slechts 1 INSERT/UPDATE
•	Bedrijfsregels worden geïmplementeerd
•	Nadelen
•	?

TechnischMedewerkerTechnologie
PK	id: int {NNA}
FK8

FK9	TechnischMedewerkerld: int {NNA}

technologield: int {NNA}

aantalJaarErvaring: int {NNA}

Technologie
PK	id: int {NNA}
	naam: string {NNA}

website: string {NA}

Viewer does not support full SVG 1.1

Optie 2: Entiteit per klasse
•	Duidelijker model
•	Geen NA/discriminator attribuut nodig
•	Voordelen
•	Subklassen eenvoudig toe te voegen zonder de bestaande entiteiten aan te passen
•	Geen SQL join nodig
•	Wijziging  slechts 1 INSERT/UPDATE
•	Bedrijfsregels worden geïmplementeerd
•	Nadelen
•	Veel redundante attribuutdefinities
•	Veel tabellen
•	Alle werknemers opvragen  UNION

Technologie
PK	id: int {NNA}
	naam: string {NNA}

website: string {NA}

Viewer does not support full SVG 1.1

Optie 2: Entiteit per klasse
•	Duidelijker model
•	Geen NA/discriminator attribuut nodig
Di•t is Veoenorgdoeedleenkeuze indien het waarschijnlijk is dat er nog•veeSl wubijzkiglainsgseenndoeoergnevvoouedrdigwotordeenteenvoeer mgeener
unieke azttorinbudteenr ddaenboevesrtgaeaënrfddee aettnritbitueteitneznijna.aDne te	R7
subtypes pmaosesteenndisjunct zijn, i.e. een magazijnier kan
•	nieGt oeoekneSenQteLcjhoniinscnhomdeigdewerker zijn.
•	Wijziging  slechts 1 INSERT/UPDATE
•	Nadelen
•	Veel dubbele attributen
•	Veel tabellen
•	Alle werknemers opvragen  UNION

TechnischMedewerkerTechnologie
PK	id: int {NNA}
FK8

FK9	TechnischMedewerkerld: int {NNA}

technologield: int {NNA}

aantalJaarErvaring: int {NNA}

Technologie
PK	id: int {NNA}
	naam: string {NNA}

website: string {NA}

Viewer does not support full SVG 1.1

Optie 3: Joined tables
•	Gemeenschappelijke entiteit (supertype) met de gemeenschappelijke attributen
•	Per subtype een entiteit met unieke	R7
attributen
•	Voordelen
•	?

Viewer does not support full SVG 1.1

Optie 3: Joined tables
•	Gemeenschappelijke entiteit (supertype) met
de gemeenschappelijke attributen
•	Per subtype een entiteit met unieke attributen R7
•	Voordelen
•	Subklassen eenvoudig toe te voegen zonder de bestaande entiteiten aan te passen
•	Geen dubbele attributen
•	Nadelen
•	?

Viewer does not support full SVG 1.1

Optie 3: Joined tables
•	Gemeenschappelijke entiteit (supertype) met de gemeenschappelijke attributen
•	Per subtype een entiteit met unieke attributen
R7
•	Voordelen
•	Subklassen eenvoudig toe te voegen zonder de bestaande entiteiten aan te passen
•	Geen dubbele attributen
•	Nadelen
•	SQL JOINS nodig
•	Wijziging  meerdere INSERT/UPDATE opdrachten
•	Indien de overervingsstructuur groot is, kan dit
minder performant worden

Viewer does not support full SVG 1.1

Optie 3: Joined tables
•	Gemeenschappelijke entiteit (supertype) met de

R7

•	Nadelen
•	SQL JOINS nodig
•	Wijziging  meerdere INSERT/UPDATE
opdrachten

Viewer does not support full SVG 1.1
