![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image001.gif)

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image002.gif)

# Databases

**SELECT**
**WHERE**

## ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image004.gif)Inhoudstafel

•
VoorstellingvanTennis
database:

•
Raadplegenvantabellen
–SELECTinstructie

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image005.gif)Voorwaarden
enoperatoreninWHERE

•
DISTINCTinSELECT-instructie

•
CASEinSELECT-instructie

•
ORDERBYcomponent(deel1)

|  |
| - |
|  |

## Voorstelling

Tennis  database

•
Volgendedia’sstellen
tabellenSpeler,Bestuurslid,Boete,TeamenWedstrijd

voor

•
Dezedatabaseiseen
oudedatabasemetveel
records

•
Ideaal omalletheorie
meeuitteleggen.

## Tennisdatabase

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image009.gif) |  |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image010.jpg) |                                                                                                                           |  |
|  |                                                                                                                           |                                                                                                                           |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image012.gif)[]()Hierinzittenallespelers
methungegevens

•
PrimaryKeyis"id"

•
bondsnummer:

•
Ingevuldèspelerdieofficiëlematchen
speelt.

•
IndienNULLèrecreatievespeler.

[]()•
Inhoud:

|  |
| - |
|  |

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image016.jpg)[]()Sommige
spelers zijn bestuurslid Welke speler dat is, zie je aan het
"spelerId",eenforeign
key naardetabel *Speler.*

•
Als
jebestuurslidwordt,
iser altijdeen "beginDatum".

•
Een"eindDatum"isnietverplicht.

•
Functiezegtwatjejuistdoet|gedaanhebt.

•
Penningmeester,
voorzitter,…

[]()•
Inhoud:

|  |
| - |
|  |

## Boete

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image020.gif)Somskrijgt
eenspelereen boete,

gekenddoorzijn"spelerId"

•
De
boeteisaltijd
opeenbepaalde datum uitgeschreven en voor een bepaald bedrag.

•
Het
boetebedragkancijfers
nade komma bevatten.

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image022.gif)Graduaatprogrammeren                                                                                                                                  9

## Team

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image024.gif)Hiervindjedeteamsterug.

•
"spelerId"= deaanvoerdervanhetteam. (foreign key naar tabel  *Speler* )

•
Als je wil weten welke spelers voor
een bepaaldteamspeelden,moetjeditviade tabel "Wedstrijd" gaan
bekijken.

|  |
| - |
|  |

•
![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image028.gif)[]()Elkewedstrijdwordt
maardoor één

spelergespeeld.

•
De tegenspelerisiemandvaneenandere club en deze zit niet in onze
databank.

•
In "aantalGewonnenSets" en
"aantalVerlorenSets"zithetaantalsetsdatze gewonnen of verloren hebben.

•
Jewinteenmatchmet3gewonnen
sets

•
Elke wedstrijd wordt gespeeld door
een team (zie"teamId",foreign
keynaardetabel *Team* ).

[]()•
Inhoud

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image030.gif)Graduaatprogrammeren                                                                                                                               12

## Raadplegenvantabellen

•
Gegevensintabellen
kunnengeselecteerdwordenmetdeSELECT-instructie.

•
Mengeeftopwelkekolommen
geselecteerdmoetenworden
ofmenkan

werkenmeteenwildcard(*).

•
Menmoetaangeven
uitwelketabel menselecteert(achterFROM).

## •

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image031.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image032.gif)

|  |   Tabelnaam   |
| --------------- |

|  |
| - |

|  |   Schemanaam   |
| ---------------- |

|  |
| - |

Raadplegenvantabellen

Ø![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image034.gif)

|  |   SELECT* FROMTennis.Team;   |
| ------------------------------ |

|  |
| - |

Geefallegegevensvanelkteam.

[]()•
Wanneerwei.p.v.
eenwildcardkolommenopgeven,wordtdeuitvoer
tot deze

attributenbeperkt.

