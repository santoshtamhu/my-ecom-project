const express = require("express");
const CreateOrder = require("../controller/order");
const router = express.Router();

router.post("/", CreateOrder);

module.exports = router;
