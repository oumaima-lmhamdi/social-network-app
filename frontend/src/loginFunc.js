import axios from "axios";
//import { useDispatch } from 'react-redux';




export const loginFunc = async (userCredential, dispatch) => {
    //const dispatch = useDispatch();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", userCredential);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
  };