import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";



//import {Person} from "@mui/icons-material"


function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
      <Route path='/' element={user ? <Home /> : <Login />} />
      </Routes>
      <Routes>
      <Route path='/profile/:username' element={<Profile/>} />
      </Routes>
      <Routes>
      <Route path='/login' element={user ? <Navigate to="/" /> : <Login />} />
      </Routes>
      <Routes>
      <Route path='/register' element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  )
}

export default App;
