import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
export default function NavBar() {
  return (
    <div className="navBarBox">
      <div className="navBarLeft">
        <span>fakebook</span>
      </div>
      <div className="navBarCenter">
        <div className="searchBarBox"></div>
        <SearchIcon className="searchIcon" />
        <input placeholder="search for your friend" className="Input"/>
      </div>
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Homepage</span>
          <span className="navBarLink">Profile</span>
        </div>
        <div className="navBarIcons">
          <div className="navBarIcon"> <PersonIcon/><span className="iconTag">3</span></div>
          <div className="navBarIcon"> <MessageIcon/><span className="iconTag">11</span></div>
          <div className="navBarIcon"><SettingsIcon></SettingsIcon><span className="iconTag">1</span> </div>
          <div className="pic"><img src="./public/images/profilePic.jpg" alt="profile-pic" className="profileIcon" /></div>
        </div>
      </div>
    </div>
  );
}
