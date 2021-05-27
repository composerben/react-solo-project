import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as albumActions from "../../store/albums";
import * as genreActions from "../../store/genre";
import "./AddAlbumForm.css";

const AddAlbumForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const genres = useSelector((state) => state.genres);
  console.log(genres);
  const [name, setName] = useState("");
  const [albumCover, setAlbumCover] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState(0);
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      albumActions.addAlbum({
        name,
        albumCover,
        releaseDate,
        genre,
        userId: sessionUser.id,
      })
    );
  };

  useEffect(() => {
    dispatch(genreActions.retrieveGenreInfo());
  }, [dispatch]);

  return (
    <form className="album-form" onSubmit={handleSubmit}>
      <ul className="album-form__errors">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <div className="album-form__element">
        <label htmlFor="name">Album Title</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Album Title"
          required
        />
      </div>
      <div className="album-form__element">
        <label htmlFor="album-cover">Cover Image</label>
        <input
          type="text"
          value={albumCover}
          onChange={(e) => setAlbumCover(e.target.value)}
          placeholder="Cover Image"
          required
        />
      </div>
      <div className="album-form__element">
        <label htmlFor="release-date">Year of Release</label>
        <input
          type="text"
          value={releaseDate}
          onChange={(e) => parseInt(setReleaseDate(e.target.value))}
          placeholder="Release Date"
          required
        />
      </div>
      <div className="album-form__element">
        <label htmlFor="genre">Genre</label>
        <select
          name="genre"
          value={genre}
          onChange={(e) => parseInt(setGenre(e.target.value))}
        >
          <option value="0" disabled>
            --Select a Genre--
          </option>
          {genres.map((genre) => (
            <option value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div>
    </form>
  );
};

export default AddAlbumForm;
