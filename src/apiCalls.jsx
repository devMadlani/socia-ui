import axios from "axios";

export const loginCall = async (userCredential, dispatch) => {
 
  dispatch({ type: "LOGIN_START" });
  try {
    const response = await axios.post(
      "http://localhost:8800/api/auth/login",
      userCredential
    );
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    return true
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });

  }
};
