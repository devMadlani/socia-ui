import React, { useEffect, useState } from "react";
import TopBar from "../../components/toolbar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import axios from "axios";
import { useParams } from "react-router-dom";
function Profile() {
  const params = useParams();
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const response = await axios.get(
      `http://localhost:8800/api/users?username=${params.username}`
    );
    setUser(await response.data);
  };
  useEffect(() => {
    fetchUser();
  }, [params.username]);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
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
                src={
                  user?.coverPicture
                    ? PF + user?.coverPicture
                    : PF + "person/noCover.jpg"
                }
                alt=""
              />
              <img
                className="profileUserImg "
                src={
                  user?.profilePicture
                    ? PF + user?.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileInfoDesc">{user?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={params.username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
