![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image001.gif)

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image002.gif)

[]()[]()Databases

**GROUP**
**BY**

# ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image004.gif)Inhoud

•
GROUP BY

•
opéén attribuut

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image005.gif)enSET-functies

•
opmeerderekolommen

•
opexpressies

•
enNULL-waarden

•
regelsvoorSET-functies

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image006.gif)HAVING

# GROUP BY

GROUPBYlaat
toerijente groeperenopbasisvaneenattribuut.

•
Voorbeeld: Groepeeralle rijen inde spelerstabelop
basisvangelijke woonplaats.

GROUPBYisvooralinteressantsamenmethet gebruikvanSET-functies.

•
Voorbeeld:Hoeveelspelers
wonenerper woonplaats?

[]()DeeenvoudigstevormvanGROUPBYisdezewaargegroepeerdwordtopbasis

vanéénkolom(attribuut).

Voorbeeld:Groepeer
alle spelersopbasisvanhunwoonplaats.

|                                                                                                                           |                           |                                                                                                                           |  |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT plaats |                                                                                                                           |  |                                                                                                                           |  |
| FROM	Tennis.Speler GROUP BY plaats;                                                                                       |                           |                                                                                                                           |  |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image008.gif) |                           |                                                                                                                           |  |                                                                                                                           |  |
|                                                                                                                           |                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image009.gif) |  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image010.gif) |  |
|                                                                                                                           |                           |                                                                                                                           |  |                                                                                                                           |  |
|                                                                                                                           |                           |                                                                                                                           |  |                                                                                                                           |  |

[]()Werkwijze

•
Allerijenmetdezelfdeplaats
vormenééngroep.

•
Elkerij in hettussenresultaat heeft éénwaardeinde plaats-kolom.De andere kolommen kunnen meerdere waarden bevatten.

# ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image012.gif)Hoekomenaanhetinterntussenresultaat?

|  |
| - |
|  |
|  |
|  |
|  |
|  |
|  |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image013.gif)

|  |   |  **plaats**    |  **Welkeid’s**       |
| ----------------- | ------------------------ |
|  Amsterdam      |  113                   |
|  DenHaag        |  2,6, 7,39,57, 83,100  |
|  Leiden         |  28                    |
|  Rijswijk       |  8,44                  |
|  Rotterdam      |  112                   |
|  Voorburg       |  95                    |
|  reZnoetermeer  |  27,104                |

|  |
| - |

|  |
| - |

Graduaatprogramme                                                                                                                                   6

[]()Werkwijze

•
Allerijenmetdezelfdeplaats
vormenééngroep.

•
Elkerij in hettussenresultaat heeft éénwaardeinde plaats-kolom.De andere kolommen kunnen meerdere waarden bevatten.

Interntussenresultaat                                                   Eindresultaat

|                                       |                                    |  |  |
| ------------------------------------- | ---------------------------------- | - | - |
|                                       | ![Tekstvak: plaats	Welke id’s	... |  |  |
| Amsterdam	113	...                     |                                    |  |  |
| Den Haag	2, 6, 7, 39, 57, 83, 100	... |                                    |  |  |
| Leiden	28	...                         |                                    |  |  |
| Rijswijk	8,44	...                     |                                    |  |  |
| Rotterdam	112	...                     |                                    |  |  |
| Voorburg	95	...                       |                                    |  |  |
| Zoetermeer	27, 104	...                |                                    |  |  |

](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image014.gif) |
|  |                                                                                                                                                                                                                                                                                                              | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image015.gif) |

[]()Hetzelfderesultaat kunnenweookbereiken
meteeneenvoudigeDISTINCT-

opdracht

|  |                                                                                                                                                                                               |                                                                                                                           |  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![Tekstvak: SELECT DISTINCT plaats FROM	Tennis.Speler ORDER BY plaats;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image016.gif) |                                                                                                                           |  |
|  |                                                                                                                                                                                               | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image017.gif) |  |
|  |                                                                                                                                                                                               |                                                                                                                           |  |

