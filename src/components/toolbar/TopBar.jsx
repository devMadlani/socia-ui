import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import {Link} from "react-router-dom"
function TopBar() {
  
  const PF = import.meta.env.VITE_PUBLIC_FOLDER || "/assets/";
  return (
    <div className="topBarContianer">
      <div className="topbarLeft">
        <Link to="/"><span className="logo">DevSocial</span></Link>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon"/>
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
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={`${PF}person/1.jpeg`} alt="" className="topBarImg w-" />
      </div>
    </div>
  );
}

export default TopBar;
