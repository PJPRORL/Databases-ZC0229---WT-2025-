![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image001.gif)

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image002.gif)

[]()[]()Databases

**Subqueries**

# ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image004.gif)Inhoud

•
Subqueries

•
Subqueries

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image005.gif)IN-operator

•
Dubbelezoekvelden

•
NOTIN-operator

•
Genestesubqueries

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image006.gif)SubqueriesindeSELECT

[]()[]()Geefallespelersdiegeborenzijninhetzelfdejaarals‘Meuleman’?

•
Stap 1:Wetenwe wanneerMeulemangeborenis?

•
Nee

•
Hiervooreersteenantwoordopvragen.

|  |                                                                                                                                                                                                           |                                                                                                                           |  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![Tekstvak: SELECT YEAR(geboortedatum) FROM	Tennis.Speler WHERE naam = 'Meuleman';](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image008.gif) |                                                                                                                           |  |
|  |                                                                                                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image009.gif) |  |
|  |                                                                                                                                                                                                           |                                                                                                                           |  |

[]()Geefallespelersdiegeboren
zijninhetzelfdejaarals‘Meuleman’?

•
Stap 2:Allespelers
opvragendiein1983geboren
zijn.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| FROM	Tennis.Speler                                                                                                        |
| WHERE  YEAR(geboortedatum) = 1983;                                                                                        |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image010.gif) |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image011.gif)

|  |
| - |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image014.gif)Graduaatprogrammeren                                                                                                                                  4

[]()Definitiesubquery:

•
Eenquerydieafhankelijkis van
hetresultaatvaneenanderequery.

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image015.gif)Stap1enstap2inéénkeeropvragen.

|                         |  |                                                                                                                                                                               |  |  |  |
| ----------------------- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - | - | - |
|                         |  | ![Tekstvak: Zet de subquery tussen haakjes. (= stap 1)](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image016.gif) |  |  |  |
|                         |  | ![Tekstvak: 	SELECT	YEAR(geboortedatum)                                                                                                                                       |  |  |  |
| FROM	Tennis.Speler      |  |                                                                                                                                                                               |  |  |  |
| WHERE	naam = 'Meuleman' |  |                                                                                                                                                                               |  |  |  |
| )                       |  |                                                                                                                                                                               |  |  |  |
| ;                       |  |                                                                                                                                                                               |  |  |  |

](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image017.gif) |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image018.gif) |
|  |
|  |

[]()Wieisin hetzelfdejaarlidgeworden
als‘Moerman’?

•
Stap1:Weten we
wanneerMoermanlid gewordenis?

•
Nee

•
Hiervoormoeten
weeersteenantwoordopvragen.

|                                                                                                                           |                                                               |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT lidSinds AS 'lid sinds' FROM	Tennis.Speler |                                                                                                                           |  |
| WHERE  naam = 'Moerman';                                                                                                  |                                                               |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image020.gif) |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image021.gif) |  |
|                                                                                                                           |                                                               |                                                                                                                           |  |

[]()Wieisin hetzelfdejaarlidgeworden
als‘Moerman’?

•
Stap 2:Iedereen diesinds
2004 lid is, moeten weopvragen,
behalve Moerman zelf.

|  |
| - |
|  |

[]()Wieisin hetzelfdejaarlidgeworden
als‘Moerman’?

•
Stap1+2inéénkeer:

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| FROM Tennis.Speler WHERE lidSinds =                                                                                       |
| (                                                                                                                         |
| SELECT lidSinds FROM	Tennis.Speler                                                                                        |
| WHERE  naam = 'Moerman'                                                                                                   |
| )                                                                                                                         |
| AND naam <> 'Moerman'                                                                                                     |
| ;                                                                                                                         |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image024.gif) |

# Alternatieveoplossingviajoins

Wieisin hetzelfdejaarlidgeworden
als‘Moerman’?

