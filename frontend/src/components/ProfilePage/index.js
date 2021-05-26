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
      <h1>{currentUser.username}'s Albums:</h1>
      <p>{currentUser.biography}</p>
      <div className="user__albums-container">
        {albums &&
          albums.map((album) => (
            <div className="user__album-info" key={album.name}>
              <p>{album.name}</p>
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
