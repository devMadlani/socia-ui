import "./topbar.css";
import {
  Search,
  Person,
  Chat,
  Notifications,
  Logout,
} from "@mui/icons-material";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { logout } from "../../context/AuthActions";

function TopBar() {
  const {dispatch} = useContext(AuthContext)
  const { user } = useContext(AuthContext);
  const PF = import.meta.env.VITE_PUBLIC_FOLDER;
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/auth/logout",
        {},
        { withCredentials: true }
      );
      console.log(res)
      dispatch(logout())
      navigate("/login")
    } catch (error) {}
  };
  return (
    <div className="topBarContianer">
      <div className="topbarLeft">
        <Link to="/">
          <span className="logo">DevSocial</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            className="searchInput"
            placeholder="Serach for friend, post or any video"
            type="text"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home</span>
          <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to="/messanger">
            <div className="topbarIconItem">
              <Chat />
              <span className="topbarIconBadge">1</span>
            </div>
          </Link>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <div className="flex gap-1 items-center">
          <Link to={`/profile/${user?.username}`}>
            <img
              src={
                user?.profilePicture
                  ? PF + user?.profilePicture
                  : PF + "person/noAvatar.png"
              }
              alt=""
              className="topBarImg "
            />
          </Link>
          <Logout
            onClick={handleLogout}
            className="logout"
            style={{ fontSize: "18px", cursor: "pointer", margin: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}

export default TopBar;
