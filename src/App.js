import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



//import {Person} from "@mui/icons-material"


function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
      <Route path='/profile/:username' element={<Profile/>} />
      </Routes>
      <Routes>
      <Route path='/login' element={<Login/>} />
      </Routes>
      <Routes>
      <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>
  )
}

export default App;
