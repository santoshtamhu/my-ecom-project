const { default: mongoose } = require("mongoose");
const { BUYER, SELLER } = require("../constants/role");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true, // database validation
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true,
    /* custom validtation -- check email here */
    validate: {
      validator: async (value) => {
        let matched = await mongoose.models.User.findOne({ email: value });
        if (matched) {
          return false;
        }
      },
    },
  },
  phone: Number,
  role: {
    type: String,
    enum: [BUYER, SELLER],
    required: true,
    set: (value) => {
      return value.toLowerCase();
    },
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