WatisdemeerwaardevanGROUPBY?

[]()SET-functiesbijeenGROUP
BYwordenuitgevoerdopelkegegroepeerderij

i.p.v.opallerijen.

|  |
| - |
|  |

[]()Geefvoorelkteamhetteamnummer,hetaantalwedstrijdenenhettotaal
aantal

|  |
| - |
|  |

gewonnen sets?

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image022.gif)Tussenresultaat,nahetgroeperen

| **teamId** | **id’s** | **aantalGewonnenSets** |
| ---------------- | --------------- | ---------------------------- |
| 1                | 1,2,3,4,5,6,7,8 | 3,2,3,3,0,1,3,0              |
| 2                | 9,10,11,12,13   | 3,3,2,1,0                    |

Eindresultaat

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image024.gif)Graduaatprogrammeren                                                                                                                           10

[]()•
Menkangroeperen
opmeerderekolommensamen.

•
Deverzamelingvandezekolommen
samenishetgroeperingscriterium.

•
Devolgordevandekolommen
isvangeenbelang.

•
Eris dusgeensprake
vangroeperingbinneneengroepering!!!

[]()Geefallecombinaties
vanteamnummers enspelersnummers uitde

wedstrijdentabel?

|  |
| - |
|  |

Allerijenmethetzelfde
team-enspelersnummervormenééngroep.

[]()Tussenresultaatna groeperenopde2 kolommen:

|                       |  |                                                                           |  |
| --------------------- | - | ------------------------------------------------------------------------- | - |
|                       |  | ![Tekstvak: team Id	speler Id	id	aantalGewon- nenSets	aantalVerloren Sets |  |
| 1	2	6	1	3             |  |                                                                           |  |
| 1	6	1,2,3	3,2,3	1,3,0 |  |                                                                           |  |

1	8	8	0	3
1	44	4	3	2
1	57	7	3	0
1	83	5	0	3
2	8	13	0	3
2	104	10	3	2
2	112	11,12	1	3

](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image027.gif) |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image028.gif) |
|  |

[]()Tussenresultaat                                          Eindresultaat:

|                       |                                                                           |  |  |  |  |
| --------------------- | ------------------------------------------------------------------------- | - | - | - | - |
|                       | ![Tekstvak: team Id	speler Id	id	aantalGewon- nenSets	aantalVerloren Sets |  |  |  |  |
| 1	2	6	1	3             |                                                                           |  |  |  |  |
| 1	6	1,2,3	3,2,3	1,3,0 |                                                                           |  |  |  |  |
| 1	8	8	0	3             |                                                                           |  |  |  |  |
| 1	44	4	3	2            |                                                                           |  |  |  |  |
| 1	57	7	3	0            |                                                                           |  |  |  |  |
| 1	83	5	0	3            |                                                                           |  |  |  |  |
| 2	8	13	0	3            |                                                                           |  |  |  |  |
| 2	104	10	3	2          |                                                                           |  |  |  |  |
| 2	112	11,12	1	3       |                                                                           |  |  |  |  |

](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image030.gif) |
|  |                                                                                                                                                                                                                                                                                                                       | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image031.gif) |  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image032.gif) |
|  |
|  |

[]()Interessanterwordt
hetwanneerweeenaantalSET-functiestoevoegen:

|  SELECT teamId,spelerId, COUNT(*) AS'aantal
  wedstrijden',SUM(aantalGewonnenSets) AS'somvangewonnensets',MIN(aantalVerlorenSets) AS'minimum

| verloren sets' FROMTennis.Wedstrijd                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------ |
| GROUPBY![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image034.jpg)teamId,spelerId; |
|                                                                                                                                                  |

# Voorbeeld:

Geefid,naam,
voornaamentotaalbedragaanboetesvoorelkespeler
waarvoor

ooiteenboetewerdbetaald?

