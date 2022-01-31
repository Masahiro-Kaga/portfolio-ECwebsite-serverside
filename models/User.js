const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
  },
  lastName: {
    type: String,
    required: [true, "Last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  mobileNo: {
    type: String,
    required: [true, "Mobile no. is required"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  orders: [
    {
      orderId: {
        type: String,
        required: [true, "Order ID is required."],
      },
      quantity: {
        type: Number,
        required: [true, "Quantity is required."],      }
    },
  ],
});

module.exports = mongoose.model("User", userSchema);