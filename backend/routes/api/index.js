const router = require("express").Router();
const sessionRouter = require("./session.js");
const usersRouter = require("./users.js");
const albumsRouter = require("./albums.js");
const genresRouter = require("./genres.js");

router.use("/session", sessionRouter);
router.use("/users", usersRouter);
router.use("/albums", albumsRouter);
router.use("/genres", genresRouter);

module.exports = router;
