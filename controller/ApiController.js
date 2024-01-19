const User = require("../model/user");

const createUser = async (req, res) => {
  //console.log(req.body);
  try {
    const { name, phone, email, password } = req.body;

    const UserData = new User({
      name,
      phone,
      email,
      password,
    });

    const result = await UserData.save();
    return res.status(201).json({
      status: true,
      message: "Data added Successfuly",
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
const allUser = async (req, res) => {
  //console.log(req.body);
  try {
    const AllData = await User.find();

    return res.status(200).json({
      status: true,
      message: "Data fetch Successfuly",
      data: AllData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
const editUser = async (req, res) => {
  //console.log(req.body);
  try {
    const AllData = await User.findById(req.params.id);

    return res.status(200).json({
      status: true,
      message: "single fetch Successfuly",
      data: AllData,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};
const updateUser = async (req, res) => {
  //console.log(req.body);
  try {
    const { name, phone, city } = req.body;
    if (!name) {
      return res.status(500).json({
        status: false,
        meaasge: "name filed is required",
      });
    }
    const id = req.params.id;

    const UpdateData = await User.findByIdAndUpdate(id, req.body, {
      useFindAndModify: false,
    });

    return res.status(200).json({
      status: true,
      message: "update Successfuly",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  //console.log(req.body);
  try {
    const deleteData = await User.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      status: true,
      message: "delete Successfuly",
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      error: error.message,
    });
  }
};

module.exports = {
  createUser,
  allUser,
  editUser,
  updateUser,
  deleteUser,
};
