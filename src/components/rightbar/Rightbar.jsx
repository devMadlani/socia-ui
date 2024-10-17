import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdatImg" src="/assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Mohit</b> and <b>2 others friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ad.png" alt="" />
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
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightbarInfo ">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends </h4>
        <div className="rightbarFollowings ">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/1.jpeg"
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/2.jpeg"
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/3.jpeg"
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/4.jpeg"
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/5.jpeg"
              alt=""
            />
            <spam className="rightFollowingName">Dev madlani</spam>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/6.jpeg"
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
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}

export default Rightbar;
