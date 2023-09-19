import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import {hndlPasswrdInput, hndlEmailInput, setGlobal, getGlobal} from '../lib/Utils';

export default function Login() {
  const [toggle, setToggle] = useState(false);
  const onLoginSubmit = (ev) => {
    // ev.preventdefault(); // is throwing an error
  }
  
  const handleChange = (ev) => {
    // ev.preventdefault() // is throwing an error
    if(ev.target.id === 'password'){
      hndlPasswrdInput(true, false, true, false, 4, 12, ev);
    }

    if(ev.target.id === 'email'){
      hndlEmailInput(ev);
    }
    // a toggle fn just to update the component
    // to show the i/p warning
    setToggle(toggle ? false : true);
  }

  return (
        <form action="" onSubmit={onLoginSubmit}>
          <h1 className='title'>
            Login into your account
          </h1>
          <input type="email" placeholder='Email' name='email' id='email' onChange={handleChange} />
          <span className='err-spacing'>{`${getGlobal("emailError")}`}</span>
          <input type="password" placeholder='Password' name='password' id='password' onChange={handleChange} />
          <span className='err-spacing'>{`${getGlobal("passwordError")}`}</span>
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to="/signup">Create An Acccount</Link>
          </p>
        </form>
      
  )
}


