import React from 'react'
import "./online.css"

function Online({user}) {
  
  const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/assets/";
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileContainer">
        <img className="righbarProfileImg" src={PF+user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}

export default Online