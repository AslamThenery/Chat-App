import React from 'react'
import "./login.css"

function Login() {
  return (
    <div className='login-page'>
        <div className="login-container">
            
            <div className="email-input">
                <input type="email" />
                <label htmlFor="">Email</label>
            </div>
            <div className="psw-input">
                <input type="password" />
                <label htmlFor="">Password</label>
            </div>
            <div className="login-btn">
                <button className='login-button'>Login</button>
                <h5>Create a new account? <a href="/signup">Singn Up</a></h5>
            </div>
        </div>
    </div>
  )
}

export default Login