import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import ProfilePage from "./components/ProfilePage";
import AlbumPage from "./components/AlbumPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoggedIn(true));
  }, [dispatch]);
  return (
    <>
      <Navigation isLoggedIn={isLoggedIn} />
      {isLoggedIn && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/users/:userId">
            <ProfilePage />
          </Route>
          <Route path="/albums/:id">
            <AlbumPage />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
