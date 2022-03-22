
import './App.css';
import Nav from './components/Nav';
import { useState } from 'react';
import AddPost from './components/addPost'
import Share from './components/FilActualité/share'
import Post from './components/post';
import Actuality from './components/FilActualité/actuality';
import NavBar from './components/NavBar/NavBar';
import LeftSideBar from './components/LeftSideBar/LeftSideBar';
import RightSideBar from './components/RightSideBar/RightSideBar';
import axios from 'axios';
import { useEffect} from "react" ; 
import Poste from './components/FilActualité/poste';
function App() {
  var cors = require('cors');

  //  const [ post , setPost]= useState([]);
  //  useEffect(() =>{
  //    axios.get('http://localhost:8082/api/posts')
  //    .then(res=> setPost(res.data))
  //    .catch(error => console.log(error))})
  return(
    <>
    <Nav/>
<div className="homeContainer">
<LeftSideBar/>
<Actuality/>
{/* <div className='Posts'><Poste post={post}/></div> */}
<RightSideBar/>
</div>
</>)
}
    

 
  export default App;

    /*
    <>
    <Nav/>
<div className="homeContainer">

<LeftSideBar/>
<Actuality post={post}/>
<RightSideBar/>
</div>
</>)}
  export default App;

/*<>
<Nav/>
<div className="homeContainer">

<LeftSideBar/>
<Actuality/>
<RightSideBar/>
</div>
</>
  )}
  export default App;
   /* <>
    <NavBar/>
    <div className="homeContainer">

    <LeftSideBar/>

  <Actuality/>
  <RightSideBar/>
  </div>
</>*/
/*<>
<Nav/>
<div className="homeContainer">

<LeftSideBar/>
<Actuality/>
<RightSideBar/>
</div>
</>
  )} */
    // Déclare une nouvelle variable d'état, que l'on va appeler « count »
   /* const [count, setCount] = useState("banane");

    return (
      <div>
        <p>Vous avez cliqué {count} fois</p>
        <button onClick={() => setCount(count +"orange")}>
          Cliquez ici
        </button>
      </div>
    );
  } */ 
