

# Databases

**Datatypesenspecificaties**

## Inhoud

•
NullAllowedvs.NullNotAllowed

•
ForeignKeyspecificaties

|  |
| - |
|  |

|  |
| - |
|  |

# Datatypesenspecificatie

***Datatypes***

[]()Definitie:

•
Hetdatatypebepaalt
welkewaardeneenattribuutkanaannemen.

•
Hoe dewaardenvanhetattribuut
inhetgeheugenbewaardworden.

•
Welkebewerkingenophetattribuut
kunnenuitgevoerdworden.

[]()Welkdatatype je gebruikt, hangtaf
vanhet(R)DBMS&hetniveauvan het
model

•
Vooreenfysiek
modelgebruikjedespecifiekedatatypesvanhetRDBMS

•
Oracle:varchar2,number,
date,datestamp,…

•
MySQL:varchar,int,float,double,
datetime,…

•
SQLServer:varchar,int,numeric,datatime2, …

•
Oplogischniveaugebruikjealgemenedatatypes

•
**int,float, string,date,time,datetime,boolean**

[]()Gebruikenkelgetallenals jewil
rekenen

•
Telefoonnummeràstring

•
Huisnummeràstring

•
Salarisàfloat

•
Postcodeàstring

## Datatypes

Wenoterendatatypesachtereendubbelpunt(:)

|  |   |  **Klant**                                                                  |
| ------------------------------------------------------------------------------ |
|  **PK**                                                                     |  **id:int**  |
|                                                                              |  naam:string  |     |
|  voornaam: string adres:
      string postcode:string   gemeente:string Vie  |

|  |
| - |

|  |
| - |

|  |   |  **Order**   |
| --------------- |
|  **PK**      |  **id:int**  |
|          FK1  |  besteldatum:date leveringsdatum: date klantld: int  |

|  |
| - |

|  |
| - |

1..1

|  |
| - |
|  |

werdoes notsupport
fuIISVG1.1

[]()Jekomtregelmatigeenterugkerendtype tegen

Jewilhierweldathettypeoveral
gelijkingevuldwordt

|          |                  |  |  |  |  |
| -------- | ---------------- | - | - | - | - |
|          | 
`sql
Auto |  |  |  |  |
| id       |                  |  |  |  |  |
| kmStand  |                  |  |  |  |  |
| model    |                  |  |  |  |  |
| merk     |                  |  |  |  |  |
| bouwjaar |                  |  |  |  |  |
``r
 |                                                                                                                           | 
`sql
VW
vW
volkswagen
volksw.
UW
Volkswagen
``r
 |
|  |                                                                                                                                                                          |  |
|  |

[]()•
Jewilniet dat degebruikersteveelmoetenintypen

•
Jeapplicatiegebruikt
dropdownmenu’s

|  |
| - |
|  |

[]()Indezegevallenmaakjeeenextra
entiteitaan,eenkarakteristiekeentiteit:

•
Weinigattributen

•
Weinigrelatiesmetanderetabellen

•

|  |   |  **Auto**  |
| ------------- |
|  id         |
|  kmStand    |
|  model      |
|  merkIdFK1  |
|  bouwjaar   |

|  |
| - |

|  |
| - |

Delijstmetmerken
isnietvast;dezekangroeien

|  |   |  **Merk**  |
| ------------- |
|  id         |
|  merkAK     |

|  |
| - |

|  |
| - |

1..1

