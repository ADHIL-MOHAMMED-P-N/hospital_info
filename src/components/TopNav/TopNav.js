import React, { useState } from "react";
import "./TopNav.css";
import KeyIcon from "@mui/icons-material/Key";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DropDown from "../DropDown/DropDown";

function TopNav() {
  const [options, setOptions] = useState([
    "Incident Management",
    "Dummy text 1",
    "Dummy text 2",
    "Dummy Text3",
  ]);
  return (
    <nav className="top-nav">
      <div className="logo">
        <h2>NAPIER HIS</h2>
      </div>
      <div className="right-menu">
        <div className="dropdown">
          <DropDown options={options} />
        </div>
        <div className="login">
          <h4>
            Logged In As : <span className="person-name">Robert</span>
          </h4>
        </div>
        <div className="icon-menu">
          <div className="icon">
            <KeyIcon />
          </div>
          <div className="icon">
            <PowerSettingsNewIcon />
          </div>
          <div className="icon">
            <NotificationsIcon />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNav;
