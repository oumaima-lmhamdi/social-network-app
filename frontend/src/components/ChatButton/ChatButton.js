import React, { useState } from 'react';
import './ChatButton.css';
import ChatBox from './ChatBox';







const ChatButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const [initialMessage, setInitialMessage] = useState('');


    // const parentToChild = () => {
    //     setInitialMessage("No message to show");
    //   }

    const handleClick = () =>{
        setIsVisible(!isVisible);
        // parentToChild()
    }
    

    return (


        <div className="wrapper">
            <button className="btn btn--chat js-chat" onClick={handleClick}><i className={isVisible ? "fas fa-times" : "fas fa-comment"}></i></button>
            <div className={isVisible ? "chatbox chatbox--is-visible" : "chatbox"}>
                <ChatBox />
            </div>
        </div>

    );
}



export default ChatButton;