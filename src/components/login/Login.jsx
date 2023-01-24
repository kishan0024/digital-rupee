import React from 'react'
import './login.css'
export const Login = () => {
  return (
    <div class="flex">
    <div class="container">
    <div class="user"></div>
        <h1>Log In </h1>
        <div class="input">
            <input type="text" required />
            <label>Username</label>
        </div>
        <div class="input box">
            <input type="password" required />
            <label>Password</label>
            <div class="forgot"><a href="#">Forgot Password?</a></div>
        </div>
        <button type="button" class="btn btn-light">login</button>
    <div class="div">
        <div class="line"></div>
        <div class="signup">Don't Have an account? <a href="#">Sign Up</a></div>
    </div>
</div>
</div>
  )
}
