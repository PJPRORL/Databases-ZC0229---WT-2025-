-- Table: StudentVak (association for M:N Student <-> Vak)
CREATE TABLE StudentVak (
  studentId INT NOT NULL,
  vakId     INT NOT NULL,
  jaar      SMALLINT NOT NULL,
  PRIMARY KEY (studentId, vakId),
  FOREIGN KEY (studentId) REFERENCES Student(id) ON DELETE CASCADE,
  FOREIGN KEY (vakId)     REFERENCES Vak(id)     ON DELETE RESTRICT
);
