import './Friend.css';
import useFetch from './useFetch';

const Friend = ({ conversation, currentUserId }) => {

    const friendId = conversation.members[0]===currentUserId? conversation.members[1]:conversation.members[0];
    const {data: friendInfo} = useFetch(`http://localhost:8082/users/${friendId}`);
    const conversationId = conversation._id;
    const {data: messages} = useFetch(`http://localhost:8082/users/${conversationId}`);

    
// console.log(conversationId);



    return (

       <div>
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
            <div>
                <h2>{friendInfo && friendInfo.username}</h2>
                <h3>
                    <span className="status orange" />
                    offline
                </h3>
            </div>
            </div>

    );
}






// const Friendd = ({ friends }) => {
//     return (
//       <div>
//         {friends.map(friend => (
//             <h1 key={friend.id}>Hello</h1>

//         ))}
//       </div>
//     );
//   }

export default Friend;



