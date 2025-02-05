const express = require("express");
const { createBoard, getUserBoards, addButtonToBoard } = require("../controllers/boardController");
const router = express.Router();

router.post("/create", createBoard);
router.get("/:userId", getUserBoards);
router.post("/add-button", addButtonToBoard);

module.exports = router;
