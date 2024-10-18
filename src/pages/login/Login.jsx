import React, { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
     const navigate = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  console.log(user);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      },
      dispatch
    );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">DevSocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on DevSocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              ref={emailRef}
              type="email"
              className="loginInput"
              placeholder="Email"
              required
            />
            <input
              ref={passwordRef}
              type="password"
              minLength={6}
              className="loginInput"
              placeholder="Password"
              required
            />
            <button type="submit" className="loginBtn" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="white" size="25px" />
              ) : (
                "Login"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button
              type="button"
              className="loginRegisterBtn"
              disabled={isFetching ? true : false}
            >
              Crate a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
