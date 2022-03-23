import './ChatAside.css';
import Friend from './Friend';
import useFetch from './useFetch';

const ChatAside = ({childToParent}) => {
    const currentUserId = '62292710bfb98b76e60a458b';
    const { data: conversations } = useFetch(`http://localhost:8082/conversations/${currentUserId}`);

   

    return (

        <aside>
            <header>
                <input type="text" placeholder="search" />
            </header>
            {/* { error && <div>{ error }</div> }
            { isPending && <div>Loading...</div> } */}
            {/* {console.log(conversations)} */}



            <ul>
            {conversations && conversations.map(conversation=>(

                <li id={conversation._id}  onClick={() => childToParent(conversation._id)}>
                { <Friend conversation={conversation} currentUserId={currentUserId} /> }
                </li>
            ))
        }
        </ul>
            {/* {console.log(friends)} */}
            {/* { friends && friends.map(friend=>{
                 { friends && <Friend friend={friend} /> }
            })} */}
        </aside>

    );
}

export default ChatAside;