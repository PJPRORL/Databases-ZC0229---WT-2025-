

# Databases

**SELECT**
**WHERE**

## Inhoudstafel

•
VoorstellingvanTennis
database:

•
Raadplegenvantabellen
–SELECTinstructie

•
Voorwaarden
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
|  |                                                                                                                           |  |  |
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()Hierinzittenallespelers
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
[]()Sommige
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
Somskrijgt
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



## Team

•
Hiervindjedeteamsterug.

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
[]()Elkewedstrijdwordt
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

|  |   Tabelnaam   |
| --------------- |

|  |
| - |

|  |   Schemanaam   |
| ---------------- |

|  |
| - |

Raadplegenvantabellen

Ø

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
|  | 
`sql
SELECT spelerId FROM	Tennis.Team;
``r
 |                                                                                                                           |  |
|  |                                                                                                                                                                      |  |  |
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
|                                                                                                                           | 
`sql
SELECT |                                                                                                                           |  |
| id, naam,                                                                                                                 |                    |                                                                                                                           |  |
| geboortedatum FROM Tennis.Speler                                                                                          |                    |                                                                                                                           |  |
| WHERE plaats = 'Den Haag';                                                                                                |                    |                                                                                                                           |  |
|
``r
 |                    |                                                                                                                           |  |
|                                                                                                                           |                    |  |  |
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
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
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
|                                                                                                                           | 
`sql
SELECT id, naam, geboortedatum FROM Tennis.Speler |                                                                                                                           |  |
| WHERE plaats = 'Zoetermeer’                                                                                              |                                                               |                                                                                                                           |  |
| AND	geslacht = 'V';                                                                                                       |                                                               |                                                                                                                           |  |
|
``r
 |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               |  |  |
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
|                                                                                                                           | 
`sql
SELECT id |                                                                                                                           |  |
| FROM	Tennis.Wedstrijd                                                                                                     |                       |                                                                                                                           |  |
| WHERE aantalVerlorenSets > 2;                                                                                             |                       |                                                                                                                           |  |
|
``r
 |                       |                                                                                                                           |  |
|                                                                                                                           |                       |  |  |
|                                                                                                                           |                       |                                                                                                                           |  |

[]()•
Deuitvoer
kanookgesorteerdwordeninstijgendevolgordevolgens de

waardenineenvandekolommen.

|                                                                                                                           |                                                               |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | 
`sql
SELECT id, naam, geboortedatum FROM Tennis.Speler |                                                                                                                           |  |
| WHERE plaats = 'Den Haag'                                                                                                 |                                                               |                                                                                                                           |  |
| ORDER BY naam;                                                                                                            |                                                               |                                                                                                                           |  |
|
``r
 |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               |  |  |
|                                                                                                                           |                                                               |                                                                                                                           |  |

|  |
| - |
|  |

[]()•
Sorterenindedalende volgordebekomjedoorDESCtoetevoegen.

|                                                                                                                           |                                                               |                                                                                                                           |  |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|                                                                                                                           | 
`sql
SELECT id, naam, geboortedatum FROM	Tennis.Speler |                                                                                                                           |  |
| WHERE plaats = 'Den Haag'                                                                                                 |                                                               |                                                                                                                           |  |
| ORDER BY naam DESC;                                                                                                       |                                                               |                                                                                                                           |  |
|
``r
 |                                                               |                                                                                                                           |  |
|                                                                                                                           |                                                               |  |  |
|                                                                                                                           |                                                               |                                                                                                                           |  |

|  |
| - |
|  |

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
|                                                                                                                           | 
`sql
SELECT id, |                                                                                                                           |  |
| aantalGewonnenSets, aantalVerlorenSets                                                                                    |                        |                                                                                                                           |  |
| FROM Tennis.Wedstrijd;                                                                                                    |                        |                                                                                                                           |  |
|
``r
 |                        |                                                                                                                           |  |
|                                                                                                                           |                        |  |  |
|                                                                                                                           |                        |                                                                                                                           |  |

`sql
SELECT id, aantalGewonnenSets, aantalVerlorenSets FROM	Tennis.Wedstrijd
WHERE aantalGewonnenSets > aantalVerlorenSets;
``r

Welkewedstrijdenwordenergetoond?

•
De gewonnenwedstrijden

|  |
| - |
|  |

