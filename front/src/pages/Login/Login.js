import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <>
      <form className="wrapper">
        <div className="">
          <input id="email" />
          <label for="email">Email</label>
        </div>

        <div>
          <input id="password" />
          <label for="password">Password</label>
        </div>

        <div>
          <button>Login</button>
        </div>

        <a href="#">Forgot Password</a>
      </form>
    </>
  );
};

export default Login;
