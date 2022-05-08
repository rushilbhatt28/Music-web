import React from "react";
import "../assets/Player.css";
import Body from "./Body";
import SideBar from "../sideBar/sideBar";
import Footer from "../footer/Footer";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
