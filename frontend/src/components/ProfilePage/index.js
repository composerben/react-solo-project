import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../store/users";

const ProfilePage = () => {
  // const [username, setUsername] = useState("");
  // const [biography, setBiography] = useState;
  const dispatch = useDispatch();
  const { userId } = useParams();
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.retrieveUserInfo(userId));
  }, [dispatch]);
  return (
    <>
      <h1>Hello from Profile Page</h1>
      <p>{currentUser.biography}</p>
    </>
  );
};

export default ProfilePage;