| SELECTS1.*FROM Tennis.SpelerASS1INNERJOIN Tennis.SpelerASS2ONS1.lidSinds=S2.lidSinds WHERES2.naam= 'Moerman' AND S1.naam<>'Moerman' |
| ----------------------------------------------------------------------------------------------------------------------------------- |
| ;                                                                                                                                   |
|                                                                                                                                     |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image026.gif)Graduaatprogrammeren                                                                                                                                  9

[]()Geefallespelers
dieinhetzelfdejaarals‘Meuleman’of‘Moerman’geboren
zijn?

•
Meulemanisgeboren in1983

•
Moermanis
geborenin1990

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image028.gif) |                                                                                                                           |  |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image029.gif) |  |
|  |                                                                                                                           |                                                                                                                           |  |

|  |
| - |
|  |

|  |   SELECT* FROM Tennis.Speler WHEREYEAR(geboortedatum) =( SELECTYEAR(geboortedatum)FROM Tennis.Speler WHEREnaamIN('Meuleman','Moerman') );   |
| --------------------------------------------------------------------------------------------------------------------------------------------- |

|  |
| - |

[]()Geefallespelersdie in
hetzelfdejaar

als‘Meuleman’of

‘Moerman’geborenzijn?

[]()Geefallespelers
dieinhetzelfdejaarals‘Meuleman’of‘Moerman’geboren
zijn?

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image031.gif)

|  |   |  SELECT*                                                                              |                                                     |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------- |
|  WHEREYEAR(geboortedatum)=                                                            |  gelijkheidstekengeeftproblemen                     |
|  ( SELECTYEAR(geboortedatum)FROM Tennis.Speler WHERE naamIN('Meuleman','Moerman') );  |    Subquery geeft 2 resultaten terugnl. 1983en1990  |
|                                                                                       |                                                     |  |

|  |
| - |

|  |
| - |

FROM   Tennis.Speler

|  |
| - |
|  |

[]()Geefallespelers
dieinhetzelfdejaarals‘Meuleman’of‘Moerman’geboren
zijn?

•
OPLOSSING:

|  |
| - |
|  |

|                 |  |           |  |
| --------------- | - | --------- | - |
|                 |  | 1983 1990 |  |
| --------------- |  |           |  |

   |
|  |
|  |  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image035.gif) |

[]()Geefallespelers
dieinhetzelfdejaarals‘Meuleman’of‘Moerman’geboren
zijn?

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image036.gif)OPLOSSING:

|  |
| - |
|  |

[]()•
Subquerygeeftaltijdmaaréénveldterugnl.YEAR(geboortedatum)

•
Ditkan
dusniet:

|  |
| - |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image039.gif)Msg116,Level16,State1,Line8

Only **one **expressioncanbespecifiedintheselect
listwhenthesubquery
is not introduced with EXISTS.

Graduaatprogrammeren                                                                                                                               15

[]()Geefalle spelersmetdezelfde**woonplaats**en**geboortejaar**als‘Patrick

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image041.gif)Permentier’?

|  |
| - |
|  |

|  |
| - |
|  |

Graduaatprogrammeren                                                                                                                                                                           16

[]()Geefalle spelersmetdezelfde**woonplaats**en**geboortejaar**als‘Patrick

Permentier’?

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image044.gif)SELECT*

FROM   Tennis.Speler

WHEREYEAR(geboortedatum)IN (

SELECTYEAR(geboortedatum) FROM       Tennis.Speler

WaarombestINi.p.v.=?

WHERE  naam='Permentier'ANDvoornaam='Patrick'

)

ANDplaatsIN (

Graduaatprogrammere)n;

SELECTplaats

FROM   Tennis.Speler

WHERE  naam='Permentier'ANDvoornaam='Patrick'

17

[]()Geefalle spelersmetdezelfde**woonplaats**en**geboortejaar**als‘Patrick

Permentier’?

•
Wanneereennieuwlidzichaanmeldtmetalsnaam‘Patick
Permentier’maar

