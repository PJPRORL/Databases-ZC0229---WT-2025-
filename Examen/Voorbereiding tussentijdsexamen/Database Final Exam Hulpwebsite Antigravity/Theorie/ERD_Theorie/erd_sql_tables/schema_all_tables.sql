-- ==== klant.sql ====
-- Table: Klant
CREATE TABLE Klant (
  id         INT PRIMARY KEY,
  voornaam   VARCHAR(80)  NOT NULL,
  achternaam VARCHAR(120) NOT NULL,
  email      VARCHAR(255) NOT NULL UNIQUE  -- AK
);

-- ==== product.sql ====
-- Table: Product
CREATE TABLE Product (
  id    INT PRIMARY KEY,
  naam  VARCHAR(120) NOT NULL,
  prijs DECIMAL(10,2) NOT NULL
);

-- ==== order.sql ====
-- Table: Order (uses quoted identifier because ORDER is reserved in SQL)
CREATE TABLE "Order" (
  id         INT PRIMARY KEY,
  orderDatum DATE NOT NULL,
  klantId    INT  NOT NULL,
  CONSTRAINT fk_order_klant
    FOREIGN KEY (klantId) REFERENCES Klant(id)
      ON DELETE RESTRICT   -- choose RESTRICT | CASCADE | SET NULL per business rule
);

-- ==== order_product.sql ====
-- Table: OrderProduct (association for M:N Order <-> Product)
CREATE TABLE OrderProduct (
  orderId   INT NOT NULL,
  productId INT NOT NULL,
  aantal    INT NOT NULL CHECK (aantal > 0),
  PRIMARY KEY (orderId, productId),
  CONSTRAINT fk_op_order
    FOREIGN KEY (orderId) REFERENCES "Order"(id) ON DELETE CASCADE,
  CONSTRAINT fk_op_product
    FOREIGN KEY (productId) REFERENCES Product(id) ON DELETE RESTRICT
);

-- ==== series.sql ====
-- Table: Series (optional parent for Book)
CREATE TABLE Series (
  id   INT PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

-- ==== book.sql ====
-- Table: Book (optional FK to Series)
CREATE TABLE Book (
  id       INT PRIMARY KEY,
  title    VARCHAR(200) NOT NULL,
  seriesId INT NULL,   -- optional relationship
  CONSTRAINT fk_book_series
    FOREIGN KEY (seriesId) REFERENCES Series(id)
      ON DELETE SET NULL
);

-- ==== student.sql ====
-- Table: Student
CREATE TABLE Student (
  id               INT PRIMARY KEY,
  voornaam         VARCHAR(80)  NOT NULL,
  achternaam       VARCHAR(120) NOT NULL,
  studentenNummer  VARCHAR(20)  NOT NULL UNIQUE -- AK
);

-- ==== vak.sql ====
-- Table: Vak
CREATE TABLE Vak (
  id   INT PRIMARY KEY,
  naam VARCHAR(120) NOT NULL
);

-- ==== student_vak.sql ====
-- Table: StudentVak (association for M:N Student <-> Vak)
CREATE TABLE StudentVak (
  studentId INT NOT NULL,
  vakId     INT NOT NULL,
  jaar      SMALLINT NOT NULL,
  PRIMARY KEY (studentId, vakId),
  FOREIGN KEY (studentId) REFERENCES Student(id) ON DELETE CASCADE,
  FOREIGN KEY (vakId)     REFERENCES Vak(id)     ON DELETE RESTRICT
);

