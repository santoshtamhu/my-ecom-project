const express = require("express");
const {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controller/product");

const { checkAuthentication, isSeller } = require("../middleware/auth");

const router = express.Router();

router.get("/", fetchProducts);
router.post("/", checkAuthentication, isSeller, createProduct);
router.put("/:_id", updateProduct);
router.delete("/:_id", deleteProduct);

module.exports = router;
