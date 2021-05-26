import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../store/users";

const ProfilePage = () => {
  // const [username, setUsername] = useState("");
  // const [biography, setBiography] = useState;
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelector((state) => state.user);
  console.log(currentUser);

  useEffect(() => {
    dispatch(userActions.retrieveUserInfo(userId));
  }, [dispatch, userId]);
  return (
    <>
      <h1>{currentUser.username}'s Albums:</h1>
      <p>{currentUser.biography}</p>
      <p>{currentUser.Albums[0].name}</p>
      <img src={currentUser.Albums[0].albumCover}></img>
    </>
  );
};

export default ProfilePage;
