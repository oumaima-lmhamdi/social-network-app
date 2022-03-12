import './ChatBox.css';
import Chat from './Chat';
import SendMessage from './SendMessage';
import ChatAside from './ChatAside';
import ChatHeader from './ChatHeader';
import { useState } from 'react';
import useFetch from './useFetch';
import useFetchData from './useFetchData';




const ChatBox = () => {

  const [data, setData] = useState('');
  const childToParent = (childdata) => {
    setData(childdata);
  }
  
  const currentUserId = '62292710bfb98b76e60a458b';
  // console.log(data conversationId);
  const { data: messages } = useFetchData(`http://localhost:8082/messages/${data}`, data);

  // const { data: messages } = useFetch(`http://localhost:8082/messages/${data}`);
  if(messages){var count = Object.keys(messages).length;}

  const {data: allConversations} = useFetch(`http://localhost:8082/conversations/${currentUserId}`);
  // console.log(conversationInfo);
  
  // const [friendId, setFriendId] = useState(null);
  if(allConversations){
    const conv = allConversations.filter(conversation => conversation._id === data )
    if(Object.keys(conv).length>0){
      
      const members= conv[0].members;
      console.log(members)
      var friendId = members[0] === currentUserId? members[1]:members[0];
    
      
    }
  }
  // const {data: friend} = useFetch(`http://localhost:8082/users/${friendId}`)
  // console.log(friend);

 
  
    


  // messages && messages.map(message=>(
  //   console.log(message.sender)
  //   message.sender == 
  // ));

  return (
    <div id="container">
      <ChatAside childToParent= {childToParent}/>
      <main>
        
        {!data? <><div id="chat">Select a friend to start discussion</div></>: <><ChatHeader friendId={friendId} count={count} /><Chat messages = {messages} count={count} /> <SendMessage conversationId={data}/> </>}
        
        
      </main>
    </div>



  );
}

export default ChatBox;