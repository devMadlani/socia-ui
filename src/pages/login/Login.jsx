import React from 'react'
import './login.css'
function Login() {
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
            <input type="email" className="loginInput" placeholder="Email" />
            <input type="password" className="loginInput" placeholder="Password" />
            <button className='loginBtn'>Login</button>
            <span className='loginForgot'>Forgot Password?</span>
            <button className='loginRegisterBtn'>Crate a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login