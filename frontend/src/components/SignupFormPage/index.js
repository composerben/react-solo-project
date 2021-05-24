import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import "./SignupForm.css";

const SignupFormPage = () => {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [biograhy, setBiography] = useState("");

  if (sessionUser) return <Redirect to={`/users/${sessionUser.id}`} />;

  const handleSubmit = (e) => {
    e.preventDafault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors(["Passwords must match!"]);
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <ul className="signup-form__errors">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
      <div className="signup-form__element">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
      </div>
      <div className="signup-form__element">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="signup-form__element">
        <label htmlFor="biograhy">Biography</label>
        <textarea
          name="biography"
          placeholder="Tell us about yourself!"
          value={biograhy}
          onChange={(e) => setBiography(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="signup-form__element">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <div className="signup-form__element">
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          required
        />
      </div>
      <div className="signup-form__element">
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignupFormPage;
