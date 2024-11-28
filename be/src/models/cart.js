const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
  userId: {
    type: String,
    unique: true,
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
    },
  ],
  dateUpdate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
