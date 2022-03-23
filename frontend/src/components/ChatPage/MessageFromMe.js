import './MessageFromMe.css';
import {formatDistance} from 'date-fns';



const MessageFromMe = ({content, createdAt}) => {
    return ( 
        <>
        <p className="from-me">{content}</p>
        <p className='sendedAt-fm'>{formatDistance(new Date(createdAt), new Date(), {addSuffix: true})}</p>
        </>

     );
}
 
export default MessageFromMe;