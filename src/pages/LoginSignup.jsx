import React from 'react'
import './Css/LoginSignup.css' 

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>sign up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder="username"/>
          <input type="text" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input type="password" placeholder="confirm password"/>
          <button>Continue</button>
          <p className='loginsignup-login'>Already have an account?<span>Login here </span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>By continuing, i agree to the terms of use & privacy policy.</p>
      </div>
      </div>
      </div>     
    </div>
  )
}

export default LoginSignup
