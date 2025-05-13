import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-wrapper">
      <form className="login-form">
        <div className="form-field">
          <label for="email">Email:</label>
          <input type="email" id="email" className="form-input" />
        </div>

        <div className="form-field">
          <label for="password">Password:</label>
          <input type="password" id="password" className="form-input" />
        </div>

        <button className="login-button">Login</button>

        <a href="#" className="forgot-password">
          Forgot Password
        </a>
      </form>
    </div>
  );
};

export default Login;
