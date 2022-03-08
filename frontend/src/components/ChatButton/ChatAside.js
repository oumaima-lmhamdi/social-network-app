import './ChatAside.css';
import Friend from './Friend';

const ChatAside = () => {
    return (

        <aside>
            <header>
                <input type="text" placeholder="search" />
            </header>

            <Friend />

        </aside>

    );
}

export default ChatAside;