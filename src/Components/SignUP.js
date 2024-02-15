import React from 'react';

import { Link } from 'react-router-dom';


function SignUpForm() {
  return (
    <div className="container" id="signup">
      <div className="heading">Sign Up</div>
      <form action="" className="form">
        <input required className="input" type="text" name="name" id="name" placeholder="Name" />
        <input required className="input" type="number" id="age" name="age" min="0" max="150" placeholder="Age"></input>
        <input required className="input" type="text" name="gender" id="gender" placeholder="Gender(male/female)" />
        <input required className="input" type="text" name="city" id="city" placeholder="City" />
        <input required className="input" type="email" name="email" id="email" placeholder="E-mail" />
        <input required className="input" type="password" name="password" id="password" placeholder="Password" />
        
        <input className="login-button" type="submit" value="Create Account" />
      </form>
      <div className="social-account-container">
        <span className="title">Already you have an Account?<Link to="/signin" className='link'> Sign In</Link></span>
      </div>
      <span className="agreement"><a href="#">Learn user licence agreement</a></span>
    </div>
  );
}

export default SignUpForm;