| SELECT                                                                                                                                                                        |  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image036.jpg)S.id,S.naam,S.voornaam, SUM(B.bedrag)AS'Totaleboete' |  |
| FROMTennis.Speleras                                                                                                                                                           |  |
| SINNERJOIN Tennis.Boeteas BONS.id=B.spelerId GROUPBYS.id,S.naam,S.voornaam;                                                                                                   |  |
|                                                                                                                                                                               |  |

|  |   Msg8120,Level16,State1,Line3 Column'Tennis.Speler.naam'isinvalidin the select list because it is not

| contained in either an aggregate function or the GROUP BYclause. |
| ---------------------------------------------------------------- |

|  |
| - |

Voorbeeld

 **Belangrijk:** omdenaamenvoornaamvandespelertekunnen
tonen,moeter

ookgegroepeerdwordenopnaamenvoornaam.
Foutisdus:

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| S.id, S.naam, S.voornaam,                                                                                                 |
| SUM(B.bedrag) AS 'Totale boete'                                                                                           |
| FROM Tennis.Speler as S INNER JOIN Tennis.Boete as B ON S.id = B.spelerId                                                 |
| GROUP BY S.id;                                                                                                            |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image037.gif) |

# Groeperenopexpressies

Wekunnenook groeperenopbasisvanexpressiesi.p.v.
opkolommen

(attributen).

|                                                                                                                           |                    |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT |                                                                                                                           |  |
| YEAR(datum) AS 'Jaar',                                                                                                    |                    |                                                                                                                           |  |
| COUNT(*)	AS 'Aantal boetes' FROM Tennis.Boete                                                                             |                    |                                                                                                                           |  |
| GROUP BY YEAR(datum);                                                                                                     |                    |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image039.gif) |                    |                                                                                                                           |  |
|                                                                                                                           |                    | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image040.gif) |  |
|                                                                                                                           |                    |                                                                                                                           |  |

# GroeperenvanNULL-waarden

Indien
men groepeert op basis van een kolom (attribuut) waarvoor NULL- waarden
voorkomen, vormenalle rijenmet een
NULL-waarde in dezekolom samen één groep.

|                                                                                                                           |                    |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT |                                                                                                                           |  |
| bondsnummer,                                                                                                              |                    |                                                                                                                           |  |
| COUNT(id) AS 'aantal spelers' FROM Tennis.Speler                                                                          |                    |                                                                                                                           |  |
| GROUP BY bondsnummer;                                                                                                     |                    |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image042.gif) |                    |                                                                                                                           |  |
|                                                                                                                           |                    | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image043.gif) |  |
|                                                                                                                           |                    |                                                                                                                           |  |

[]()Regel1:

Indieneen
SELECT-instructie *geen*GROUPBYomvat,
en indiener één of meer
SET-functiesvoorkomenindeSELECT-component,mageenkolomgenoemdin de SELECT-component uitsluitend binnen
een SET-functie voorkomen.

Voorbeeld:

|  |                                                                                                                                                                          |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![Tekstvak: SELECT AVG(bedrag) FROM	Tennis.Boete;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image045.gif) |                                                                                                                           |  |
|  |                                                                                                                                                                          | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image046.gif) |  |
|  |                                                                                                                                                                          |                                                                                                                           |  |

[]()Regel2:

Indien
een SELECT-instructie *wel*een
GROUP BY omvat, mag eenkolom genoemdindeSELECT-componentuitsluitendbinneneenSET-functie,een GROUP BY, of in beiden voorkomen.

| SELECT S.id, CONCAT(TRIM(S.voornaam),SPACE(1),TRIM(S.naam))AS'Speler', SUM(B.bedrag)AS'Totaleboete' FROMTennis.SpelerasSINNERJOIN Tennis.BoeteasB |
| ------------------------------------------------------------------------------------------------------------------------------------------------- |
| ONS.id=B.spelerId GROUPBYS.id,S.naam,S.voornaam;                                                                                                  |
|                                                                                                                                                   |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image050.gif)Graduaatprogrammeren                                                                                                                           21

