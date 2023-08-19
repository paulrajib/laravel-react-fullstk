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
      let rgxSpclChrtr = /^(?=.*[-\#\$\.\_\~\%\&\@\!\+\=\\*])/;
      // const newData = Object.assign({}, loginData, { [name]: value })

      // Set warning/s for password validation
      let passwordError = ''
      if(ev.target.id === 'password'){
        //const { name, value } = ev.target
        // newData = value;
        setPass(value);
        if(pass_confrm === value){
          setPassConrmError('no-err');
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

        console.log(value + ' ' + value.length);
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
        } else{
          setPassConrmError('yes-err');
        }
      }


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
          <span className="show-clint-err">{email_error}</span>
          <input type="password" name='password' id="password" onChange={handleChange} placeholder='Password' />
          <span className="show-clint-err">{pass_error}</span>
          <input type="password" name='passwordconrm' id="passwordconrm" onChange={handleChange} placeholder='Password Confirmation' />
          <span className={`show-clint-err ${pass_confrm_error}`}>{pass_confrm_error}</span>
          <button type="submit" className="btn btn-block">Sign up</button>
          <p className="message">
            Already Registered? <Link to="/login">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  )
}
