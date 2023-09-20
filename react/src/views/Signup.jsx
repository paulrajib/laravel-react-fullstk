import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {hndlPasswrdInput, hndlEmailInput, hndlFullName, hndlPassConst, setGlobal, getGlobal} from '../lib/Utils';


export default function Signup() {
  const [toggle, setToggle] = useState(false);

  const onSignupSubmit = (ev) => {
    ev.preventdefault();
  }

  const [loginData, setLoginData] = useState(null);
  // const [emailAlert, setEmailAlert] = useState(null);
  // const [passwordAlert, setPasswordAlert] = useState(null);

  const [fullname_er, setFullNameEr] = useState("");
  const [pass, setPass] = useState("");
  const [pass_confrm, setPassConfrm] = useState("");
  const [pass_error, setPassError] = useState("");
  const [email_error, setEmailError] = useState("");
  const [pass_confrm_error, setPassConrmError] = useState("");

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
      var numbers = /[0-9]/g;
      const rgxSpclChrtr = /^(?=.*[-\#\$\.\_\~\%\&\@\!\+\=\\*])/;
      const rgxSpclChrtr_forname = /^(?=.*[-\#\$\_\~\%\/\&\@\!\+\=\\*])/;
      const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

      // const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
      // const eightCharsOrMore= /.{8,}/g; // eight characters or more


      // const newData = Object.assign({}, loginData, { [name]: value })

      if(ev.target.id === 'fullname'){
        hndlFullName(ev);
      }

      if(ev.target.id === 'password'){
        hndlPasswrdInput(true, false, true, false, 4, 12, ev);
        setPass(value);
      }
  
      if(ev.target.id === 'email'){
        hndlEmailInput(ev);
      }
  
      if(ev.target.id === 'passwordconrm'){
        if(value)
        hndlPassConst(pass, ev);
      }

      // if(ev.target.id === 'passwordconrm'){
      //   if(value){
      //     if(pass === value){
      //       setPassConrmError('no-err');
      //       if(pass === ""){setPassConrmError('');}
      //     } else{
      //       setPassConrmError('yes-err');
      //     }
      //   } else{
      //     if(pass){
      //       setPassConrmError('Value null');
      //     } else{
      //       setPassConrmError('');
      //     }
            
      //   }
      // }

      


      setToggle(toggle ? false : true);


    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // loginCredentials();
        
        
    }

  return (
      
        <form action="" onSubmit={onSignupSubmit}>
          <h1 className='title'>
            Signup for free
          </h1>

          <input type="text" placeholder='Full Name' name='fullname' id='fullname' required onChange={handleChange} />
          <span className={`${getGlobal("fullnameErr") ? "err-spacing" : ""}`}>{`${getGlobal("fullnameErr")}`}</span>

          <input type="email" placeholder='Email Address' name="email" id='email' required onChange={handleChange} />
          <span className={`${getGlobal("emailError") ? "err-spacing" : ""}`}>{`${getGlobal("emailError")}`}</span>

          <input type="password" name='password' id="password" required onChange={handleChange} placeholder='Password' />
          <span className={`${getGlobal("passwordError") ? "err-spacing" : ""}`}>{`${getGlobal("passwordError")}`}</span>

          <input type="password" name='passwordconrm' id="passwordconrm" required onChange={handleChange} placeholder='Password Confirmation' />
          <span className={`${getGlobal("passConrmError") ? "err-spacing" : ""}`}>{`${getGlobal("passConrmError")}`}</span>
          
          <button type="submit" className="btn btn-block" onSubmit={handleSubmit}>Sign up</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link>
          </p>
        </form>

      
  )
}
