

[]()[]()Databases

 **SET-** **functies**

# Inhoud

•
SET-functies

•
COUNT(*)ofCOUNT(veldnaam)

•
MIN(getalwaarde)

•
MAX(getalwaarde)

•
AVG(getalwaarde)

•
SUM(getalwaarde)

|  |
| - |
|  |

# SET-functie

•
EenSETfunctie
neemtallerijendiegeselecteerdzijnenberekent
hieruit1

resultaat.

Deze functiesworden
in deliteratuurook:

•
statistischefuncties

•
ofaggregatiefunctiesgenoemd.

 []()**Speler**
**(bondsnummer****soms**
**NULL)**

Inhoud:

|  |
| - |
|  |

[]()COUNT(*)telthetaantal
rijen,dusookNULL-en

|                                                                                                                          |                             |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT COUNT(*) |                                                                                                                          |  |
| FROM	Tennis.Speler                                                                                                       |                             |                                                                                                                          |  |
| WHERE  plaats = 'Den Haag';                                                                                              |                             |                                                                                                                          |  |
|
``r
 |                             |                                                                                                                          |  |
|                                                                                                                          |                             |  |  |
|                                                                                                                          |                             |                                                                                                                          |  |

|  |
| - |
|  |

[]()COUNT(veld)telthetaantalingevuldevelden

(metanderewaarden
danNULL)

|                                                                                                                          |                                                          |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | 
`sql
SELECT COUNT(bondsnummer) FROM	Tennis.Speler |                                                                                                                          |  |
| WHERE  plaats = 'Den Haag';                                                                                              |                                                          |                                                                                                                          |  |
|
``r
 |                                                          |                                                                                                                          |  |
|                                                                                                                          |                                                          |  |  |
|                                                                                                                          |                                                          |                                                                                                                          |  |

|  |
| - |
|  |

|  |
| - |
|  |

|  |   SELECTCOUNT(DISTINCTplaats) FROM Tennis.Speler;   |
| ----------------------------------------------------- |

|  |
| - |

[]()COUNT(DISTINCTveld)telthetaantal
verschillendewaarden

|  |
| - |
|  |

[]()Geefhetaantalverschillendeletterswaarmeedenamenvandespelers

|  |   SELECTCOUNT(DISTINCTSUBSTRING(naam,1,1)) FROM Tennis.Speler;   |
| ------------------------------------------------------------------ |

|  |
| - |

beginnen?

[]()Geefhetmaximaleboetebedrag?

|  |                                                                                                                                                                         |                                                                                                                          |  |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|  | 
`sql
SELECT MAX(bedrag) FROM	Tennis.Boete;
``r
 |                                                                                                                          |  |
|  |                                                                                                                                                                         |  |  |
|  |                                                                                                                                                                         |                                                                                                                          |  |

•
[]()MIN()enMAX()kanookgebruikt
wordenbijalfanumeriekegegevens

|                                                                                                                          |
| ------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                          |
| MIN(naam) AS 'eerste', MAX(naam) AS 'laatste'                                                                            |
| FROM Tennis.Speler;                                                                                                      |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image033.gif) |

|  |
| - |
|  |

# SUM()

•
Berekentdesomvanallegegevenwaarden.

•
Voorbeeld: GeefdesomvanalleboetesvandespelersuitRijswijk?

•
ViaJOIN

|                                                                                                                                                                                                             |  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
| SELECTSUM(bedrag) FROM Tennis.BoeteINNERJOINTennis.SpelerONBoete.spelerId=Speler.id |  |
| WHERE plaats='Rijswijk';                                                                                                                                                                                    |  |
|                                                                                                                                                                                                             |  |

 []()**AVG()**
**(bondsnummer****tijdelijk**
**naar****int****aangepast)**

•
Berekent hetgemiddeldevandeingevulde
waardenindetabel

•
Werktalleenmetnumeriekevelden

•
NegeertdeNULL-waarden

SELECT

AVG(bondsnummer)AS'AVG([bondsnummer])'
FROM Tennis.Speler;

SELECT

SUM(bondsnummer)/COUNT(bondsnummer) AS 'SUM([bondsnummer])/COUNT([bondsnummer])'

FROMTennis.Speler;

SELECT

SUM(bondsnummer)/COUNT(*)AS'SUM([bondsnummer])/COUNT(*)'
FROM Tennis.Speler;



[]()•
AlsjeindeSELECT-componenteenSET-functiegebruikt,
magje**geen**

gewoneveldenmeerselecteren

|  |
| - |
|  |

•
Geeft eenfoutmelding:

|                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
|                                                                                                                                                        |
| Column 'Tennis.Speler.geboortedatum' is invalid in the select list because it is not contained in either an aggregate function or the GROUP BY clause. |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image045.gif)                               |

[]()•
AlsjeindeSELECT-componenteenSET-functiegebruikt,
magje**geen**

gewoneveldenmeerselecteren

|  |
| - |
|  |

Reden:

•
resultaatSET-functieiséénwaarde

•
resultaatkolomspecificatiebestaat
uitverzameling metwaarden

