import React from 'react'
import './signin.css';
function SignIn() {
  return (
    <>
     <div className='all'>
      <div className="bg"></div>
      <div className="login">
      <h1 className='head' >Processed Food Detector Tool</h1>
        <div className="reg">
          <input type="text" placeholder="username" />
        </div>
        <div className="pass">
          <input type="password" placeholder="password" />
        </div>
        <div className="sign">
          <button>Sign-in</button>
        </div>
       
        <p className='hi'>
          Any  Issues <a href="/contact" className='click'>click here</a>
        </p>
      </div>
    </div>

    </>
  )
}

export default SignIn
