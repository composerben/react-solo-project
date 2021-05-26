const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");

const { Album } = require("../../db/models/album");

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const id = req.params.id;
    const album = await Album.findOne({
      where: {
        id: id,
      },
      include: {
        model: Song,
      },
    });
    return req.json({ album });
  })
);
module.exports = router;
