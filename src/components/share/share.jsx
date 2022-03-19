import "./share.css";
import {PermMedia, Label,Room, Mood,Event} from "@mui/icons-material"
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            } alt="" />
          <input
            placeholder="What's on your mind?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="red" className="shareIcon"/>
                    <span className="shareOptionText">Media</span>
                </div>
                
                <div className="shareOption">
                    <Room htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <Event htmlColor="#FBC02D" className="shareIcon"/>
                    <span className="shareOptionText">Event</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Mood htmlColor="rebeccapurple" className="shareIcon"/>
                    <span className="shareOptionText">Emotions</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}