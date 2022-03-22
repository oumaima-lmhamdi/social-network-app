import './poste.css'
import { MoreVert, ChatBubbleOutline ,FavoriteBorder , ThumbUpAltOutlined , FaPlayCircle , FaRegFileAlt } from "@material-ui/icons";
import axios from "axios";
import * as timeago from 'timeago.js';
import { format } from "timeago.js";
import { useState } from 'react';


  const likePoste= async(e, color) =>{
    e.preventDefault();
    try {
      await axios.put("http://localhost:8082/api/posts/like").then(console.log("ok"))
     
    }
    catch (err) {console.log("non")}}
  

const deletePoste = async (e) => {
  e.preventDefault();
 
   try {
     // await axios.post("http://localhost:8082/api/posts",cors, newPost);
     //await axios.delete("http://localhost:8082/api/posts/62263cd134054dd462db8197").then(console.log('ok'))
     await axios.delete(`http://localhost:8082/api/posts/${e.currentTarget.id}`).then(console.log('ok'))    
    
  }
   catch (err) {console.log("non")}}
const post=({post}) =>{


  
  return (
post.map((post ,_id) =>(

   <div className="post">

        <div className="postHeader">
          <div className="postHeaderLeft">
           <div className='C11'> <img className="picUser" src="/assets/person/4.jfif"  alt="" /></div>
            <div className='C13'>
              <div className="postUsername">
                  {post.posterId}
              </div>
            <div className="postDate"> {format(post.createdAt)}</div>
          
          </div> 
          </div>
          <div className="postHeaderRight">
            <MoreVert />
          </div>
        </div>
        <div className="postContent">
          <span className="postText">{post.Text}</span>
        <img className="postImg" src='/assets/person/4.jfif' alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <button onClick={likePoste("red")}><div><ThumbUpAltOutlined/></div> {post.likers.length}{" "}</button>
          {/* <i
                onClick={likePoste()}
                className="fa fa-heart text-danger mr-2"
              ></i> */}
              <div>
              {/* { isLiked === false && (
        <img src="./assets/like.png" onClick={likePoste} alt="like" />
      )} */}
      {/* { isLiked && (
        <img src="./assets/love.jfif" onClick={unlike} alt="unlike" />
      )} */}
        
      </div>
           <div> <FavoriteBorder/></div>
           <div><ChatBubbleOutline/></div> 
         <button id={post._id} onClick={deletePoste}>Delete</button>
         
        </div>
      </div>
      </div>)
  ))
}





export default post;
















