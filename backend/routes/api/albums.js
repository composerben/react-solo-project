const express = require("express");
const router = express.Router();
const asyncHandler = require("express-async-handler");
const { check } = require("express-validator");

const { Album, Song } = require("../../db/models/");

const validateAlbum = [
  check("name")
    .exists({ checkFalsy: true })
    .withMessage("Please provide the name of your album"),
  check("albumCover")
    .exists({ checkFalsy: true })
    .withMessage(
      "Please provide a link to your album cover (must be a jpg or png)"
    ),
  check("releaseDate")
    .exists({ checkFalsy: true })
    .isInt()
    .withMessage("Please provide the release year of your album"),
  check("genreId")
    .exists({ checkFalsy: true })
    .withMessage("Please select a genre"),
];

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
    return res.json({ album });
  })
);

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const albums = await Album.findAll();
    return res.json({ albums });
  })
);

router.post(
  "/add-new",
  validateAlbum,
  asyncHandler(async (req, res) => {
    const { name, albumCover, releaseDate, genreId, userId, songs } = req.body;
    const album = await Album.create({
      name,
      albumCover,
      releaseDate,
      genreId,
      userId,
    });

    await Promise.all(
      songs.map((song, idx) =>
        Song.create({
          name: song.name,
          audioFile: song.audioFile,
          userId,
          trackNumber: idx,
          albumId: album.id,
        })
      )
    );

    // return res.json({ album, songs: allSongs });
    res.send(201);
  })
);
module.exports = router;
