import axios from "axios";
import { useNavigate } from "react-router-dom";

export const loginCall = async (userCredential, dispatch) => {
 
  dispatch({ type: "LOGIN_START" });
  try {
     const res = await axios.post(
       "http://localhost:8800/api/auth/login",
       userCredential,
       { withCredentials: true }
     );

    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  
    return true
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });

  }
};
