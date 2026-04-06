

[]()[]()Databases

**Scalairefuncties**

# Inhoud

#### •

Scalairefuncties

•
Stringfuncties

•
Numerieke/wiskundigefuncties

•
Datum-entijdfuncties

•
Geavanceerdefuncties

•
ORDERBYcomponent(deel2)

# Watiseenscalairefunctie?

•
Hebben0,1ofmeerparameters

•
Resultaat:1
uitvoerwaardeperrij

•
Werkenslechtsop1rij

|  |                                                                                                                          |  |                                                                                                                          |  |                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------ | - | ------------------------------------------------------------------------------------------------------------------------ | - | ------------------------------------------------------------------------------------------------------------------------ |
|  |  |  |  |  |  |
|  |                                                                                                                          |  |                                                                                                                          |  |                                                                                                                          |

# Stringfuncties

#### Webespreken

demeestgebruikte:

|                                                                                                                          |                                                         |                            |  |  |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- | -------------------------- | - | - | - |
|                                                                                                                          | 
`sql
CONCAT met + LTRIM() SPACE() LOWER() LEFT() |                            |  |  |  |
| LEN()                                                                                                                    |                                                         |                            |  |  |  |
| REPLACE()                                                                                                                |                                                         |                            |  |  |  |
|
``r
 |                                                         | 
`sql
•	CONCAT_WS() |  |  |  |
| •	TRIM()                                                                                                                |                                                         |                            |  |  |  |

•	SUBSTRING()
``r
 |  | 
`sql
CONCAT()
RTRIM()
UPPER() RIGHT() CHARINDEX()
``r
 |
|  |

Meer
informatie over de andere functies: [https://www.w3schools.com/sql/sql_ref_sqlserver.asp](https://www.w3schools.com/sql/sql_ref_sqlserver.asp)

[]()**Stringfuncties:**
**om****strings****samen****te****voegen**

Gebruik:

•
Oméénofmeerderestringveldensamentevoegentotééntijdelijkveld.

Tegebruikenstringfuncties:

•
CONCATmet+

•
CONCAT()

•
CONCAT_WS()

## Stringfuncties:omstringssamentevoegen Manier1:CONCATmet+

Syntax:

•
string1+string2+string_n

•
Betekenis:

éénofmeerdere
strings samenvoegentot één tijdelijkveld
via het

concatenatie-teken‘+’.

•
Voorbeeld:

|  |                                                                                                                          |                                                                                                                          |  |
| - | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|  |  |                                                                                                                          |  |
|  |                                                                                                                          |  |  |
|  |                                                                                                                          |                                                                                                                          |  |



## Stringfuncties:omstringssamentevoegen Manier1:CONCATmet+

Voorbeeld:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| voornaam + ' ' + naam AS 'speler' FROM Tennis.Speler;                                                                    |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image018.gif) |

|  |                                                                                                                          |                                                                                                                                                                         |  |
| - | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
|  |                                                                                                                          | 
`sql
100% is het nog niet, nog even geduld
``r
 |  |
|  |  |                                                                                                                                                                         |  |
|  |                                                                                                                          |                                                                                                                                                                         |  |



## Stringfuncties:omstringssamentevoegen Manier 2: CONCAT()

Syntax:

•
CONCAT(string1,string2,...,
string_n)

Betekenis:

éénof meerdere strings samenvoegentot één tijdelijk veld
via de functie CONCAT().

Voorbeeld:

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| CONCAT('Jef',' ','Klabas');                                                                                              |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| CONCAT('Jef','Klabas');                                                                                                  |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |



[]()**Stringfuncties:
om strings samen****te****voegen ****Manier 2: ****CONCAT()**

Voorbeeld:

|  |
| - |
|  |



### Stringfuncties: omstrings

samentevoegen Manier 3: CONCAT_WS()

Gebruik:

•
Voegttweeofmeer stringssamen totééntijdelijk veldmeteen scheidingsteken toe.

Syntax:

•

