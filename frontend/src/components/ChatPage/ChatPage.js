import React, { useState } from 'react';
import './ChatPage.css';
import ChatBox from './ChatBox';
import TopBar from "../../components/topBar/TopBar";







const ChatPage = () => {
    // const [isVisible, setIsVisible] = useState(false);
    // // const [initialMessage, setInitialMessage] = useState('');


    // // const parentToChild = () => {
    // //     setInitialMessage("No message to show");
    // //   }

    // const handleClick = () =>{
    //     setIsVisible(!isVisible);
    //     // parentToChild()
    // }
    

    return (
        <>
        <TopBar/>
       
        <div className="wrapper"> 
            <ChatBox />
            {/* <button className="btn btn--chat js-chat" onClick={handleClick}><i className={isVisible ? "fas fa-times" : "fas fa-comment"}></i></button> */}
            
            {/* <div className={isVisible ? "chatbox chatbox--is-visible" : "chatbox"}>
                
            </div> */}
        </div> </>

    );
}



export default ChatPage;