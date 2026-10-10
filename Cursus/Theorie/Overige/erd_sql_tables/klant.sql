-- Table: Klant
CREATE TABLE Klant (
  id         INT PRIMARY KEY,
  voornaam   VARCHAR(80)  NOT NULL,
  achternaam VARCHAR(120) NOT NULL,
  email      VARCHAR(255) NOT NULL UNIQUE  -- AK
);
