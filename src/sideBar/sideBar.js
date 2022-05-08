import React from "react";
import "../assets/SideBar.css";
import SidebarOption from "./sidebarOption";
import HomeIcon from "@mui/icons-material/Home";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import { useDataLayerValue } from "../DataLayer";
function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      {/* <div className="sidebar__logo">
      </div> */}
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchRoundedIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;
