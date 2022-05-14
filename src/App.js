import React, { useEffect, useState } from "react";
import "./assets/App.css";
import Login from "./login/Login";
import { getTokenFromUrl } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./player/Player";
import { useDataLayerValue } from "./DataLayer";
import * as actions from "./reducer/constants";

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
        type: actions.SET_TOKEN,
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: actions.SET_USER,
          user: user,
        });
      });

      spotify.getMyTopArtists().then((response) =>
        dispatch({
          type: actions.SET_TOP_ARTISTS,
          top_artists: response,
        })
      );

      dispatch({
        type: actions.SET_SPOTIFY,
        spotify: spotify,
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: actions.SET_PLAYLIST,
          playlists: playlists,
        });
      });

      spotify.getPlaylist("0BDUik3bvBdouBM3EaKIB8").then((response) =>
        dispatch({
          type: actions.SET_DISCOVER_WEEKLY,
          discover_weekly: response,
        })
      );
    }
  }, []);
  console.log(user);
  console.log(token);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
