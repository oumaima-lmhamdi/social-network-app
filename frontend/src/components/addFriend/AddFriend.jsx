import "./addFriend.css";

export default function addFriend({user}) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={PF+user.profilePicture} alt="" />
      </div>
      <span className="rightbarUsername">{user.username}</span>
      <div className="rightAline">
          <button className="addFriendButton">+Add Friend</button>
      </div>
    </li>
  );
}