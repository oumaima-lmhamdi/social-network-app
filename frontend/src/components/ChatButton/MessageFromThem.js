import './MessageFromThem.css';
import {formatDistance} from 'date-fns';


const MessageFromThem = ({content, createdAt}) => {
    return ( 
        <>
        <p className="from-them">{content}</p>
        <p>{formatDistance(new Date(createdAt), new Date(), {addSuffix: true})}</p> 
        </>

     );
}
 
export default MessageFromThem;