import { useReducer } from "react";
import { createContext } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: {
      $oid: "6702669df1f33c08a44518ca",
    },
    username: "disha",
    email: "disha@gmail.com",
    password: "$2b$10$fwp5TEVfaZscw6QFOTvRge.ZpQ5N6HAP/kcwXjT9.X8Lvl3LlcC4y",
    profilePicture: "person/1.jpeg",
    coverPicture: "post/1.jpeg",
    followers: ["6702651217cf5583b4f2efb7"],
    following: [],
    isAdmin: false,
    createdAt: {
      $date: "2024-10-06T10:29:49.732Z",
    },
    updatedAt: {
      $date: "2024-10-06T14:39:42.650Z",
    },
    __v: 0,
  },
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);
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
