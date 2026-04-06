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
