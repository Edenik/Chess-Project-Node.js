const User = require("../models/userModel");

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      throw new Error("Unable to login");
    }

    res.cookie(`userID`, user._id, { maxAge: 500000, httpOnly: false });
    res.status(200).send({ ok: true, user });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).send({ ok: true, newUser });
  } catch (err) {
    res.status(500).send({ ok: false, err });
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ users });
  } catch (err) {
    res.status(404).send({ err });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).send({ user });
  } catch (err) {
    res.status(404).send({ err });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({ status: "deleted" });
  } catch (err) {
    res.status(404).send({ err });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send({ user });
  } catch (err) {
    res.status(404).send({ err });
  }
};

exports.unHandledRoute = (req, res) => {
  res.status(404).send({ err: "This route is not handled yet!" });
};
