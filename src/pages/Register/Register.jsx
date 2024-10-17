import React from 'react'
import './register.css'
function Register() {
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
          <div className="loginBox">
            <input type="text" className="loginInput" placeholder="User Name" />
            <input type="email" className="loginInput" placeholder="Email" />
            <input
              type="password"
              className="loginInput"
              placeholder="Password"
            />
            <input
              type="password"
              className="loginInput"
              placeholder="Password Again"
            />
            <button className="loginBtn">Sign Up</button>
            <button className="loginRegisterBtn">Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register