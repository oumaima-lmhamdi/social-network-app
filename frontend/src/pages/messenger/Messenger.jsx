import "./messenger.css";
import TopBar from "../../components/topBar/TopBar";
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useRef, useState } from "react";
import CallIcon from '@mui/icons-material/Call';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import {Link} from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";
import { io } from "socket.io-client";

export default function Messenger() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [receiver, setReceiver] = useState({});
  const socket = useRef();
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();
  const currentId= user._id;

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
      
      
    });
  }, []);

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friends/" + currentId);
      setFriends(res.data);
    };

    getFriends();
  }, [currentId]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      setOnlineUsers(
        user.following.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        setConversations(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [user._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMessages();
  }, [messages]);

  useEffect(()=> {
    if(currentChat){

      const func = async() => {
        try {
          const recId = currentChat.members.find(
            (member) => member !== user._id
          );
          const receiver = await axios.get("/users?userId=" + recId);
          //console.log("receiver is" + receiver );
          setReceiver(receiver.data);
        } catch (err) {
          console.log(err);
        }
  
      }
      func();
    }
  },[currentChat]);

  
  useEffect(() => {
    
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    //if statement for not sending empty message.
    if (newMessage){
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );
    
    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId,
      text: newMessage,
    });
    

    try {
      const res = await axios.post("/messages", message);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }};
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <>
      <TopBar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <span className="note">Friends you follow or you had a conversation with:</span>
            
            {conversations.map((c) => (
              <div onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={user} />
                <hr />
              </div>
              
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
        <div className="topOfchat">
        <div className="picAndName">
        <Link to={`/profile/${receiver.username}`}>

      <img
        className="conversationImg"
        src={
          receiver?.profilePicture
            ? PF + receiver.profilePicture
            : PF + "person/noAvatar.png"
        }
        alt=""
      />
          </Link>

      <span className="conversationName">{receiver?.username}</span>
      </div>
      <div className="callDiv">
      <CallIcon htmlColor="blue" className="callIcon" />
      <VideoCallIcon htmlColor="blue" className="callIcon" />
      </div>
    </div>
    <hr />
                <div className="chatBoxTop">
                  
                  
                  {

                  messages.map((m) => (
                    <div ref={scrollRef}>
                      <Message message={m} own={m.sender === user._id}  />
                    </div>
                  ))}
                </div>
                <div className="chatBoxBottom">
                  <textarea
                    className="chatMessageInput"
                    placeholder="Message..."
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                  ></textarea>
                  <button className="chatSubmitButton" onClick={handleSubmit}>
                    Send
                  </button>
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Select a conversation to enter the chat.
              </span>
            )}
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              currentId={user._id}
              setCurrentChat={setCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
}