ØGeefdeaanvoerdervanelkteam.

|  |                                                                                                                                                                      |                                                                                                                           |  |
| - | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![Tekstvak: SELECT spelerId FROM	Tennis.Team;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image036.gif) |                                                                                                                           |  |
|  |                                                                                                                                                                      | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image037.gif) |  |
|  |                                                                                                                                                                      |                                                                                                                           |  |

| Merkop dat |
| :--------: |

•
weeenSQL-instructie altijdafsluiten meteen“;”.

•
FROMaltijdopeennieuwelijnwordtgenoteerd.

[]()•
Menkan
ookconditiesmeegevenwaaraandegegevens
moetenvoldoen.

ØGeefhet nummer,denaamen degeboortedatumvanelkespelerdie
inDen

Haagwoont.

|                                                                                                                           |                    |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT |                                                                                                                           |  |
| id, naam,                                                                                                                 |                    |                                                                                                                           |  |
| geboortedatum FROM Tennis.Speler                                                                                          |                    |                                                                                                                           |  |
| WHERE plaats = 'Den Haag';                                                                                                |                    |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image039.gif) |                    |                                                                                                                           |  |
|                                                                                                                           |                    | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image040.gif) |  |
|                                                                                                                           |                    |                                                                                                                           |  |

MerkopSELECT,FROMenWHERE:

•
altijdinhoofdletters(nietverplicht)

•
altijdopeennieuweregel

[]()•
Menkan
ookconditiesmeegevenwaaraandegegevens
moetenvoldoen.

ØGeefhet nummer,denaamen degeboortedatumvanelkespelerdie
inDen

Haagwoont.

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image041.gif) |                                                                                                                           |  |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image042.gif) |  |
|  |                                                                                                                           |                                                                                                                           |  |

Wanneer
menmeerdereattributenselecteert,wordt
elkattribuutgevolgd
door een komma (behalve na de laatste)

[]()•
Menkanookmeerdereconditiesmeegevenwaaraandegegevens
moeten

voldoen.

•
DezeconditieskunnengecombineerdwordenmetANDofOR.

ØGeefhet nummer, denaamen degeboortedatumvanelkevrouwelijkespeler

dieinZoetermeerwoont.

|                                                                                                                           |                                                               |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT id, naam, geboortedatum FROM Tennis.Speler |                                                                                                                           |  |
| WHERE plaats = 'Zoetermeer’                                                                                              |                                                               |                                                                                                                           |  |
| AND	geslacht = 'V';                                                                                                       |                                                               |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image044.gif) |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image045.gif) |  |
|                                                                                                                           |                                                               |                                                                                                                           |  |

## Voorwaardenstellen: WHERE

•
Omconditiesmeetegevenkanje gebruikmakenvanrelationele operatoren:

=,

> ,>=,<,<=,<>
> of!=

ØGeefdenummersvandewedstrijdenwaarvanhetaantal
verlorensetsgroter

isdan2.

|                                                                                                                           |                       |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT id |                                                                                                                           |  |
| FROM	Tennis.Wedstrijd                                                                                                     |                       |                                                                                                                           |  |
| WHERE aantalVerlorenSets > 2;                                                                                             |                       |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image047.gif) |                       |                                                                                                                           |  |
|                                                                                                                           |                       | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image048.gif) |  |
|                                                                                                                           |                       |                                                                                                                           |  |

[]()•
Deuitvoer
kanookgesorteerdwordeninstijgendevolgordevolgens de

waardenineenvandekolommen.

|                                                                                                                           |                                                               |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT id, naam, geboortedatum FROM Tennis.Speler |                                                                                                                           |  |
| WHERE plaats = 'Den Haag'                                                                                                 |                                                               |                                                                                                                           |  |
| ORDER BY naam;                                                                                                            |                                                               |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image050.gif) |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image051.gif) |  |
|                                                                                                                           |                                                               |                                                                                                                           |  |

