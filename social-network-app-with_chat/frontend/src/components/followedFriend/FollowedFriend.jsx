import "./followedFriend.css";
import {axios} from "axios";
import {Link} from "react-router-dom";
import {useState, useContext} from "react";
import { AuthContext } from "../../contexts/AuthContext";
export default function FollowedFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);
  

    
    

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
      <Link to={`/profile/${user.username}`} style={{textDecoration:"none",color:"white"}}>

        <img className="rightbarProfileImg" src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  } alt="" />
      </Link>

      </div>
      <span className="rightbarUsername">{user.username}</span>
      <div className="rightAline">
          <button className="followedFriendButton" >Followed</button>
      </div>
    </li>
  );
}