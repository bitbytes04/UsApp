const CustomButton = require("../models/CustomButton");

// Create Custom Button
exports.createCustomButton = async (req, res) => {
  try {
    const { userId, label, icon, color } = req.body;

    const newButton = new CustomButton({ label, icon, color, user: userId });
    await newButton.save();

    res.status(201).json(newButton);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

