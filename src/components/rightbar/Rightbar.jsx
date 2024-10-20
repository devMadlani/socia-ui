import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
function Rightbar({ user }) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser?.following.includes(user?._id)
  );
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const [friends, setFriends] = useState();
// console.log(followed)

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          "http://localhost:8800/api/users/friends/" + currentUser?._id.$oid
        );
        setFriends(friendList.data);
      } catch (error) {}
    };
    getFriends();
  }, [user?._id]);
  const handleFollow = async () => {
    try {
      if (followed) {
        await axios.put(
          "http://localhost:8800/api/users/" + user._id + "/unfollow",
          { userId: currentUser._id.$oid }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(
          "http://localhost:8800/api/users/" + user._id + "/follow",
          { userId: currentUser._id.$oid }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (error) {
      console.log(error);
    }
    setFollowed(!followed);
  };
  const HomeRightbar = () => {
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
    return (
      <>
        {user?.username !== currentUser.username && (
          <button className="rightbarFollowBtn" onClick={handleFollow}>
            {followed ? "Unfollow" : "Follow"}
          </button>
        )}
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
          {user?.username === currentUser.username &&
            friends?.map((friend) => (
              <Link to={"/profile/" + friend.username} key={friend._id}>
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
