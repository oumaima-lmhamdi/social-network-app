import './SendMessage.css';
import { useState } from 'react';
const currentUserId='62292710bfb98b76e60a458b';

const sender = currentUserId;






const SendMessage = ({conversationId}) => {
  
  const [content, setContent] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const message = { sender, content, conversationId};
  
    fetch('http://localhost:8082/messages/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(message)
    }).then(() => {
      console.log('message sent')
    })
  }


    return ( 
        <footer>
          <form method="post" className="message-form form" action="">
            <input type="message" name="content" className="message-field" placeholder="Type something..." required value={content} onChange={(e) => setContent(e.target.value)} />
            <input type="hidden" name="conversationId" value={conversationId}></input>
            <input type="hidden" name="sender" value={currentUserId}></input>
            <input type="submit" className="message-submit button" value="send" onClick={handleSubmit}/>
          </form>
        </footer>
     );
}
 
export default SendMessage;