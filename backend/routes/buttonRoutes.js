const express = require("express");
const { createCustomButton } = require("../controllers/buttonController");
const router = express.Router();

router.post("/custom", createCustomButton);

module.exports = router;
