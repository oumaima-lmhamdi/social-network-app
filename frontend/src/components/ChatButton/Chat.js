import './Chat.css';
import MessageFromThem from './MessageFromThem';
import MessageFromMe from './MessageFromMe';

const Chat = ({messages, count}) => {

    const currentUserId = "62292710bfb98b76e60a458b";


    

    

    
    return (

        <div id="chat">
            <div class="imessage">

                {count? <>{messages && messages.map(message=>(
        message.sender === currentUserId? <MessageFromMe content = {message.content} createdAt = {message.createdAt}/>:<MessageFromThem content = {message.content} createdAt = {message.createdAt}/>
    ))}</>:<>Send a message to start a conversation</>}

                
            
                {/* <MessageFromThem />
                
                <MessageFromThem />
                <MessageFromMe/>
                <MessageFromThem />
                <MessageFromMe/>
                <MessageFromThem />
                <MessageFromMe/> */}
            </div>
        </div>
    );
}

export default Chat;