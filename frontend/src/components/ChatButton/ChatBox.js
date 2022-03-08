import './ChatBox.css';
import Chat from './Chat';
import SendMessage from './SendMessage';
import ChatAside from './ChatAside';
import ChatHeader from './ChatHeader';

const ChatBox = () => {
  return (

    <div id="container">
      <ChatAside/>
      <main>
        <ChatHeader />
        <Chat />
        <SendMessage />
      </main>
    </div>



  );
}

export default ChatBox;