|                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------- |
|                                                                                                                           |
| bestaan van eenzelfde merk.                                                                                               |
| ](file:///C:/Users/piuss/AppData/Local/Packages/oice_16_974fa576_32c1d314_2533/AC/Temp/msohtmlclip1/01/clip_image016.gif) |

[]()•
een**enum**iseen**vaste lijstmetwaarden**

•
vaakgedefinieerdalsbeperktesetmogelijke
waardenineenattribuut

•
hetheeft**geenaparteentiteit**

•
jekunterdus**geenextraeigenschappen**aanhangen

|               |                  |                                                                                                                           |  |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|               |                  |  |  |
|               | 
`sql
Auto |                                                                                                                           |  |
| id            |                  |                                                                                                                           |  |
| merk          |                  |                                                                                                                           |  |
| model         |                  |                                                                                                                           |  |
| brandstofType |                  |                                                                                                                           |  |
``r
 |
|  |

`sql
Auto
id
merk
model
brandstofType
``r

`sql
id	merk	model	brandstofType
1	Audi	A3	Benzine
2	Tesla	Model 3	Elektrisch
3	VW	Golf	Diesel
``r

•
Gebruikindraw.io
een‘List’voor hetmakenvaneenenum

|  |
| - |
|  |

### Zelfgemaaktetypes

Vuistregel:

•
gebruikeen**enum**als delijstkleinenstabiel
is

•
gebruikeen**karakteristiekeentiteit
**alsdewaarden
vaakwijzigenofalsje er

extraeigenschappen/relatiesaanwiltkoppelen.

|  |
| - |
|  |

# Datatypesenspecificatie

***NULL***

## Null

Voorelkattribuutduiden
weaanof eraldannietNULLwaardentoegestaanzijn

•
NullsAllowed(NA)àLegewaardenzijntoegestaan

•
NullsNotAllowed
(NNA)àHetattribuutmoetaltijdingevuldzijn

•
Hangtheel
sterkvanhetdoel vanhetERDaf

[]()Voorbeeld

•
Eenentiteit
Bestuurslidbinneneentennisclub

|  |   |  **Bestuurslid**   |
| --------------------- |
|  **PK**            |  **id:int**  |
|                FK1  |  begindatum: date einddatum:
      date functie: string spelerld:int Vi  |

|  |
| - |

|  |
| - |

|  |   |  **Speler**  |
| --------------- |
|  **PK**      |  **id:int**  |
|               |  naam:string   voornaam:string  |

|  |
| - |

|  |
| - |

1..1

|  |
| - |
|  |

ewe0r..d*oesnot
supportfuII
SVG1.1

[]()Voorbeeld

•
Eenentiteit
Bestuurslidbinneneentennisclub

•
id:Deprimaire sleutelissteedsNNA

|  |   |  **Bestuurslid**   |
| --------------------- |
|  **PK**            |  **id:int{NNA}**  |
|                FK1  |  begindatum:dateeinddatum: date functie: string spelerld:int Vi  |

|  |
| - |

|  |
| - |

|  |   |  **Speler**  |
| --------------- |
|  **PK**      |  **id:int**  |
|               |  naam:string   voornaam: string  |

|  |
| - |

|  |
| - |

.1

|  |
| - |
|  |

ewerdoesnotsupportfuIISVG1.1

[]()Voorbeeld

•
Eenentiteit
Bestuurslidbinneneentennisclub

•

|  |   |  **Bestuurslid**   |
| --------------------- |
|  **PK**            |  **id:int{NNA}**  |
|                FK1  |  begindatum:dateeinddatum: date functie: string spelerld:int Vi  |

|  |
| - |

|  |
| - |

|  |   |  **Speler**  |
| --------------- |
|  **PK**      |  **id:int**  |
|               |  naam:string   voornaam: string  |

|  |
| - |

|  |
| - |

id:Deprimaire
sleutelissteedsNNA

1..1

|  |                                                                                                                           |                                                                                                                           |  |
| - | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | - |
|  |  |                                                                                                                           |  |
|  |                                                                                                                           |  |  |
|  |                                                                                                                           |                                                                                                                           |  |

ewerdoesnotsupportfuIISVG1.1

[]()Voorbeeld

•
Eenentiteit
Bestuurslidbinneneentennisclub

•
begindatum:NNA,jekangeenbestuurslidzijnalsjenooitstart

|  |   |  **Bestuurslid**   |
| --------------------- |
|  **PK**            |  **id:int{NNA}**  |
|                FK1  |  begindatum:date{NNA} einddatum: date functie:string   spelerld:int Vi  |

|  |
| - |

|  |
| - |

|  |   |  **Speler**  |
| --------------- |
|  **PK**      |  **id:int**  |
|               |  naam:string   voornaam: string  |

|  |
| - |

|  |
| - |

.1

|  |
| - |
|  |

ewerdoesnotsupport
fuIISVG1.1

[]()Voorbeeld

•
Eenentiteit
Bestuurslidbinneneentennisclub

•
einddatum:Geenduidelijke
keuze

Ligtdetermijn
vast?

Kanjezolangbestuurslidblijvenalsjewil?

|  |   |  **Bestuurslid**   |
| --------------------- |
|  **PK**            |  **id:int {NNA}**  |
|                FK1  |  begindatum:date{NNA} einddatum: date {NA} functie: string spelerld:int Vi  |

|  |
| - |

|  |
| - |

|  |   |  **Speler**  |
| --------------- |
|  **PK**      |  **id:int**  |
|               |  naam:string   voornaam: string  |

|  |
| - |

|  |
| - |

.1

|  |
| - |
|  |

ewerdoesnotsupport
fuIISVG1.1

[]()Voorbeeld

•
Eenentiteit
Bestuurslidbinneneentennisclub

•
functie:NNA,zonder
functiebeschrijvingbetekentdeentiteitniets

|  |   |  **Bestuurslid**   |
| --------------------- |
|  **PK**            |  **id:int {NNA}**  |
|                FK1  |  begindatum:date{NNA} einddatum: date {NA} functie: string {NNA} spelerld:int Vi  |

|  |
| - |

|  |
| - |

|  |   |  **Speler**  |
| --------------- |
|  **PK**      |  **id:int**  |
|               |  naam:string   voornaam: string  |

|  |
| - |

|  |
| - |

.1

|  |
| - |
|  |

ewerdoesnotsupport
fuIISVG1.1

[]()Voorbeeld

•
Eenentiteit
Bestuurslidbinneneentennisclub

•
spelerId:
NNAàaf te lezenuitde
relatie

Eenaardvan1(verplicht)àNNA

Eenaardvan0(optioneel) àNA

| **Speler** |
| ---------------- |
| **PK**     |
|                  |

|  |   |  **Bestuurslid**   |
| --------------------- |
|  **PK**            |  **id:int{NNA}**  |
|                FK1  |  begindatum:date{NNA} einddatum: date {NA} functie: string {NNA} spelerld:int{NNA} Vi  |

|  |
| - |

|  |
| - |

ewerdoesnotsupportfuIISVG1.1

|  |
| - |
|  |

# Datatypesenspecificatie

***DTC/DTR/DTN***

## DTC/DTR/DTN

Voorelke*foreignkey*moetgespecifieerdworden
hoeermetverwijderen

omgegaanmoetworden

•
Deleteoftarget
cascades(DTC)

•
Deleteoftarget
restricted(DTR)

•
Deleteoftarget
nullifies(DTN)

## Deleteoftargetcascades

DTC:Deleteoftarget
cascades

•
Recordsmetde overeenkomstigeFKwordenmeeverwijderd

•
LETOP:SQLHEEFTGEEN
UNDO

|  |   |  **Boek**                                                                                                                      |
| --------------------------------------------------------------------------------------------------------------------------------- |
|  **PK**                                                                                                                        |  **id:int {NNA}**  |
|            FK1                                                                                                                  |  title:string{NNA}   numberlnSeries:string{NA}  |
|  **seriesld:int{NA,DTC}**                                                                                                      |     |
|    publicationYear: string{NNA} isbn13: string {NNA} numberOfPages:int {NA}   originalPublicationYear:string{NNA} Viewerdoesno  |

|  |
| - |

|  |
| - |

|  |   |  **Series**  |
| --------------- |
|  **PK**      |  **id:int {NNA}**  |
|               |  name:string{NNA}  |

|  |
| - |

|  |
| - |

0..1

|  |
| - |
|  |

tsupport
fuIISVG1.1

[]()TabelBook

| **id** | **title**           | **numberInSeries** | **seriesId** | **publicationYear** | **isbn13** | **numberOfPages** | **originalPublicationYear** |
| ------------ | ------------------------- | ------------------------ | ------------------ | ------------------------- | ---------------- | ----------------------- | --------------------------------- |
| **1**  | Forge ofDarkness          | 1                        | 1                  | 2012                      | 978-0593062173   | 662                     | 2012                              |
| **2**  | FallofLight               | 2                        | 1                  | 2016                      | 978-0593062197   | 837                     | 2016                              |
| **3**  | TheKillingMoon            | 1                        | 2                  | 2021                      | 978-0356516158   | 418                     | 2012                              |
| **4**  | TheShadowedSun            | 2                        | 2                  | 2021                      | 978-0356516165   | 504                     | 2012                              |
| **5**  | ThePrioryoftheOrange Tree | NULL                     | NULL               | 2019                      | 978-1408883464   | 830                     | 2019                              |

TabelSeries

•
DeIete“TheKharkanasTrilogy”

| **id** | **name**       |
| ------------ | -------------------- |
| **1**  | TheKharkanasTrilogy  |
| **2**  | TheDreambloodDuology |

[]()ResuItaatnaverwijderenvan“TheKharkanas
Trilogy”

•
TabelBook

| **id** | **title**           | **numberInSeries** | **seriesId** | **publicationYear** | **isbn13** | **numberOfPages** | **originalPublicationYear** |
| ------------ | ------------------------- | ------------------------ | ------------------ | ------------------------- | ---------------- | ----------------------- | --------------------------------- |
| **3**  | TheKillingMoon            | 1                        | 2                  | 2021                      | 978-0356516158   | 418                     | 2012                              |
| **4**  | TheShadowedSun            | 2                        | 2                  | 2021                      | 978-0356516165   | 504                     | 2012                              |
| **5**  | ThePrioryoftheOrange Tree | NULL                     | NULL               | 2019                      | 978-1408883464   | 830                     | 2019                              |

•
TabelSeries

| **id** | **name**       |
| ------------ | -------------------- |
| **2**  | TheDreambloodDuology |

[]()ResuItaatnaverwijderenvan“TheKharkanas
Trilogy”

•
TabelBook

| **id** | **title**           | **numberInSeries** | **seriesId** | **publicationYear** | **isbn13** | **numberOfPages** | **originalPublicationYear** |
| ------------ | ------------------------- | ------------------------ | ------------------ | ------------------------- | ---------------- | ----------------------- | --------------------------------- |
| **3**  | TheKillingMoon            | 1                        | 2                  | 2021                      | 978-0356516158   | 418                     | 2012                              |
| **4**  | TheShadowedSun            | 2                        | 2                  | 2021                      | 978-0356516165   | 504                     | 2012                              |
| **5**  | ThePrioryoftheOrange Tree | NULL                     | NULL               | 2019                      | 978-1408883464   | 830                     | 2019                              |

•
TabelSeries

| **id** | **name**       |
| ------------ | -------------------- |
| **2**  | TheDreambloodDuology |

|  |
| - |
|  |

## DeleteofTargetRestricted

DTR:Verwijderen
vaneen rijgaat nietalserergenseen FK
bestaatdienaardie

rijverwijst.

•
StandaardgedragvoordemeesteRDBMS’en

•
Eerstalleboeken
verwijderen,danpasdeserie

|  |   |  **Boek**                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------- |
|  **PK**                                                                                                                    |  **id:int{NNA}**  |
|          FK1                                                                                                                |  title:string{NNA}   numberlnSeries:string{NA}  |
|  **seriesld:int{NA,DTR}**                                                                                                  |     |
|  publicationYear:string{NNA} isbn13: string {NNA} numberOfPages:int{NA}   originalPublicationYear:string{NNA} Viewerdoesno  |

|  |
| - |

|  |
| - |

|  |   |  **Series**  |
| --------------- |
|  **PK**      |  **id:int{NNA}**  |
|               |  name:string{NNA}  |

|  |
| - |

|  |
| - |

0..1

|  |
| - |
|  |

tsupport
fuIISVG1.1

## DTR:Voorbeeld

TabelBook

| **id** | **title**            | **numberInSeries** | **serieId** | **publicationYear** | **isbn13** | **numberOfPages** | **originalPublicationYear** |
| ------------ | -------------------------- | ------------------------ | ----------------- | ------------------------- | ---------------- | ----------------------- | --------------------------------- |
| **1**  | ForgeofDarkness            | 1                        | 1                 | 2012                      | 978-0593062173   | 662                     | 2012                              |
| **2**  | FallofLight                | 2                        | 1                 | 2016                      | 978-0593062197   | 837                     | 2016                              |
| **3**  | TheKillingMoon             | 1                        | 2                 | 2021                      | 978-0356516158   | 418                     | 2012                              |
| **4**  | TheShadowedSun             | 2                        | 2                 | 2021                      | 978-0356516165   | 504                     | 2012                              |
| **5**  | ThePriory oftheOrange Tree | NULL                     | NULL              | 2019                      | 978-1408883464   | 830                     | 2019                              |

TabelSeries

•
DeIete“TheKharkanasTrilogy”

| **id** | **name**       |                     |
| ------------ | -------------------- | ------------------- |
|              | **1**          | TheKharkanasTrilogy |
| **2**  | TheDreambloodDuology |                     |
|              |                      |                     |

## DTR:Voorbeeld

TabelBook

| **id** | **title**           | **numberInSeries** | **seriesId** | **publicationYear** | **isbn13** | **numberOfPages** | **originalPublicationYear** |
| ------------ | ------------------------- | ------------------------ | ------------------ | ------------------------- | ---------------- | ----------------------- | --------------------------------- |
| **1**  | Forge ofDarkness          | 1                        | 1                  | 2012                      | 978-0593062173   | 662                     | 2012                              |
| **2**  | FallofLight               | 2                        | 1                  | 2016                      | 978-0593062197   | 837                     | 2016                              |
| **3**  | TheKillingMoon            | 1                        | 2                  | 2021                      | 978-0356516158   | 418                     | 2012                              |
| **4**  | TheShadowedSun            | 2                        | 2                  | 2021                      | 978-0356516165   | 504                     | 2012                              |
| **5**  | ThePrioryoftheOrange Tree | NULL                     | NULL               | 2019                      | 978-1408883464   | 830                     | 2019                              |

TabelSeries

•
DeIete“TheKharkanasTrilogy”

|  | **id** | **name**       |
| - | ------------ | -------------------- |
|  | **1**  | TheKharkanasTrilogy  |
|  | **2**  | TheDreambloodDuology |

## DeleteofTargetNullifies

DTN:DeovereenkomstigeFK’swordenleeggemaakt

•
Enkelmogelijk
indieneenoptioneleaardgebruiktwordt

| **Series** |
| ---------------- |
| **PK**     |
|                  |

|  |   |  **Boek**                                                                                                                           |
| -------------------------------------------------------------------------------------------------------------------------------------- |
|  **PK**                                                                                                                             |  **id:int {NNA}**  |
|            FK1                                                                                                                       |  title:string{NNA}   numberlnSeries:string{NA}  |
|  **seriesld:int {NA,DTN}**                                                                                                          |     |
|  publicationYear: string {NNA}
      isbn13: string {NNA} numberOfPages:int {NA}   originalPublicationYear:string{NNA} Viewerdoesno  |

|  |
| - |

|  |
| - |

tsupportfuIISVG1.1

[]()TabelBook

| **id** | **title**           | **numberInSeries** | **seriesId** | **publicationYear** | **isbn13** | **numberOfPages** | **originalPublicationYear** |
| ------------ | ------------------------- | ------------------------ | ------------------ | ------------------------- | ---------------- | ----------------------- | --------------------------------- |
| **1**  | ForgeofDarkness           | 1                        | 1                  | 2012                      | 978-0593062173   | 662                     | 2012                              |
| **2**  | FallofLight               | 2                        | 1                  | 2016                      | 978-0593062197   | 837                     | 2016                              |
| **3**  | TheKillingMoon            | 1                        | 2                  | 2021                      | 978-0356516158   | 418                     | 2012                              |
| **4**  | TheShadowedSun            | 2                        | 2                  | 2021                      | 978-0356516165   | 504                     | 2012                              |
| **5**  | ThePrioryoftheOrange Tree | NULL                     | NULL               | 2019                      | 978-1408883464   | 830                     | 2019                              |

TabelSeries

•
DeIete“TheKharkanasTrilogy”

| **id** | **name**       |
| ------------ | -------------------- |
| **1**  | TheKharkanasTrilogy  |
| **2**  | TheDreambloodDuology |

[]()ResuItaatnaverwijderenvan“TheKharkanas
Trilogy”

•
TabelBook

| **id** | **title**            | **numberInSeries** | **seriesId** | **publicationYear** | **isbn13** | **numberOfPages** | **originalPublicationYear** |
| ------------ | -------------------------- | ------------------------ | ------------------ | ------------------------- | ---------------- | ----------------------- | --------------------------------- |
| **1**  | ForgeofDarkness            | 1                        | NULL               | 2012                      | 978-0593062173   | 662                     | 2012                              |
| **2**  | FallofLight                | 2                        | NULL               | 2016                      | 978-0593062197   | 837                     | 2016                              |
| **3**  | TheKillingMoon             | 1                        | 2                  | 2021                      | 978-0356516158   | 418                     | 2012                              |
| **4**  | TheShadowedSun             | 2                        | 2                  | 2021                      | 978-0356516165   | 504                     | 2012                              |
| **5**  | ThePriory oftheOrange Tree | NULL                     | NULL               | 2019                      | 978-1408883464   | 830                     | 2019                              |

•

|  |   |  **id**  |  **name**             |
| ----------- | ------------------------ |
|  **2**   |  TheDreambloodDuology  |

|  |
| - |

|  |
| - |

TabelSeries

## DTC/DTR/DTN

Omdebeslissing
tenemen

•
Redeneer jeopbasisvanhet
probleemgebied

•
Bij
twijfeloverlegjemetde opdrachtgever


