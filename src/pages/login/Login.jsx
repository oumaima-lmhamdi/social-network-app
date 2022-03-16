import "./login.css";
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
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            <span className="plus">+</span> Create an Account
            </button>
          </div>
        </div>
      </div>
    </div>
    </center>
  );
}