|  |
| - |
|  |

[]()•
Sorterenindedalende volgordebekomjedoorDESCtoetevoegen.

|                                                                                                                           |                                                               |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT id, naam, geboortedatum FROM	Tennis.Speler |                                                                                                                           |  |
| WHERE plaats = 'Den Haag'                                                                                                 |                                                               |                                                                                                                           |  |
| ORDER BY naam DESC;                                                                                                       |                                                               |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image054.gif) |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image055.gif) |  |
|                                                                                                                           |                                                               |                                                                                                                           |  |

|  |
| - |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image057.gif)

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image058.gif)

# WHERE  en  NULL  waarden

## WHEREENNULLwaarden

Welkepunten bespreken we?

•
Voorwaarden

•
IN-operator

•
BETWEEN-operator

•
LIKE-operator

•
LIKE-operatormetESCAPE

•
NULL-operator

•
DISTINCT

•
CASE-expressie

[]()•
Eenvoorwaardeiseenderwelke combinatievan expressiesdie‘true’
of‘false’

oplevert.

•
Verschillendevoorwaardencombineer
je metelkaarmetAND,ORenNOT.

•
SQLServerkentdevolgende
vergelijkingsoperatoren:

=,<,>, <=, >=, <>of !=

[]()•
Origineleinhoudvantabel*Wedstrijd*

|                                                                                                                           |                        |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT id, |                                                                                                                           |  |
| aantalGewonnenSets, aantalVerlorenSets                                                                                    |                        |                                                                                                                           |  |
| FROM Tennis.Wedstrijd;                                                                                                    |                        |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image060.gif) |                        |                                                                                                                           |  |
|                                                                                                                           |                        | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image061.gif) |  |
|                                                                                                                           |                        |                                                                                                                           |  |

![Tekstvak: SELECT id, aantalGewonnenSets, aantalVerlorenSets FROM	Tennis.Wedstrijd
WHERE aantalGewonnenSets > aantalVerlorenSets;
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image062.gif)

Welkewedstrijdenwordenergetoond?

•
De gewonnenwedstrijden

|  |
| - |
|  |

![Tekstvak: SELECT id, aantalGewonnenSets, aantalVerlorenSets FROM	Tennis.Wedstrijd
WHERE aantalGewonnenSets < aantalVerlorenSets;
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image065.gif)

Welkewedstrijdenwordenergetoond?

•
Deverlorenwedstrijden

|  |
| - |
|  |

![Tekstvak: SELECT id, aantalGewonnenSets, aantalVerlorenSets FROM	Tennis.Wedstrijd
WHERE aantalGewonnenSets - aantalVerlorenSets >= 2
OR	aantalVerlorenSets - aantalGewonnenSets >= 2;
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image068.gif)

Welkewedstrijdenwordenergetoond?

•
Dewedstrijdenmet2setsverschil

|  |
| - |
|  |

![Tekstvak: SELECT naam, plaats FROM Tennis.Speler
WHERE plaats = 'Den Haag'
OR	plaats = 'Rijswijk';
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image071.gif)

Welkespelers
wordenergetoond?

•
AllespelersuitDenHaagenuitRijswijk

|  |
| - |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image075.gif)

Welkespelers
wordenergetoond?

•
AllespelersdieindeHazensteinlninDenHaagofindeSpoorlaan
inRijswijk

wonen

|  |
| - |
|  |

•
Letopdehaakjes!

[]()•
Condities diebepalenofdewaarde
vaneenkolomvoorkomtineengrote

verzamelingwaardenworden
ergomslachtig.

•
De IN-operatorlaat
toedezemeervoudigecondities
in ééninstructielijnte

vatten.

|  |
| - |
|  |

[]()ØGeefhet nummer, denaamen woonplaatsvanelke
spelerdieinRijswijk,

