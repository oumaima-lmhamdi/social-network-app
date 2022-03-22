import React from 'react';
import {PermMedia, InsertPhoto, VideoLibrary, EmojiEmotions, Label , Room} from '@material-ui/icons';
import { useRef as UseRef} from 'react';
import { useState as UseState } from 'react';
import axios from 'axios';

export default function share() {
    //var cors = require('cors');
    const posterId = UseRef();
   
    const addPoste = async (e) => {
        e.preventDefault();
        const newPost = {
          posterId: posterId.current.value,
        };
         try {
           await axios.post("http://localhost:8082/api/posts/" ,  newPost)    
            window.location.reload();
          
         }
         catch (err) {console.log("non")}}
  
   
         return (
            <div className="newPost">
                   <form    onSubmit={addPoste} >
                   <div className="test">
                                <div className="postHeader">
                                    <img className="picUser"/* src="/assets/person/4.jfif" */alt="cc" />                            
                                    <textarea  cols="50" rows="3" style={{resize:'none' , border:'none'}} placeholder="What's on your mind Lobna"
                                    className="postInput"  ref={posterId}
                                    ></textarea> 
                                </div>
             
                                <div className="contentOptions">
                                        <div className="contentOption">
                                            <InsertPhoto  htmlColor="#09BFF7"/>
                                            <div className="postOptionText">Photo</div>
                                        </div>         
                                <div className="contentOption">
                                    <VideoLibrary  htmlColor="#FF012B"/>
                                    <div className="postOptionText">Video</div>
                                    </div>
                    
                                <div className="postMedia">              
                                        <button className="shareButton" type ='submit'>Share</button>
                                </div>      
                
    
            </div>
           </div>
            </form>
          </div>
        
  )}

/*import axios from 'axios';
import './share.css';
import {PermMedia, InsertPhoto, VideoLibrary, EmojiEmotions, Label , Room} from '@material-ui/icons';
import { useState,  useContext } from 'react';
import { useState as UseState, useRef as UseRef } from "react";

export default function share() {
   // const [posterId, setPosterId]= useState("");
   const posterId = UseRef();
   var cors = require('cors')

    const addPost = async (e) => {
        e.preventDefault();
        const newPost = {
          posterId: posterId.current.value,
        };
         try {
            await axios.post("http://localhost:8082/api/posts",cors, newPost);
            window.location.reload();
            console.log('ok');
        }
         catch (err) {console.log("non")}
        };
        /*onChange={(e) => setPosterId(e.target.value)*/

  /*return (
   <div className="newPost">
        <div className="postHeader">
          <img className="picUser" src="/assets/person/4.jfif" alt="" />
          <form    onSubmit={addPost}>

         <textarea  cols="50" rows="2" placeholder="What's on your mind Lobna"
            className="postInput"  ref={posterId}
            ></textarea> 

<hr/>
          <div className="contentOptions">
                <div className="contentOption">
                    <InsertPhoto  htmlColor="#09BFF7"/>
                    <div className="postOptionText">Photo</div>
                </div>
                <hr/>
                <div className="contentOption">
                
                <VideoLibrary  htmlColor="#FF012B"/>
 
                <div className="postOptionText">Video</div>
                </div>
                                <hr/>

                <div className="postMedia">
           
           <button className="shareButton" type ='submit'>Share</button>
       </div>      

               
            </div>     </form>

        </div>
       
       
      </div>
    /*
     <div>
    <div className="share">
        <div className="shareTop">
        <div className="shareText">
            <span><img src="/assets/person/2.jfif" alt="" className="imgPerson"/></span>
            <span className="Text"><input type="text" placeholder="what's in your mind" className="text" /></span>
        </div>
        </div>
        <div className="shareBottom">
        <div className="shareOptions">
            <span className="media"><PermMedia htmlColor='orange'/> Photo or Video</span>
            <span className="Feelings"><EmojiEmotions htmlColor='yellow'/>Feelings</span>
            <span className="Tag"><AddLocation/>Locations</span>
            <span className='C2'><button  className="buttonShare"> Share</button></span>
        </div>
        </div>
        </div>
        <div className ="post">
            <div className="headerPost">
                <img src="/assets/person/2.jfif" alt="" className="imgPerson"/>
                <div className="C">
                <div className="userName">LOBNA AMESKANE</div>
                <div className="time">2 heures </div>
                </div>
                <List className="Options"/>
                
            </div>
            <div className="postBody"><img src="/assets/person/5.jfif" className='PostMedia' /></div>
            <div className="postReaction"><img src="/assets/love.jfif" className='IconReaction' alt="" />10
            <img src="/assets/like.png" className='IconReaction' alt="" />5
            </div>
        </div>
        <div className ="post">
            <div className="headerPost">
                <img src="/assets/person/2.jfif" alt="" className="imgPerson"/>
                <div className="C">
                <div className="userName">LOBNA AMESKANE</div>
                <div className="time">2 heures </div>
                </div>
                <List className="Options"/>
                
            </div>
            <div className="postBody"><img src="/assets/person/5.jfif" className='PostMedia' /></div>
            <div className="postReaction"><img src="/assets/love.jfif" className='IconReaction' alt="" />10
            <img src="/assets/like.png" className='IconReaction' alt="" />5
            </div>
        </div>
        <div className ="post">
            <div className="headerPost">
                <img src="/assets/person/2.jfif" alt="" className="imgPerson"/>
                <div className="C">
                <div className="userName">LOBNA AMESKANE</div>
                <div className="time">2 heures </div>
                </div>
                <List className="Options"/>
                
            </div>
            <div className="postBody"><img src="/assets/person/5.jfif" className='PostMedia' /></div>
            <div className="postReaction"><img src="/assets/love.jfif" className='IconReaction' alt="" />10
            <img src="/assets/like.png" className='IconReaction' alt="" />5
            </div>
        </div>
        <div className ="post">
            <div className="headerPost">
                <img src="/assets/person/2.jfif" alt="" className="imgPerson"/>
                <div className="C">
                <div className="userName">LOBNA AMESKANE</div>
                <div className="time">2 heures </div>
                </div>
                <List className="Options"/>
                
            </div>
            <div className="postBody"><img src="/assets/person/5.jfif" className='PostMedia' /></div>
            <div className="postReaction"><img src="/assets/love.jfif" className='IconReaction' alt="" />10
            <img src="/assets/like.png" className='IconReaction' alt="" />5
            </div>
        </div>
    </div>*/
 
 /*
  )
}
*/