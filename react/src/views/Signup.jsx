import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

  const onSignupSubmit = (ev) => {
    ev.preventdefault();
  }

  // const [loginData, setLoginData] = useState(null);
  // const [emailAlert, setEmailAlert] = useState(null);
  // const [passwordAlert, setPasswordAlert] = useState(null);

  const [pass_error, setPassError] = useState("");

    const loginCredentials = () => {
        // if (loginData.email === 'john@gmail.com' && loginData.password === 'christina') {
        // }
        //  else {
        // }
    }


    const handleChange = (ev) => {
      let newData = '';
      const { name, value } = ev.target;
      var lowerCaseLetters = /[a-z]/g;
      var upperCaseLetters = /[A-Z]/g;
      // const newData = Object.assign({}, loginData, { [name]: value })

      // Set warning/s for password validation
      let passwordError = ''
      if(ev.target.id === 'password'){
        //const { name, value } = ev.target
        newData = value;
        if (newData.length < 7) {
          passwordError = 'Password should be more than 8 characters'
        }
        if(!newData.match(lowerCaseLetters)) {  
          passwordError = 'Must include 1 lowercase'
        }
        if(!newData.match(upperCaseLetters)) {  
          passwordError = 'Must include 1 Uppercase'
        }
      }
      setPassError(passwordError);

      
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        loginCredentials()
    }

  return (
      <div className="login-signup-form animated fadeInDown">
      <div className="form">
        <form action="" onSubmit={onSignupSubmit}>
          <h1 className='title'>
            Signup for free
          </h1>
          <input type="text" placeholder='Full Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" name='password' id="password" onChange={handleChange} placeholder='Password' />
          {pass_error}
          <input type="password" placeholder='Password Confirmation' />
          <button type="submit" className="btn btn-block">Sign up</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
