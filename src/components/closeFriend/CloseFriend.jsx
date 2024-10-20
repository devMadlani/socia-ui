import React from "react";
import "./closeFriend.css";
function CloseFriend({ user }) {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  // console.log("picu",user.profilePicture)
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={PF + user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
  );
}

export default CloseFriend;
