import React, { useContext, useRef } from "react";
import "./register.css";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const history = useNavigate();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleClick = async (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      password.current.setCustomValidity("Passwords don't matched");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      dispatch({ type: "REGISTER_START" });
      try {
        const res = await axios.post(
          "http://localhost:8800/api/auth/register",
          user,
          { withCredentials: true }
        );
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data.user });
        history("/");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE", payload: error });
      }
    }
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
              ref={username}
              type="text"
              className="loginInput"
              placeholder="User Name"
              required
            />
            <input
              ref={email}
              type="email"
              className="loginInput"
              placeholder="Email"
              required
            />
            <input
              ref={password}
              type="password"
              className="loginInput"
              placeholder="Password"
              required
              minLength={6}
            />
            <input
              ref={confirmPassword}
              type="password"
              className="loginInput"
              placeholder="Password Again"
              required
              minLength={6}
            />
            <button className="loginBtn" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterBtn">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
