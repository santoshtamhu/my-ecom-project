const express = require("express");
const app = express();
const productRoute = require("./router/product");
const userRoute = require("./router/auth");
const ordersRoute = require("./router/order");
const handleServerError = require("./middleware/handleServerError");
const fileUpload = require("express-fileupload");
const cors = require("cors");
const uploadsRoute = require("./router/uploads");

require("./config/database");

app.use(cors());
app.use(express.json()); // global middleware / sets up req.body
app.use(fileUpload());
app.use("/api/products", productRoute);
app.use("/api/auth", userRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/uploads", uploadsRoute);
app.use(handleServerError);

app.listen(8000, () => {
  console.log("server started");
});
