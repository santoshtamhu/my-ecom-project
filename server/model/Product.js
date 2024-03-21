const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true, // database validation
    },
    price: {
      type: Number,
      default: 0,
    },
    description: {
      type: String,
      maxLength: 255,
    },
    createdBy: {
      type: ObjectId,
      ref: "User",
    },
    image: {
      path: String,
      url: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
