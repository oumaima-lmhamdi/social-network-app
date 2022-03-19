import Share from '../share/share'
import Post from '../post/Post'
import { useEffect, useState } from "react";
import axios from "axios";
import './feed.css';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async () =>{
      const res = username
      ? await axios.get("/posts/profile/"+username)
      : await axios.get("posts/timeline/" +user._id);  // fil d actu du user .
                                              
    setPosts(res.data)};
    fetchPosts();
  },[username,user._id]);

  return (
    <div className="feed">
    <div className="feedWrapper">
    <Share />
     {posts.map((p) => (
      <Post key={p._id} post={p}/>
    ))} 
  </div>
  </div>
  );
}
