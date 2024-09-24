// backend/routes/order.js
const express = require("express");
const router = express.Router();
const { createOrder } = require("../controllers/orderController");

router.post("/order", async (req, res) => {
  try {
    const orderResult = await createOrder(req.body);
    // Send a success response after the order is created
    res
      .status(200)
      .json({
        feedback: "Order Placed Successfully",
        orderId: orderResult.insertId,
      });
  } catch (error) {
    console.error("Error submitting order:", error); // Log the error for debugging
    res
      .status(500)
      .json({ feedback: "Error submitting order", error: error.message });
  }
});

module.exports = router;
