const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
  products: [
    {
      _id: ObjectId,
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: Number,
    },
  ],
});

const Order = mongoose.model("Orders", OrderSchema);

module.exports = Order;
