import React from "react";
import "../assets/login.css";
import { loginUrl } from "../spotify/spotify";

function Login() {
  return (
    <div className="login">
      {/* <img src="../assets/guitar-dribbble.jpg" alt="logo" /> */}
      <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
        <iframe
          src="https://giphy.com/embed/NPSBznfytOtCo"
          width="100%"
          height="100%"
          style="position:absolute"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/cover-album-NPSBznfytOtCo">via GIPHY</a>
      </p>
      <a href={loginUrl}>Login</a>
    </div>
  );
}

export default Login;
