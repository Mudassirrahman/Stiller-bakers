import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the form from submitting

    // Validate credentials
    if (username === "mudassir" && password === "user") {
      alert(`Welcome ${username}`);
    } else {
      alert("Login failed");
    }
  };

  const toggleForm = (isLoginForm) => {
    setIsLogin(isLoginForm);
  };

  return (
    <>
      <header>
        <div>
          <Link to="/" className="logo">
            <i className="fas fa-utensils"></i>Stiller's
          </Link>
          <img className="logo-img" src="Images/images-removebg-preview1.png" alt="" />
        </div>
      </header>
      <div className="login-page">
        <div className="login-form">
          <div className="login-metrial">
            <div id="butn"></div>
            <button
              type="button"
              className={`toggle-butn ${isLogin ? "active" : ""}`}
              onClick={() => toggleForm(true)}
            >
              Log in
            </button>
            <button
              type="button"
              className={`toggle-butn ${!isLogin ? "active" : ""}`}
              onClick={() => toggleForm(false)}
            >
              Register
            </button>
          </div>
          <form
            className={`input-group ${isLogin ? "login" : "register"}`}
            onSubmit={handleLogin}
          >
            <input
              type="text"
              className="input-field"
              placeholder="User Id"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              className="input-field"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="checkbox" className="check-boxx" />
            <span className="log-spanss">Remember Password</span>
            <button type="submit" className="submit-butn">
              {isLogin ? "Log in" : "Register"}
            </button>
          </form>
        </div>
      </div>
      <div className="bt"></div>
    </>
  );
};

export default Login;