|  |   SELECT CONCAT_WS('-','Jef','Klabas','Pipo','Clown');   |
| ---------------------------------------------------------- |

|  |
| - |

CONCAT_WS(scheidingsteken,
string1,string2,...,string_n)
Voorbeeld:

|  |
| - |
|  |

`sql
CONCAT_WS('*','Jef','Klabas','Pipo','Clown');
``r



## Stringfuncties:omstringssamentevoegen Manier3:CONCAT_WS()

Voorbeeld:

|  |
| - |
|  |

# Stringfuncties:

**om**
**strings****samen****te****voegen**

Welkefuncties
bestgebruiken?

•
CONCAT()

•
CONCAT_WS()

•
Zorgenzelfdatbepaaldeproblemenopgelostworden(meeruitleglater)

•
Indienje
+gebruiktomattributente samen
te voegen, moetje bepaalde

problemenzelf
oplossen(meeruitleglater)

## omspatiesuitstringstijdelijkteverwijderen

Gebruik:

•
Omleidende-,volgspatieseneventueleandere
tekensteverwijderen.

Tegebruikenstringfuncties:

•
LTRIM():Verwijderdeleidende
spatiesuiteenstring.

•
RTRIM():Verwijdervolgspatiesuiteenstring.

•
TRIM():Leidende envolgspaties (standaard)
ofandere
opgegeventekens uit een
string verwijderen.

## omspatiesuitstringstijdelijkteverwijderen

Syntax:

•
LTRIM(string)

•
RTRIM(string)

•

|  |   SELECT '*'+naam+'*', '*'+LTRIM(naam) +'*'AS'alleenLinks','*'+RTRIM(naam) +'*'AS'alleenRechts','*'+LTRIM(RTRIM(naam))+'*'AS'beiden', '*'+TRIM(naam)+'*'AS'beidenviatrim()'FROMTennis.Speler;   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |

|  |
| - |

TRIM([karakterFROM]string)
Voorbeeld:

## omspatiesuitstringstijdelijkteverwijderen

Voorbeelden:

|  |
| - |
|  |

### Stringfuncties:

**om spaties uit strings tijdelijk te verwijderen en****strings****samen****te****voegen**

Voorbeelden:

|                                                      |
| ---------------------------------------------------- |
|                                                      |
| LTRIM(RTRIM(voornaam)) + ' ' + LTRIM(RTRIM(naam)) AS |
| 'speler'                                             |
| FROM Tennis.Speler;                                  |

SELECT
TRIM(voornaam) + ' ' + TRIM(naam) AS 'speler' FROM Tennis.Speler;

SELECT
CONCAT(TRIM(voornaam),' ',TRIM(naam)) AS 'speler' FROM Tennis.Speler;
SELECT
CONCAT_WS(' ',TRIM(voornaam),TRIM(naam)) AS 'speler' FROM Tennis.Speler;
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image050.gif) |

### Stringfuncties:TRIM()meteenanderkarakter

Voorbeeld:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| TRIM('rgba ' FROM voornaam) FROM Tennis.Speler;                                                                          |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image051.gif) |

Betekenis:dekarakters
‘r’,‘g’,‘b’,‘a’enspatiedievoorofachteraanvoorkomen

wordentijdelijkverwijderd.



# Stringfuncties:SPACE()

Gebruik:

•
Omeenopgegeven
aantalspatiestussenstringsteplaatsen.

|  |   **woonplaats** 3575NH DenHaag 1234KK DenHaag 9758VB DenHaag 6584WO Rijswijk 8457DK Zoetermeer 1294QK Leiden 9629CD DenHaag 4444LJ Rijswijk 4377CB DenHaag 1812UP DenHaag 5746OP Voorburg 6494SG DenHaag 9437AO Zoetermeer 6392LK Rotterdam 1012AB Amsterdam   |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |

|  |
| - |

Syntax:

•
SPACE( *aantal* )

Voorbeeld:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| postcode + SPACE(5) + LTRIM(plaats) AS 'woonplaats' FROM Tennis.Speler;                                                  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image056.gif) |

## Stringfuncties:LOWER()–UPPER()

Gebruik:

•
Ongeacht deinhoudvan eenstringalleletters als kleine
of hoofdletters tonen afhankelijk van de gebruikte functie.

Syntax:

•
LOWER( *string* )

•
UPPER(*string)*

Betekenis*:*

–    Stringin*kleineletters *tonen

–    Stringin*hoofdletters*tonen

|  |   SELECT naam,LOWER(naam) FROMTennis.Speler;   |
| ------------------------------------------------ |

|  |
| - |

Stringfuncties:LOWER()–UPPER()

Voorbeelden:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| LOWER('Deze KARAKTERS worden IN KLEINE LETTERS getoond');                                                                |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image063.gif) |

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| naam, UPPER(naam)                                                                                                        |
| FROM Tennis.Speler;                                                                                                      |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image064.gif) |



## omdelenvan

eenstringteselecteren

Gebruik:

•
Een deel(=
aantalkarakters) uiteen stringveld selecteren,beginnend vanaf
links of rechts.

•
Of eendeel
uiteen stringveld
selecteren,beginnendvanaf
deopgegeven startpositie.

Syntax:

•
LEFT( *string* , *aantal_karakters* )

•
RIGHT( *string* , *aantal_karakters* )

•
SUBSTRING( *string,startpositie,aantal_karakters* )

## omdelenvan

eenstringteselecteren

Voorbeelden:

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| naam, LEFT(naam,3)                                                                                                       |                    |                                                                                                                          |  |
| FROM Tennis.Speler;                                                                                                      |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

`sql
SELECT
naam, RIGHT(naam, 5)
FROM Tennis.Speler;
``r
                                                                     

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| naam, LEFT(naam,3),                                                                                                      |                    |                                                                                                                          |  |
| RIGHT(TRIM(naam), 5)                                                                                                     |                    |                                                                                                                          |  |
| FROM Tennis.Speler;                                                                                                      |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

