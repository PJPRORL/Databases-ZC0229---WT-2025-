

# Databases

**JOINS**
**deel****2**

## Inhoud

•
Zoekenin2tabellen

•
INNERJOIN(herhaling)

•
LEFTOUTERJOIN

•
RIGHTOUTERJOIN

•
FULLOUTERJOIN

•
Aanpassenvankolomdefinitie

•
Zoekenin3ofmeertabellen

|  |                                                                                                                          |                                                                                                                          |  |
| - | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|  |                                                                                                                          |  |  |
|  |  |                                                                                                                          |  |
|  |                                                                                                                          |                                                                                                                          |  |

# JOINSdeel2

***Zoekenin2tabellen***

## Betervoorbeeld

Welkespelers(naam)hebbenboetesgekregen?

|  |
| - |
|  |

•
De informatiekomtnuuit2tabellen
nl.Boeteen

## OplossingJoin

Welkespelers(naam)hebbenboetesgekregen?

|  |
| - |
|  |

ØAlleendespelers
diein**beide**tabellenvoorkomen,komeninhetresultaat.
Spelersdiegeen

boeteshebben,komennietinhetresultaat.

|  |    FK    |
| ---------- |

|  |
| - |

JOINS

Welkespelers
(naam)hebbenboetesgekregen?

|  |
| - |
|  |

|  |
| - |
|  |

è Join-voorwaarde
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image021.gif) |



[]()Spelers
zonder boetes

2

7

28

39

100

112

…

Speler

6

8

27

44

104

Spelersmetboetes

Boete

Nietinons
voorbeeld



•
[]()Waaromkomtspeler44meerdere
kerenvoor?

•
Waarzijndespelers 2,
7,8,enz.?

[]()Speler44heeft meerdereboetesen staat daarommeerdere
kerenin het

resultaat

•
Ditkunnenwealleenvermijden
doorrecordstegroeperenàZielater

Spelers2,7,8...hebbengeenenkeleboeteenvallen
dusweguitdelijst

•
Oplossing:LEFTofRIGHTOUTER JOIN

[]() **(INNER)JOIN** :Retourneertrecordsmetovereenkomendewaarden inbeidetabellen

 **LEFT(OUTER)
JOIN** :
Retourneerallerecords uit delinkertabelendeovereenkomenderecords uit de rechtse tabel

 **RIGHT(OUTER)JOIN** :Retourneerallerecords
vanderechtsetabelendeovereenkomende

recordsuitdelinker
tabel

 **FULL(OUTER)JOIN** :Retourneerallerecordswanneer
ereenovereenkomstisindelinker-
of

rechtentabel

|  |
| - |
|  |

[]()Spelerszonderboete

Boetesniettoegekend
aaneenspeler(logisch?)

Spelersmethun
boete

|  |
| - |
|  |

|  |
| - |
|  |

[]()Gevraagd:

•
Spelersdieeenboete

hebbensamenmetdeboete

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

AS'naam', Boete.datum, Boete.bedrag

#### FROM

Tennis.Speler            Tennis.Boete

ONSpeler.id=Boete.spelerId

;

[]()Syntax:

#### SELECT

kolomnaam1,

kolomnaam2,…

#### FROM

Schema.Tabel1INNERJOINSchema.Tabel2 ONTabel1.kolomnaam=Tabel2.kolomnaam

;

|  |
| - |
|  |

[]()Gevraagd:

•
Alle
spelers methuneventuele
boetes

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),

TRIM(Speler.naam))AS'naam’, Boete.datum,

Boete.bedrag
FROM

Tennis.Speler           Tennis.Boete

ONSpeler.id=Boete.spelerId

;

[]()Syntax:

#### SELECT

*kolomnaam1,*

*kolomnaam2,…*

#### FROM

*Schema.Tabel1*LEFT[OUTER]JOIN*Schema.Tabel2*

ON *Tabel1.kolomnaam* =*Tabel2.kolomnaam*

