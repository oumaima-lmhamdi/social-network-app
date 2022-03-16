import "./share.css";
import {PermMedia, Label,Room, Mood,Event} from "@mui/icons-material"

export default function Share() {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src="/assets/person/2.jpeg" alt="" />
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