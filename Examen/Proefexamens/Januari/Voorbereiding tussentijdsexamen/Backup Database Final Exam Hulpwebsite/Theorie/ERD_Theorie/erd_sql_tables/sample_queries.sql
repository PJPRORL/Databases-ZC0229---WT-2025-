-- Handy queries (optional)
-- 1) Orders with customer name
SELECT o.id, o.orderDatum, k.voornaam, k.achternaam
FROM "Order" o
JOIN Klant k ON k.id = o.klantId
ORDER BY o.orderDatum DESC;

-- 2) Order lines with product and subtotal
SELECT op.orderId, p.naam, op.aantal, (op.aantal * p.prijs) AS subtotaal
FROM OrderProduct op
JOIN Product p ON p.id = op.productId
ORDER BY op.orderId;

-- 3) Total per order
SELECT op.orderId,
       SUM(op.aantal * p.prijs) AS totaal
FROM OrderProduct op
JOIN Product p ON p.id = op.productId
GROUP BY op.orderId
ORDER BY op.orderId;
