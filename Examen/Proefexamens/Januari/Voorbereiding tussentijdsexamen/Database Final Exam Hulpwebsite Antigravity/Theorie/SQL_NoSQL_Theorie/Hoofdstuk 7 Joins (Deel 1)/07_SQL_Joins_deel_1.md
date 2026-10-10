![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image001.gif)

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image002.gif)

# Databases

**JOINS**
**deel****1**

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image004.gif)Inhoud

•
Relaties

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image005.gif)Zoekenin2tabellen

•
INNERJOIN

•
Zoekenin3ofmeertabellen

•
INNERJOIN

•
Aliassengebruikenvoorkolommenentabellen

|  |
| - |
|  |

|  |                                                                                                                         |                                                                                                                         |  |
| - | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | - |
|  |                                                                                                                         | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image007.gif) |  |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image008.gif) |                                                                                                                         |  |
|  |                                                                                                                         |                                                                                                                         |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image009.gif)

# JOINSdeel1

***Relaties***

## Huidigesituatie

•
Totnu
toehebben wealtijdalonzeinformatieuitééntabelgehaald.

•
Hetheleideeachtereenrelationeledatabank
isdatderelaties tussen

verschillendetabellenbelangrijkzijn.

•
Relatie:voorgestelddooreenlijninhetdatamodel.

| Boete            |  | Speler |
| ---------------- | - | ------ |
| *******1** |  |        |

## Relaties

•
Tussendetabellen
zijnerkoppelingenof relaties

•
Eenrelatietussentweetabellen
wordtgelegdopbasisvandeprimaire
sleutel

(PK)vanééntabelenderefererende sleutel(FK)vaneenanderetabel.

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image010.gif)PK                       FK

•
Westellenderelatiesgrafisch
voorineen **relationeeldiagram** .

## Relaties

Bijelkeboeteslaan
wehet *spelerId*op. Dit verwijst
naar de kolom "id" uit de tabel *Speler*

Elkeboeteisvanéénspeler

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image012.gif)

## Relaties

Elkerelatie
heefteenaarden
connectiviteit

1..1     (aard=1,connectiviteit=1)

0..*     (aard=0,connectiviteit=*)

| Klant | 1..1 | Order |
| ----- | ---- | ----- |
| 0..*  |      |       |

[]()Deaard vaneenrelatie:

•
De aard vaneen relatie kanoptioneel (0)of
verplicht (1) zijn

•
Deentiteitmagof
moet aanwezigzijn

•
Mogelijkheden:

|  |
| - |
|  |

•
Eenklantkanbestaanzonderorders (0)

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image015.gif)Eenordermoet
aan eenklantgekoppeldworden (1)

Graduaatprogrammeren                                                                                                                                  8

[]()Deconnectiviteit vaneenrelatie:

•
De connectiviteit geeft weerhoeveel
voorkomens erovereenkomen
met een bepaald voorkomen uit de andere groep

•
Deconnectiviteitwordtinhetgrafischmodel
weergegevend.m.v.

•
1(betekenis:komtéén
keervoor)

•
en hetsymbool“*”(betekenis:
komtveelkeervoor)

|  |
| - |
|  |

[]()Soortenrelaties:

•
Eénopéénrelatie

•
Eénopveelrelatie

•
Veelopéénrelatie

•
Veelopveelrelatie

|  |
| - |
|  |

[]()•
**Eén **op**één**relatie

•
Eénstudentheeftéénstudiebeurs

•
Dezestudiebeursisuniekvoordezestudent

| Student | 1 1 | Studiebeurs |
| ------- | --- | ----------- |
|         |     |             |

[]()•
**Eén**op**veel**relatie

#### •

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image020.gif)Inéénklasmogenmeerdere
studenten zitten

•
Eénstudentzitinéénklas

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image021.gif)

|  |   |    Klas  |  **1**  |  Student  |
| ---------- | ---------- | ----------- |
|          |

|  |
| - |

|  |
| - |

|  |
| - |
|  |

[]()•
**Eén**op**veel**relatie

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image023.gif)Inéénklasmogen
meerderestudentenzitten

#### •

Eénstudent
zitinéénklas

| Klas |   | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image024.gif)1 | Student |
| ---- | - | ------------------------------------------------------------------------------------------------------------------------ | ------- |
|      | * |                                                                                                                          |         |

