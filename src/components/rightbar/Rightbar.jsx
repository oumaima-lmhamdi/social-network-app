import "./rightbar.css";
import { Users } from "../../dummyData";
import { Posts } from "../../dummyData";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../contexts/AuthContext";
import {Link} from "react-router-dom";

import Online from "../online/Online";
import AddFriend from "../addFriend/AddFriend";


export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser, dispatch } = useContext(AuthContext);
  
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendArray = await axios.get("/users/friends/" + user._id);
        setFriends(friendArray.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const HomeRightbar = () => {
    return (
      <>
        <div className="addContainer">
          <h4 className="rightbarTitle">Expand your network</h4>
          <ul className="rightbarFriendList">
          {Users.map((u) => (
            <AddFriend key={u.id} user={u} />
          ))}
        </ul>
        </div>
        
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">About User</h4>
        <div className="rightbarInfo">
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
            <span className="rightbarInfoValue">{user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}</span>
          </div>
        </div>
        <div>
        <h4 className="rightbarTitle">Photos</h4>
        <div className="rightbarFollowings">
          <div className="rightbarImage">
            <img
              src={`${PF}post/1.jpeg`}             
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarImage">
            <img
              src={`${PF}post/2.jpeg`}             
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarImage">
            <img
              src={`${PF}post/3.jpeg`}             
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          <div className="rightbarImage">
            <img
              src={`${PF}post/4.jpeg`}             
              alt=""
              className="rightbarFollowingImg"
            />
          </div>
          </div>

        

        </div>
        <h4 className="rightbarTitle">Friends</h4>
        <div className="rightbarFollowings">
        {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
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
