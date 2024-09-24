// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const { createContact } = require("../controllers/contactController");

router.post("/api/contact", createContact); // Make sure this matches the fetch URL in contact.js

module.exports = router;
