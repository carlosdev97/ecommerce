const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Rutas para orden

router.post("/:userId/create", orderController.createOrderFromCart);
router.get("/:userId/order/:orderId", orderController.getOrder);

module.exports = router;
