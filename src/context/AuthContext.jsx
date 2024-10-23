import { useEffect, useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";
import axios from "axios";

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8800/api/auth/checkAuth",{withCredentials:true}
        );
        console.log(res.data)
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user }); // Set user if authenticated
      } catch (error) {
        console.error("Auth check error:", error);
      }
    };

    checkAuth();
  }, []);
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
    </AuthContext.Provider>
  );
};
