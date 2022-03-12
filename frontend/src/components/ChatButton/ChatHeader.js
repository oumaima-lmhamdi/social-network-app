import './ChatHeader.css';
import useFetch from './useFetch';

const ChatHeader = ({friendId, count}) => {

  // const currentUserId = '62292710bfb98b76e60a458b';
  // console.log(conversationInfo);
  // const friendId = conversationInfo.members[0]===currentUserId? conversationInfo.members[1]: conversationInfo.members[0];
  const {data: friendInfo} = useFetch(`http://localhost:8082/users/${friendId}`);

    return ( 

      

        <header>
          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
          <div>
            <h2>Chat with {friendInfo && friendInfo.username}</h2>
            {count && count? <><h3>already {count} messages</h3></>:<><h3>No messages yet</h3></>}
            {/* {!data? <><div>Select a friend to start discussion</div></>: <><ChatHeader friendId={friendId} count={count} /></>} */}
           
          </div>
        </header>

     );
}
 
export default ChatHeader;