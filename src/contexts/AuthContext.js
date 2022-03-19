import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const stateInitiale = {
    user:{
      "_id": "621c04de5e871c3f811821cb",
      "username": "Omarr",
      "email": "oMARR@gmail.com",
      "password": "$2b$10$gmTKnBgIZGVuiGX3DWa1Xu7ZXW2DDAeNa6e1sNnFNC6eXqs8KtpO2",
      "profilePicture": "2.jpeg",
      "coverPicture": "",
      "followers": [
          "621c0ca916c1c90baea35fa0"
      ],
      "following": [
          "621c0ca916c1c90baea35fa0"
      ],
      "isAdmin": false,
      "createdAt": "2022-02-27T23:10:22.663Z",
      "updatedAt": "2022-02-28T20:32:25.605Z",
      "__v": 0,
      "city": "Rabat",
      "desc": "\"This is my bio!!",
      "from": "Rabat",
      "relationship": 2
  },
    isFetching:false,
    error:false,
    
}

export const AuthContext = createContext(stateInitiale);

export const AuthContextProvider = ({children})=>{
    const [state,dispatch] = useReducer(AuthReducer,stateInitiale);

    return (
        <AuthContext.Provider
          value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch,
          }}
        >
          {children}
        </AuthContext.Provider>);
}