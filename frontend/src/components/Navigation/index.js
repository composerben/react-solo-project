import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

const Navigation = ({ isLoggedIn }) => {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton user={sessionUser} />;
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
