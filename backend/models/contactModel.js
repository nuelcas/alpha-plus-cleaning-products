// backend/models/contactModel.js
const db = require("../config/db");

const Contact = {
  create: (contactData, callback) => {
    const sql = "INSERT INTO contacts SET ?";
    db.query(sql, contactData, callback);
  },
};

module.exports = Contact;
