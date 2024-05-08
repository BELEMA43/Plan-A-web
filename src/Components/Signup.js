import React from 'react'
import './Signup.css'
const Signup = () => {


  return (
    <div class="wrapper wrapper-s">
        <img src="./assets/black.medium.png" alt="" className='logo'/>
        <h1>Sign up</h1>
        <form action="">
            <div className="signup-link">
                <p>Already have an account?<a href="">Login</a></p>
            </div>
            <div className="input-box">
                <input type="text" placeholder="FIRSTNAME" id='Firstname'required/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="SURNAME" required/>
            </div>
            <div className="input-box">
                <input type="text" placeholder="EMAIL" required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="PASSOWRD" required/>
            </div>
            <div className="remember-forgot">
                <label for=""><input type="checkbox"/>Remember me</label>
            </div>
            <button type="submit" className="btn-1">Sign up</button>

        </form>
    </div>
  )
}

export default Signup