|  |
| - |
|  |

[]()•
**Veel**op**één**relatie

#### •

Eénstudent
zitinéénklas

•
Inéénklasmogenmeerdere
studentenzitten

| Student                                                                                                                  | * | Klas |
| ------------------------------------------------------------------------------------------------------------------------ | - | ---- |
| ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image026.gif)1 |   |      |

[]()•
**Veel**op**één**relatie

•
Eénstudentzitinéénklas

#### •

Inéénklasmogenmeerderestudenten
zitten

| Student     | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image027.gif)* | Klas |
| ----------- | ------------------------------------------------------------------------------------------------------------------------ | ---- |
| **1** |                                                                                                                          |      |

[]()•
**Veel**op**veel**relatie

#### •

Elkestudentkrijgtlesvanmeerdere
docenten

•
Elkedocentgeeftlesaanmeerderestudenten

| Student                                                                                                                  | * | Docent |
| ------------------------------------------------------------------------------------------------------------------------ | - | ------ |
| ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image028.gif)* |   |        |

[]()•
**Veel**op**veel**relatie

•
Elkestudentkrijgtlesvanmeerderedocenten

•
**Elkedocentgeeftles
aanmeerderestudenten**

| Student | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image029.gif)* | Docent |
| ------- | ------------------------------------------------------------------------------------------------------------------------ | ------ |
| *       |                                                                                                                          |        |

|  |
| - |
|  |

## Relaties

Eenrelatiegeldtsteedsintwee
richtingen.Voorbeide richtingenmoeten aard en

connectiviteitnagegaanworden.

•
1stecijfer=aard

•
2decijfer=connectiviteit

|  |
| - |
|  |

Decombinatie1..1 wordtdikwijlsafgekortnaar1

Decombinatie0..*wordtdikwijls
afgekortnaar *

[]()Een
refererende sleutel is een veld of een combinatie van velden uit een tabel
waarvan de waardenmoeten
overeenstemmenmet de waarden vande primaire sleutel van een andere tabel

[]()Voorbeeld:

•
Elkorderwordt
geplaatstdoor1klant

•
Eenklantheeftmeerdereorders

•
Duseriseenrelatietussenentiteiten

Weslaandierelatie
opdoordeentiteitentedoenverwijzen

Hiervoorgebruiken we een ForeignKey(FK)
(hier: klantId)

| []()Klant |  | Order |
| --------- | - | ----- |
|           |  |       |

|  |
| - |
|  |

|  |     1..1   |
| ------------ |

|  |
| - |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image034.gif)[]()**(verplicht****aanwezig****–****1****exemplaar)**

| Klant | 1..1 | Order |
| ----- | ---- | ----- |
|       |      |       |

|  |
| - |
|  |

| []()Klant | 1..1 | Order |
| --------- | ---- | ----- |
| 0..*      |      |       |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image035.gif)

|  |
| - |
|  |

| []()Klant | 1..1 | Order |
| --------- | ---- | ----- |
| 0..*      |      |       |

|             |                   |  |  |
| ----------- | ----------------- | - | - |
|             | ![Tekstvak: Klant |  |  |
| id	PK       |                   |  |  |
| familienaam |                   |  |  |
| voornaam    |                   |  |  |

](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image037.gif) |  | ![Tekstvak: Order
id	PK
klantId		FK

](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image038.gif) |
|  |

| []()Order | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image040.gif)0..***** | Product |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ------- |
| 0..*****  |                                                                                                                                 |         |

•
Geeft een M op N koppeling weer
tussen twee of meerdere entiteiten.

•
Bv:

•
Ineenorder
zittenmeerdereproducten

•
Eenproductkomtvoorinmeerdereorders

•
Aanbeidezijden
een*?

[]()•
Geeft een M op N koppeling weer
tussen twee of meerdere entiteiten.

•
Bv:

•
Ineenorder
zittenmeerdereproducten

•
Eenproductkomtvoorinmeerdereorders

•
Oplossing:

•
Erwordteenassociatie-entiteitOrderlijntoegevoegd

•
Endeveelopveelrelatiewordtomgevormdnaartwee1opveel
relaties