Rotterdam,Leidenof
Voorburgwoont.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| OR plaats = 'Rotterdam' OR plaats = 'Leiden'                                                                              |
| OR plaats = 'Voorburg';                                                                                                   |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image079.gif) |

[]()ØGeefhet nummer, denaamen woonplaatsvanelke
spelerdieinRijswijk,

Rotterdam,LeidenofVoorburgwoont.

|  |
| - |
|  |

[]()•
MetBETWEENkannagegaanwordenofeenwaardeineengegeven
bereik

voorkomt.

`<expressie>`NOTBETWEEN
`<expressie>`AND`<expressie>`

•
Waardengelijkaanonder-enbovengrensworden
goedgekeurd.

[]()ØGeefhetnummer,
denaamengeboortedatumvan de
spelersdie geborenzijn

indeperiode
1982–1984.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| WHERE geboortedatum >= '1982-01-01' AND geboortedatum <= '1984-12-31';                                                    |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image081.gif) |

•
Merkop:datum
tussenaanhalingstekens

•
Formaat:YYYY-MM-DD

[]()ØGeefhetnummer,
denaamengeboortedatumvan de
spelersdie geborenzijn

indeperiode
1982–1984.

|  |                                                                                                                           |  |                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------- |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image082.gif) |  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image083.gif) |
|  |                                                                                                                           |  |                                                                                                                           |

![Tekstvak: SELECT id, naam, geboortedatum FROM	Tennis.Speler
WHERE geboortedatum BETWEEN '1982-01-01' AND '1984-12-31';
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image084.gif)

[]()•
De LIKE-operator laat toe op
alfanumerieke waarden te selecteren met een bepaald patroon.

•
LIKEondersteuntwildcards:

•
**%
**betekent0,1ofmeerwillekeurigetekens.

•
**_
**betekentexactéénwillekeurigteken.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image085.gif) |

[]()ØGeefdenaamvanelkespeler
wiensnaammeteen‘B’begint.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| FROM	Tennis.Speler WHERE naam LIKE 'B%';                                                                                  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image086.gif) |

|  |
| - |
|  |

[]()ØGeefdenaamvanelkespelerwiensnaameindigtmeteen‘n’.

|  |
| - |
|  |

SQLServerisniethoofdlettergevoelig.

[]()ØGeefdenaamvanelkespeler
wiensnaamalsvoorlaatstelettereen'e'heeft.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| FROM	Tennis.Speler WHERE naam LIKE '%e_';                                                                                 |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image091.gif) |

|  |
| - |
|  |

Merkop:'Bakker,de'àachterde'e'staatnogeenspatie

[]()ØGeefdenaam
vanelkespelerwaarvandenaameenonderstrepingsteken‘_’

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image095.gif)bevat.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| FROM	Tennis.Speler WHERE naam LIKE '%_%';                                                                                 |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image096.gif) |

Merk op:resultaatkomtniet

overeenmethetgevraagde.

|  |
| - |
|  |

[]()•
Standaard betekenis
van_isdatelkkaraktervoldoet=wildcard.

•
WewillendestandaardbetekenisnutenietdoendooreenESCAPE
teken

(hier\)tegebruiken
voor_

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| FROM	Tennis.Speler                                                                                                        |
| WHERE naam LIKE '%\_%' ESCAPE '\';                                                                                        |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image098.gif) |

[]()ØGeefdenaam
vanelkespelerwaarvandenaameenonderstrepingsteken‘_’

bevat.

|                                                                                                                           |                         |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT naam |                                                                                                                           |  |
| FROM	Tennis.Speler                                                                                                        |                         |                                                                                                                           |  |
| WHERE naam LIKE '%\_%' ESCAPE '\';                                                                                        |                         |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image100.gif) |                         |                                                                                                                           |  |
|                                                                                                                           |                         | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image101.gif) |  |
|                                                                                                                           |                         |                                                                                                                           |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image102.gif)

Merkop:

•
\ wordtalseenescape-tekenbeschouwd.

