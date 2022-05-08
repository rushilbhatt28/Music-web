import React from "react";
import "../assets/sidebarOption.css";
function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
     {Icon && <Icon className="sideBarOption__icon" /> }
     {Icon ? <h4>{title}</h4>:<p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
