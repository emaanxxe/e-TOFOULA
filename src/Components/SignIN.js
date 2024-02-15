import React from 'react';
import { Link } from 'react-router-dom';

function SignInForm() {
  return (
    <div className="container" id="signin">
      <div className="heading">Sign In</div>
      <form action="" className="form">
        <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
        <input required className="input" type="password" name="password" id="password" placeholder="Password" />
        <span className="forgot-password"><a href="#">Forgot Password ?</a></span>
        <input className="login-button" type="submit" value="Log In" />
      </form>
      <div className="social-account-container">
        <span className="title">Create an Account? <span><Link to="/signup" className='link'> Sign Up</Link></span></span>
      </div>
      <span className="agreement"><a href="#">Learn user licence agreement</a></span>
    </div>
  );
}

export default SignInForm;