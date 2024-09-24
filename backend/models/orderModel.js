// backend/models/contactModel.js
const db = require("../config/db");

const Order = {
  create: (orderData, callback) => {
    const sql = "INSERT INTO orders SET ?";
    db.query(sql, orderData, callback);
  },
};

module.exports = Order;
