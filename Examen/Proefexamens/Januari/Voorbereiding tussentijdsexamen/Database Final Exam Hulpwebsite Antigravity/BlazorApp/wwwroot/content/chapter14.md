

# Databases

**DocumentDatabases:Modelleren**

## Inhoud

•
Watiseendocumentdatabase

•
Verschillenmeteenrelationeledatabase

•
Voordelen&nadelen

•
Collecties &
documenten

•
Modelleren indocumentdatabases

•
Embeddingvs.Referencing

•
MongoDB

•
JSONSchemadefiniërenvoorMongoDB



|  |
| - |
|  |

# Documentdatabases

#### Watzijndocumentdatabases?

[]()NoSQLiseenverzamelnaamvoorverschillende
databasesdie**geen**gebruik

makenvantabellen, kolommenenjoins.

•
Non-SQL/notonlySQL

•
FlexibelerestructuurdaneenSQLdatabase

•
Snellervoorgrotehoeveelhedendata

•
Gedistribueerdàhorizontaal schaalbaar

•
Doorgaans **geen** (volledige)ACID
ondersteuning

•
Atomic,Consistent,Isolation,Durability

[]()NoSQLiseenverzamelnaamvoorverschillende
databasesdie**geen**gebruik

makenvantabellen, kolommenenjoins.

•
Non-SQL/notoRneclyenStiQsdLe term“NewSQL”
ingeburgerdgeraakt,deze
term

omschrijftrelationeledatabasesdiedeschaalbaarheidvan

•
FlexibelerestruNcoStuQuLrddataabnaseeesnaaSnbQieLdednamtaaabraosoekvolledigeACID
support

•
Snellervoorgrote

