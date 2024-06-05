import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import './navBar.css';
export default function NavBar() {
  return (
    <div className="navBarBox">
      
      <div className="navBarLeft">
        <span className="logo">fakebook</span>
      </div>
      
      <div className="navBarCenter">
        <div className="searchBarBox">
          <span className="searchIconSpan" ><SearchIcon className="searchIcon" /></span>
          <span className="searchIconSpan"><input placeholder="search for your friend" className="searchInput"/></span>
        </div>
      </div>
      
      <div className="navBarRight">
        <div className="navBarLinks">
          <span className="navBarLink">Homepage</span>
          <span className="navBarLink">Profile</span>
        </div>
        <div className="navBarIcons">
          <span className="navBarIcon"> <PersonIcon/><span className="iconTag">3</span></span>
          <span className="navBarIcon"> <MessageIcon/><span className="iconTag">11</span></span>
          <span className="navBarIcon"><SettingsIcon></SettingsIcon><span className="iconTag">1</span> </span>
          <span className="pic">            <img src="https://i.ibb.co/2Sk3Pny/profile-Pic.jpg" alt="profile-Pic" border="0" className="profileIcon"/>
</span>
        </div>
      </div>
      
    </div>
  );
}
