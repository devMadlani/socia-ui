import React, { useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";
function Conversation({ conversation, currentuser }) {
  const [user, setUser] = useState(null);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
 
  useEffect(() => {
    const friendId = conversation.members?.find((member) => member !== currentuser._id.$oid);
    const getUser = async(req,res)=>{
      try {
        const res = await axios.get("http://localhost:8800/api/users?userId="+friendId);
        setUser(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    getUser()
  }, [currentuser,conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.profilePicture
            ? PF + user?.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
}

export default Conversation;
