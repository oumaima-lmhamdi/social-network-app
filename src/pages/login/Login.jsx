import "./login.css";
import {Add} from '@mui/icons-material';
import axios from "axios";
import { loginFunc } from "../../loginFunc";
import { useContext, useRef } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Login() {

  

  //on submit : 
  const password = useRef();
  const email = useRef();
  const {user, isFetching, error, dispatch } = useContext(AuthContext);
  const handlingClick = (e)=>{
    e.preventDefault();
    loginFunc({email: email.current.value, password: password.current.value},dispatch);
  };
  console.log(user);

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
          <form className="loginBox" onSubmit={handlingClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type="password" required minLength="6" className="loginInput" ref={password} />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
            <span className="plus">+</span> Create an Account
            </button>
          </form>
        </div>
      </div>
    </div>
    </center>
  );
}
