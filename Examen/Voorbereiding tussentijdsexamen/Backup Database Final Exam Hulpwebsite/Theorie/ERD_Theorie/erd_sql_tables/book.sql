-- Table: Book (optional FK to Series)
CREATE TABLE Book (
  id       INT PRIMARY KEY,
  title    VARCHAR(200) NOT NULL,
  seriesId INT NULL,   -- optional relationship
  CONSTRAINT fk_book_series
    FOREIGN KEY (seriesId) REFERENCES Series(id)
      ON DELETE SET NULL
);
