import React from "react";
import "../assets/Body.css";
import * as actions from "../reducer/constants";
import { useDataLayerValue } from "../DataLayer";
import Header from "../Header/Header";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SongRow from "../songRow/SongRow";
export default function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useDataLayerValue();

  const playPlaylist = (id) => {
    spotify
      .play({
        context_uri: `spotify:playlist:0BDUik3bvBdouBM3EaKIB8`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: actions.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: actions.SET_PLAYING,
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: actions.SET_ITEM,
            item: r.item,
          });
          dispatch({
            type: actions.SET_PLAYING,
            playing: true,
          });
        });
      });
  };
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>{discover_weekly?.description}</p>
          <div className="body__songs">
            <div className="body__icons">
              <PlayCircleFilledIcon
                className="body__shuffle"
                onClick={playPlaylist}
              />
              <FavoriteBorderIcon fontSize="large" />
              <MoreHorizIcon />
            </div>
            {discover_weekly?.tracks.items.map((item) => (
              <SongRow playSong={playSong} track={item.track} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
