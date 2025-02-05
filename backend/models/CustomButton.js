const mongoose = require("mongoose");

const CustomButtonSchema = new mongoose.Schema({
  label: String,
  icon: String,
  color: { type: mongoose.Schema.Types.ObjectId, ref: "DefaultColor" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("CustomButton", CustomButtonSchema);
