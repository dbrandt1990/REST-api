const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  //creates a relation between the product schema, but only gives the ID
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true
  },
  quantity: { type: Number, default: 1 }
});

module.exports = mongoose.model("Order", orderSchema);
