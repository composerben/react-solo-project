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
      <Link className="navbar" exact to="/">
        <img src="https://aa-react-solo-project.s3-us-west-2.amazonaws.com/Screen+Shot+2021-05-26+at+4.24.20+PM.png"></img>
      </Link>
      <div className="navbar__navlinks-container">
        <NavLink className="navlink" exact to="/">
          Home
        </NavLink>
        {isLoggedIn && sessionLinks}
      </div>
    </nav>
  );
};

export default Navigation;
