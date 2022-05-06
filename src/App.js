import React, { useEffect, useState } from "react";
import "./assets/App.css";
import Login from "./login/Login";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => {
        
      })
    }
  }, []);

  return <div className="App">{token ? <h1>dfg</h1> : <Login />}</div>;
}

export default App;
