const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchgema = new Schema({
  name: {
    type: String,
    require: true,
  },
  phone: {
    type: Number,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const UserModel = new mongoose.model("user", UserSchgema);
module.exports = UserModel;
