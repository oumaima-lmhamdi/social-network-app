import './Nav.css';
import {Notifications , Home , Message, GroupAdd} from '@material-ui/icons';

export default function Nav() {
  return (
    <div className="navbar">
        <div className="navLeft">
        <div className="logo"><img src="/assets/logo.png" alt="" /></div>
        <div className="AppName">SocialNetwork</div>
        <div className="NavCenter">
        <div className="Home"><Home/></div>
        <div className="Message"><Message/><div className='Info'>5</div></div> 
          <div className="Notification"><Notifications/><div className='Info'>10</div></div> 
          <div className="GroupAdd"><GroupAdd/><div className='Info'>9</div></div> 
        </div>
        <div className="search"><input type="text" className="SearchInput" placeholder="Chercher un amis, poste , photo ..."/>
    <button className="buttonSearch">search</button>
        </div>
        <div className='c'><img className='profil' src="/assets/person/4.jfif" alt="" /></div>
        </div>
    
    
    </div>
  )
}
