import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <>
        <NavLink className="navlink" to={`/users/${sessionUser.id}`}>
          Profile
        </NavLink>
        <NavLink className="navlink" to="/albums/add-new">
          Upload Album
        </NavLink>
        <ProfileButton user={sessionUser} />
      </>
    );
  } else {
    sessionLinks = (
      <>
        <NavLink className="navlink" to="/login">
          Log In
        </NavLink>
        <NavLink className="navlink" to="/signup">
          Sign Up
        </NavLink>
      </>
    );
  }

  return (
    <nav className="navbar">
      <Link className="navbar" to="/">
        <img src="https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Screen+Shot+2021-05-26+at+4.24.20+PM.png" alt="devtunes-logo"></img>
      </Link>
      <div className="navbar__navlinks-container">
        <NavLink className="navlink" to="/">
          Home
        </NavLink>
        {isLoggedIn && sessionLinks}
      </div>
    </nav>
  );
};

export default Navigation;
