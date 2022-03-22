import './NavBar.css'
import {Search, Person, Chat , Notifications } from "@material-ui/icons"


export default function topbar() {
  return (
 <div className="topbarContainer">
   <div className="topbarLeft"> 
   <span className="logo">Social Network</span>
   </div>
   <div className="topbarCenter">
   <input className="search" placeholder="Chercher un amis, poste , photo ..."/>
   </div>
   
   <div className="topbarRight">
     <div className="topbarLinks">
        <span className="topbarLink">HomePage </span>
     </div>
     <div className="topbarIcons">
       <div className="topbBarIconItem"><Person/>
        <span className="topbarIconBadge">1</span>
       </div>
       <div className="topbBarIconItem"><Chat/>
       <span className="topbarIconBadge">9</span>
       </div>
       <div className="topbBarIconItem"><Notifications/>
       <span className="topbarIconBadge">5</span>
       </div>
     </div>
     <img src="/assets/person/1.jfif" alt="" className="topbarImg"/>
   </div>
 </div>
 
 
  )
}
