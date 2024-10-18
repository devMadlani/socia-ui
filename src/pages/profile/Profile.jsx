import React from "react";
import TopBar from "../../components/toolbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
function Profile() {
  const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/assets/";
  return (
    <>
      <TopBar />
      <div className="flex">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.jpeg`}
                alt=""
              />
              <img
                className="profileUserImg "
                src={`${PF}person/7.jpeg`}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Dev R Madlani</h4>
              <span className="profileInfoDesc">Hello my Friendssss</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
