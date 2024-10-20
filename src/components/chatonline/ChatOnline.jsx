import React, { useEffect, useState } from "react";
import "./chatonline.css";
import axios from "axios";
function ChatOnline({ onlineUsers, setCurrentChat, currentId }) {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;

  useEffect(() => {
    const getfriends = async () => {
      const res = await axios.get(
        "http://localhost:8800/api/users/friends/" + currentId
      );
      // console.log(res.data);
      setFriends(res.data);
    };
    getfriends();
  }, [currentId]);
  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [onlineUsers, friends]);
  // console.log(onlineUsers)
  return (
    <div className="chatOnline">
      {onlineFriends.map((o) => (
        <div className="chatOnlineFriend">
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                o?.profilePicture
                  ? PF + o?.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
            />
            <div className="chatonlineBadge"></div>
          </div>
          <span className="chatOnlineName">{o.username}</span>
        </div>
      ))}
    </div>
  );
}

export default ChatOnline;
