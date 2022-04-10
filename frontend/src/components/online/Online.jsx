import { useState, useEffect } from "react";
import "./online.css";
import axios from "axios";


export default function Online({userId}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user,setUser] = useState(null);


  useEffect(() => {
  const conts = async () => { try{
    const res = await axios.get("/users?userId=" + userId);
    setUser(res.data);



  }
  catch(err){
    console.log(err);

  }}
},[userId]);

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "person/noAvatar.png"
                  } alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{user.username}</span>
    </li>
  );
}
