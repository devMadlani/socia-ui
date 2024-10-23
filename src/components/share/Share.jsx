import React, { useContext, useEffect, useRef, useState } from "react";
import "./share.css";
import {
  Cancel,
  Delete,
  EmojiEmotions,
  Label,
  PermMediaSharp,
  Room,
} from "@mui/icons-material";
import axios from "axios";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function ShareComponet() {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef(null);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  console.log("share",user)
  // const params = useParams();
  // const [user, setUser] = useState(null);

  //  const fetchUser = async () => {
  //   const response = await axios.get(
  //     `http://localhost:8800/api/users?username=${params.username}`
  //   );
  //   setUser(await response.data);
  // };
  // useEffect(() => {
  //   fetchUser();
  // }, [params.username]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      data.append("file", file);
      try {
        const uploadRes = await axios.post(
          "http://localhost:8800/api/upload",
          data
        );
        const fileNameWithTimestamp = uploadRes.data.fileName;
        newPost.img = fileNameWithTimestamp;
      } catch (error) {
        console.log(error);
      }
    }
    try {
      await axios.post("http://localhost:8800/api/posts", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src={
              user?.profilePicture
                ? PF + user?.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt="Pic"
          />
          <input
            ref={desc}
            className="shareInput"
            placeholder={`What's in your mind ${user?.username}?`}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Delete
              className="shareCancelImg text-gray-700"
              onClick={() => setFile(null)}
            />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMediaSharp htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or video</span>
              <input
                className="hidden"
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareBtn" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShareComponet;
