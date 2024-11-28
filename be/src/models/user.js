const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "client",
    enum: ["client", "admin"],
  },
  registrationDate: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
