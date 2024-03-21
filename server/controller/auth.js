const User = require("../model/User");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const SignupValidationSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const fetchUser = async (req, res) => {
  let users = await User.find({});
  res.send(users);
};

const signup = async (req, res, next) => {
  try {
    await SignupValidationSchema.validateAsync(req.body, {
      allowUnknown: true,
      abortEarly: false,
    });
  } catch (err) {
    return res.status(400).send({
      msg: "validation error",
      errors: err.details.map((el) => {
        return {
          field: el.context.key,
          msg: el.message,
        };
      }),
    });
  }

  try {
    const password = req.body.password;
    let hash = await bcrypt.hash(password, 10);
    let user = await User.create({ ...req.body, password: hash });
    res.send(user);
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    let user = await User.findOne({ email: req.body.email }).select("+password");
    if (user) {
      let matched = await bcrypt.compare(req.body.password, user.password);
      if (matched) {
        user = user.toObject();
        user.password = undefined;
        const token = jwt.sign(user, "yourSecretSignature");
        return res.send({ token, user });
      }
    }
    res.status(401).send({
      msg: "invalid credentials!",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  fetchUser,
  signup,
  login,
};
