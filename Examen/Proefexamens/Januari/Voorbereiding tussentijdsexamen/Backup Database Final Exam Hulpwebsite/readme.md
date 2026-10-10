# Projectopdracht: Uitbreiding Studiegids Database & Modellering

Dit document bevat de gedetailleerde instructies voor de uitbreiding van de website `StudiegidsDatabaseEnModellering.html`. Het hoofddoel is het creëren van een **volledige scheiding** tussen de bestaande ERD-stof en nieuwe SQL/NoSQL-stof, inclusief de implementatie van een interactieve leeromgeving (Sandbox & Quiz).

## 📂 Bronmateriaal

* **Locatie:** Map `theorie/SQL en NoSQL`.
* **Bestanden:** Alle `.pptx` bestanden in deze map.
* **LET OP:** De map `ERD` moet volledig **genegeerd** worden.

---

## 🚀 Fase 1: Inhoudelijke Uitbreiding & Structuur

**Doel:** De website volledig maken ter voorbereiding op het eindexamen Databases.

### 1.1 Content Extractie

* Extraheer alle theorie, definities en schema's uit de `.pptx` bestanden.
* **Volledigheid:** Alles moet worden overgenomen. Laat niets weg, ook niet als informatie redundant lijkt ten opzichte van bestaande content.

### 1.2 Nieuwe Secties & Navigatie

* Creëer **volledig nieuwe hoofdstukken/secties** op de website voor SQL en NoSQL.
* **⚠️ Strikte Eis:** Meng deze nieuwe informatie **niet** met de bestaande ERD-secties.
* ERD en SQL/NoSQL moeten als afzonderlijke, losstaande modules navigeerbaar zijn.

> Focus: ERD-theorie en SQL/NoSQL-theorie + praktijk moeten
> strikt gescheiden blijven op de website.

---

## 🛠 Fase 2: Theoretische & Praktische Verrijking

### 2.1 Code-voorbeelden

* Implementeer bij elk theoretisch concept uitgebreide syntax-voorbeelden.
* Zorg voor voorbeelden voor zowel:
  * **SQL** (Relationeel)
  * **NoSQL** (bijv. Document-based/JSON)

### 2.2 Interactieve SQL/NoSQL Sandbox (Nieuwe Feature)

Ontwikkel een nieuwe interface voor praktijkoefeningen, vergelijkbaar met de eerder geïmplementeerde ERD-builder, maar specifiek voor code.

* **Type:** Een functionele code-editor (SQL-sandbox).
* **Functionaliteit:**
  * Gebruikers moeten query's kunnen schrijven.
  * De query's moeten uitgevoerd/gevalideerd kunnen worden (code-executie).
* **Oefeningen:** Voeg per hoofdstuk praktijkgerichte opdrachten toe die de student direct in deze nieuwe sandbox kan oplossen.

---

## 🧠 Fase 3: Intelligent Quiz-Systeem

Het quiz-systeem maakt gebruik van `questions.json` als databron.

### 3.1 Logica van de Quiz

* **Batching:** Vragen worden getoond in sets van **10 stuks**.
* **Randomisatie:** De vragen moeten volledig willekeurig worden ingeladen. De set mag nooit exact hetzelfde zijn.
* **Tracking:** Het systeem moet bijhouden welke vragen al gesteld zijn aan de gebruiker (history tracking).
* **Feedback:** Na het beantwoorden van de set krijgt de gebruiker gedetailleerde uitleg over de vragen/antwoorden voor extra verdieping.

---

## 📝 Fase 4: Generatie & Structuur `questions.json`

De vragen in `questions.json` moeten worden gegenereerd (of aangevuld) op basis van de nieuwe theorie. Gebruik onderstaande criteria voor het vullen van de JSON.

### 4.1 Criteria voor vragen

* **Instructie**: Analyseer de bijgevoegde theorie over SQL en NoSQL. Genereer op basis hiervan een uitgebreide set nieuwe vragen die voldoen aan de volgende criteria. Voeg deze vragen toe aan de `questions.json`.
  **Types:** Mix van meerkeuze, "vul de query aan", en theoretische begripsvragen.
* **Focus:** Focus op zowel de syntax (SQL/NoSQL code) als de achterliggende theorie (waarom gebruik je wat?).
* **Niveau:** Eindexamen niveau (uitdagend). Geen overlap met basis ERD.
* **Feedback-loop**: Voeg voor elke vraag een gedetailleerde uitleg toe. Deze uitleg moet niet alleen het
  juiste antwoord bevestigen, maar ook context bieden zodat ervan geleerd kan worden.
* **Doel**: De vragen moeten uitdagend genoeg zijn voor een
  eindexamen Databases. Zorg dat er geen overlap is met basis ERD-vragen; de
  focus ligt puur op SQL en NoSQL.

### 4.2 JSON Data Structuur

Lever de data aan in het volgende formaat zodat dit direct in de applicatie werkt:

```json
{
  "id": "unieke_identifier",
  "hoofdstuk": "Naam van de nieuwe sectie",
  "vraag": "De tekst van de vraag",
  "opties": ["Optie A", "Optie B", "Optie C"], 
  "correct_antwoord": "Het juiste antwoord",
  "uitleg": "Gedetailleerde context en uitleg waarom dit het juiste antwoord is."
}
```
