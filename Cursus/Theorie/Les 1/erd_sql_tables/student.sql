-- Table: Student
CREATE TABLE Student (
  id               INT PRIMARY KEY,
  voornaam         VARCHAR(80)  NOT NULL,
  achternaam       VARCHAR(120) NOT NULL,
  studentenNummer  VARCHAR(20)  NOT NULL UNIQUE -- AK
);
