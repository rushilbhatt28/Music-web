import React from "react";
import "../assets/login.css";
import { loginUrl } from "../spotify/spotify";

function Login() {
  return (
    <div className="login">
      <img src="../assets/guitar-dribbble.jpg" alt="logo" />
      <a href={loginUrl}>Login</a>
    </div>
  );
}

export default Login;
