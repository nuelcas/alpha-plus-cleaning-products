// controllers/contactController.js
const db = require("../config/db"); // Make sure you have your database configuration

const createContact = (req, res) => {
  const contactData = req.body;

  const sql = "INSERT INTO contacts SET ?";

  db.query(sql, contactData, (err, result) => {
    if (err) {
      console.error("Error inserting into the database", err);
      return res.status(500).json({ error: "Database error" });
    }
    res.status(200).json({ message: "Thanks for reaching out!" });
  });
};

module.exports = { createContact };
