import React, { useEffect, useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import axios from "axios";
function Post({ post }) {
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user,setUSer] = useState(null);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/assets/";
  
  const fetchUser = async()=>{
    const response = await axios.get(
      `http://localhost:8800/api/users/${post.userId}`
    );
    setUSer(await response.data)
    console.log(user._id);
  }
  useEffect(()=>{
    fetchUser()
  },[])
  console.log(post)
  // const {username , profilePicture} = user
  const { desc, photo, date, comment,img } = post;
  console.log(PF + post.img);
  // const username = Users.filter((u) => u.id === post.userId)[0].username;
  // const username = Users.filter((u) => u.id === post.userId)[0].username;
  // const profilePic = Users.filter((u) => u.id === post.userId)[0]
  //   .profilePicture;

  const likehandle = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={PF + user?.profilePicture && PF+"person/1.jpeg"}
              alt=""
            />
            <span className="postUserName">{user?.username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={PF+post.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postButtonLeft ">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likehandle}
              alt=""
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              onClick={likehandle}
              alt=""
            />
            <div className="postLikeCounter">{post.likes[0]} likes</div>
          </div>
          <div className="postButtonRight">
            <span className="postCommentText">{comment} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
