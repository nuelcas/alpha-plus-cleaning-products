// controllers/contactController.js
const db = require("../config/db");
const createOrder = (req, res) => {
  const orderData = req.body;

  const sql = "INSERT INTO orders SET ?";

  db.query(sql, orderData, (err, result) => {
    if (err) {
      console.error("Error inserting into the database", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ feedback: "Order Placed Successfully!" });
  });
};

module.exports = { createOrder };
