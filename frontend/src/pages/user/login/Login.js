import React from "react";
import { Link } from "react-router-dom";
import darkLogo from "../../../assets/dark-logo.png";

import "./login.css";
const Login = () => {
  return (
    <div className="login">
      <div className="container">
        <img src={darkLogo} className="logo" alt="" />
        <div>
          <input
            type="email"
            autocomplete="off"
            id="email"
            placeholder="email"
          />
          <input
            type="password"
            autocomplete="off"
            id="password"
            placeholder="password"
          />
          <input
            type="checkbox"
            checked
            className="checkbox"
            id="terms-and-cond"
          />
          <label for="terms-and-cond">
            agree to our <Link to="">terms and conditions</Link>
          </label>
          <br />
          <input type="checkbox" className="checkbox" id="notification" />
          <label for="notification">
            recieve upcoming offers and events mails
          </label>
          <button className="submit-btn">create account</button>
        </div>
        <Link to="/signup" className="link">
          I don't have an account? Signup in here
        </Link>
      </div>
    </div>
  );
};

export default Login;
