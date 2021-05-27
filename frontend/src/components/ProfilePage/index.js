import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../store/users";
import "./ProfilePage.css";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelector((state) => state.user);
  let albums;
  if (currentUser) {
    albums = currentUser.Albums;
  }

  useEffect(() => {
    dispatch(userActions.retrieveUserInfo(userId));
  }, [dispatch, userId]);
  return (
    <>
      <h1>{currentUser.username}</h1>
      <h3>About the Artist</h3>
      <p>{currentUser.biography}</p>
      <div className="user__albums-container">
        {albums &&
          albums.map((album) => (
            <div className="user__album-info" key={album.name}>
              <Link to={`/albums/${album.id}`}>
                <h2>{album.name}</h2>
              </Link>
              <Link to={`/albums/${album.id}`}>
                <img className="album-image" src={album.albumCover}></img>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default ProfilePage;
