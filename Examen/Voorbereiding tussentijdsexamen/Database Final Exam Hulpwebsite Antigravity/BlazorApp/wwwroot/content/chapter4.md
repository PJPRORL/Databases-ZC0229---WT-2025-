

# Databases

**Createtable/Droptable insert/update/delete**

### Inhoudstafel

•
Tabellencreëren

•
Tabellenverwijderenofvolledigeinhoud
verwijderen

•
Invoeren,
wijzigenenverwijderenvangegevens

•
Rijen|records toevoegen

•
Rijen|records verwijderen

•
Rijen|records wijzigen

•
Achteraftoevoegenvan…

•
ToevoegenofverwijderenvaneenAKofindex

•
Schematoevoegenofverwijderen

|  |                                                                                |                                                                                |  |
| - | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | - |
|  |                                                                                |  |  |
|  |  |                                                                                |  |
|  |                                                                                |                                                                                |  |

# Tabellencreëren

### Hoetabel-,kolomnamenbenoemen?

•
HierzienwehoejeeenERDomzetnaareendatabase

•
Tabelnaam:

•
Databasenaam.Schemanaam.Tabelnaam

•
Voorbeeld:

DB_r1234567.Les.Uitvoerder

•Databasenaam:(optioneel)

- =DB_r-nummer

•Schemanaam:

- =‘Les’,’Tennis’,
  ...vooronzevoorbeelden
- 

Standaard‘dbo’

•
Tabelnaam

### Schema

•
Omsamenhorende tabellen, views, …tegroeperencreëren weeen

schemabinnenonzedatabase

|  |
| - |
|  |

•
Verwijderenvaneenschema

•
Eerst alletabellenverwijderen

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| GO                                                                             |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image011.gif) |

•
[]()SQL

|  |
| - |
|  |

•
Resultaat

[]()•
CREATETABLE
maakttabel*Uitvoerder
*aanonderhetschema*Les*metde

velden *id* ,*naam*en  *voornaam* .

•
De≠veldennamen wordentussen deronde hakengenoteerd,gescheidenmet

een komma

|  |
| - |
|  |

[]()•
DeinstructieCREATE
TABLEwordtinhoofdlettersgeschreven

•
Deinstructieeindigt
metpuntkomma;

|  |
| - |
|  |

[]()veldnaamdatatype
[CONTRAINTS]

•
 *veldnaam * =kolomnaam

•
zelftekiezen

•
datatype:kiezenuitdelijst(zievolgende
dia’s);isafhankelijkvan dbms

•
constraints:optioneel

|  |
| - |
|  |

[]()•
Achterelkedefinitievaneenveldschrijfjeeenkomma(behalveachter
de

laatste)

•
Perveldgebruikjeeenandere
regelenspringjein

|  |
| - |
|  |

[]()numeric[(m[,d])],decimal[(m[,d])]

•
Voorgetallenmetvastaantal
cijfersnadekomma

•
m= max.aantalcijfersvoor en
nadekommasamen(standaard=18)

•
d=max.aantalcijfers
nadekomma

(standaard=0)

•
Gebruikinbytes:

•
5– 17bytes

•

|  |   |  • getal   |  decimal(5,2)  |  è-999,00t/m 999,99                          |
| ------------- | ---------------- | ----------------------------------------------- |
|  • waarde  |  numeric(5)    |  è -99999 t/m99999                           |
|  • getal2  |  numeric       |  èpositiefof negatiefgetalmet max.18cijfers  |

|  |
| - |

|  |
| - |

[]()numeric[(m[,d])],decimal[(m[,d])] Voorbeeld:

[]()tinyint,smallint,int,bigint

•
Voorgehelegetallen

•
Gebruikinbytes:

•
tinyint              ->1

•
smallint            ->2

•
int                    ->4

•
bigint               ->8

•
Primairesleutelenrefererendekeys**altijd **int

[]()bit

•
Voor geheelgetaldat0,1ofNULLkanzijn

float(n),real

•
Voorgetallenmetdrijvendekomma

•
n=geeftdeprecisie
vanhetgetalweer

•
n<25wordtfloattochreal

•
Gebruikinbytes:

•
real       ->4

•
float      ->8

[]()smallmoney,money

•
Voorgetallendiegeld-ofvalutawaardenbevatten

