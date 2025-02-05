const UserBoard = require("../models/UserBoard");
const User = require("../models/User");

// Create User Board
exports.createBoard = async (req, res) => {
  try {
    const { userId, name } = req.body;

    const newBoard = new UserBoard({ name, user: userId });
    await newBoard.save();

    await User.findByIdAndUpdate(userId, { $push: { boards: newBoard._id } });

    res.status(201).json(newBoard);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get User Boards
exports.getUserBoards = async (req, res) => {
  try {
    const { userId } = req.params;
    const boards = await UserBoard.find({ user: userId }).populate("buttons");
    res.json(boards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add Button to Board
exports.addButtonToBoard = async (req, res) => {
  try {
    const { boardId, buttonId, buttonType } = req.body;

    const board = await UserBoard.findByIdAndUpdate(
      boardId,
      { $push: { buttons: buttonId, buttonType } },
      { new: true }
    ).populate("buttons");

    res.json(board);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
