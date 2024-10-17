import React from 'react'
import "./share.css"
import {  PermMediaSharp } from "@mui/icons-material";
function ShareComponet() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/1.jpeg"
            alt=""
          />
          <input className="shareInput" placeholder="What's in your mind" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaSharp className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShareComponet;