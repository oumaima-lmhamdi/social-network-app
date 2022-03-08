import './Friend.css';

const Friend = () => {
    return (
        <ul>
            <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg" alt="" />
                <div>
                    <h2>Fname Lname</h2>
                    <h3>
                        <span className="status orange" />
                        offline
                    </h3>
                </div>
            </li>
            <li>
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg" alt="" />
                <div>
                    <h2>Fname Lname</h2>
                    <h3>
                        <span className="status green" />
                        online
                    </h3>
                </div>
            </li>
        </ul>




    );
}

export default Friend;
