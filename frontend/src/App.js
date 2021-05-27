import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import ProfilePage from "./components/ProfilePage";
import AlbumPage from "./components/AlbumPage";
import AddAlbumForm from "./components/AddAlbumForm";
import HomePage from "./components/HomePage";
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
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginFormPage} />
          <Route path="/signup" component={SignupFormPage} />
          <Route path="/users/:userId" component={ProfilePage} />
          <Route path="/albums/add-new" component={AddAlbumForm} />
          <Route path="/albums/:id" component={AlbumPage} />
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
