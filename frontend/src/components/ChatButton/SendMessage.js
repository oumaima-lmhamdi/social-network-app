import './SendMessage.css';

const SendMessage = () => {
    return ( 
        <footer>
          <form method="post" class="message-form form" action="">
            <input type="message" class="message-field" placeholder="Type something..." value="" name="s" title="" />
            <input type="submit" class="message-submit button" value="send" />
          </form>
        </footer>
     );
}
 
export default SendMessage;