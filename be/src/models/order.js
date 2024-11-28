const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cart",
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  total: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
    enum: ["pending", "processing", "shipped", "delivered", "cancelled"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
