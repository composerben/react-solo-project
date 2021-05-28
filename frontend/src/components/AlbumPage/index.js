import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as albumActions from "../../store/albums";
import "./AlbumPage.css";

const AlbumPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentAlbum = useSelector((state) => state.album);
  let songs;

  if (currentAlbum) {
    songs = currentAlbum.Songs || [];
    songs.sort((a, b) => a.trackNumber - b.trackNumber);
  }
  useEffect(() => {
    dispatch(albumActions.retrieveAlbumInfo(id));
  }, [dispatch, id]);

  return (
    <>
      <h1>{currentAlbum.name}</h1>
      <div className="album__songs-container">
        <div className="album__image-container">
          <img src={currentAlbum.albumCover} alt="album-cover"></img>
        </div>
        <div className="songs__container">
          {songs &&
            songs.map((song) => (
              <div className="song-player">
                <p className="song-name">
                  {song.trackNumber + 1}. {song.name}
                </p>
                <audio
                  controls
                  controlsList="nodownload"
                  src={song.audioFile}
                ></audio>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AlbumPage;
