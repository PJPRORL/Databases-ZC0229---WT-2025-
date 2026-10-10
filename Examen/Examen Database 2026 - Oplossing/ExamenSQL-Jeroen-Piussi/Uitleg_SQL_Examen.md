# Uitgebreide Uitleg Examen SQL - Januari 2026

Hieronder vind je een uitgebreide en begrijpelijke uitleg van elke vraag en de bijbehorende SQL-code. We behandelen ook veelvoorkomende termen zoals "aliassen" (die korte afkortingen zoals `tr` en `de`) en `JOIN`s, zodat je precies weet wat er gebeurt.

---

## Vraag 1

### De Code
```sql
-- 1.1 Vervanging
UPDATE lo.Customer
SET customernumber = REPLACE(customernumber, 'CUS', '');

-- 1.2 Aanbrengen AK
ALTER TABLE lo.Customer
ADD CONSTRAINT AK_custumnumber_Customer UNIQUE (customernumber);
```

### Uitleg
* **`UPDATE lo.Customer`**: Dit commando geeft aan dat we gegevens in de tabel `Customer` willen aanpassen. `lo.` is hier het **schema**. Een schema is een soort map of container in de database waar de tabellen in zitten om alles netjes te ordenen.
* **`SET customernumber = REPLACE(customernumber, 'CUS', '')`**: Hier vertellen we wát we willen aanpassen. De functie `REPLACE` zoekt in de kolom `customernumber` naar de tekst `'CUS'` en vervangt dit door niks (`''`). Zo wordt bijvoorbeeld 'CUS001' veranderd in '001'.
* **`ALTER TABLE lo.Customer`**: Hiermee passen we de *structuur* van de tabel aan (niet de gegevens zelf, maar de regels van de tabel).
* **`ADD CONSTRAINT ... UNIQUE`**: We voegen een nieuwe regel (constraint) toe die afdwingt dat elke waarde in de kolom `customernumber` uniek moet zijn (er mogen geen dubbele nummers meer voorkomen). Dit wordt een Alternatieve Sleutel (AK) genoemd.

---

## Vraag 2

### De Code
```sql
SELECT 
    CONCAT(drivernumber, ' ### ', firstname, ' - ', UPPER(lastname)) AS Registratieinfo,
    CONVERT(varchar, yearsExperience) AS jarenErvaring,
    FORMAT(dateOfBirth, 'dd/MM/yyyy') AS dateOfBirthBENotatie,
    SUBSTRING(licensenumber, 7, 5)
FROM lo.Driver
WHERE hiredate > '2016-01-01' 
  AND licensenumber NOT LIKE '%3%'
  AND licensenumber NOT LIKE '%99%'
  AND terminationdate IS NOT NULL
  AND yearsExperience < 15;
```

### Uitleg
* **`SELECT ... FROM lo.Driver`**: We halen gegevens op uit de tabel `Driver`.
* **Functies in de SELECT:**
  * **`CONCAT(...) AS Registratieinfo`**: Plakt verschillende stukken tekst aan elkaar. We pakken het drivernummer, plakken er `' ### '` achter, dan de voornaam, etc. `UPPER(lastname)` zorgt dat de achternaam in hoofdletters wordt gezet. `AS` geeft de kolom een nieuwe, leesbare naam in de uitvoer.
  * **`CONVERT(varchar, yearsExperience)`**: Zet het getal van de jaren ervaring om naar tekst (varchar).
  * **`FORMAT(dateOfBirth, 'dd/MM/yyyy')`**: Zet de geboortedatum om in het Belgische formaat (dag/maand/jaar).
  * **`SUBSTRING(licensenumber, 7, 5)`**: Pakt een deel van het licentienummer. Vanaf het 7e teken pakt het 5 tekens lang.
* **De `WHERE` filter voorwaarden:**
  * **`hiredate > '2016-01-01'`**: Enkel chauffeurs aangenomen nà 1 januari 2016.
  * **`NOT LIKE '%3%'` en `NOT LIKE '%99%'`**: Het licentienummer mag geen 3 of 99 bevatten. Het `%` teken is een wildcard die staat voor "ongeacht welke andere tekst ervoor of erna".
  * **`terminationdate IS NOT NULL`**: Zorgt ervoor dat we alleen mensen zien waarbij de datum van ontslag is ingevuld. *(Let op: in de vraagstelling stond "hebben nog geen terminationDate", dus eigenlijk zou hier `IS NULL` moeten staan. Mogelijk zat er een foutje in de typevraag van het examen, maar dit is wat de code doet)*.
  * **`yearsExperience < 15`**: Enkel chauffeurs met minder dan 15 jaar ervaring.