## omdelenvan

eenstringteselecteren

Voorbeeld:

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| naam, SUBSTRING(naam, 2, 3)                                                                                              |                    |                                                                                                                          |  |
| FROM Tennis.Speler;                                                                                                      |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

•
3karaktersselecterenvanafpositie2

# Stringfuncties:

**aantal**
**karakters****van****een****string****bepalen**

Gebruik:

•
Geeftdelengtevaneenstringterug.

Syntax:

•
LEN( *string* )

Voorbeeld:

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| naam, LEN(naam)                                                                                                          |                    |                                                                                                                          |  |
| FROM Tennis.Speler;                                                                                                      |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

## Stringfuncties:

**positievanopgegeventekens
ineenstring**

Gebruik:

•
Geeftdepositievandetezoeken
karaktersineenstringterug.

Syntax:

•
CHARINDEX(tezoeken *string* , *string,[start]* ) Voorbeeld:

`sql
SELECT
CHARINDEX('a','Jef Klabas');
``r
                                                                           

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| CHARINDEX('a','Jef Klabas',8);                                                                                           |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

[]()Gebruik:

•
vervangt deopgegeven karakters binneneen
string met eennieuwe tekenreeks.

Tegebruiken
functie:

•
REPLACE()

[]()Syntax:

•
REPLACE(string,oudestring,
nieuwestring)

Voorbeelden:

| SELECT REPLACE(divisie,divisie,TRIM(divisie)+'divisie'),                                                                                         |  |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | - |
| divisie FROMTennis.Team; |  |
|                                                                                                                                                  |  |
|                                                                                                                                                  |  |

# Numerieke/wiskundigefuncties

#### Webespreken

demeestgebruikte:

|  |
| - |
|  |

Meer
informatie over de andere functies: [https://www.w3schools.com/sql/sql_ref_sqlserver.asp](https://www.w3schools.com/sql/sql_ref_sqlserver.asp)

[]()Gebruik:

•
Geeft eengetaldat isafgerondopeen bepaaldaantaldecimalen.

•
Geeft degrootstegehelegetalwaarde
diekleinerof gelijk is aanhet opgegeven getal.

•
Geeft dekleinstegehelegetalwaarde
diegroter
of gelijk is aanhet
opgegeven getal

Tegebruikenfuncties:

•
ROUND()

•
FLOOR()

•
CEILING()

[]()Syntax:

•
ROUND( *getal,aantalDecimalen,[operatie]* )

•
FLOOR( *getal* )

•
CEILING( *getal* )

Voorbeeld:

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| ROUND(148.85,1) AS 'afgerond',                                                                                           |                    |                                                                                                                          |  |
| FLOOR(148.85) AS 'ondergrens', CEILING(148.85) AS 'bovengrens';                                                          |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

[]()Syntax:

•
ROUND( *getal,aantalDecimalen,[operatie]* )

Uitleg *[operatie]* :

•
kan0[standaard]ofeenanderenumeriekewaarde
hebben

•   =0:hetresultaatwordtafgerondnaarhetaantal
opgegevendecimalen

•
<>
0:
het resultaat wordtafgekaptnaarhetaantalopgegeven decimalen

[]()Voorbeelden:

•

|  |                                                                                                                                                              |                                                                                                                          |  |
| - | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|  | 
`sql
SELECT ROUND(1245.5556,2);
``r
 |                                                                                                                          |  |
