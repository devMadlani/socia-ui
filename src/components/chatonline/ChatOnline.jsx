import React from 'react'
import './chatonline.css'
function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img className="chatOnlineImg" src="/assets/person/1.jpeg" alt="" />
          <div className="chatonlineBadge"></div>
        </div>
        <span className="chatOnlineName">Dev</span>
      </div>
    </div>
  );
}

export default ChatOnline