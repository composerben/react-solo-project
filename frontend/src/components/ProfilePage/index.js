import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as userActions from "../../store/users";

const ProfilePage = () => {
  // const [username, setUsername] = useState("");
  // const [biography, setBiography] = useState;
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(userActions.retrieveUserInfo(currentUser));
  }, [dispatch]);
  return (
    <>
      <h1>Hello from Profile Page</h1>
      <p>{currentUser.biography}</p>
    </>
  );
};

export default ProfilePage;
