import React from "react";
import "../assets/Player.css";
import Body from "./Body";
import SideBar from "../sideBar/sideBar";
import Footer from "./Footer";
import Header from "../Header/Header";
function Player({ spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <SideBar />
        <Body />
        <Header />
      </div>
      <Footer />
    </div>
  );
}

export default Player;
