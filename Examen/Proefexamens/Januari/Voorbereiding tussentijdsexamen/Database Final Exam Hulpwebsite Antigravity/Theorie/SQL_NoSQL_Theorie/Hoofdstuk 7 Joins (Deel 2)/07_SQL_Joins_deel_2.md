![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image001.gif)

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image002.gif)

# Databases

**JOINS**
**deel****2**

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image004.gif)Inhoud

•
Zoekenin2tabellen

•
INNERJOIN(herhaling)

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image005.gif)LEFTOUTERJOIN

•
RIGHTOUTERJOIN

•
FULLOUTERJOIN

•
Aanpassenvankolomdefinitie

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image006.gif)Zoekenin3ofmeertabellen

|  |                                                                                                                          |                                                                                                                          |  |
| - | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|  |                                                                                                                          | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image007.gif) |  |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image008.gif) |                                                                                                                          |  |
|  |                                                                                                                          |                                                                                                                          |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image009.gif)

# JOINSdeel2

***Zoekenin2tabellen***

## Betervoorbeeld

Welkespelers(naam)hebbenboetesgekregen?

|  |
| - |
|  |

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image012.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image013.gif)De informatiekomtnuuit2tabellen
nl.Boeteen

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image015.gif)OplossingJoin

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

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image019.gif)Welkespelers
(naam)hebbenboetesgekregen?

|  |
| - |
|  |

|  |
| - |
|  |

è Join-voorwaarde
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image021.gif) |

Graduaatprogrammeren                                                                                                                                  6

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image023.jpg)[]()Spelers
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

Graduaatprogrammeren                                                                                                                                  7

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image024.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image024.gif)[]()Waaromkomtspeler44meerdere
kerenvoor?

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image026.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image027.gif)Waarzijndespelers 2,
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

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image034.gif)[]()Gevraagd:

•
Spelersdieeenboete

hebbensamenmetdeboete

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image036.jpg)AS'naam', Boete.datum, Boete.bedrag

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image037.gif)FROM

Tennis.Speler            Tennis.Boete

ONSpeler.id=Boete.spelerId

;

[]()Syntax:

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image035.jpg)SELECT

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

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image040.gif)SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),

TRIM(Speler.naam))AS'naam’, Boete.datum,

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image041.gif)Boete.bedrag
FROM

Tennis.Speler           Tennis.Boete

ONSpeler.id=Boete.spelerId

;

[]()Syntax:

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image042.jpg)SELECT

*kolomnaam1,*

*kolomnaam2,…*

#### FROM

*Schema.Tabel1*LEFT[OUTER]JOIN*Schema.Tabel2*

ON *Tabel1.kolomnaam* =*Tabel2.kolomnaam*

;

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image044.gif)Andervoorbeeld:LEFTJOIN

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

Graduaatprogrammeren                                                                                                                               16

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image049.jpg)SoortenJoins

Gevraagd:Spelerszonderboete

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image051.gif)AS'naam', Boete.datum, Boete.bedrag

#### FROM

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image052.gif)Tennis.SpelerLEFT
JOINTennis.Boete ON Speler.id = Boete.spelerId

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image053.jpg)Join:RIGHT[OUTER]JOIN

Gevraagd:   Alleboetessamenmetdeeventueletoegekendespelers

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image055.gif)AS'naam', Boete.datum, Boete.bedrag

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image056.gif)FROM

Tennis.Speler            Tennis.Boete

ONSpeler.id=Boete.spelerId

;

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image057.gif)[]()Spelers zonder boetes

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

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image060.gif)Graduaatprogrammeren                                                                                                                               20

[]()•
WemoetenkolomspelerId wijzigen
van

NOTNULL
ALLOWED(NNA)naarNULLALLOWED
(NA)

|  |                                                                                                                          |  |                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------ | - | ------------------------------------------------------------------------------------------------------------------------ |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image063.gif) |  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image064.gif) |
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

![Tekstvak: ALTER TABLE Tennis.Boete ALTER COLUMN spelerId int;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image066.gif)

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

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image069.jpg)Spelers zonder boetes

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

![Tekstvak: NULL, '2019-03-05',25](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image070.gif)

Boetedienognietis toegekend aan een speler

Graduaatprogrammeren                                                                                                                               24

|  |
| - |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image073.jpg)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image075.gif)[]()Boetesmet deeventuele
toegekendespelers

[]()Syntax:

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image071.jpg)SELECT

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

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image078.jpg)SoortenJoins

Gevraagd:Boetesniettoegekend
aaneenspeler

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image080.gif)AS'naam', Boete.datum, Boete.bedrag

#### FROM

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image081.gif)Tennis.SpelerRIGHT
JOINTennis.Boete ON Speler.id = Boete.spelerId

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image083.jpg)Join:FULL[OUTER]JOIN

Allespelersenalleboetes

#### SELECT

Speler.id, CONCAT(TRIM(Speler.voornaam),SPACE(1),TRIM(Speler.naam))

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image085.gif)AS'naam', Boete.datum, Boete.bedrag

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image086.gif)FROM

Tennis.SpelerFULLOUTERJOINTennis.Boete
ON Speler.id = Boete.spelerId

;

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image082.jpg)Join:FULLOUTERJOIN

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
|                                                                                                                          | ![Tekstvak: SELECT * FROM |                                                                                                                          |  |
| Les.Land FULL JOIN Les.Staat ON Land.id = Staat.landId                                                                   |                           |                                                                                                                          |  |
| ;                                                                                                                        |                           |                                                                                                                          |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image089.gif) |                           |                                                                                                                          |  |
|                                                                                                                          |                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image090.gif) |  |
|                                                                                                                          |                           |                                                                                                                          |  |

|  |                                                                                                                          |                                                                                                                          |  |
| - | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|  |                                                                                                                          | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image091.gif) |  |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image092.gif) |                                                                                                                          |  |
|  |                                                                                                                          |                                                                                                                          |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image093.gif)

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

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image098.gif)PK

FK

|  |
| - |
|  |

Graduaatprogrammeren                                                                                                                               35

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

Graduaatprogrammeren                                                                                                                               36

## Voorbeelden:2deJOIN WedstrijdmetTeam

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image102.gif)PK

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

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image104.gif)FROM

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image106.jpg);

### resultaatvan1stejoinenTeamvastleggen

#### SELECT

Speler.id, Speler.naam,

Wedstrijd.id AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets, Team.id AS 'team', Team.divisie

#### ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image107.gif)FROM

[]()SELECT

Speler.id, Speler.naam,

Wedstrijd.id AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets, Team.id AS 'team', Team.divisie

#### FROM

Tennis.SpelerINNERJOINTennis.Wedstrijd ON Speler.id = Wedstrijd.spelerId

INNERJOINTennis.Team

ONWedstrijd.teamId=Team.id

;

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_b6d/AC/Temp/msohtmlclip1/01/clip_image109.gif)

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
