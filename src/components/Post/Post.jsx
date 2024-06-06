import React from "react";
import "./post.css";
export default function Post() {
  return (
    <div>
      <div className="post">
        <div className="postContainer">
          <div className="postTop">
            <img
              src="https://i.ibb.co/2Sk3Pny/profile-Pic.jpg"
              alt="profile-Pic"
              border="0"
              className="postImage"
            />
            <span className="postUserName">Sanuji Samarakoon</span>
            <span className="postTime">5 mins ago</span>
          </div>
          <div className="postCenter">
            <div className="postCaption">
                Hello! I am Piyumra.
            </div>
            <img
              src="https://i.ibb.co/2Sk3Pny/profile-Pic.jpg"
              alt="profile-Pic"
              border="0"
              className="postedImage"
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