---

## Vraag 3

### De Code
```sql
SELECT 
    CONCAT(LEFT(d.firstname, 1), '. ', d.lastname) AS DriverOnTheGo,
    CASE 
        WHEN d.yearsExperience < 1  THEN 'Dummy'
        WHEN d.yearsExperience < 5  THEN 'Beginner'
        WHEN d.yearsExperience < 10 THEN 'Medior'
        WHEN d.yearsExperience < 15 THEN 'Senior'
        ELSE 'Expert'
    END AS Ervaring,
    r.originCity,
    r.originState,
    FLOOR(t.averageMpg / 5) AS aMpg,
    l.weightLbs
FROM lo.Trip t
INNER JOIN lo.Driver d ON t.driverId = d.id
INNER JOIN lo.Load l ON t.loadId = l.id
INNER JOIN lo.Route r ON l.routeId = r.id
ORDER BY l.weightLbs DESC;
```

### Uitleg
* **Aliassen (zoals `t`, `d`, `l`, `r`)**: In de `FROM` en `JOIN` regels zie je `lo.Trip t`. Die spatie en de letter `t` betekent: "Ik noem de tabel `lo.Trip` vanaf nu even `t` om typwerk te besparen". Overal waar je `t.` ziet staan (zoals `t.averageMpg`), betekent dit eigenlijk `lo.Trip.averageMpg`.
* **Functies in de SELECT:**
  * **`LEFT(d.firstname, 1)`**: Pakt alleen de eerste letter van de voornaam (van tabel `d`, dus Driver). Dit wordt samengevoegd met een punt en de achternaam.
  * **`CASE WHEN ... THEN ... END`**: Dit werkt als een If/Else in programmeren. Het controleert de jaren ervaring en geeft een tekst-label terug zoals 'Beginner' of 'Expert'.
  * **`FLOOR(t.averageMpg / 5)`**: Deelt de MPG door 5, en `FLOOR` rondt dat getal altijd af naar beneden (bijv. 3.9 wordt 3).
* **De `INNER JOIN`s:** Omdat de gegevens verdeeld staan over meerdere tabellen, moeten we deze tabellen aan elkaar koppelen:
  * **`INNER JOIN lo.Driver d ON t.driverId = d.id`**: "Koppel de Trip tabel (t) aan de Driver tabel (d). Doe dit op de plek waar het bestuurders-ID in de trip (`t.driverId`) gelijk is aan het ID van de bestuurder (`d.id`)."
  * Hetzelfde gebeurt voor de `Load` (lading) en de `Route`.
* **`ORDER BY l.weightLbs DESC`**: Sorteert het resultaat aflopend (`DESC` = descending) van zwaarste naar lichtste gewicht.

---

## Vraag 4

### De Code
```sql
SELECT 
    tr.unitNumber,
    tr.vin,
    tr.tankCapacityGallons,
    COUNT(f.id) AS [Aantal tankbeurten],
    ISNULL(SUM(f.gallons), 0) AS [Totale gallons]
FROM lo.Truck tr
LEFT JOIN lo.Fuel f ON tr.id = f.truckId
WHERE tr.tankCapacityGallons >= 100
  AND tr.vin LIKE '1FT%'
  AND tr.homeTerminal != 'Miami'
GROUP BY tr.unitNumber, tr.vin, tr.tankCapacityGallons
ORDER BY COUNT(f.id) DESC;
```

### Uitleg
* **`LEFT JOIN lo.Fuel f ON tr.id = f.truckId`**: Dit is een belangrijk verschil met een INNER JOIN. Een `LEFT JOIN` pakt **ALLES** uit de linker tabel (hier `lo.Truck`), zelfs als er geen overeenkomstige gegevens zijn in de rechter tabel (`lo.Fuel`). Dit zorgt ervoor dat vrachtwagens die nog nóóit getankt hebben, toch in de lijst verschijnen. Bij een INNER JOIN zouden ze verdwijnen.
* **Groepeer-functies (`GROUP BY`):**
  * **`COUNT(f.id)`**: Telt hoeveel tankbeurten (uit de fuel tabel) er zijn gekoppeld aan de truck.
  * **`SUM(f.gallons)`**: Telt de gallons van alle tankbeurten samen op.
  * **`ISNULL( ..., 0 )`**: Als een truck nog nooit getankt heeft, dan is de SUM leeg (NULL). `ISNULL` vangt dat op en vervangt het lege veld door een '0'.
  * **`GROUP BY ...`**: Omdat we COUNT en SUM gebruiken, moeten we de database vertellen op basis waarvan we dit berekenen. We groeperen dit per unieke truck (unitNumber, vin, etc.).

