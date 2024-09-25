const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { createContact } = require("./controllers/contactController");
const db = require("./config/db");
const path = require("path");
const { createOrder } = require("./controllers/orderController");
const port = 3000;

const app = express();

dotenv.config();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "../"))); // Adjust to your frontend directory

// Serve the index.html at the root path
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html")); // Adjust to your main HTML file
});

app.get("/categories", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/categories.html"));
});

app.get("/order", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/order.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/contact.html"));
});

app.get("/blog", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/blog.html"));
});

app.get("/privacy-policy", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/privacy-policy.html"));
});

app.get("/terms-use", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/terms-of-use.html"));
});

app.get("/faqs", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/faqs.html"));
});

// Serve static files from the 'images' folder
app.use("/images", express.static(path.join(__dirname, "../images")));

// Routes
app.post("/contact", createContact);
app.post("/order", createOrder);

// Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
