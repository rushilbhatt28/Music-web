import React from "react";
import "../assets/Body.css";
import Header from "../Header/Header";
export default function Body({ spotify }) {
  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src="" alt="" />
        <div className="body__infoText">
          <strong>Playlist</strong>
          <h2>Discover weekly</h2>
          <p>description</p>
        </div>
      </div>
    </div>
  );
}