---

## Vraag 5 (Hier vroeg je specifiek om!)

### De Code
```sql
SELECT 
    FORMAT(tr.dispatchDate, 'dd/MM/yyyy') AS Datum,
    de.eventnumber,
    de.type,
    de.locationCity,
    de.locationState
FROM lo.DeliveryEvent de
INNER JOIN lo.Trip tr ON de.tripId = tr.id
INNER JOIN lo.Load l ON de.loadId = l.id
INNER JOIN lo.Fuel f ON tr.id = f.tripId
WHERE l.weightLbs >= 25000
  AND l.loadDate BETWEEN '2022-01-05' AND '2022-01-10'
  AND f.totalCost = (SELECT MIN(f2.totalCost) FROM lo.Fuel f2 WHERE f2.tripId = f.tripId)
ORDER BY de.locationCity, de.eventnumber;
```

### Uitleg van de vraag: Waar komt dit vandaan en wat doet het?
* **Het concept van Aliassen:** Net zoals we in het dagelijks leven mensen afkorten (Jeroen wordt 'J'), doen we dat in SQL ook met tabellen. In `FROM lo.DeliveryEvent de` zeggen we tegen SQL: "De tabel `lo.DeliveryEvent` noemen we in deze code even `de`". 
* **Wat doet de JOIN?** `INNER JOIN lo.Trip tr ON de.tripId = tr.id` betekent letterlijk: 
  * "Pak de tabel `lo.Trip` (en noem hem even `tr`)."
  * "Plak deze tabel vast aan de al bestaande resultaten (`de`)."
  * `ON`: "Hoe bepalen we welke rijen bij elkaar horen? Nou, zoek in de `de` tabel naar de kolom `tripId`. Zoek in de `tr` tabel naar de kolom `id`. Als die twee getallen precies hetzelfde zijn, dan horen die rijen bij elkaar."
* Omdat de data verspreid staat (bijvoorbeeld, de datum staat in `Trip`, maar het gewicht in `Load`), moeten we een hele ketting aan tabellen aan elkaar vastknopen met deze `JOIN`s.

### Rest van de uitleg
* **`l.loadDate BETWEEN ... AND ...`**: Haalt alleen de gegevens op die exact tussen deze twee data vallen.
* **De moeilijke WHERE-clausule (`f.totalCost = ...`)**:
  * De subquery `(SELECT MIN(f2.totalCost) FROM lo.Fuel f2 WHERE f2.tripId = f.tripId)` zoekt per specifieke trip op wat de allerlaagste (MIN) brandstofkost was.
  * Hij matcht dit met de hoofdtabel via `f.totalCost = ...`. Zo worden alleen die DeliveryEvents weergegeven die precies overeenkomen met die ene goedkoopste brandstofkost.

---

## Vraag 6

### De Code
```sql
SELECT TOP 8
    YEAR(contractStartDate) AS jaargang,
    accountStatus,
    name,
    DATEDIFF(YEAR, contractStartDate, GETDATE()) AS [Aantal jaren contract]
FROM lo.Customer
WHERE contractStartDate >= DATEADD(YEAR, -7, GETDATE())
ORDER BY id ASC;
```

### Uitleg
* **`SELECT TOP 8`**: Zorgt ervoor dat we maar maximaal 8 rijen als resultaat terugkrijgen (de eerste 8 die hij tegenkomt ná het sorteren).
* **Datumfuncties:**
  * **`YEAR(contractStartDate)`**: Pakt alleen het jaartal uit de datum (bijv: 2026 uit '2026-01-15').
  * **`GETDATE()`**: Dit is de SQL-functie die de datum van vandáág ophaalt.
  * **`DATEDIFF(YEAR, start, eind)`**: Berekent het Verschil (Difference) in Jaren (YEAR) tussen de `contractStartDate` en vandaag (`GETDATE()`). 
  * **`DATEADD(YEAR, -7, GETDATE())`**: Berekent de datum van precies 7 jaar terug (-7 jaar bij vandaag optellen). 
* **De WHERE-filter**: De code zegt dus eigenlijk: "Laat alleen klanten zien waarvan de `contractStartDate` groter of gelijk is (dus recenter) dan de datum van 7 jaar geleden."
* **`ORDER BY id ASC`**: Sorteert oplopend (`ASC` = ascending) op basis van de unieke ID van de klant. Hierdoor pakt de `TOP 8` altijd de klanten met de kleinste/laagste ID's.