hijisvanAmsterdamen
geboren in1985,krijgen
wegeen fouten.

•
DeSQL-instructieblijft
werken.

# Subqueries

Geefallespelersdie**ouder**zijn dan‘Meuleman’?

| SELECT* FROM Tennis.SpelerWHEREgeboortedatum< ( |       |
| ----------------------------------------------- | ----- |
| SELECT geboortedatum FROM Tennis.Speler         |       |
| );                                              | WHERE |
|                                                 |       |

|  |
| - |
|  |

[]()Geefalle spelers die noggeenboete hebben gekregen? Stap 1: Maak een lijst van alle spelers **met**een boete.

|  |                                                                                                                                                                       |                                                                                                                           |  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![Tekstvak: SELECT spelerId FROM	Tennis.Boete;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image050.gif) |                                                                                                                           |  |
|  |                                                                                                                                                                       | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image051.gif) |  |
|  |                                                                                                                                                                       |                                                                                                                           |  |

[]()Geefallespelersdienoggeenboete hebbengekregen?

Stap2:Zorg
ervoordatspelersuitstap 1
NIETvoorkomen inhetresultaat.

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image053.gif) |                                                                                                                           |  |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image054.gif) |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()Geefhetspelersnummerendenaamvanelkespelerdie**minstenséén**

**wedstrijd**speeldevoorhetteamdat**niet doorspeler6**werdaangevoerd?

Stap1:Eerstbepalenwelkteam(s)
doorspeler6wordtaangevoerd.

|                                                                                                                           |                       |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT id |                                                                                                                           |  |
| FROM	Tennis.Team WHERE spelerId = 6;                                                                                      |                       |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image056.gif) |                       |                                                                                                                           |  |
|                                                                                                                           |                       | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image057.gif) |  |
|                                                                                                                           |                       |                                                                                                                           |  |

[]()Geefhetspelersnummerendenaamvanelkespelerdieminstenséénwedstrijd

speeldevoorhetteamdatnietdoorspeler6werdaangevoerd?

Stap2:Bepaal
wieminstenséénwedstrijdspeelde
enNIETinhetgevonden

teamthuishoort

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image059.gif) |                                                                                                                           |  |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image060.gif) |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()Stap3:Vraagvervolgenshetgevraagdeop.

|  |
| - |
|  |

[]()Geefallespelersdie**ouder**zijn dan‘Meuleman’?

|                                                                     |           |
| ------------------------------------------------------------------- | --------- |
| SELECT * FROM Tennis.SpelerWHEREgeboortedatum<( SELECTgeboortedatum |           |
| );                                                                  | FROMWHERE |
|                                                                     |           |

•
Kloptditwel?

•
Kunnenwedegeboortedatumvan‘Meuleman’nietergensinhetresultaat

tonen?

[]()SELECT

naam, voornaam,

CONVERT(varchar,geboortedatum,103)AS'Geboortedatumspeler', CONVERT(varchar,

|  |   SELECTgeboortedatumFROMTennis.SpelerWHEREnaam='Meuleman'   |
| -------------------------------------------------------------- |

|  |
| - |

(

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image066.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image067.gif)),103)AS'GeboortedatumvanMeuleman',
straat

FROMTennis.Speler

WHEREgeboortedatum< (

SELECT geboortedatum FROMTennis.Speler WHEREnaam='Meuleman'

);

[]()Geefdegeboortedatums
vanspelers 27,44en100opéénrijnaastelkaar?

SELECT

(

SELECT geboortedatum
FROM Tennis.Speler
WHEREid = 27

)AS'Geboortedatumvan27',

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image069.gif)(

SELECT geboortedatum
FROM Tennis.Speler
WHEREid = 44

)AS'Geboortedatumvan44',

(

SELECT geboortedatum
FROM Tennis.Speler
WHEREid = 100

)AS'Geboortedatumvan100'

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_1e58/AC/Temp/msohtmlclip1/01/clip_image070.gif);