•
_heeft nu niet meerdebetekenisvan wildcard.

•
mengaatnueffectiefopzoeknaareenonderstrepingstekenalskarakter.

[]()ØGeefdenaam
vanelkespelerwaarvandenaameenonderstrepingsteken‘_’

bevat.

|                                                                                                                           |                         |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT naam |                                                                                                                           |  |
| FROM	Tennis.Speler                                                                                                        |                         |                                                                                                                           |  |
| WHERE naam LIKE '%#_%' ESCAPE '#';                                                                                        |                         |                                                                                                                           |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image103.gif) |                         |                                                                                                                           |  |
|                                                                                                                           |                         | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image104.gif) |  |
|                                                                                                                           |                         |                                                                                                                           |  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image105.gif)

Merkop:

•
Je kanzelf
jeescape-tekendefiniëren.

•
Hierishetescape-tekeneen#

[]()Watals?Ikschrijfmij
inopfacebook,maarikgeefmijnverjaardagnietin.

|  |
| - |
|  |

[]()Watslaat facebookopindedatabank
alsjegeboortedatumniet invult?

•
Geboortedatum:00-00-0000?->heeloud

•
Geboortedatum:99-99-9999?->nognietgeboren

•
Geboortedatum:01-01-1900?->kanechtzijn

[]()•
Eenveldmeteen
NULL-waarde iseenveldzonderwaarde.

•
NULL-waardeis
aannietsgelijk

(ooknietaande
lettersNULL).

•
NULL-waardeis
ietsandersdanhetgetal NUL,hetis ‘Ikweethetniet’.

[]()•
Jeschrijftnooit:
WHEREbondsnummer= NULL;

•
Jeschrijftaltijd:
WHEREbondsnummerIS
NULL;

|  |
| - |
|  |

[]()ØGeefalleinformatieoverspelersdieeenbondsnummerhebben.

|  |
| - |
|  |

[]()ØGeefhetideneventueelhetbondsnummervanallespelers
dieniet

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image112.gif)bondsnummer8467hebben.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| WHERE bondsnummer <> '8467'                                                                                               |
| OR	bondsnummer IS NULL;                                                                                                   |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image113.gif) |

•
bondsnummerheeftNULL-waarde

indien
bondsnummeronbekendis.

[]()•
MetDISTINCTworden
identiekerijenofdubbels
uithettussenresultaat

verwijderd.

|                                                                                                                           |                           |                                                                                                                                                                               |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | ![Tekstvak: SELECT plaats |                                                                                                                                                                               |  |
| FROM Tennis.Speler;                                                                                                       |                           |                                                                                                                                                                               |  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image114.gif) |                           | ![Tekstvak: SELECT DISTINCT plaats FROM Tennis.Speler;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image115.gif) |  |

|  |
| - |
|  |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image119.gif)Graduaatprogrammeren                                                                                                                               51

[]()•
DISTINCTheeftbetrekkingopgehelerijennietalleenopdeexpressiedie

directvolgtopDISTINCT.

|  |                                                                                                                                                                              |  |                                                                                                                                                                                       |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  | ![Tekstvak: SELECT straat, plaats FROM	Tennis.Speler;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image120.gif) |  | ![Tekstvak: SELECT DISTINCT straat, plaats FROM	Tennis.Speler;](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image121.gif) |

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image123.gif)![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image125.gif)Graduaatprogrammeren                                                                                                                                                                           52

[]()•
DISTINCTherkentNULLwaardenenbeschouwtzealsgelijk.

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image128.gif) |                                                                                                                           |  |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image129.gif) |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()ØGeefdeid,naamengeslacht
vanalleledendielidzijnna2000.

|  |
| - |
|  |

Gewenstresultaat:             Huidig resultaat:

|  |                                                                                                                           |  |                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------- |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image133.gif) |  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image134.gif) |
|  |                                                                                                                           |  |                                                                                                                           |

