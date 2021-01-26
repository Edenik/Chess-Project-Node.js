const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Number Of Game Played
  username: {
    type: String,
    required: [true, "Please provide username"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 8,
  },
  numberOfGamesPlayed: {
    type: Number,
    default: 0,
  },
  victories: {
    type: Number,
    default: 0,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
