const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { Genre } = require("../../db/models");

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const genres = await Genre.findAll();
    return res.json({ genres });
  })
);

module.exports = router;
