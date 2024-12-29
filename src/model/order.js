const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["photoid", "shootmod", "shootfam", "shootobj", "shooteve", "ext"],
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    zip: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