;

## Andervoorbeeld:LEFTJOIN

Geefallelandenmethuneventuelestaat?

Land                                                                    Staat

|  |
| - |
|  |

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| Les.Land LEFT JOIN Les.Staat ON Land.id = Staat.landId                                                                   |
| ;                                                                                                                        |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image048.gif) |



## SoortenJoins

Gevraagd:Spelerszonderboete

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

AS'naam', Boete.datum, Boete.bedrag

#### FROM

Tennis.SpelerLEFT
JOINTennis.Boete ON Speler.id = Boete.spelerId

## Join:RIGHT[OUTER]JOIN

Gevraagd:   Alleboetessamenmetdeeventueletoegekendespelers

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

AS'naam', Boete.datum, Boete.bedrag

#### FROM

Tennis.Speler            Tennis.Boete

ONSpeler.id=Boete.spelerId

;

[]()Spelers zonder boetes

Speler

2

7

Spelersmetboetes

28

39

100

112

…

6

8

27

44

104

BoeteX–speler NULL toevoegen

Boete

[]()Detennisclubontvangteenboetevan25€

(05-03-2019)
maar dezeboeteisnogniettoegekendaaneenspeler.



[]()•
WemoetenkolomspelerId wijzigen
van

NOTNULL
ALLOWED(NNA)naarNULLALLOWED
(NA)

|  |                                                                                                                          |  |                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------ | - | ------------------------------------------------------------------------------------------------------------------------ |
|  |  |  |  |
|  |                                                                                                                          |  |                                                                                                                          |

[]()Syntax:

Voorbeeld:

of

ALTERTABLE*tabelnaam*

ALTERCOLUMN
 *kolomnaam
datatype[NOTNULL]* ;

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| ALTER COLUMN spelerId int NULL;                                                                                          |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image065.gif) |

`sql
ALTER TABLE Tennis.Boete ALTER COLUMN spelerId int;
``r

## Ontvangenvaneennieuweboete

De
tennisclub ontvangteen boete maardezeboeteisnog
niet toegekend aan

eenspeler.

INSERTINTO  Tennis.Boete

VALUES(NULL,'2019-03-05',25);

|  |
| - |
|  |

## Joins

Spelers zonder boetes

2

7

28

39

100

112

…

Speler

6

8

27

44

104

Spelersmetboetes

Boete

`sql
NULL, '2019-03-05',25
``r

Boetedienognietis toegekend aan een speler



|  |
| - |
|  |

[]()Boetesmet deeventuele
toegekendespelers

[]()Syntax:

#### SELECT

*kolomnaam1,*

*kolomnaam2,…*

#### FROM

*Schema.Tabel1*RIGHT[OUTER]JOIN*Schema.Tabel2 ON Tabel1.kolomnaam
= Tabel2.kolomnaam*

*;*

## Andervoorbeeld:RIGHTJOIN

Geefallestatenmethuneventuelelanden?

Land                                                                    Staat

|  |
| - |
|  |

## SoortenJoins

Gevraagd:Boetesniettoegekend
aaneenspeler

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

AS'naam', Boete.datum, Boete.bedrag

#### FROM

Tennis.SpelerRIGHT
JOINTennis.Boete ON Speler.id = Boete.spelerId

## Join:FULL[OUTER]JOIN

Allespelersenalleboetes

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

AS'naam', Boete.datum, Boete.bedrag

#### FROM

Tennis.SpelerFULLOUTERJOINTennis.Boete
ON Speler.id = Boete.spelerId

;

## Join:FULLOUTERJOIN

Syntax:

#### SELECT

*kolomnaam1,*

*kolomnaam2,…*

#### FROM

*Schema.Tabel1*FULL[OUTER]JOIN*Schema.Tabel2*

ON *Tabel1.kolomnaam* =*Tabel2.kolomnaam*

;

## Andervoorbeeld:FULLJOIN

Geefallelandenenallestaten?

|  |
| - |
|  |

