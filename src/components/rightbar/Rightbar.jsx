import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({ user }) {
  const HomeRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/assets/";

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
            <Online user={user} key={user.id} />
          ))}
        </ul>
      </>
    );
  };
  const ProfileRightbar = () => {
    const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/assets/";

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
              {user.relationship === 1 ? "single" : user.relationship === 1 ?"Married" : " "}
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends </h4>
        <div className="rightbarFollowings ">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/1.jpeg`}
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/2.jpeg`}
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/3.jpeg`}
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/4.jpeg`}
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/5.jpeg`}
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src={`${PF}person/6.jpeg`}
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
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
