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
            <span className="postUserName">Lucy Perera</span>
            <span className="postTime">5 mins ago</span>
          </div>
          <div className="postCenter">
            <div className="postCaption">Hello! I am feeling happy.</div>
            <img
              src="https://i.ibb.co/2Sk3Pny/profile-Pic.jpg"
              alt="profile-Pic"
              border="0"
              className="postedImage"
            />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                src="https://i.ibb.co/TMtfqWw/like.png"
                alt="like"
                border="0"
                className="reactionPic"
              />
              <img
                src="https://i.ibb.co/QpSJByy/haha.png"
                alt="haha"
                border="0"
                className="reactionPic"
              />


              <span className="likeCount">Akindu and 1 other</span>
            </div>
            <div className="postBottomRight">
              <span className="commentCount">15 comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
