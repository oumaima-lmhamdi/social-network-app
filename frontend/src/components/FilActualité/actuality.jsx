import Share from "./share";
import Poste from "./poste";
import './actuality.css';
import { useState as UseState } from "react";
import axios from "axios";
import { useEffect as UseEffect} from "react" ; 

export default function actuality() {
  const [ post , setPost]= UseState([]);
   UseEffect(() =>{
     axios.get('http://localhost:8082/api/posts')
     .then(res=> setPost(res.data))
     .catch(error => console.log(error))})
  return (
    <div className="containerPost">
    <div> <Share/></div> 
      <div><Poste post={post}/></div>
    
    </div>
  )
}
