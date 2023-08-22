import React from 'react'
import { Link } from 'react-router-dom';
import {hndlPasswrdInput} from '../lib/Utils';

export default function Login() {

  const onLoginSubmit = (ev) => {
    // ev.preventdefault();
  }
  
  let handleChange = (ev) => {
    // ev.preventdefault();
    
    {/* hndlPasswrdInput(UpperCase: boolean, LowerCase: boolean, Number: boolean, SpclChar: boolean, Min: int, Max: int, Event);  */}
    if(ev.target.id === 'password'){
      // UpperCase, LowerCase, Number, SpclChar, Min, Max, ev
      hndlPasswrdInput(true, false, true, false, 4, 12, ev);
      // get var from global context and put it into a state("");
    }

  }
  return (
    
        <form action="" onSubmit={onLoginSubmit}>
          <h1 className='title'>
            Login into your account
          </h1>
          <input type="text" placeholder='username' name='username' id='username' onChange={handleChange} />
          <input type="email" placeholder='Email' name='email' id='email' onChange={handleChange} />
          <input type="password" placeholder='Password' name='password' id='password' onChange={handleChange} />
          <button className="btn btn-block">Login</button>
          <p className="message">
            Not Registered? <Link to="/signup">Create An Acccount</Link>
          </p>
        </form>
      
  )
}
