const express = require("express");
const {
  createProductImage,
  getProductImage,
} = require("../controller/productImage");

const router = express.Router();

router.get("/:_id", getProductImage);
router.post("/:_id", createProductImage);

module.exports = router;
