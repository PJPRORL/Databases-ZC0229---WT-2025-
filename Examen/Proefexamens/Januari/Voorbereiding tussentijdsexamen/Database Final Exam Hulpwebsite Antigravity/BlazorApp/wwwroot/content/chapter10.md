

[]()[]()Databases

**Subqueries**

# Inhoud

•
Subqueries

•
Subqueries

•
IN-operator

•
Dubbelezoekvelden

•
NOTIN-operator

•
Genestesubqueries

•
SubqueriesindeSELECT

[]()[]()Geefallespelersdiegeborenzijninhetzelfdejaarals‘Meuleman’?

•
Stap 1:Wetenwe wanneerMeulemangeborenis?

•
Nee

•
Hiervooreersteenantwoordopvragen.

|  |                                                                                                                                                                                                           |                                                                                                                           |  |
| - | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | 
`sql
SELECT YEAR(geboortedatum) FROM	Tennis.Speler WHERE naam = 'Meuleman';
``r
 |                                                                                                                           |  |
|  |                                                                                                                                                                                                           |  |  |
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

|  |
| - |
|  |



[]()Definitiesubquery:

•
Eenquerydieafhankelijkis van
hetresultaatvaneenanderequery.

•
Stap1enstap2inéénkeeropvragen.

|                         |  |                                                                                                                                                                               |  |  |  |
| ----------------------- | - | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - | - | - |
|                         |  | 
`sql
Zet de subquery tussen haakjes. (= stap 1)
``r
 |  |  |  |
|                         |  | 
`sql
SELECT	YEAR(geboortedatum)                                                                                                                                       |  |  |  |
| FROM	Tennis.Speler      |  |                                                                                                                                                                               |  |  |  |
| WHERE	naam = 'Meuleman' |  |                                                                                                                                                                               |  |  |  |
| )                       |  |                                                                                                                                                                               |  |  |  |
| ;                       |  |                                                                                                                                                                               |  |  |  |
``r
 |
|  |  |
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
|                                                                                                                           | 
`sql
SELECT lidSinds AS 'lid sinds' FROM	Tennis.Speler |                                                                                                                           |  |
| WHERE  naam = 'Moerman';                                                                                                  |                                                               |                                                                                                                           |  |
|
``r
 |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               |  |  |
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
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
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
|  |  |  |

[]()Geefallespelers
dieinhetzelfdejaarals‘Meuleman’of‘Moerman’geboren
zijn?

•
OPLOSSING:

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

Msg116,Level16,State1,Line8

Only **one **expressioncanbespecifiedintheselect
listwhenthesubquery
is not introduced with EXISTS.



[]()Geefalle spelersmetdezelfde**woonplaats**en**geboortejaar**als‘Patrick

Permentier’?

|  |
| - |
|  |

|  |
| - |
|  |



[]()Geefalle spelersmetdezelfde**woonplaats**en**geboortejaar**als‘Patrick

Permentier’?

SELECT*

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
|  | 
`sql
SELECT spelerId FROM	Tennis.Boete;
``r
 |                                                                                                                           |  |
|  |                                                                                                                                                                       |  |  |
|  |                                                                                                                                                                       |                                                                                                                           |  |

[]()Geefallespelersdienoggeenboete hebbengekregen?

Stap2:Zorg
ervoordatspelersuitstap 1
NIETvoorkomen inhetresultaat.

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()Geefhetspelersnummerendenaamvanelkespelerdie**minstenséén**

**wedstrijd**speeldevoorhetteamdat**niet doorspeler6**werdaangevoerd?

Stap1:Eerstbepalenwelkteam(s)
doorspeler6wordtaangevoerd.

|                                                                                                                           |                       |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | 
`sql
SELECT id |                                                                                                                           |  |
| FROM	Tennis.Team WHERE spelerId = 6;                                                                                      |                       |                                                                                                                           |  |
|
``r
 |                       |                                                                                                                           |  |
|                                                                                                                           |                       |  |  |
|                                                                                                                           |                       |                                                                                                                           |  |

[]()Geefhetspelersnummerendenaamvanelkespelerdieminstenséénwedstrijd

speeldevoorhetteamdatnietdoorspeler6werdaangevoerd?

Stap2:Bepaal
wieminstenséénwedstrijdspeelde
enNIETinhetgevonden

teamthuishoort

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
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

),103)AS'GeboortedatumvanMeuleman',
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

(

SELECT geboortedatum
FROM Tennis.Speler
WHEREid = 44

)AS'Geboortedatumvan44',

(

SELECT geboortedatum
FROM Tennis.Speler
WHEREid = 100

)AS'Geboortedatumvan100'

;