|                                                                                                                          |                           |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT * FROM |                                                                                                                          |  |
| Les.Land FULL JOIN Les.Staat ON Land.id = Staat.landId                                                                   |                           |                                                                                                                          |  |
| ;                                                                                                                        |                           |                                                                                                                          |  |
|
``r
 |                           |                                                                                                                          |  |
|                                                                                                                          |                           |  |  |
|                                                                                                                          |                           |                                                                                                                          |  |

|  |                                                                                                                          |                                                                                                                          |  |
| - | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|  |                                                                                                                          |  |  |
|  |  |                                                                                                                          |  |
|  |                                                                                                                          |                                                                                                                          |  |

# JOINSdeel2

***Zoekenin3******ofmeertabellen***

[]()Geefvoorelke speleralzijnwedstrijdenenhetteamwaarvoorhijdewedstrijd

speelde?

•
Beginmet
detabelwaarjeallerecordsvanwilt.

•
Welke?

•
Speler

[]()Geefvoorelke speleralzijnwedstrijdenenhetteamwaarvoorhijdewedstrijd

speelde?

•
Volgderelatie om
deanderetabellen
eraantekoppelen.

•
1stejoin:SpelerenWedstrijd

|  |
| - |
|  |

## Voorbeelden:1STE JOINSpeler- Wedstrijd

#### PK

FK

|  |
| - |
|  |



## Voorbeelden

Geefvoorelke speleralzijnwedstrijdenenhetteamwaarvoorhijdewedstrijd

speelde?

•
Volgderelatie om
deanderetabellen
eraantekoppelen.

•
1stejoin:SpelerenWedstrijd

•
2dejoin:WedstrijdenTeam

|  |
| - |
|  |



## Voorbeelden:2deJOIN WedstrijdmetTeam

PK

FK        FK

|  |
| - |
|  |

PK

Wedstrijd.teamId=

GraduaatprogramTmeeraenm.id                                37

[]()**1****ste** **join:**

### SpelerenWedstrijdvastleggen

#### SELECT

Speler.id, Speler.naam,

Wedstrijd.id AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets

#### FROM

;

### resultaatvan1stejoinenTeamvastleggen

#### SELECT

Speler.id, Speler.naam,

Wedstrijd.id AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets, Team.id AS 'team', Team.divisie

#### FROM

[]()SELECT

Speler.id, Speler.naam,

Wedstrijd.id AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets, Team.id AS 'team', Team.divisie

#### FROM

Tennis.SpelerINNERJOINTennis.Wedstrijd ON Speler.id = Wedstrijd.spelerId

INNERJOINTennis.Team

ONWedstrijd.teamId=Team.id

;

[]()Rood=1steJOIN

Blauw
=rood+2deJOIN

## INNERJoins

**minstens**
**tussen****3****tabellen**

Syntax:

#### SELECT

*kolomnaam1,*

*kolomnaam2,…*

#### FROM

*Tabel1*INNERJOIN*Tabel2*

ON*Tabel1.kolomnaam=Tabel2.kolomnaam*

INNERJOIN*Tabel3*

ON *Tabel2.kolomnaam* =*Tabel3.kolomnaam*

;

[]()Hetzelfdealsvoorheen,maarikwilallespelers

SELECT

Speler.id, Speler.naam,

Wedstrijd.id
AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets, Team.id AS 'team', Team.divisie

FROM

);

Tennis.SpelerLEFTJOINTennis.Wedstrijd

ON Speler.id = Wedstrijd.spelerId LEFT JOIN Tennis.Team

ONWedstrijd.teamId=Team.id

[]()Hetzelfdealsvoorheen,maarikwilallespelers

|  |
| - |
|  |

[]()Merkop:

•
Spelersdiemeerdere
wedstrijdenspeeldenstaanmeerderekerenindelijst

•
Bijspelersdiegeen
wedstrijd speelden wordtallesopgevuld
met NULL-

waarden

