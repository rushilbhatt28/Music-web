import React, { useEffect, useState } from "react";
import "./assets/App.css";
import Login from "./login/Login";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./player/Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }
  }, []);
  console.log(user);
  console.log(token);

  return <div className="App">{token ? <Player spotify={spotify} /> : <Login />}</div>;
}

export default App;
