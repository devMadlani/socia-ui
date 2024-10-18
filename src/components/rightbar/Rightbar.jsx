import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Rightbar({ user }) {
  const HomeRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;

    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdatImg" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText">
            <b>Mohit</b> and <b>2 others friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src={`${PF}/ad.png`} alt="" />
        <h4 className="rightBarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((user) => (
            <Online user={user} key={user?.id} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER;
    const [friends, setFriends] = useState();
    useEffect(() => {
      const getFriends = async () => {
        try {
          const friendList = await axios.get(
            "http://localhost:8800/api/users/friends/" + user?._id
          );
          setFriends(friendList.data);
        } catch (error) {}
      };
      getFriends();
    }, [user?._id]);
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightbarInfo ">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">
              {user.relationship === 1
                ? "single"
                : user.relationship === 1
                ? "Married"
                : " "}
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends </h4>
        <div className="rightbarFollowings ">
          {friends?.map((friend) => (
            <Link to={"/profile/"+friend.username}>
              <div className="rightbarFollowing">
                <img
                  className="rightbarFollowingImg"
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                />
                <span className="rightFollowingName">{friend?.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