1.![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image041.gif)[]().1

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image042.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image043.gif)0..*

1..1

|  |
| - |
|  |

## Voorbeeld–H&S

Watzijndeattributenvandekernentiteit **Orderlijn** ?

| **Orderlijn** |
| ------------------- |
| id                  |
| orderId             |
| productId           |
| hoeveelheid         |

Orderlijniseenassociatie-entiteittussenOrderenProduct

•
Opeenorder
kunnenmeerdereproducten staan

•
Eenproductkanopmeerdere
ordersvoorkomen

 []()**ERD****voorbeeld****–****H&S**

| Order | 1..1          | Orderlijn |
| ----- | ------------- | --------- |
| 0..*  |               |           |
| 1..1  | 0..*     1..1 | 0..*      |
| Klant |               | Product   |
|       |               |           |

|  |                                                                                                                         |                                                                                                                         |  |
| - | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | - |
|  |                                                                                                                         | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image045.gif) |  |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image046.gif) |                                                                                                                         |  |
|  |                                                                                                                         |                                                                                                                         |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image047.gif)

# JOINSdeel1

***Zoekenin2tabellen***

## Voorbeeld

Welkespelers(naam)hebbenboetesgekregen?

|  |
| - |
|  |

|  |
| - |
|  |

•
Wieisspeler
6,8,27,44en104?

[]()Welkespelers
(naam)hebbenboetesgekregen?

|  |
| - |
|  |

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image053.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image054.gif)De informatiekomtnuuit2tabellen
nl.Boeteen

[]()Boete:

Speler:

SELECT

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image056.gif)id, spelerId, datum, bedrag

FROMTennis.Boete;

SELECT

id,

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image058.gif)CONCAT(TRIM(voornaam),SPACE(1),TRIM(naam))AS'naam', straat,

huisnummer, postcode, plaats

FROMTennis.Speler

WHEREidIN(6,8,27,44,104)

[]()Wehebben tweetabellennodig om
deinformatietekunnenpresenteren.

•
Boete

•
Speler

MogelijkeSQL-instructie:

|                                                                                                                         |                    |                        |  |
| ----------------------------------------------------------------------------------------------------------------------- | ------------------ | ---------------------- | - |
|                                                                                                                         | ![Tekstvak: SELECT |                        |  |
| Speler.*, Boete.*                                                                                                     |                    |                        |  |
| FROM                                                                                                                    |                    |                        |  |
| Tennis.Speler, Tennis.Boete                                                                                             |                    |                        |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image059.gif) |                    | ![Tekstvak: Resultaat: |  |
| 8 (boetes) * 15 (spelers) = 120 rijen Dit is bijna nooit de bedoeling !!!                                               |                    |                        |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image060.gif) |                    |                        |  |

|  |    FK    |
| ---------- |

|  |
| - |

JOINS

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image063.gif)Welkespelers(naam)hebbenboetesgekregen?

|  |
| - |
|  |

|  |
| - |
|  |

è Join-voorwaarde
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image065.gif) |

Graduaatprogrammeren                                                                                                                               35

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image067.gif)OplossingJoin

Alleendegegevens
tonenwaarSpeler.id(PK)= **Boete.spelerId** (FK)

|  |
| - |
|  |

ØAlleendespelers
diein**beide**tabellenvoorkomen,komeninhetresultaat.
Spelersdiegeen

boeteshebben,komennietinhetresultaat.

Graduaatprogrammeren                                                                                                                               36

## Joins

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image070.jpg)Spelers zonder boetes

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

Nietinons voorbeeld

Graduaatprogrammeren                                                                                                                               37

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image072.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image074.gif)[]()TabelLes.Land

|  |
| - |
|  |

TabelLes.Staat

| **PK** | **FK** |
| ------------ | ------------ |

Graduaatprogrammeren                                                                                                                               38

[]()Land zonder staat

Land

id

### 3

landId

### 1

2

Landmetstaten

Staat

id

### 4

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image076.jpg)

Graduaatprogrammeren

Staatzonderland

39

[]()Geefenkeldelanden
dieeenstaathebben?

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image079.gif)**Les.Land**                                                           **Les.Staat**

SELECT* FROM

Les.LandINNERJOINLes.Staat ON Land.id = Staat.landId

**Resultaat**

