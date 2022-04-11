import "./message.css";
import { format } from "timeago.js";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";




export default function Message({ message, own ,owner }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);


  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  );
}