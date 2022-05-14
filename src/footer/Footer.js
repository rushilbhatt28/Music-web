import React, { useEffect } from "react";
import "../assets/Footer.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import RepeatIcon from "@mui/icons-material/Repeat";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import VolumeDownIcon from "@mui/icons-material/VolumeDown";

import { Grid, Slider } from "@mui/material";
import { useDataLayerValue } from "../DataLayer";
import * as actions from "../reducer/constants";

function Footer({ spotify }) {
  const [{ token, item, playing }, dispatch] = useDataLayerValue();
  // useEffect(() => {
  //   spotify.getMyCurrentPlaybackState().then((response) => {
  //     dispatch({
  //       type: actions.SET_PLAYING,
  //       playing: response.is_playing,
  //     });

  //     dispatch({
  //       type: actions.SET_ITEM,
  //       item: response.item,
  //     });
  //   });
  // }, [spotify]);

  const handlePlayPause = () => {
    if (playing) {
      spotify.pause();
      dispatch({
        type: actions.SET_PLAYING,
        playing: false,
      });
    } else {
      spotify.play();
      dispatch({
        type: actions.SET_PLAYING,
        playing: true,
      });
    }
  };

  const skipNext = () => {
    spotify.skipToNext();
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
  };

  const skipPrevious = () => {
    spotify.skipToPrevious();
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
  };

  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src={item?.album.images[0].url}
          alt={item?.name}
        />
        {item ? (
          <div className="footer__songInfo">
            <h4>{item.name}</h4>
            <p>{item.artists.map((artist) => artist.name).join(", ")}</p>
          </div>
        ) : (
          <div className="footer__songInfo">
            <h4>No song is playing</h4>
            <p>...</p>
          </div>
        )}
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" onClick={skipNext} />
        {playing ? (
          <PlayArrowIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayArrowIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}
        <SkipNextIcon className="footer__icon" onClick={skipPrevious} />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
