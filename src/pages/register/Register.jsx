import "./register.css";
import {Add} from '@mui/icons-material';

export default function Login() {
  return (
    <center>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social Network</h3>
          <span className="loginDesc">
            Connect with people around the world Now.
          </span>
          <h1 className="loginTitle">
            Create your Account
          </h1>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="FirstName" className="loginInput" />
            <input placeholder="LastName" className="loginInput" />

            
            <input placeholder="Email" type="email" className="loginInput" />
            <input placeholder="Password" type="password" className="loginInput" />
            <input placeholder="Confirm Password" type="password" className="loginInput" />
            <input placeholder="BirthDate" type="date" className="loginInput" />


            <button className="loginButton">Register</button>
          </div>
        </div>
      </div>
    </div>
    </center>
  );
}
