import React, { useContext, useEffect, useState } from "react";
import "./post.css";
import { format } from "timeago.js";
import { MoreVert } from "@mui/icons-material";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currentUser } = useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const { createdAt, desc, comment, img } = post;

  const fetchUser = async () => {
    const response = await axios.get(
      `http://localhost:8800/api/users?userId=${post.userId}`
    );
    setUser(await response.data);
  };

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);
  useEffect(() => {
    fetchUser();
  }, [post?.userId]);

  const likehandle = async () => {
    await axios.put("http://localhost:8800/api/posts/" + post._id + "/like", {
      userId: currentUser._id,
    });
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  // console.log(post.img)
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`profile/${user?.username}`}>
              <img
                className="postProfileImage"
                src={
                  user?.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </Link>
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
            <div className="postLikeCounter">{like} likes</div>
          </div>
          <div className="postButtonRight">
            <span className="postCommentText">
              {comment?.length || "0"} comment
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
