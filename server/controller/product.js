const Product = require("../model/Product");
const path = require("path");
const fs = require("fs");
const Joi = require("joi");

const fetchProducts = async (req, res) => {
  let products = await Product.find({});
  res.send(products);
};

const createProductValidationSchema = Joi.object({
  image: Joi.object({
    size: Joi.number()
      .max(2 * 1024 * 1024)
      .messages({
        "number.max": "file cannot be larger than 2 MB",
      }),
    mimetype: Joi.string().valid(
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/webp",
      "image/svg"
    ),
  }),
});

const createProduct = async (req, res, next) => {
  try {
    await createProductValidationSchema.validateAsync(req.files, {
      allowUnknown: true,
      abortEarly: false,
    });
  } catch (err) {
    return res.status(400).send({
      msg: "validation error",
      errors: err.details.map((e) => {
        return {
          field: e.context.key,
          msg: e.message,
        };
      }),
    });
  }

  try {
    let imagePath = null;
    let imageURL = null;
    if (req.files?.image) {
      imagePath = path
        .join("//", "uploads", Date.now() + req.files.image.name)
        .replaceAll("\\", "/");
      let rootPath = path.resolve();
      imageURL = "http://localhost:8000/api" + imagePath;

      req.files.image.mv(path.join(rootPath, imagePath));
    }

    let product = await Product.create({
      ...req.body,
      createdBy: req.user._id,
      image: {
        path: imagePath,
        url: imageURL,
      },
    });

    res.send(product);
  } catch (err) {
    next(err);
  }
};

const updateProduct = async (req, res, next) => {
  try {
    let product = await Product.findByIdAndUpdate(
      req.params._id,
      {
        title: "new titlte",
      },
      { new: true }
    );
    res.send(product);
  } catch (err) {
    next(err);
  }
};

const deleteProduct = async (req, res, next) => {
  try {
    let matched = await Product.findById(req.params._id);
    if (!matched) {
      return res.sendStatus(404);
    }
    let product = await Product.findByIdAndDelete(req.params._id);
    fs.unlinkSync(path.resolve() + product.image);
    res.send("product deleted");
  } catch (err) {
    next(err);
  }
};

module.exports = {
  fetchProducts,
  createProduct,
  deleteProduct,
  updateProduct,
};
