import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {

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

      // const atLeastOneSpecialChar = /[#?!@$%^&*-]/g; // any of the special characters within the square brackets
      // const eightCharsOrMore= /.{8,}/g; // eight characters or more


      const rgxSpclChrtr = /^(?=.*[-\#\$\.\_\~\%\&\@\!\+\=\\*])/;
      const rgxSpclChrtr_forname = /^(?=.*[-\#\$\_\~\%\/\&\@\!\+\=\\*])/;
      const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      // const newData = Object.assign({}, loginData, { [name]: value })

      // let name_err = '';
      // console.log(ev.target);
      setEmailError("");
      if(ev.target.id === 'fullname'){
        // console.log(value.trim().split(/\s+/).length);
        // console.log(value.length);
        let name_err = '';
        if(value.trim().split(/\s+/).length <= 1){
          name_err = "Doesn't seams like a full name!";          
        }
        if(value.trim().split(/\s+/).length > 4 || value.length > 32){
          name_err = "Is that a name or a sentence!?";          
        }
        if(value.match(rgxSpclChrtr_forname)) {  
          name_err = "Can't contain special character";
        }
        if(value){
          setFullNameEr(name_err);          
        } else{
          setFullNameEr('');
        }
      }

      if(ev.target.id === 'email'){
        // console.log('its email');
        if(value && !value.match(regexEmail)){
          //console.log('Email is valid');
          setEmailError("Email is not valid");
        }else{
          setEmailError("");
        }
      }

      // Set warning/s for password validation
      let passwordError = ''
      if(ev.target.id === 'password'){
        // const { name, value } = ev.target
        // newData = value;
        setPass(value);
        if(pass_confrm === value){
          setPassConrmError('no-err');
          if(pass_confrm === ""){setPassConrmError('');}
        } else{
          setPassConrmError('yes-err');
        }

        if (value.length < 7 || value.length > 12) {
          passwordError = 'Password should be 7 to 12 characters'
        }
        if(!value.match(rgxSpclChrtr)) {  
          passwordError = 'Must include 1 special character';
        }
        if(!value.match(numbers)) {  
          passwordError = 'Must include 1 Number';
        }
        if(!value.match(lowerCaseLetters)) {  
          passwordError = 'Must include 1 lowercase';
        }
        if(!value.match(upperCaseLetters)) {  
          passwordError = 'Must include 1 Uppercase';
        }

        // console.log(value + ' ' + value.length);
        if(value){
          setPassError(passwordError);          
        } else{
          setPassError('');
        }

      }

      if(ev.target.id === 'passwordconrm'){
        // newData = value;
        setPassConfrm(value);
        if(pass === value){
          setPassConrmError('no-err');
          if(pass === ""){setPassConrmError('');}
        } else{
          setPassConrmError('yes-err');
        }
      }


    }


    const handleSubmit = (e) => {
        e.preventDefault();
        loginCredentials();
    }

  return (
      
        <form action="" onSubmit={onSignupSubmit}>
          <h1 className='title'>
            Signup for free
          </h1>
          <input type="text" placeholder='Full Name' name='fullname' id='fullname' required onChange={handleChange} />
          <span className={`${fullname_er ? "show-clint-err" : ""}`}>{fullname_er}</span>
          <input type="email" placeholder='Email Address' name="email" id='email' required onChange={handleChange} />
          <span className={`${email_error ? "show-clint-err" : ""}`}>{email_error}</span>
          <input type="password" name='password' id="password" required onChange={handleChange} placeholder='Password' />
          <span className={`${pass_error ? "show-clint-err" : ""}`}>{pass_error}</span>
          <input type="password" name='passwordconrm' id="passwordconrm" required onChange={handleChange} placeholder='Password Confirmation' />
          {/* <span className={`show-clint-err ${pass_confrm_error}`}>{pass_confrm_error}</span> */}
          <span className={`${pass_confrm_error ? "show-clint-err" : ""}${pass_confrm_error}`}>{pass_confrm_error}</span>
          <button type="submit" className="btn btn-block" onSubmit={handleSubmit}>Sign up</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
        
      
  )
}
