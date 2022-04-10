import React from 'react'
import TopBar from "../../components/topBar/TopBar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Search, Person, ChatBubble, Notifications,GroupAdd,Logout } from '@mui/icons-material';
import {Link} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import FollowedFriend from "../../components/followedFriend/FollowedFriend";

import axios from "axios";
import Post from '../../components/post/Post'
import { useContext, useState } from "react";

import "./home.css";
import AddFriend from '../../components/addFriend/AddFriend';
import SearchedUser from '../../components/searchedUser/SearchedUser';





export default function Home() {
  const {user,dispatch} = useContext(AuthContext);
  const [searchfield,setsearchfield] = useState("");
  const [searchedPosts,setsearchedPosts] = useState([]);
  const [followings,setFollowings] = useState([]);
  const [searchedUsers,setsearchedUsers] = useState([]);
  const [openPosts,setopenPosts] = useState(true);
  const [openUsers,setopenUsers] = useState(true);






  const handleChange = e => {
    setsearchfield(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try{ 
      
      const res1 = await axios.get(`/posts?desc=${searchfield}`);
      const res2 = await axios.get(`/users/search?username=${searchfield}`);

      console.log(res1.data);
      console.log(res2.data);

      setsearchedPosts(
        res1.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        })
      );
      setsearchedUsers(res2.data);
      
     }
    catch(err){
      console.log(err);
    }
    

  } 

  

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const logoutCall = async (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
  const handleLogoutClick = () => {
    logoutCall(
      dispatch
    );
  };
  const handlePeopleFilter = () => {
    setopenPosts(false);
    setopenUsers(true);
    
    
  };
  const handlePostsFilter = () => {
    setopenUsers(false);
    setopenPosts(true);
  };

  

  if (searchfield) {

    return (
      <>
      <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Social Network</span>
      </Link>

      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <form onSubmit={handleSearch}>
          <input
            placeholder="Friends or posts"
            type="search"
            className="searchInput"
            onChange={handleChange}
          />
          
          </form>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          
          <Link to="/" style={{textDecoration:"none",color:"white"}}>
          <span className="topbarLink">My Feed</span>
      </Link>
      <Link to="/messenger" style={{textDecoration:"none",color:"white"}}>
          <span className="topbarLink">My Chats</span>
      </Link>
      <Link to="/" style={{textDecoration:"none",color:"white"}}>
          
          <button className="logout" onClick={handleLogoutClick} >Logout</button>
          </Link>

        </div>
        <div className="topbarIcons">
          
          <div className="topbarIconItem">
            <ChatBubble />
            <span className="topbarIconBadge">1</span>
          </div>
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
      
      <div className="container">
              <Sidebar/> 
          
      <div className="feed">
      <div className="feedWrapper">
        <div className="filterDiv">
          <button className="filterButton" id="peopleBtn" onClick={handlePeopleFilter}>People</button>
          <button className="filterButton" onClick={handlePostsFilter}>Posts</button>
        </div>

      <div className="feedAddFriend">
      {openUsers && (
        searchedUsers.filter(item => (user.following.includes(item._id))).map((u) => (
          <FollowedFriend key={u.id} user={u}/>

        )))}
      </div>

      <div className="feedAddFriend">
      {openUsers && (
        searchedUsers.filter(item => (item.username !== user.username)).filter(item => (!(user.following.includes(item._id)))).map((u) => (
          <SearchedUser key={u.id} user={u}/>

        )))}
      </div>
      <hr />
        
      
      {openPosts && (
      searchedPosts.map((p) => (
        <Post key={p._id} post={p} className="searchedPost"/>
      )))}
      </div>
      </div>
              
              <Rightbar/>
              
       </div>
    </>

    )
  }
 ///////////////////////////
    else{
    return (
        <div>
        <>
        <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Social Network</span>
      </Link>

      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <form onSubmit={handleSearch}>
          <input
            placeholder="Friends or posts"
            type="search"
            className="searchInput"
            onChange={handleChange}
          />
          
          </form>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          
          <Link to="/" style={{textDecoration:"none",color:"white"}}>
          <span className="topbarLink">My Feed</span>
      </Link>
      <Link to="/messenger" style={{textDecoration:"none",color:"white"}}>
          <span className="topbarLink">My Chats</span>
      </Link>
      <Link to="/" style={{textDecoration:"none",color:"white"}}>
          
          <button className="logout" onClick={handleLogoutClick} >Logout</button>
          </Link>

        </div>
        <div className="topbarIcons">
          
          <div className="topbarIconItem">
            <ChatBubble />
            <span className="topbarIconBadge">1</span>
          </div>
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
            <div className="container">
              <Sidebar/>
              <Feed/>
              <Rightbar/>
              
            </div>
        </>
        </div>)}
}