`sql
SELECT id, aantalGewonnenSets, aantalVerlorenSets FROM	Tennis.Wedstrijd
WHERE aantalGewonnenSets < aantalVerlorenSets;
``r

Welkewedstrijdenwordenergetoond?

•
Deverlorenwedstrijden

|  |
| - |
|  |

`sql
SELECT id, aantalGewonnenSets, aantalVerlorenSets FROM	Tennis.Wedstrijd
WHERE aantalGewonnenSets - aantalVerlorenSets >= 2
OR	aantalVerlorenSets - aantalGewonnenSets >= 2;
``r

Welkewedstrijdenwordenergetoond?

•
Dewedstrijdenmet2setsverschil

|  |
| - |
|  |

`sql
SELECT naam, plaats FROM Tennis.Speler
WHERE plaats = 'Den Haag'
OR	plaats = 'Rijswijk';
``r

Welkespelers
wordenergetoond?

•
AllespelersuitDenHaagenuitRijswijk

|  |
| - |
|  |

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
|  |  |  |  |
|  |                                                                                                                           |  |                                                                                                                           |

`sql
SELECT id, naam, geboortedatum FROM	Tennis.Speler
WHERE geboortedatum BETWEEN '1982-01-01' AND '1984-12-31';
``r

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

bevat.

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
|                                                                                                                           | 
`sql
SELECT naam |                                                                                                                           |  |
| FROM	Tennis.Speler                                                                                                        |                         |                                                                                                                           |  |
| WHERE naam LIKE '%\_%' ESCAPE '\';                                                                                        |                         |                                                                                                                           |  |
|
``r
 |                         |                                                                                                                           |  |
|                                                                                                                           |                         |  |  |
|                                                                                                                           |                         |                                                                                                                           |  |

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
|                                                                                                                           | 
`sql
SELECT naam |                                                                                                                           |  |
| FROM	Tennis.Speler                                                                                                        |                         |                                                                                                                           |  |
| WHERE naam LIKE '%#_%' ESCAPE '#';                                                                                        |                         |                                                                                                                           |  |
|
``r
 |                         |                                                                                                                           |  |
|                                                                                                                           |                         |  |  |
|                                                                                                                           |                         |                                                                                                                           |  |

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

bondsnummer8467hebben.

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
|                                                                                                                           | 
`sql
SELECT plaats |                                                                                                                                                                               |  |
| FROM Tennis.Speler;                                                                                                       |                           |                                                                                                                                                                               |  |
|
``r
 |                           | 
`sql
SELECT DISTINCT plaats FROM Tennis.Speler;
``r
 |  |

|  |
| - |
|  |



[]()•
DISTINCTheeftbetrekkingopgehelerijennietalleenopdeexpressiedie

directvolgtopDISTINCT.

|  |                                                                                                                                                                              |  |                                                                                                                                                                                       |
| - | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  | 
`sql
SELECT straat, plaats FROM	Tennis.Speler;
``r
 |  | 
`sql
SELECT DISTINCT straat, plaats FROM	Tennis.Speler;
``r
 |



[]()•
DISTINCTherkentNULLwaardenenbeschouwtzealsgelijk.

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()ØGeefdeid,naamengeslacht
vanalleledendielidzijnna2000.

|  |
| - |
|  |

Gewenstresultaat:             Huidig resultaat:

|  |                                                                                                                           |  |                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------- |
|  |  |  |  |
|  |                                                                                                                           |  |                                                                                                                           |

[]()•
FungeertalseensoortIF-THEN-ELSE-instructie

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
|  |                                                                                                                           |                                                                                                                           |  |

[]()•
FungeertalseensoortIF-THEN-ELSE-instructie

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
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

Voorbeeld:

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

`sql
SELECT naam
FROM	Tennis.Speler ORDER BY naam DESC;
``r
                                                                            
`sql
SELECT naam
FROM	Tennis.Speler ORDER BY naam ASC;
``r
                                                                            
`sql
SELECT naam
FROM	Tennis.Speler ORDER BY naam;
``r

|  |                                                                                                                           |  |                                                                                                                           |
| - | ------------------------------------------------------------------------------------------------------------------------- | - | ------------------------------------------------------------------------------------------------------------------------- |
|  |  |  |  |

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

ORDERBYspelerId, id;

|  |  |             |  |
| - | - | ----------- | - |
|  |  | 
`sql
|  |
``r
 |
|  |  |
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