Graduaatprogrammeren                                                                                                                               40

|  |   SELECT Speler.id,Speler.naam, Boete.datum,Boete.bedragFROMTennis.SpelerINNER JOINTennis.Boete ONSpeler.id=Boete.spelerId;   |
| ------------------------------------------------------------------------------------------------------------------------------- |

|  |
| - |

Joins

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image084.gif)Waarom komtspeler
44meerderekerenvoor?

•
Waarzijndespelers
2,7,8,enz.?

## Joins

Speler44heeft meerdereboetesen staat daarommeerdere
kerenin het

resultaat

•
Ditkunnenwealleenvermijden
doorrecordstegroeperenàZielater

Spelers2,7,8...hebbengeenenkeleboeteenvallendusweguitdelijst

•
Oplossing:LEFTofRIGHTOUTER
JOIN(later)

|  |                                                                                                                         |                                                                                                                         |  |
| - | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | - |
|  |                                                                                                                         | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image085.gif) |  |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image086.gif) |                                                                                                                         |  |
|  |                                                                                                                         |                                                                                                                         |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image087.gif)

# JOINSdeel1

***Zoekenin3******ofmeertabellen***

[]()Geefvoorelke
speleralzijnwedstrijdenenhetteamwaarvoorhijdewedstrijd

speelde?

•
Beginmet
detabelwaarjeallerecordsvanwilt.

•
Welke?

•
Speler

[]()Geefvoorelke
speleralzijnwedstrijdenenhetteamwaarvoorhijdewedstrijd

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

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image092.gif)PK

FK

|  |
| - |
|  |

Graduaatprogrammeren                                                                                                                               46

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

Graduaatprogrammeren                                                                                                                               47

## Voorbeelden:2deJOIN WedstrijdmetTeam

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image096.gif)PK

FK        FK

|  |
| - |
|  |

PK

Wedstrijd.teamId=

GraduaatprogramTmeeraenm.id                                48

[]()**1****ste** **join:**

**Speler**
**en****Wedstrijd****vastleggen**

SELECT

Speler.id, Speler.naam,

Wedstrijd.id
AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets

|  |
| - |
|  |

FROM

;

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image100.jpg)Graduaatprogrammeren                                                                                                                               49

[]()SELECT

Speler.id, Speler.naam,

Wedstrijd.id
AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets, Team.id AS 'team', Team.divisie

|  |
| - |
|  |

[]()SELECT

Speler.id, Speler.naam,

Wedstrijd.id
AS 'wedstrijd', Wedstrijd.aantalGewonnenSets, Wedstrijd.aantalVerlorenSets, Team.id AS 'team', Team.divisie

FROM

Tennis.SpelerINNERJOINTennis.Wedstrijd ON Speler.id = Wedstrijd.spelerId

INNERJOINTennis.Team

ONWedstrijd.teamId=Team.id

;

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_bf/AC/Temp/msohtmlclip1/01/clip_image103.gif)

[]()Rood=1steJOIN

Blauw =rood+2deJOIN

## INNERJoins

**minstens**
**tussen****3****tabellen**

Syntax:

SELECT

*kolomnaam1,*

*kolomnaam2,…*

FROM

*Tabel1*INNERJOIN*Tabel2*

ON*Tabel1.kolomnaam=Tabel2.kolomnaam*

INNERJOIN*Tabel3*

ON *Tabel2.kolomnaam* =*Tabel3.kolomnaam*

;

[]()[]()Kolomhernoemen

•
Wedstrijd.idAS'wedstrijd'

Tabelnaamhernoemen

•
FROMTennis.SpelerASS

•
achter detabelnaam schrijfjeASen1, 2 of 3 letters, waarmeeje weet over welke tabel het gaat

•
Afspraak:

•
1stelettervan
deeigenlijke tabelnaam+eventueelvolgnummer(vb. zie

later)

•Of1stelettervanelkzelfstandignaamwoord

- WerknemerBedrijfJobwordtWBJ

[]()SELECT

S.id,

CONCAT(TRIM(S.voornaam),SPACE(1),TRIM(S.naam))AS'naam',

B.datum, B.bedrag

FROM

Tennis.SpelerAS SINNERJOINTennis.BoeteAS B ON S.id = B.spelerId

;