|  |                                                                                                                                                              |  |  |
|  |                                                                                                                                                              |                                                                                                                          |  |

Afrondenop2cijfers na
dekomma

•
Afkappenop2cijfersnadekomma

|  |                                                                                                                                                                |                                                                                                                          |  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|  | 
`sql
SELECT ROUND(1245.5556,2,1);
``r
 |                                                                                                                          |  |
|  |                                                                                                                                                                |  |  |
|  |                                                                                                                                                                |                                                                                                                          |  |

•
Afrondenop1cijfernadekomma

|  |                                                                                                                                                                |                                                                                                                          |  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|  | 
`sql
SELECT ROUND(1245.5556,1,0);
``r
 |                                                                                                                          |  |
|  |                                                                                                                                                                |  |  |
|  |                                                                                                                                                                |                                                                                                                          |  |

•
Afkappenop1cijfernadekomma

|  |   SELECTROUND(1245.5556,1,2);   |
| --------------------------------- |

|  |
| - |



[]()Voorbeelden:

SELECT

bedrag,

ROUND(bedrag,1) AS 'afgerond (0.1)', ROUND(bedrag,1,1)AS'afgekapt(0.1)', FLOOR(bedrag) AS 'ondergrens', CEILING(bedrag) AS 'bovengrens', bedrag + 0.5 AS 'bedrag + 0.50',

ROUND(bedrag+0.50,2)AS'afgerond+0.50(0.01)',

ROUND(bedrag+0.50,2,3)AS'afgekapt+0.50(0.01)', FLOOR(bedrag + 0.50) AS 'ondergrens + 0.50', CEILING(bedrag + 0.50) AS 'bovengrens + 0.50'

FROMTennis.boete;



[]()Voorbeelden:

|  |
| - |
|  |

|  |   |         |
| --------- |
|         |     |
|      n  |

|  |
| - |

|  |
| - |

Graduaatprogrammere                                                                                                                                                                           34

### willekeurigegetalophalen

Gebruik:

•
Geeft eenwillekeurigdecimaal getaltussen0(inclusief)en1(exclusief)

Syntax:

•
RAND()

Voorbeelden:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| RAND() AS 'willekeurig getal >= 0 en < 1', RAND() + 5 AS 'willekeurig getal >= 5 en < 6',                                |
| RAND() * 10 + 5 AS 'willekeurig getal >= 5 en < 15'                                                                      |
| ;                                                                                                                        |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image114.gif) |

# Datumentijdfuncties

#### Webespreken

demeestgebruikte:

