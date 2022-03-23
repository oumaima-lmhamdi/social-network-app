import "./register.css";
import axios from "axios";
import {Add} from '@mui/icons-material';
import {useRef} from "react"; 
import { useNavigate } from "react-router";

export default function Login() {
  const username = useRef();
  const password = useRef();
  const retypedpassword = useRef();
  const email = useRef();
  const birthdate = useRef();
  const navigate = useNavigate(); // redirect users to any other pages.

  const handlingClick = async (e)=>{
    e.preventDefault();
    //checking matching passwords.
    if (retypedpassword.current.value !== password.current.value) {
      retypedpassword.current.setCustomValidity("Passwords aren't matching!"); // an alert pop up
    } 
    else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        await axios.post("/auth/register", user);
        navigate("/login");

        //console.log(user); 
      }catch(err){
        console.log(err);
    }
  };
}
  



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
          <form className="loginBox" onSubmit={handlingClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required type="email" ref={email} className="loginInput" />
            <input placeholder="Password" required minLength="8" type="password" ref={password} className="loginInput" />
            <input placeholder="Confirm Password" required type="password" ref={retypedpassword} className="loginInput" />
            <input placeholder="BirthDate" required type="date" ref={birthdate} className="loginInput" />
            <button className="loginButton" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
    </center>
  );
}

