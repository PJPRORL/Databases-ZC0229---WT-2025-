-- Table: Order (uses quoted identifier because ORDER is reserved in SQL)
CREATE TABLE "Order" (
  id         INT PRIMARY KEY,
  orderDatum DATE NOT NULL,
  klantId    INT  NOT NULL,
  CONSTRAINT fk_order_klant
    FOREIGN KEY (klantId) REFERENCES Klant(id)
      ON DELETE RESTRICT   -- choose RESTRICT | CASCADE | SET NULL per business rule
);