|                                                                                                                          |                      |                        |  |  |  |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------- | ---------------------- | - | - | - |
|                                                                                                                          | 
`sql
•	DAY() |                        |  |  |  |
| •	DATENAME()                                                                                                            |                      |                        |  |  |  |
| •	CURRENT_TIMESTAMP                                                                                                     |                      |                        |  |  |  |
| •	DATEFROMPARTS()                                                                                                       |                      |                        |  |  |  |
| •	DATEDIFF()                                                                                                            |                      |                        |  |  |  |
| •	DATEADD()                                                                                                             |                      |                        |  |  |  |
| •	ISDATE()                                                                                                              |                      |                        |  |  |  |
|
``r
 |                      | 
`sql
•	MONTH() |  |  |  |
| •	DATEPART()                                                                                                            |                      |                        |  |  |  |
| •	GETDATE()                                                                                                             |                      |                        |  |  |  |
|
``r
 |                      | 
`sql
•	YEAR()  |  |  |  |

•	GETUTCDATE()
``r
 |

Meer
informatie over de andere functies: https://[www.w3schools.com/sql/sql_ref_sqlserver.asp](http://www.w3schools.com/sql/sql_ref_sqlserver.asp)

[]()Gebruik:

•
Geefde dag,maand ofjaar voor een bepaalde datum afhankelijkvan de gebruikte functie

Syntax:

•
DAY(*date)*           à*getalvan1t/m31*

•
MONTH(*date)*     à*getalvan1t/m12*

•
YEAR(*date)*

[]()Voorbeeld

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| datum,                                                                                                                   |                    |                                                                                                                          |  |
| DAY(datum) AS 'dag', MONTH(datum) AS 'maand', YEAR(datum) AS 'jaar'                                                      |                    |                                                                                                                          |  |
| FROM Tennis.Boete;                                                                                                       |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |
|                                                                                                                          |                    |                                                                                                                          |  |

[]()Gebruik:

•
Geefteenopgegevendeelvaneenopgegevendatumalseen stringwaarde

•
Geefteenopgegevendeelvaneenopgegevendatumalseen integer

Tegebruikenfuncties:

•
DATENAME( *interval* ,
 *datum* )    àstring

•
DATEPART(*interval,* *datum* )     àinteger

[]()Intervalwaarden:

•
YEARofYYofYYYY     àjaar

•
MONTHof
MMof
M       àmaand

•
DAYofDYofY               àdag

•
DAYOFYEAR                 àdagvanhetjaar

•
WEEKofWWofWK      àweek

•
WEEKDAYofDWofWàweekdag

•
HOURofHH                  àuur

•
MINUTEofMIof
N         àminuut

•
SECONDofSSofS       àseconde

•
MILLISECONDofMS    àmilliseconde

[]()Voorbeeld:

|  |
| - |
|  |



[]()Gebruik:

•
Geefdehuidigedatumentijd

informaat
‘JJJJ-MM-DDuu:mm:ss.mmm’

Tegebruikenfuncties:

•
CURRENT_TIMESTAMP!!Geen
haken

•
GETDATE()

•
GETUTCDATE()

[]()Voorbeeld

|  |
| - |
|  |

|  |
| - |
|  |

## datumsamenstellen

Gebruik:

•
Stelt eendatumsamen uit deopgegeven delen (jaar-, maand-en dagwaarden)

Syntax:

•
DATEFROMPARTS(jaar,
maand,dag)

•
jaar=4cijfers

•
maand=1t/m12

•
dag=1t/m31
Voorbeeld:

|                                                                                                                          |                    |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT |                                                                                                                          |  |
| DATEFROMPARTS('2019','04','21');                                                                                         |                    |                                                                                                                          |  |
|
``r
 |                    |                                                                                                                          |  |
|                                                                                                                          |                    |  |  |

[]()Gebruik:

•
Geefhet verschiltussentweedatumwaarden

Syntax:

•
DATEDIFF( *interval* , *datum1* , *datum2* )

•
Interval:

•
YEAR=aantal
jaren verschil

•
MONTH=aantalmaandenverschil

•
DAY=aantal
dagenverschil

•
...[https://www.w3schools.com/sql/func_sqlserver_datediff.asp](https://www.w3schools.com/sql/func_sqlserver_datediff.asp)

[]()Voorbeeld:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| naam, geboortedatum,                                                                                                     |
| DATEDIFF(YEAR, geboortedatum, CURRENT_TIMESTAMP) AS 'leeftijd', CURRENT_TIMESTAMP AS 'Huidige datum tijd'                |
| FROM Tennis.Speler;                                                                                                      |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image130.gif) |



[]()Gebruik:

•
Geefteendatum
nadateenbepaalde
tijd/datumintervalistoegevoegd

Syntax:

•
DATEADD( *interval* , *aantal* , *datum* )

•
Interval:

•
YEAR=jaren optellen

•
MONTH=maanden
optellen

•
DAY=dagenoptellen

•
...[https://www.w3schools.com/sql/func_sqlserver_dateadd.asp](https://www.w3schools.com/sql/func_sqlserver_dateadd.asp)

[]()Voorbeeld:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| naam, geboortedatum,                                                                                                     |
| DATEADD(DAY,5,geboortedatum) FROM Tennis.Speler;                                                                         |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image133.gif) |

|  |
| - |
|  |

## onderzoekofeenwaardeeendatumis

Gebruik:

•
Controleertofdeuitdrukkingeendatumis

•
Returnwaarde:

•
1=geldigedatum

•
0=geengeldigedatum

Syntax:

•
ISDATE(expressie)

## onderzoekofeenwaardeeendatumis

Voorbeelden:

|  |
| - |
|  |

# Geavanceerde  functies

Webespreken:

•
CAST()

•
CONVERT()

•
ISNULL()

•
ISNUMERIC()

•
NULLIF()

[]()Gebruik:

•
Converteerteenuitdrukkingvanhetenegegevenstypenaareenander

Tegebruikenfuncties:

•
CAST()

•
CONVERT()

[]()Syntax:

•
CAST(*expressie*AS *data_type(lengte)* )

•
Expressie        : verplicht

•
Datatype         : verplicht

•
Lengte:optioneel

bijsommigedatatype
moetjeookeenlengteopgevenbv.char,varchar,
…

[]()Syntax:

•
CAST(*expressie*AS *data_type(lengte)* )

Opmerking:

•
Bij hetconverterenvaneenfloatofnumeriek naareengeheelgetal,
zalde

CAST()functie
hetresultaatafkappen.

•
Voorandereconversiesrondtde
CAST()-functiehetresultaataf.

[]()Voorbeeld:

| CAST('Dit | is | een | voorbeeld | dat | we | eenlengtemoeten               | opgeven' | AS |
| --------- | -- | --- | --------- | --- | -- | ----------------------------- | -------- | -- |
| CAST('Dit | is | een | voorbeeld | dat | we | varchar(25)), eenlengtemoeten | opgeven' | AS |

|  |
| - |
|  |

[]()Syntax:

•
CONVERT( *data_type(lengte),expressie,style* )

•
Datatype         : verplicht

•
Lengte             : optioneel

bijsommigedatatype
moetjeookeenlengteopgevenbv.char,varchar,
…

•
Expressie        : verplicht

•
Style                : optioneel

•
[https://www.w3schools.com/sql/func_sqlserver_convert.asp](https://www.w3schools.com/sql/func_sqlserver_convert.asp)

[]()CONVERT()àStyle

•
Convertievandatetime naarstring(varchar)

| **Zondereeuw**                                                                                                               | **Meteeuw** | **Input/output** | **standaard** |
| ---------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------- | ------------------- |
| 0                                                                                                                                  | 100               | monddyyyyhh:miAM/PM    | standaard           |
| 3                                                                                                                                  | 103               | dd/mm/yyyy             | Brits/Frans         |
| Anderewaarden:zie[https://www.w3schools.com/sql/func_sqlserver_convert.asp](https://www.w3schools.com/sql/func_sqlserver_convert.asp) |                   |                        |                     |

|  |   dd/mm/yyyy   |
| ---------------- |

|  |
| - |

|  |   meteeuw   |
| ------------- |

|  |
| - |

[]()CONVERT()àStyle

•
Convertievandatetime naarstring(varchar)

|  |
| - |
|  |



[]()CONVERT()àStyle

•
Convertievanmoneynaarstring
(varchar)

| **Waarde** | **Uitleg**                                           |
| ---------------- | ---------------------------------------------------------- |
| 0                | Geenteken tussendeduizendtallen,2cijfersnahetdecimaalteken |
| 1                | Tekentussendeduizendtallen,2cijfersnahetdecimaalteken      |
| 2                | Geenteken tussendeduizendtallen,4cijfersnahetdecimaalteken |



[]()CONVERT()àStyle

•
Convertievanmoneynaarstring
(varchar)

|  |
| - |
|  |

|  |
| - |
|  |



[]()Gebruik:

•
Geefteenalternatievewaardeals deexpressieNULLis.

Syntax:

•
ISNULL( *expressie,alternatieveWaarde* )

[]()Voorbeelden

|  |
| - |
|  |

[]()Voorbeelden

|  |
| - |
|  |

[]()Gebruik:

•
Controleertofde uitdrukking eengeldig nummeris.

•
Geeft1alsdeuitdrukkingeengeldignummeris,
anders0.

Syntax:

•
ISNUMERIC( *expressie* )

[]()Voorbeeld:

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| voornaam, ISNUMERIC(voornaam), personeelsnummer, ISNUMERIC(personeelsnummer)                                             |
| FROM DM_Oef5.Personeelslid;                                                                                              |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image153.gif) |

|  |
| - |
|  |

[]()Gebruik:

•
Vergelijkttweeuitdrukkingen.

•
Alsexpressie1gelijkisaanexpressie2

•
geeftdefunctie
NULLterug,

•
andersexpressie1 Syntax:

•
NULLIF( *expressie1,expressie2* )

|  |   |                                                                                                                                                 |     |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
|  SELECT                                                                                                                                         |     |     |
|  naam, LEN(naam)AS'lengtevande naam',plaats, LEN(plaats) AS'lengtevandeplaats',NULLIF(LEN(naam),LEN(plaats)) AS 'resultaat' FROMTennis.Speler;  |     |

|  |
| - |

|  |
| - |

[]()Voorbeeld:

[]()[]()•
Eensorteringmag ook
bestaan uitscalaireexpressies

•
De expressiewordteerstuitgerekendvoorelkerij,endangesorteerd

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| naam, voornaam,                                                                                                          |
| id AS 'spelersnummer' FROM Tennis.Speler                                                                                 |
| ORDER BY SUBSTRING(naam,1,1)                                                                                             |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image158.gif) |

[]()Originelevolgorde                                                       Gevraagdevolgorde

ORDERBYSUBSTRING(naam,1,1)

|  |                                                                                                                          |  |                                                                                                                          |
| - | ------------------------------------------------------------------------------------------------------------------------ | - | ------------------------------------------------------------------------------------------------------------------------ |
|  |  |  |  |

[]()GebruiktinSELECT-statement.

•
Hetresultaatistijdelijk.

GebruiktinUPDATE-statement.

•
Hetresultaatisdefinitief

[]()Voorbeeld:Originele
inhoudtabel‘Voorwerp’

|  |
| - |
|  |

[]()Voorbeeld:SELECT
+scalairefunctie

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| voorwerp, nieuwVoorwerp,                                                                                                 |
| UPPER(nieuwVoorwerp) AS 'Tijdelijke waarde' FROM dbo.Voorwerp;                                                           |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_dbb/AC/Temp/msohtmlclip1/01/clip_image165.gif) |

|  |
| - |
|  |

[]()Voorbeeld:UPDATE
+scalairefunctie

|  |
| - |
|  |



