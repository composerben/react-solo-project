import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as albumActions from "../../store/albums";
import "./HomePage.css";

const HomePage = () => {
  const dispatch = useDispatch();
  const albums = useSelector((state) => state.album.albums);

  useEffect(() => {
    dispatch(albumActions.retrieveAllAlbums());
  }, [dispatch]);

  return (
    <>
      <h1 className="welcome-message">Welcome to Devtunes!</h1>
      <div className="albums-container">
        {albums &&
          albums.map((album) => (
            <div className="album-info" key={album.name}>
              <Link to={`/albums/${album.id}`}>
                <h2>{album.name}</h2>
              </Link>
              <Link to={`/albums/${album.id}`}>
                <img
                  className="album-image"
                  src={album.albumCover}
                  alt="album-cover"
                ></img>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default HomePage;
