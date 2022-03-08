import './Chat.css';
import MessageFromThem from './MessageFromThem';
import MessageFromMe from './MessageFromMe';

const Chat = () => {
    return (
        <div id="chat">
            <div class="imessage">
                <MessageFromThem />
                <MessageFromMe/>
                <MessageFromThem />
                <MessageFromMe/>
                <MessageFromThem />
                <MessageFromMe/>
                <MessageFromThem />
                <MessageFromMe/>
            </div>
        </div>
    );
}

export default Chat;