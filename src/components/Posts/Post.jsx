import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
function Post({ post }) {
  const [likes, setLikes] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);


  const { desc, photo, date, comment } = post;
  const username = Users.filter((u) => u.id === post.userId)[0].username;
  const profilePic = Users.filter((u) => u.id === post.userId)[0]
    .profilePicture;

    const likehandle=()=>{
      setLikes(isLiked ? likes-1 : likes+1)
      setIsLiked(!isLiked)
    }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img className="postProfileImage" src={profilePic} alt="" />
            <span className="postUserName">{username}</span>
            <span className="postDate">{date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{desc}</span>
          <img className="postImg" src={photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postButtonLeft ">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={likehandle}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={likehandle}
              alt=""
            />
            <div className="postLikeCounter">{likes} likes</div>
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