•
Gebruikinbytes:

•
smallmoney     ->4

•
money             ->8

### Datatype(datum/tijd)

date

•
Bewaartalleeneendatum

•
Formaat:JJJJ-MM-DD

•
‘0001-01-01’tot‘9999-12-31’

•
Default:‘1900-01-01’

time

•
Bewaartalleeneentijdmeteennauwkeurigheidvan100nanoseconden

•
Formaat:hh:mm:ss:nnn

datetime,datetime2,smalldatetime,datetimeoffset

•
Bewaartdatumentijd

### Datatype

(datum/tijd):  voorbeeld

Gebruiktedatum23/10/2018

Tijd:15:45:471533333

|  |
| - |
|  |

[]()char(n)

•
stringvan*exact*dezelengte(max.8000)

•
n=exacte
lengte

•
Gebruikinbytes:

•
gedefinieerdelengte

varchar(n)

•
stringmet*variabele*lengte

•
n=tekenreekslengte (tussen1en
8000)

•
Gebruikinbytes:

•
werkelijkegrootte+2bytes

[]()text

•
Variabelemetkarakterstring-2GBtekstdata

ZieookSQLServerDataTypes

[https://www.w3schools.com/sql/sql_datatypes.asp](https://www.w3schools.com/sql/sql_datatypes.asp)

### Constraints

•
Constraintszijnbeperkingen/voorwaardenopeendatabank

•
Bijvoorbeeld:

−sommigeveldenmoetenwel
ofnietingevuldzijn

−sommigeveldenmoetenuniekzijn

−sommigeveldenvormendeprimaire
sleutelofrefererendesleutel

−sommigeveldenmogenalleenbepaalde
waardebevatten

−sommigeveldenhebbeneenstandaardwaardeindienzenietwordeningevuld

[]()Sommigeveldenmoeten**welofniet**ingevuldzijn

|  |
| - |
|  |

•
 *id* ,*familienaam*en*voornaam*moeten ingevuldworden(NOTNULL
=NNA)

•
*nicknaam*mag
ingevuldworden
(NULL= NA)

[]()Sommigeveldenmoeten**welofniet**ingevuldzijn



### Constraints:UNIQUE

Sommigeveldenmoeten**uniek**zijn

|  |
| - |
|  |

•
*id*moet
ingevuldworden ENuniekzijn

•
*familienaam
*magdubbelvoorkomen



### Constraints:UNIQUE(id)

•
Voorbeeld:



### Constraints:UNIQUE

Sommigeveldenmoetensamen**uniek**zijn

|                                                                                                 |                                           |                                                                                |  |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------------------------ | - |
|                                                                                                 | 
`sql
CREATE TABLE Les.Medewerker ( |                                                                                |  |
| id     int     NOT NULL,                                                                        |                                           |                                                                                |  |
| familienaam varchar(100) NOT NULL, voornaam varchar(100) NOT NULL, nicknaam  varchar(100) NULL, |                                           |                                                                                |  |
| CONSTRAINT UK_Medewerker_id_familienaam UNIQUE (id,familienaam)                                 |                                           |                                                                                |  |
| );                                                                                              |                                           |                                                                                |  |
|
``r
                  |                                           |                                                                                |  |
|                                                                                                 |                                           |  |  |
|                                                                                                 |                                           |                                                                                |  |

•
*id*en*familienaam
*moeteningevuldworden
ENsamen uniekzijn

•
Constraintnaam=
UK_Tabelnaam_kolomnaam

### Constraints:UNIQUE(id,familienaam)

•
Voorbeeld:

•
[]()Sommigeveldenvormen
de**primairesleutel **of**primarykey**

| id          | int,         |          |
| ----------- | ------------ | -------- |
| familienaam | varchar(100) | NOTNULL, |
| voornaam    | varchar(100) | NOTNULL, |
| nicknaam    | varchar(100) | NULL,    |

- *id*moetingevuldwordenenisdeprimaire
  sleutelvantabel*Persoon*

[]()CONSTRAINTnaamConstraintPRIMARYKEY(veldnaam(en))

•
naamConstraint=PK_Tabelnaam

•
typeConstraint=PRIMARYKEY

•
Veldnaam=meestal
id

NOTNULLisbijPRIMARY
KEYnietnodig,
wordt automatischtoegevoegd

[]()CONSTRAINTnaamConstraintPRIMARYKEY(veldnaam(en))

|  |
| - |
|  |

[]()•
*id*en*familienaam
*moeteningevuld wordenenvormensamende primaire

sleutelvantabel*Persoon*

|  |
| - |
|  |

|  |   |  CREATETABLELes.Persoon( id int, familienaam varchar(100)NOTNULL,voornaam varchar(100)NOT NULL, nicknaam varchar(100)NULL, CONSTRAINTPK_PersoonPRIMARYKEY(id,familienaam)  |     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----- |
|  );                                                                                                                                                                        |     |     |
|                                                                                                                                                                            |     |
|                                                                                                                                                                            |     |  |

|  |
| - |

|  |
| - |



### Constraints:PRIMARYKEY+ autonummering

*id
*wordtautomatischverhoogd

•
IDENTITY(beginwaarde,verhoogwaarde)

•
PKisnormaalmetIDENTITY()

| id          | int          | IDENTITY(1,1), |
| ----------- | ------------ | -------------- |
| familienaam | varchar(100) | NOTNULL,       |
| voornaam    | varchar(100) | NOTNULL,       |
| nicknaam    | varchar(100) | NULL,          |

[]()•
Sommigeveldenvormende**foreignkey**of**refererende sleutel**

•
Eenreferendesleutel
of foreignkeygeeft
eenrelatietussen2tabellen
weer

| Muziek | * R1 | Uitvoerder |
| ------ | ---- | ---------- |
| 1      |      |            |

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| kan meerdere muziekCd’s gemaakt hebben.                                       |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image045.gif) |

[]()•
Eenreferendesleutel
of foreignkeygeeft
eenrelatietussen2tabellen
weer

CREATETABLELes.Muziek (

id                 int                  IDENTITY(1,1),

naam            varchar(100)NOTNULL,

|  |   EenuitvoerderIdkan NULLzijn als hij

| onbekend is |
| ----------- |

|  |
| - |

duurtijdint, uitvoerderId int, CONSTRAINTPK_Muziek

PRIMARY
KEY(id),

CONSTRAINTFK_Muziek_Uitvoerder
FOREIGN KEY (uitvoerderId) REFERENCES Les.Uitvoerder(id)

);

[]()CONSTRAINTnaamConstraintFOREIGNKEY(kolomnaam1)REFERENCEStabelnaamPK

(kolomnaam2)

•
naamConstraint=FK_Tabelnaam_TabelnaamPK

•
typeConstraint=FOREIGNKEY

•
kolomnaam1=kolomindezetabel(=FK)

•
kolomnaam2=kolomuitdePK-tabel(meestalid)

|  |
| - |
|  |

[]()CONSTRAINTnaamConstraintFOREIGNKEY(kolomnaam1)REFERENCEStabelnaamPK

(kolomnaam2)

•
REFERENCESgeeftweer:

•
metwelketabelereenrelatiegemaakt
wordt

•
metwelkveldvandezetabel(=PK)

|  |
| - |
|  |

[]()•
sommigeveldenmogen**alleenbepaaldewaarden
**bevatten

−Inhetveld *geslacht*magalleen
‘M’,‘m’,‘V’of‘v’ingevuldworden

|  |
| - |
|  |

[]()CONSTRAINTnaamConstraintCHECK(voorwaarde(n))

•
naamConstraint=CK_Tabelnaam_kolomnaam

•
typeConstraint=CHECK

•
voorwaarde(n):

•
(geslacht='M'ORgeslacht='V')

•
of-voorwaarde

Ø   voldoenaanéénvandetweeisvoldoende

•
(geslacht
='M'ANDland='België')

•
en-voorwaarde

Ø  beidevoorwaardenmoetenvoldaanworden

[]()•
In*geslacht*magmen‘M’,‘m’,‘V’of‘v’invullen.

•
Anderewaardenwordenniettoegelaten

[]()•
Sommigeveldenhebbeneen**standaardwaarde**indienzenietworden

ingevuld

| CREATETABLE Les.Persoon( id intIDENTITY(1,1), familienaamvarchar(100)NOTNULL,voornaam varchar(100), geslacht char, postcode varchar(4),gemeente varchar(100), |                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| land varchar(100)CONSTRAINTDF_Persoon_landDEFAULT'België',                     | Geen komma constrainthoortbijland |
| CONSTRAINTPK_PersoonPRIMARYKEY(id) );                                                                                                                         |                                                                                                                 |
|                                                                                                                                                               |                                                                                                                 |

[]()CONSTRAINTnaamConstraintDEFAULT(waarde)

•
naamConstraint=DF_Tabelnaam_kolomnaam

•
typeConstraint=DEFAULT Voorbeeld:

CONSTRAINTDF_Persoon_land

DEFAULT'België'

[]()Kolom- of tabelconstraint ? Kolomconstraint:

•
Alleenals
hetgeldigis vooréénkolom

•
Voorbeeld:

id           int          IDENTITY(1,1),

naam             varchar(100)NOTNULL, voornaam             varchar(100) NULL, land             varchar(100) CONSTRAINT DF_Persoon_land

DEFAULT'België'

•
NULLen
NOTNULLaltijdopkolomniveau

#### Tabelconstraint:

•
Altijdmogelijk

CONSTRAINTnaamConstraint

TYPECONSTRAINT(betreffendeKolom(men))

•
Voorbeelden:

CONSTRAINTPK_MuziekPRIMARYKEY(id),

CONSTRAINTFK_Muziek_Uitvoerder FOREIGN KEY (uitvoerderId) REFERENCES Uitvoerder(id),

CONSTRAINTUK_Persoon
UNIQUE(id,familienaam), CONSTRAINT CK_Persoon_geslacht

CHECK(geslacht='M'ORgeslacht='V')

## DTC,DTR,DTN

DTC:ONDELETECASCADE

•
Als
jeeen rij verwijdertwaarnaar in een andere tabel verwezen
wordtvia een FK, dan worden de
rijen die de FK bevatten **ook verwijderd.**

DTR:ONDELETERESTRICT

•
Rijenwaarnaarverwezen
wordtineenanderetabelkunnen**niet**verwijderd

worden.

DTN:ON DELETESETNULL

•
Alsjeeenrijverwijdertwaarnaarineenanderetabelverwezenwordtviaeen

FK,danwordtdeFKop**NULLgezet.**

## DTC:ONDELETECASCADE

CONSTRAINT
FOREIGNKEYuitbreidenmet:

•
ONDELETECASCADE

•
Goednadenken!!!

•
ALLEENbijassociatietabellen

| id                    | int     | IDENTITY(1,1), |
| --------------------- | ------- | -------------- |
| orderId               | int,    |                |
| productId hoeveelheid | int,int | DEFAULT1,      |

Indienjeeenorderverwijdert,worden
debijhorendeorderlijnenook

## DTR:ONDELETERESTRICTED

CONSTRAINT
FOREIGNKEYuitbreidenmet:

•
**nietstoevoegen**

•
meestalgebruikt

| id                    | int | IDENTITY(1,1), |
| --------------------- | --- | -------------- |
| orderId               |     | int,           |
| productId hoeveelheid | int | int,DEFAULT1,  |

Jekangeenproduct
verwijderenalsernogorderlijnenbestaan

voorditproduct.

## DTN:ONDELETESETNULL

CONSTRAINT
FOREIGNKEYuitbreidenmet:

•
ON
DELETESETNULL

| id                    | int | IDENTITY(1,1), |
| --------------------- | --- | -------------- |
| orderId               |     | int,           |
| productId hoeveelheid | int | int,DEFAULT1,  |

Als
jeeenproduct verwijdert, wordtinalleorderlijnenditproduct
op NULL geplaatst.

[]()[]()Tabellenmoeten
aangemaaktwordeninvolgordevanderelaties.

•
Eerstdetabellen
zonderforeignkeys

•
VervolgensdetabellendieeenFKbevatten
Voorbeeld:

|  |
| - |
|  |

[]()•
Tabellenzonderforeign
keys

|  |
| - |
|  |

[]()•
Tabellenzonderforeign
keys

|  |
| - |
|  |

Devolgordewaarinze**onderling**aangemaakt
wordenisniet belangrijk.

49

[]()•
Tabellenzonderforeign
keys

•
Tabellenmet**uitsluitend**foreignkeysnaardereedsgemaaktetabellen

|  |
| - |
|  |

[]()•
Tabellenzonderforeign
keys

•
Tabellenmet**uitsluitend**foreignkeysnaardereedsgemaakte
tabellen

|  |
| - |
|  |

[]()•
Tabellenzonderforeign
keys

•
Tabellenmet**uitsluitend**foreignkeysnaardereedsgemaakte
tabellen

|  |
| - |
|  |

# Tabellen verwijderen Rijen verwijderen

### Tabelverwijderen

|  |
| - |
|  |

DROPTABLEwerkt**niet **alsernoganderetabellennaardezetabel

verwijzen(FK)

•
TenzijCASCADE
CONSTRAINTaanwezigis

### Inhoudvantabelverwijderen

`sql
TRUNCATE TABLE Les.Uitvoerder;
``r

•
Detabelzelf
wordtnietverwijderd

•
Alleendebestaande
recordswordenverwijderd

•
*id*startterug
vanafdestartwaarde(IDENTITY)

•
Voor                                     Na

[]()Tabellenmoeten
verwijderdwordeninvolgordevanderelaties.

•
Eerstde
tabellen**met**foreignkeys

•
VervolgensdetabellendiegeenFK bevatten Voorbeeld:

|  |
| - |
|  |

[]()•
Tabellenmetforeign
keys**waarnaarnietverwezen
wordtinandere
tabellen**

|  |
| - |
|  |

•
[]()Tabellenmetforeign
keys**waarnaarnietverwezen
wordtinandere
tabellen**

|  |
| - |
|  |

•
[]()Tabellenmetforeign
keys**waarnaarnietverwezen
wordtinandere
tabellen**

|  |
| - |
|  |

•
[]()Tabellenmetforeign
keys**waarnaarnietverwezen
wordtinandere
tabellen**

•
Alletabellenzonderforeignkeys

|  |
| - |
|  |

[]()[]()Invoeren,
wijzigen enverwijderen van gegevens

 []()**Rijen**
**toevoegen****(manier****1)**

|  |
| - |
|  |

•
Aantalwaarden
moetovereenkomenmethetaantal
kolommen indetabel

•
Typemoetovereenkomen

•
Kolomvolgordemoetgerespecteerdworden

•
Nietvermeldekolommen
krijgendeNULL-waarde

(=waardeonbekend)

•
NULLkanookalswaarde
wordenmeegegeven

[]()Voegdegroep'Hooverphonic'

toeaandetabelUitvoerder’

(id=125,genre='Rock',land='België')

|  |
| - |
|  |

`sql
INSERT INTO Les.Uitvoeder
(id, groepnaam, genre, land)
VALUES (126, 'Clouseau','Pop', NULL);
INSERT INTO Les.Uitvoeder (id, groepnaam, genre)
VALUES (127, 'Police','Rock');
``r

|  |
| - |
|  |

[]()•
Aantalwaarden
moetovereenkomenmethetaantal
kolommen indetabel

•
Typemoetovereenkomen

•
Kolomvolgordemoetgerespecteerdworden

•
Nietvermeldekolommen
krijgendeNULL-waarde

(=waardeonbekend)

•
NULLkanookalswaarde
wordenmeegegeven

`sql
INSERT INTO Schemanaam.Tabelnaam (kolomnaam1, kolomnaam2, ...) SELECT-commando;
``r
 
`sql
SELECT commando komt in Les 3 aan bod!
``r

•
SELECT-commandolevert0,1ofmeerrijen op dieworden toegevoegd.

•
HetresultaatvanhetSELECT-commandomoetwat betreftaantal
entypevan

dekolommenovereenkomenmethetgespecificeerde.

•
Kolomnamenmoetenworden
vermeldwanneermenafwijktvandevolgorde
of

hetaantalindetabel.

•
InhetSELECT-commandomaggeenORDER
BY-componentvoorkomen.

[]()•
Steldateen(lege)tabel*BelgischeUitvoerder*dezelfdestructuurheeftalsde

tabel *Uitvoerder* .

Vuldezetabelmetdegegevensvan de Belgische uitvoerders.

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| FROM	Les.Uitvoeder                                                             |
| WHERE land = 'België';                                                        |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image097.gif) |

•
Letop:SELECT
wordtingesprongenalsookFROMenWHERE

[]()Voor:

•
BelgischeUitvoerder

•
Uitvoerder

Na:

|  |
| - |
|  |

### Rijenverwijderen

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| WHERE voorwaarde;                                                              |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image104.gif) |

•
Indiener
geenWHEREcomponentvoorkomt,wordtdeheletabel“leeg”

gemaakt.

•
Opgelet wanneererrelaties
bestaantussentabellen!

### Rijenverwijderen:voorbeeld

•
Verwijderalleuitvoerdersvangenre‘rock’

|  |
| - |
|  |

•
Voor:                                                   Na:

|  |                                                                                |                                                                                |  |
| - | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | - |
|  |  |                                                                                |  |
|  |                                                                                |  |  |
|  |                                                                                |                                                                                |  |

### Rijenwijzigen

•
ElkerijdievoldoetaandevoorwaardeindeWHERE-componentwordt

gewijzigd.

|                                                                                   |
| --------------------------------------------------------------------------------- |
|                                                                                   |
| SET kolomnaam1 = uitdrukking, kolomnaam2 = uitdrukking, kolomnaam3 = uitdrukking, |
| ...                                                                               |
| WHERE voorwaarde;                                                                 |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image109.gif)    |

### Rijenwijzigen:voorbeeld

•
Veranderhetgenre‘rock’in‘rockabilly’voorBelgischegroepen.

|  |
| - |
|  |

•
Voor:                                                   Na:



### Achteraftoevoegenvan...

•
Toevoegenvanvelden,
constraintsaaneenbestaandetabel

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| ADD geboortedatum date;                                                        |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image105.gif) |

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| ADD CONSTRAINT FK_Order_Klant FOREIGN KEY (klantId) REFERENCES Les.Klant(id);  |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image115.gif) |

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| ADD email varchar(100);                                                        |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image116.gif) |

### Achterafverwijderenvan...

•
Verwijderenvanvelden,
constraintsvaneenbestaandetabel

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| DROP COLUMN geboortedatum date;                                                |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image117.gif) |

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| DROP CONSTRAINT FK_Order_Klant;                                                |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image118.gif) |

### Achterafaanpassenvan…

•
Veldenenconstraintsaanpassen

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| ALTER COLUMN geboortedatum datetime;                                           |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image119.gif) |

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| Voor constraints:                                                              |
| aanpassen = verwijderen + opnieuw aanmaken                                     |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image120.gif) |

### Toevoegenvanalternatievesleutel(AK) of index

•
Deinstructie
CREATEINDEXwordt gebruiktomindexen
in tabellentemaken.

•
Indexen worden gebruikt omsnel gegevens uitde databaseop tehalen.
De gebruikers kunnen de indexen niet zien, ze worden alleen gebruikt om
zoekopdrachten / zoekopdrachten te versnellen.

•
Opmerking:Maakalleenindexen
opkolommenwaarnaar
vaakwordtgezocht. Het bijwerken neemt veel tijd in
beslag.

### Toevoegenvanalternatievekeyof index

•

|  |   CREATEINDEXAK_Tabelnaam_kolomnaam ONSchema.Tabelnaam(kolomnaam1,(kolomnaam2,...);   |
| --------------------------------------------------------------------------------------- |

|  |
| - |

Syntax:

•
Creëerteenuniekeindexopeentabel.Dubbele
waardenzijnniettoegestaan.

|                                                                                |
| ------------------------------------------------------------------------------ |
|                                                                                |
| ON Schema.Tabelnaam (kolomnaam1, (kolomnaam2, ...);                            |
| ](file:///C:/Users/piuss/AppData/Local/Temp/msohtmlclip1/01/clip_image121.gif) |

•

|  |
| - |
|  |

Voorbeeld:

### Achterafverwijderenvan...

•
Verwijderenvanindex
ofAKopeenbestaande tabel

|  |
| - |
|  |

|  |                                                                                |
| - | ------------------------------------------------------------------------------ |
|  |  |

# Oefeningen

### Geldigvoorelkenieuwetoepassingof project

#### Pasvolgendestappen

steedstoe:

Creatievaneenschemaencreatie
vandeverschillendetabellenbinnendit
schema

2. Toevoegenvandenodige
   records
3. Uitwerkenvandeverschillendeopdrachten
4. EenaparteSQL-bestand
   aanmakenomallesterugteverwijderen
   inclusief

constraints,tabellenenschema