[]()•
FungeertalseensoortIF-THEN-ELSE-instructie

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image137.gif) |                                                                                                                           |  |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image138.gif) |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()•
FungeertalseensoortIF-THEN-ELSE-instructie

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image140.gif) |                                                                                                                           |  |
|  |                                                                                                                           | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image141.gif) |  |
|  |                                                                                                                           |                                                                                                                           |  |

|  |
| - |
|  |

[]()Gebruik:

•
Men
kan sorteren op elkekolom
diein de SELECT-componentwordt genoemd.

•
Demeesteenvoudige vormishetsorteren
op één kolom.

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image145.gif)Voorbeeld:

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| id AS 'betalingsnummer', spelerId AS 'spelersnummer'                                                                      |
| FROM Tennis.Boete ORDER BY spelerId;                                                                                      |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image146.gif) |

[]()•
Indienmennietsspecifieert,wordt
een resultaat“oplopend”gesorteerd

•
Oplopendsorterenkanook
explicietaangegevenworden
metdeterm“ASC”

(ascending)

•
Aflopendsorterenkanbekomenwordendoor“DESC”mee tegeven

(descending)

•
Voornumeriekewaarden, datumsentijden isdebetekenisvan op-
en

aflopend sorterenevident

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image148.gif)

![Tekstvak: SELECT naam
FROM	Tennis.Speler ORDER BY naam DESC;
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image149.gif)                                                                            ![Tekstvak: SELECT naam
FROM	Tennis.Speler ORDER BY naam ASC;
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image150.gif)                                                                            ![Tekstvak: SELECT naam
FROM	Tennis.Speler ORDER BY naam;
](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image151.gif)

|  |                                                                                                                           |  |                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------- |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image154.gif) |  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image155.gif) |

[]()Vooralfanumeriekewaardenhangtditafvandekarakterset ....

A,B,C,...of

A,a,B,b,...of

A, a,AE,Ä,ä,
….of...

BijASCII:

(blanco)!“#$%&‘()*+,-./0123456789:;<

=>?@ABCDEFGHIJKLMNOPQRSTUV

WXYZ\^_ `a b c
d e fg h i j kl mnopenz.

[]()•
Menkanmeerdere
kolommenspecificereninéénORDER BY.

•
Mensorteerteerstopdeeerstekolom,danpasopdetweede.

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| spelerId AS 'spelersnummer', id AS 'betalingsnummer'                                                                      |
| FROM Tennis.Boete ORDER BY spelerId, id;                                                                                  |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image156.gif) |

[]()•
Originelevolgorde                                   •                                                       Gevraagdevolgorde

![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image158.jpg)ORDERBYspelerId, id;

|  |  |             |  |
| - | - | ----------- | - |
|  |  | ![Tekstvak: |  |

](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image160.gif) |
|  | ![](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_3d9d/AC/Temp/msohtmlclip1/01/clip_image161.gif) |
|  |

[]()Hetsorteren van NULL-waardenkanverschillenvanDBMS
totDBMS. Mogelijkheden:

1. DeNULL-waardenkomenaltijdeerst,
   zowelbijASCalsDESC
2. DeNULL-waardenkomenaltijdlaatst,
   zowelbijASCalsDESC
3. DeNULL-waardenwordengezienalsdekleinste
   waarden
4. DeNULL-waardenwordenaanzienalsdegrootste
   waarden

[]()Hetsorteren van NULL-waardenkanverschillenvanDBMS
totDBMS. Mogelijkheden:

DeNULL-waardenkomen
altijdeerst,zowelbijASCalsDESC

DeNULL-waardenkomenaltijdlaatst,
zowelbijASCalsDESC

**3.
****DeNULL-waardenwordengezienalsdekleinste
waarden**

DeNULL-waardenworden
aanzienalsdegrootstewaarden

Mogelijkheid
3isgeldigvoorMicrosoft
SQLServerDBMS
