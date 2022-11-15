import React from 'react'
import "./signup.scss"

function signup() {
  return (
    <div className='signup-page'>
         <div className="signup-container">
          <form action="" autoComplete='off'>
            <div className="name-group">
              <input type="text"  required/>
              <br />
              <label htmlFor="">Name</label>
            </div>
            <div className="email-group">
              <input type="email" required id='email' />
              <br />
              <label htmlFor=""> Email</label>
            </div>
            <div className="password-group">
              <input type="password" id='pase' required />
              <br />
              <label htmlFor=""> Password</label>
            </div>
            <div className="submit-group">
              <input type="submit" name="" value="Login" className='signup-login' />
              <p>Already have an account? <a href="/login">SignIn</a></p>
            </div>
          </form>
         </div>

    </div>
  )
}

export default signup