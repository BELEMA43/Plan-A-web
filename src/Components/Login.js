import React from 'react'
import './Login.css'
const Login = () => {

  return (
    <div class="wrapper wrapper-l">
        <img src="./assets/black.medium.png" alt="" className='logo'/>
        <h1>Login</h1>
        <form action="">
            <div className="signup-link">
                <p>Don't have an account?<a href="#">Signup</a></p>
            </div> 
            <div className="input-box">
                <input type="text" placeholder="USERNAME" required/>
            </div>
            <div className="input-box">
                <input type="password" placeholder="PASSOWRD" required/>
            </div>
            <div className="remember-forgot">
                <label for=""><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password?</a>
            </div>
            <button type="submit" className="btn-1">Login</button>

        </form>
    </div>
  )
}

export default Login