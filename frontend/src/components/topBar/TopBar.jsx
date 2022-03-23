import "./topBar.css";
import { Search, Person, ChatBubble, Notifications,GroupAdd,Logout } from '@mui/icons-material';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";



export default function TopBar() {
  const {user,dispatch} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
  const handleLogoutClick = () => {
    logoutCall(
      dispatch
    );
  };
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
          <Link to="/" style={{textDecoration:"none",color:"white"}}>
          <span className="topbarLink">Timeline</span>
      </Link>
      <Link to="/" style={{textDecoration:"none",color:"white"}}>
          
          <button className="logout" onClick={handleLogoutClick} >Logout</button>
          </Link>

        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <Link to="/chat" style={{textDecoration:"none"}}>
          <div className="topbarIconItem">
            <ChatBubble />
            <span className="topbarIconBadge">1</span>
          </div>
          </Link>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        
        <Link to={`/profile/${user.username}`}>
        <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }
            alt=""
            className="topbarImg"
          />
        </Link>

      </div>
    </div>
  );
}