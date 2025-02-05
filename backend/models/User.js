const mongoose = require("mongoose");

const UserBoardSchema = new mongoose.Schema({
  name: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  buttons: [
    {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "buttonType",
    },
  ],
  buttonType: {
    type: String,
    enum: ["DefaultButton", "CustomButton"],
  },
});

module.exports = mongoose.model("UserBoard", UserBoardSchema);