# Zoekdefout...

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| plaats, COUNT(*)                                                                                                          |
| FROM Tennis.Speler GROUP BY id;                                                                                           |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image051.gif) |

Waaromfout?

•
plaatskomtindeSELECT-componentvoormaarnietineenSET-functieofindeGROUP

BY

•
plaats kanmeerderewaardenbevatten, dus dezeinstructiebevat
onverenigbare opdrachten

# HAVING

•
MetHAVINGkunnenrijengeselecteerdwordenopbasis
van

groepseigenschappen

•
HAVINGlijktsterkopWHERE-clause

•
HAVINGkanzelfSET-functiesbevatten

*(deWHERE-clausekanditenkelindien
hijdeeluitmaakt
vaneensubquery)*

[]()Geefvoor
elkespelervoor
wiemeerdan120€boeteisbetaald,
het

spelersnummerenhet totaleboetebedrag?

|  |
| - |
|  |

[]()Boetes-tabelnagroeperenperspeler;

| **id** | **spelerId** | **datum**                    | **bedrag**                       |
| ------------ | ------------------ | ---------------------------------- | -------------------------------------- |
| 1            | 6                  | 2000-12-08                         | 100.1234 èsom=100.1234                |
| 2,5,7        | 44                 | 2001-05-05, 2000-12-08, 2002-12-30 | 75.5678 25.5487 èsom=131.1243 30.0078 |
| 3,8          | 27                 | 2003-09-10 2001-11-12              | 100.789 èsom=175.8347 75.0457         |
| 6            | 8                  | 2004-11-12                         | 25.0045 èsom=25.0045                  |
| 10           | NULL               | 2019-03-05                         | 25.00 èsom=25                         |

[]()TussenresultaatnacontrolevandeHAVING-conditieSUM(bedrag)>120

| **id** | **spelerId** | **datum**                    | **bedrag**                      |
| ------------ | ------------------ | ---------------------------------- | ------------------------------------- |
| 2,5,7        | 44                 | 2001-05-05, 2000-12-08, 2002-12-30 | 75.5678 25.5487 èsom=131.243 30.0078 |
| 3,8          | 27                 | 2003-09-10 2001-11-12              | 100.789 èsom=175.8347 75.0457        |

Eindresultaat:

|  |
| - |
|  |

# HAVING:Regel

Elkattribuut,dat in
deHAVINGwordt genoemd,mag uitsluitendbinneneenSET-

functievoorkomenofmoetvoorkomen
indeGROUPBY-component

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| plaats,                                                                                                                   |
| COUNT(*) AS 'Aantal spelers/woonplaats' FROM Tennis.Speler                                                                |
| GROUP BY plaats                                                                                                           |
| HAVING geboortedatum > '1981-01-18';                                                                                      |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image055.gif) |

|                                                                                                                                                          |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                                                          |
| Column 'Tennis.Speler.geboortedatum' is invalid in the HAVING clause because it is not contained in either an aggregate function or the GROUP BY clause. |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image056.gif)                                |

# Oplossing

•
GebruikWHERE
i.p.v.HAVING

geboortedatumhoortinditvoorbeeldniettotdeGROUPBY

| SELECT![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2b7d/AC/Temp/msohtmlclip1/01/clip_image057.jpg)plaats, COUNT(*)AS'Aantalspelers/woonplaats'FROMTennis.Speler WHEREgeboortedatum>'1981-01-18' |  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| GROUPBYplaats;                                                                                                                                                                                                               |  |
|                                                                                                                                                                                                                              |  |
|                                                                                                                                                                                                                              |  |

# Respecteerdevolgordebijhetschrijven vanSQLstatements!

1. SELECT
2. FROM
3. 

JOIN

4. WHERE
5. GROUPBY
6. HAVING
7. ORDERBY
