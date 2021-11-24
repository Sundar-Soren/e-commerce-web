import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import darkLogo from "../../../assets/dark-logo.png";
import { login } from "../../../context/action/userAction";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log(email, password);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(login(email, password));
  };
  return (
    <div className="login">
      <div className="container">
        <img src={darkLogo} className="logo" alt="" />
        <div>
          <input
            type="email"
            autoComplete="off"
            id="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            autoComplete="off"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
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
          <button className="submit-btn" onClick={handleSubmit}>
            Log In
          </button>
        </div>
        <Link to="/signup" className="link">
          I don't have an account? Signup in here
        </Link>
      </div>
    </div>
  );
};

export default Login;
