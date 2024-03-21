const express = require("express");
const { fetchUser, signup, login } = require("../controller/auth");

const router = express.Router();

router.get("/users", fetchUser);
router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