ahaonebiveedeenl.h[C](https://www.cockroachlabs.com/)e[o](https://www.cockroachlabs.com/)d[c](https://www.cockroachlabs.com/)e[kr](https://www.cockroachlabs.com/)n[oa](https://www.cockroachlabs.com/)d[ch](https://www.cockroachlabs.com/)a[D](https://www.cockroachlabs.com/)ta[B](https://www.cockroachlabs.com/)ishiereenvoorbeeldvan.

•
Gedistribueerdàhorizontaal schaalbaar

•
Doorgaans **geen** (volledige)ACID
ondersteuning

•
Atomic,Consistent,Isolation,Durability

## Documentdatabases

Documentdatabaseszijn een subsetvanNoSQLdatabasesdiedata bewaren

dieals*één*bestand(tekstbestand)weergegeven kunnen worden.

Kenmerken:

•
Semigestructureerd
data

•
Flexibel

•
Afwijkendeproperties

•
Geenschema/model nodig

•
Dingendiesamenhangenvormenééndocument

•
Gestandaardiseerd
formaat(JSON,BSON,
YAML,XML,…)

•
Leunenaanbijobjecten(OOP)

•
GeennoodaancomplexeORM’s

[]()Relationeledatabase

•
4tabellenen3joins

•
Querygeeft3rijenterug

•
DuplicatieàORMàEénobject

[]()                Order

| **id** | **…** |
| ------------ | ------------ |
| 1001         | …           |

    Customer

| **id** | **name** |
| ------------ | -------------- |
| 2560         | Ann            |

    Orderline

    Card

| **id** | **card** | **ccNumber** | **expiry** |
| ------------ | -------------- | ------------------ | ---------------- |
| 10256        | Amex           | 12345              | 2001-04-01       |

| **id** | **itemId** | **amount** | **price** |
| ------------ | ---------------- | ---------------- | --------------- |
| 56           | 0321293533       | 2                | 48              |
| 60           | 0321601912       | 1                | 39              |
| 61           | 0131495054       | 1                | 51              |

[]()Joinàduplicatenverwijderen (viaORM)àconverteren naareenobjectà

gebruikenindeview

    Naeenjoin

| **Order.id** | **Customer.id** | **name** | **Orderline.id** | **itemId** | **amount** | **price** | **Card.id** | **card** | **ccNumber** | **expiry**                |
| ------------------ | --------------------- | -------------- | ---------------------- | ---------------- | ---------------- | --------------- | ----------------- | -------------- | ------------------ | ------------------------------- |
| **1001**     | **2560**        | **Ann**  | 56                     | 0321293533       | 2                | 48              | **10256**   | **Amex** | **12345**    | **2001-04-** **01** |
| **1001**     | **2560**        | **Ann**  | 60                     | 0321601912       | 1                | 39              | **10256**   | **Amex** | **12345**    | **2001-04-** **01** |
| **1001**     | **2560**        | **Ann**  | 61                     | 0131495054       | 1                | 51              | **10256**   | **Amex** | **12345**    | **2001-04-** **01** |

[]()Documentdatabase

•
**Eén**document

•
**Geen**joins

•
Data wordt die samen opgevraagdwordt,
wordtsamen bewaard

•
Geennormalisatie

[]()XML, JSON, YAML, … àsnelle
conversie naareenobject (viaODM)àgebruiken
in view

Meestal**JSON**

•
Zeerfrequentgebruikt
in JavaScript

en(REST)API’s

{

"id":1001,

"customer":"Ann", "lineItems": [

{

"item_id":321293533,

"amount":2,

"price":48

},

{

"item_id":321601912,

"amount":1,

"price":39

},

{

"item_id":131495054,

"count":1,

"price":51

}

],

"paymentDetails": { "card":
"Amex", "ccNumber":12345,

"expiry":"2001-04-01"

}

[]()XML, JSON, YAML, … àsnelle
conversie naareenobjectàgebruiken
in view

Meestal**JSON**

•
{}duid
een object/document aan

**{**

"id":1001,

"customer":"Ann", "lineItems": [

**{**

"item_id":321293533,

"amount":2,

"price":48

 **}** ,

**{**

"item_id":321601912,

"amount":1,

"price":39

 **}** ,

**{**

"item_id":131495054,

"count":1,

"price":51

**}**

],

"paymentDetails":  **{ ** "card": "Amex",
"ccNumber":12345,

"expiry":"2001-04-01"

**}**

[]()XML, JSON, YAML, … àsnelle
conversie naareenobjectàgebruiken
in view

Meestal**JSON**

•
{}duid
een object/document aan

•
"key":"value"voorelk**string**

attribuut

**{**

"id":1001,

 **"customer"** **:"Ann",**

"lineItems":[

**{**

"item_id":321293533,

"amount":2,

"price":48

 **}** ,

**{**

"item_id":321601912,

"amount":1,

"price":39

 **}** ,

**{**

"item_id":131495054,

"count":1,

"price":51

**}**

],

"paymentDetails":  **{ "card": "Amex"** ,
"ccNumber":12345,

"expiry":"2001-04-01"

**}**

[]()XML, JSON, YAML, … àsnelle
conversie naareenobjectàgebruiken
in view

Meestal**JSON**

•
{}duid
een object/document aan

•
"key":"value"voorelk**string**

attribuut

**{**

 **"id"**  **:1001** ,

"customer":"Ann", "lineItems": [

**{**

 **"item_id"** **:321293533,**

 **"amount"** **:2,**

 **"price"** **:48**

 **}** ,

**{**

 **"item_id"** **:321601912,**

 **"amount"** **:1,**

 **"price"** **:39**

 **}** ,

**{**

 **"item_id"** **:131495054,**

 **"count"** **:1,**

 **"price"** **:51**

•
"key":valuevoorelkanderdatatype                                                                  **}**

],

"paymentDetails":  **{ ** "card": "Amex",
**"ccNumber":12345,**

"expiry":"2001-04-01"

**}**

[]()XML, JSON, YAML, … àsnelle
conversie naareenobjectàgebruiken
in view

Meestal**JSON**

•
{}duid
een object/document aan

•
"key":"value"voorelk**string**

attribuut

•
"key":valuevoorelkanderdatatype

•
[]voorarrays

{

"id":1001,

"customer":"Ann", "lineItems": **[**

{

"item_id":321293533,

"amount":2,

"price":48

},

{

"item_id":321601912,

"amount":1,

"price":39

},

{

"item_id":131495054,

"count":1,

"price":51

}

 **]** ,

"paymentDetails": { "card":
"Amex", "ccNumber":12345,

"expiry":"2001-04-01"

}

[]()XML, JSON, YAML, … àsnelle
conversie naareenobjectàgebruiken
in view

Meestal**JSON**

•
{}duid
eenobject/documentaan

•
"key":"value"voorelk**string**

attribuut

•
"key":valuevoorelkanderdatatype

•
[]voorarrays

•
Attributenvanelkaarscheiden
met een komma (behalve het laatste)

{

"id":1001,

"customer":"Ann" **, ** "lineItems":
[

{

"item_id":321293533**,**

"amount":2**,**

"price":48

},

{

"item_id":321601912**,**

"amount":1**,**

"price":39

},

{

"item_id":131495054**,**

"count":1**,**

"price":51

}

],

"paymentDetails": { "card":
"Amex" **, ** "ccNumber":12345**,**

"expiry":"2001-04-01"

}

[]()•
WebshopmetverschillendeAppleenMicrosoft
producten

•
RelationeelàKarakteristiekeentiteit

•
DocumentDBàStringveldinhetproduct

•
Watalsjewilfilteren
ofgemakkelijkeenmerkselecterentijdenshet

toevoegenvan
eenproduct

•
ExtracollectieMerkenaanmaken

•
Geenreferentiemaardemerkensteedskopiëren
indeproducten

Datasamenvoegenisnietefficiënt

Duplicatiewordtinveelgevallen
verkozenbovenreferenties

| []()**Relationeel**                                                                     | **Document**                                                       |
| --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **Schemaligt vastindeDB**                                                               | Schemawordt optioneelafgedwongenindeDB                                   |
| **Schemaisgenormaliseerd**envertrektvanuit dedata                                       | Schema opgebouwdvanuitusecasesenkan duplicaten                           |
| bevatten                                                                                      |                                                                          |
| **Aanpassingen**inhetschema zijn**doorgaan kostelijke operaties (hefboomeffect)** | **Aanpassingen**inhetschema zijn**eenvoudig ensnel**         |
| VoldoetaandeACID voorwaarden                                                                  | VoldoetnietnoodzakelijkaanACIDvoorwaarden                                |
| Kan doorgaansnietgedistribueerdgeïmplementeerdworden                                         | Horizontaalschaalbaarengedistribueerd                                    |
| **Joinszijncruciaal**                                                                   | **Joinsbestaan niet** ,samenhorende datawordtin één keer bewaard |

[]()DocumentDatabase

|  |                                                                                |  |                                                                                |
| - | ------------------------------------------------------------------------------ | - | ------------------------------------------------------------------------------ |
|  |  |  |  |
|  |                                                                                |  |                                                                                |

Collections

Documents

|  |
| - |
|  |



[]()Collections:

•
Analoogaantabellen

•
Bevattenverschillendedocumenten

•
Implicietaangemaakttijdens
eeninsert

•
GeenDDLstatementsnodig

•
Geenschema

•
Optionele validatie
is(soms)mogelijk

•
Denaamstaatinhetmeervoud

Documents:

•
Analoogaaneen
rij

# Documentdatabases

#### Modelleren & schema definitie Embeddingvsreferencing

[]()[]()Hetadresheefteen**één-op-één**relatiemetdestudent

•
Eénadres
is uniekperstudent

embedineen

*object*

{

"naam": "Holmes", "voornaam":"Sherlock",  **"adres"** **: {**

 **"straat"**  **:**  **"BakerStreet"**  **, **  **"huisnummer"**  **: **  **"221B"**  **, **  **"woonplaats"**  **: **  **"London"**  **, **  **"land"**  **: ** **"United
Kingdom"**

**}**

}

[]()•
Het ERDbevateenveel-op-veelrelatie
voorde

contactgegevens

•
Realiteit: **één-op-enkele** (one-to-few)

•
Contactgegevenswordensteedsopgehaaldals

onderdeelvandepersoonsgegevens

[]()•
Het ERDbevateenveel-op-veelrelatie
voorde

contactgegevens

•
Realiteit: **één-op-enkele** (one-to-few)

•
Contactgegevenswordensteedsopgehaaldals

onderdeelvandepersoonsgegevens

embedineen*array*

van*objecten*

•

|  |   {   |
| ------- |

|  |
| - |

[]()Het ERDbevat
eenveel-op-veelrelatie
voorde

contactgegevens

•
Realiteit: **één-op-enkele** (one-to-few)

•
Contactgegevenswordensteedsopgehaaldals

onderdeelvandepersoonsgegevens

embedineen*array*

van*objecten*

"naam": "Holmes", "voornaam":"Sherlock", "adres": {

"straat": "BakerStreet", "huisnummer": "221B", "woonplaats": "London", "land": "United
Kingdom"

},

 **"contactGegevens"** **:[**

**{**

 **"type"**  **:**  **"email"** **,**

 **"contact"**  **:**  **"** [**serlock@holmes.com**](mailto:serlock@holmes.com)**"**

**},**

**{**

**},**

**...**

**]**

}

 **"type"**  **: **  **"phone"**  **, **  **"contact"**  **:** **"328.734.8325"**

•

|  |   {   |
| ------- |

|  |
| - |

[]()Het ERDbevat
eenveel-op-veelrelatie
voorde

contactgegevens

•
Realiteit: **één-op-enkele** (one-to-few)

•
Contactgegevenswordensteedsopgehaaldals

onderdeelvandepersoonsgegevens

embedineen*array*

van*objecten*

"naam": "Holmes", "voornaam":"Sherlock", "adres": {

"straat": "BakerStreet", "huisnummer": "221B", "woonplaats": "London", "land": "United
Kingdom"

},

 **"contactGegevens"** **:[**

**{**

 **"type"**  **:**  **"email"** **,**

 **"contact"**  **:**  **"** [**serlock@holmes.com**](mailto:serlock@holmes.com)**"**

**},**

**{**

**},**

**...**

**]**

}

 **"type"**  **: **  **"phone"**  **, **  **"contact"**  **:** **"328.734.8325"**

[]()Documentdatabases
hebbennietaltijd een schema

•
Eengoedestructuur
is echterwel belangrijk

•
Tweeopties

•
Schemawordtgegarandeerddoordeprogrammeur

•
Schemawordt
(indienmogelijk)vastgelegdopdatabaseniveau

[]()Documentdatabases
hebbennietaltijd een schema

•
Eengoedestructuur
is echterwel belangrijk

•
Tweeopties

•
Schemawordtgegarandeerddoordeprogrammeur

### •

Schemawordt(indienmogelijk)vastgelegdopdatabase
niveauaande

**handvanvalidatieregels**

|  |
| - |
|  |

[]()•
Devalidatieregelsbeschrijvendedatadietoegestaanisindedatabaseende

structuurhiervan
"contactGegevens": {  **"bsonType"**  **:**  **"array"** ,  **"items"** **: {**

"bsonType":"object",

"required":[

Hetschema
datwehiergebouwdhebben
moet"binsonType",

MongoDBingegevenworden
als{“$jsonSchem"ac”o:ntact"

•

|  |   "properties":{   |
| -------------------- |

|  |
| - |

DestructuurisvollediSgCgHeElMijAk}((vzioeolaratstediavandepresentati]e,).

objecten)

"type":{

"bsontype":"string"

},

"contact": { "bsonType":"string"

 •
Vooreenarraygebruikje*items*                                                                  }

|  |   }   |
| ------- |

|  |
| - |

waaraanje een
*object*koppelt                                                                  ^}^

}

}

}

[](){

"description":"Dit
documentbeschrijfthet…", "bsonType":
"object",

"required":["naam","voornaam","contactGegevens"], "properties": {

"naam":{

"bsonType":"string",

"description":"Deachternaamvande…"

},

"voornaam": { "bsonType":"string",

"description":"Devoornaamvande…"

},

"contactGegevens": { "bsonType":"array", "items": {

"bsonType": "object", "required":["type","contact"], "properties": {

"type":{"bsonType":"string"},

"contact":{"bsonType":"string"}

{

"naam":"Donald",

"voornaam":"Knuth", "contactGegevens":[

{

"type":"email",

"contact":[&#34;donald.knuth@stanford.edu&#34;](mailto:donald.knuth@stanford.edu)

},

{

"type":"website",

"contact":"www-cs-faculty.stanford.edu/~knuth"

}

]

}

}

}

}

}

}

Schema/Validatieregels     Validedata                       ~39~

[]()[]()•
Een student kanmeerderevakken volgen, ineenvakzitten
altijdmeerdere

studenten

•
Veel-op-veel

•
Tweeopties

•
Embedden

Datawordtbewaard
alskindvaneenanderdocument

•
Verwijzingen

Datawordtbewaard
ineenapartecollectie

VerwijzingviaobjectId
(automatischaangemaaktbijcreate)

**Verwijzingen
!=joins/FK’s**

[]()•
Eenstudentkanmeerderevakkenvolgen,

ineenvak zittenaltijdmeerderestudenten  {

•
Veel-op-veel

•
Tweeopties

•
**Embedden**

Vakken enkel
beschikbaar als onderdeel van een student

Vakkenmoetenbij**elke**student**gedupliceerd**

worden

Een
overzichtvanvakkenisnietefficiëntte

bouwen

De
propertiesvaneenvakkunnen
nieteenvoudig

aangepastworden

Een
documentindestudentscollectiebevatalle

informatieoverdiestudent

•
Verwijzingen

}

…

"properties":{

…

 **"vakken"**  **: { **  **"bsonType"**  **: **  **"array"**  **, **  **"items"** **: {**

 **"bsonType"**  **:**  **"object"** **,**

 **"required"**  **: [**  **"name"**  **, **  **"ectsCredits"**  **], **  **"properties"** **: {**

 **"name"**  **:{**  **"bsonType"**  **:**  **"string"** **},**

 **"ectsCredits"**  **:{**  **"bsonType"**  **:**  **"int"** **}**

**}**

**}**

}

}

[]()•
Eenstudentkanmeerderevakkenvolgen,

ineenvakzittenaltijdmeerdere
studenten

•
Veel-op-veel

•
Tweeopties

•
**Embedden**

Vakken enkel
beschikbaar als onderdeel van een student

Vakkenmoetenbij**elke**student**gedupliceerd**

worden

Een
overzichtvanvakkenisnietefficiëntte

bouwen

De
propertiesvaneenvakkunnen
nieteenvoudig

aangepastworden

Een
documentindestudentscollectiebevatalle

informatieoverdiestudent

•
Verwijzingen

{

…

"vakken":[

{

"name":"Algorithms…", "ectsCredits": 5

},

{

"name":"Automata…", "ectsCredits": 4

}

]

}

[]()•
Eenstudentkanmeerderevakkenvolgen,

ineenvakzittenaltijdmeerdere studenten

•
Veel-op-veel

•
Tweeopties

•
Embedden

### •

Referencing(Verwijzingen)

Vakkenwordené**énkeer**bewaard

Om de overzichtspagina
van een student te bouwen(inclusiefvakken)
zijnmeerderequeries nodig (of een view met *$lookup *in  *MongoDB* )

Een
vakaanpasseniseenvoudig

De documenten indestudentscollectie
zijn minder complex

{

…

"properties":{

…

"vakken": {  **"bsonType"**  **: **  **"array"**  **, ** "items": {

 **"bsonType"**  **:** **"objectId"**

}

}

}

}

[]()•
Eenstudentkanmeerderevakkenvolgen,                                                                  {

ineenvakzittenaltijdmeerdere studenten

•
Veel-op-veel

•
Tweeopties

•
Embedden

### •

Referencing(Verwijzingen)

Vakkenwordené**énkeer**bewaard

Om
deoverzichtspaginavaneenstudent te

"naam":"Donald",

"voornaam": "Knuth", "contactGegevens": [...],  **"vakken"** **: [**

 **{**  **"$oid"**  **:**  **"61741c9cbc9ec583c836170a"** **},**

 **{**  **"$oid"**  **:**  **"61741c9cbc9ec583c836170b"** **}**

**]**

bouwen(inclusiefvakken)zijnmeerdere
queries nodig (of een view met *$lookup *in  *MongoDB* )

Een
vakaanpasseniseenvoudig

De documenten indestudentscollectie
zijn minder complex

[]()•
Eenstudentkanmeerderevakkenvolgen,                                                                  {

ineenvakzittenaltijdmeerdere studenten

•
Veel-op-veel

•
Tweeopties

•
Embedden

### •

Referencing(Verwijzingen)

Vakkenwordené**énkeer**bewaard

Om
deoverzichtspaginavaneenstudent te

"naam":"Donald",

"voornaam": "Knuth", "contactGegevens": [...], "vakken": [

{" **$oid** ":"61741c9cbc9ec583c836170a"},

{" **$oid** ":"61741c9cbc9ec583c836170b"}

]

bouwen (inclusiefvakken) zijn meerderequerRieesferenties naar andere documenten moeten

nodig (of een view met *$lookup* in *M**ong**o*i*D*ng*B*e)gevenwordenalseendocumentmetéénproperty

Een
vakaanpasseniseenvoudig

De documenten indestudentscollectie
zijn minder complex

 *$oid* .

[]()[]()•
Eenstudent
schrijftdoorheeneenopleiding

meerderepapers

•
Eén-op-veel

### •

Optie1:Referentieinpaper

•
AnaloogaanSQL

•
Zelden/nooitalleenopgevraagd,
steeds als

onderdeelvaneenstudent

•
Het
aantalpapersis ongelimiteerd

•
Meerderequeries nodig

•
Optie2:Embedded
instudent

•
Optie3:Referentieinstudent

{

"description": "Paper", "bsonType": "object", "required": [

"title","abstract",

"grade", "pdfURL", "student"

],

"properties":{

"title":{"bsonType":"string"},

"abstract":{"bsonType":"string"},

"grade":{"bsonType":"int"},

"pdfURL":{"bsonType":"string"},

 **"student"**  **:{**  **"bsonType"**  **:**  **"objectId"** **}**

}

}

[]()•
Eenstudent
schrijftdoorheeneenopleiding

meerderepapers

•
Eén-op-veel

### •

Optie1:Referentieinpaper                                                                  ^{^

•
AnaloogaanSQL

•
Zelden/nooitalleenopgevraagd,
steeds als

onderdeelvaneenstudent

•
Het
aantalpapersis ongelimiteerd

•
Meerderequeries nodig                                                              }

•
Optie2:Embedded
instudent

•
Optie3:Referentieinstudent

"title": "Sorting
algorithms", "abstract": "In this paper we ...", "grade": 17,

"pdfURL": "/blobs/453REER62.pdf", "student": {

"$oid":"61741c9cbc9ec583c836170b"

}

[](){

•
Eenstudent
schrijftdoorheeneenopleiding

meerderepapers

•
Eén-op-veel

•
Optie1:Referentieinpaper

### •

Optie2:Embeddedinstudent

•
Paperswordenbewaardsamen
met de

studenten

Samen
nodigàsamenbewaren

•
Aantalpapersisbeperkt

Max
groottevaneendocumentis**16MB**

Veel
papersàTegrootstudentdocument

…

"properties":{

…

"papers": {  **"bsonType"**  **: **  **"array"**  **, ** "items": {

 **"bsonType"**  **:**  **"object"** **,**

"required":[

"title","abstract",

"grade","pdfURL"

],

 **"properties"** **:{**

 **"title"**  **:{**  **"bsonType"**  **:**  **"string"** **},**

 **"abstract"**  **:{**  **"bsonType"**  **:**  **"string"** **},**

 **"grade"**  **:{**  **"bsonType"**  **:**  **"int"** **},**

 **"pdfURL"**  **:{**  **"bsonType"**  **:**  **"string"** **}**

**}**

}

•
Optie3:Referentieinstudent                                                                  }

}

[]()•
Eenstudent
schrijftdoorheeneenopleiding

meerderepapers

•
Eén-op-veel                                                              ^{^

•
Optie1:Referentieinpaper

### •

Optie2:Embeddedinstudent

•
Paperswordenbewaardsamen
met de

studenten

Samen
nodigàsamenbewaren

•
Aantalpapersisbeperkt

Max
groottevaneendocumentis**16MB**

Veel
papersàTegrootstudentdocument                                                                 }

•
Optie3:Referentieinstudent

"naam":"Donald",

"voornaam": "Knuth", "contactGegevens": […], "vakken": […],  **"papers"** **:
[**

**{**

 **"title"**  **: **  **"Sorting
algorithms"**  **, **  **"abstract"**  **: **  **"In
this paper we ..."**  **, **  **"grade"** **: ** **17** **,**

 **"pdfURL"**  **:** **"/blobs/453REER62.pdf"**

**}**

**]**

[]()•
Eenstudent
schrijftdoorheeneenopleiding

meerderepapers

•
Eén-op-veel

{

"naam":"Donald",

•
Optie 1: Referentie inVepeal-oppe-druizendenrelatiesmoeten"vreofoerrneanacmi"n:g

"Knuth",

|  |   • **Optie2:Embeddedin student**   |
| --------------------------------------- |

|  |
| - |

gebruikenaandeduizendenkantv"acnondteacretlGaetgieevens":[…],

|  |    **"papers"** **:[**   |
| ---------------------------- |

|  |
| - |

anders wordthetdocument
tegroot."Vvaokokrebne"e:ld[e…n],

•
Papers worden bevawnadaitrsdoosrtaremlaetiensmzijentcodmementareno **{** psocial

studenten

 mediapostsofdeinwonersvaneenstad **"** .**t****i****tl** **e**  **"** **:**  **"Sortingalgorithms"** **,**

Samen
nodigàsamenbewaren

•
Aantalpapersisbeperkt

Max
groottevaneendocumentis**16MB**

Veel
papersàTegrootstudentdocument

•
Optie3:Referentieinstudent

 **"abstract"**  **:**  **"Inthispaperwe..."** **,**

 **"grade"**  **:**  **17** **,**

 **"pdfURL"**  **:** **"/blobs/453REER62.pdf"**

**}**

**]**

}

[]()•
Eenstudent
schrijftdoorheeneenopleiding

meerderepapers

•
Eén-op-veel

•
Optie1:Referentieinpaper

•
Optie2:Embedded
instudent

### •

Optie3:Referentieinstudent

{

"naam":"Donald",

"voornaam": "Knuth", "contactGegevens": […], "vakken": […],  **"papers"** **:
[**

**{**

 **"title"**  **: **  **"Sorting
algorithms"**  **, **  **"abstract"**  **: **  **"In
this paper we ..."**  **, **  **"grade"** **: ** **17** **,**

 **"pdfURL"**  **:** **"/blobs/453REER62.pdf"**

**}**

[]()•
Eenstudentschrijft
doorheeneenopleiding

meerderepapers                                                                  {

•
Eén-op-veel

•
Optie1:Referentieinpaper

•
Optie2:Embedded
instudent

### •

Optie3:Referentieinstudent

•
Aantalpapersisonbeperkt

•
Paperszijneenonderdeel
vaneenstudent

document

}

"description": "Dit
document beschrijft …",
"bsonType": "object",

"required":[

"naam", "voornaam", "contactGegevens", "vakken", "papers“

],

"properties":{

…

 **"papers"**  **: { **  **"bsonType"**  **: **  **"array"** **,**

 **"items"**  **:{**  **"bsonType"**  **:**  **"objectId"** **}**

**}**

}

[]()•
Eenstudent
schrijftdoorheeneenopleiding

meerderepapers

•
Eén-op-veel

•
Optie1:Referentieinpaper                                                                  {

•
Optie2:Embedded
instudent

### •

Optie3:Referentieinstudent

•
Aantalpapersis onbeperkt

•
Paperszijneenonderdeel
vaneenstudent

document                                                              }

"naam":"Donald",

"voornaam": "Knuth", "contactGegevens": […], "vakken": […], "papers": [

{"$oid":"61741c9cbc9ec583c836170a"},

{"$oid":"61741c9cbc9ec583c836170b"}

]

[]()**Embededvs.referenced**

| **Embed**                                                              | **Reference**                                |
| ---------------------------------------------------------------------------- | -------------------------------------------------- |
| Eénquery                                                                    | Verschillendequeries,ofeenextraviewdat             |
| gebouwd is met de trage*$lookup*operator                                     |                                                    |
| Ideaalvooréén-op-éénrelaties                                             | Meestalnodigvoorveel-op-veel&één-op-veelrelaties |
| Aantal embeddeddocumentenisgelimiteerd                                       |                                                    |
| (maximaal 16MB per document)                                                 | Aantal gerefereerdedocumentenispraktisch           |
| ongelimiteerd, er zijn ongeveer 0,5 miljoen referenties nodig om aan 16MB te |                                                    |
| geraken                                                                      |                                                    |
| Data diesamenopgevraagdwordtensamen geüpdatet wordt samen bewaard           | Data die (regelmatig) individueel                  |
| aangepast moetworden,wordt inapartecollectiesbewaard                         |                                                    |

# Documentdatabases

#### Specialtopics

## Overerving

•
NULL waarden moeten niet ingegeven
wordenendusgeenverloren
ruimteàSingle table aanpak

•
Viade*anyOf*propertykunnenwemeerdere

objectentoestaan
inééncollectie

{

 **"anyOf"** **:[**

{

"description": "Buitenlandse
student", "bsonType": "object",

"required":[…],

"properties":{…}

},

{

"description": "Student", "bsonType":
"object", "required":
[…],

"properties":{…}

}

**]**

}

## Recursie

•
Optie1:
Hiërarchieovernemenvia

embedding

•
Goedindemeestegevallen

•
Alledatainééndocument/query

•
Tegrotehiërarchieàoptie2

•
Optie2:Referentiegebruiken

•
Eenattribuutmeteen
referentie

naarhetbovenliggendedocument

•
Eenarraymet
onderliggende

documenten

# Documentdatabases

#### AandeslagmetMongoDB

## MongoDB

•
Eénvandemeestpopulaire
document

databases

### •

Optioneleondersteuningvoorschema

**validatie viaeenJSONschema**

•
Gebruikt BSON,eenbinairformaatdat

enkeleuitbreidingentoevoegt aanJSON

## MongoDBCommunity

Server

•
Open-sourcedatabasemanagementsystem

(DBMS)voordocument-georiënteerdedata

•
Beheertdatabases,diecollectiesvan

documentenbevatten

•
Downloaden van [https://www.mongodb.com/try/download/co](https://www.mongodb.com/try/download/community)[mmunity](https://www.mongodb.com/try/download/community)



## MongoDBCommunity

Server

•
Open-sourcedatabasemanagementsystem

(DBMS)voordocument-georiënteerdedata

•
BeheertdatabasKeiess,tidjdieenscdoellienscttailelastievvaonorde“Complete”optie.Gebruik

documenten bevattevnervolgensdedefaultinstellingeninhet“Service

Configuration”scherm.

•
Downloaden van [https://www.mongodb.com/try/download/co](https://www.mongodb.com/try/download/community)[mmunity](https://www.mongodb.com/try/download/community)



## MongoDBCompass

•
GUIomdataoptevragenenintevoegen

•
Verbind met een instantie van de
MongoDB (community) server

•
Ideaal voor gebruiker met minder
technische kennis

•
Kan een schema genereren op basis
van ingevoegde data

•
Downloaden vanop [https://www.mongodb.com/try/download/compas](https://www.mongodb.com/try/download/compass)[s](https://www.mongodb.com/try/download/compass)(maar is ook inbegrepen in de community server)

## MongoDBShell

•
CLI(commandline interface)omdatain

MongoDBoptevragenenaantepassen

•
VerbindmeteeninstantievandeMongoDB (community) server

•
Debesteoptievoortechnische
gebruikers

### •

Kan gebruikt worden om een
collectie aantemaken
metingebouwdevalidatie

•
Is ingebouwdinCompass

## Verbindenmetdedatabase

•
OpenMongoDBCompass

•
Vulinhet‘NewConnection’tabbladdeconnectiestring‘mongodb://localhost:27017/’
inom

verbindingtemakenmetdecommunityserver

•
Klik op‘Save&Connect’

|  |
| - |
|  |



## Database&collectieaanmaken

•
Maakéén
databaseaanperoefening

•
Perdatabasemoetjeminstens
ééncollectieaanmaken



## Validatieregelstoevoegen

•
Selecteerdecollectie
indenieuwedatabase

•
Selecteerhet
validatie tabblad

•
Voegdecodeuitmodelleervoorbeeld1 in



