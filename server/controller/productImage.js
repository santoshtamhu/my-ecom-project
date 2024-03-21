const Product = require("../model/Product");
const path = require("path");

const createProductImage = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params._id).select("image");
    if (product.image.data) {
      res.set("Content-type", product.image.contentType);
      return res.status(200).send(product.image.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Erorr while getting photo",
      error,
    });
  }
};

const getProductImage = (req, res, next) => {
  try {
    const filename = req.params._id;
    let rootPath = path.resolve();
    filePath = path.join(rootPath, "uploads", filename);
    res.sendFile(filePath);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createProductImage,
  getProductImage,
};
