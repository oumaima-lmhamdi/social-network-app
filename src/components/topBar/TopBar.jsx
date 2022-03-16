import "./topBar.css";
import { Search, Person, ChatBubble, Notifications,GroupAdd } from '@mui/icons-material';
import {Link} from "react-router-dom";


export default function TopBar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Social Network</span>
      </Link>

      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends or posts "
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
          <span className="topbarLink">Network</span>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <ChatBubble />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/person/2.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}