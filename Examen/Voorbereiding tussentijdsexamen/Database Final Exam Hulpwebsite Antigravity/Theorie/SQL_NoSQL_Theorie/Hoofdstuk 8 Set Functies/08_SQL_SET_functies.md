![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image001.gif)

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image002.gif)

[]()[]()Databases

 **SET-** **functies**

# ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image004.gif)Inhoud

•
SET-functies

•
COUNT(*)ofCOUNT(veldnaam)

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image005.gif)MIN(getalwaarde)

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
|                                                                                                                          | ![Tekstvak: SELECT COUNT(*) |                                                                                                                          |  |
| FROM	Tennis.Speler                                                                                                       |                             |                                                                                                                          |  |
| WHERE  plaats = 'Den Haag';                                                                                              |                             |                                                                                                                          |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image010.gif) |                             |                                                                                                                          |  |
|                                                                                                                          |                             | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image011.gif) |  |
|                                                                                                                          |                             |                                                                                                                          |  |

|  |
| - |
|  |

[]()COUNT(veld)telthetaantalingevuldevelden

(metanderewaarden
danNULL)

|                                                                                                                          |                                                          |                                                                                                                          |  |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|                                                                                                                          | ![Tekstvak: SELECT COUNT(bondsnummer) FROM	Tennis.Speler |                                                                                                                          |  |
| WHERE  plaats = 'Den Haag';                                                                                              |                                                          |                                                                                                                          |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image015.gif) |                                                          |                                                                                                                          |  |
|                                                                                                                          |                                                          | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image016.gif) |  |
|                                                                                                                          |                                                          |                                                                                                                          |  |

|  |
| - |
|  |

|  |
| - |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image022.gif)

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

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image026.gif)

|  |   SELECTCOUNT(DISTINCTSUBSTRING(naam,1,1)) FROM Tennis.Speler;   |
| ------------------------------------------------------------------ |

|  |
| - |

beginnen?

[]()Geefhetmaximaleboetebedrag?

|  |                                                                                                                                                                         |                                                                                                                          |  |
| - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ | - |
|  | ![Tekstvak: SELECT MAX(bedrag) FROM	Tennis.Boete;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image028.gif) |                                                                                                                          |  |
|  |                                                                                                                                                                         | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image029.gif) |  |
|  |                                                                                                                                                                         |                                                                                                                          |  |

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image031.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image032.gif)[]()MIN()enMAX()kanookgebruikt
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
| ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image037.jpg)SELECTSUM(bedrag) FROM Tennis.BoeteINNERJOINTennis.SpelerONBoete.spelerId=Speler.id |  |
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

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image039.gif)SELECT

AVG(bondsnummer)AS'AVG([bondsnummer])'
FROM Tennis.Speler;

SELECT

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image041.gif)SUM(bondsnummer)/COUNT(bondsnummer) AS 'SUM([bondsnummer])/COUNT([bondsnummer])'

FROMTennis.Speler;

SELECT

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_643/AC/Temp/msohtmlclip1/01/clip_image043.jpg)SUM(bondsnummer)/COUNT(*)AS'SUM([bondsnummer])/COUNT(*)'
FROM Tennis.Speler;

Graduaatprogrammeren                                                                                                                               12

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
