import React, { useEffect, useState } from "react";
import "./post.css";
import { format } from "timeago.js";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";


function Post({ post }) {
  
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState(null);

  const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/assets/";
  const { createdAt, desc, comment, img, likes } = post;
  //Fethcing Users
  const fetchUser = async () => {
    const response = await axios.get(
      `http://localhost:8800/api/users/${post?.userId}`
    );
    setUser(await response.data);
  };
  useEffect(() => {
    fetchUser();
  }, [post?.userId]);
  const likehandle = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImage"
              src={PF + user?.profilePicture || PF + "person/noAvatar.png"}
              alt=""
            />
            <span className="postUserName">{user?.username}</span>
            <span className="postDate">{format(createdAt)}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={PF + img} alt="" />
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
            <div className="postLikeCounter">{likes.length} likes</div>
          </div>
          <div className="postButtonRight">
            <span className="postCommentText">{comment?.length || "0"} comment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
