import React from "react";
import "./addPost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';
export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img
            src="https://i.ibb.co/2Sk3Pny/profile-Pic.jpg"
            alt="profile-Pic"
            border="0"
            className="addPostPic"
          />
          <input
            placeholder="what's in your mind..?"
            type="text"
            className="addPostInput"
          />
        </div>
        <hr className="addPostHr" />
        <div className="addPostBottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <InsertPhotoIcon htmlColor="orange"className="addPhoto" />
              <span className="addPostOptionText">Add Photo/Video</span>
            </div>
            <div className="addPostOption">
              <AddLocationIcon htmlColor="red"className="addPhoto" />
              <span className="addPostOptionText">Add Location</span>
            </div>
            <div className="addPostOption">
              <LocalOfferIcon htmlColor="blue" className="addPhoto" />
              <span className="addPostOptionText">Add Tag</span>
            </div>
            <div className="addPostOption">
              <LiveTvIcon htmlColor="tomato"className="addPhoto" />
              <span className="addPostOptionText">Go Live</span>
            </div>
          </div>
          <button className="PostButton">
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
