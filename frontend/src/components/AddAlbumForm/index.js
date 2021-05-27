import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as albumActions from "../../store/albums";
import "./AddAlbumForm.css";

const AddAlbumForm = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [name, setName] = useState("");
  const [albumCover, setAlbumCover] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [genre, setGenre] = useState("");
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
      {/* TODO: make a select with option dropdowns of each genre name that would then post their id */}
    </form>
  );
};

export default AddAlbumForm;
