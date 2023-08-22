// import { useState } from 'react';
// const [email_error, setEmailError] = useState("");

export default function BigButton() {}


export var hndlPasswrdInput = (UpperCase, LowerCase, Number, SpclChar, Min, Max, ev) =>{
    const { name, value } = ev.target;
    console.log(name + ' ' + value);
    console.log(UpperCase + ' ' + LowerCase + ' ' + Number + ' ' + SpclChar + ' ' + Min + ' ' + Max);

    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    const rgxSpclChrtr = /^(?=.*[-\#\$\.\_\~\%\&\@\!\+\=\\*])/;

    let passwordError = ''
        if (value.length < Min || value.length > Max) {
          passwordError = 'Password should be ' + Min + ' to ' + Max + ' characters';
        }
        if(SpclChar && !value.match(rgxSpclChrtr)) {  
          passwordError = 'Must include 1 special character';
        }
        if(!value.match(Number && numbers)) {  
          passwordError = 'Must include 1 Number';
        }
        if(LowerCase&& !value.match(lowerCaseLetters)) {  
          passwordError = 'Must include 1 lowercase';
        }
        if(UpperCase && !value.match(upperCaseLetters)) {  
          passwordError = 'Must include 1 Uppercase';
        }

        console.log(passwordError);

        // Set a global Context and get info out on Login page
};


export var hndlEmailInput = (UpperCase, LowerCase, Min, Max, ev) =>{
    const { name, value } = ev.target;
    console.log(name + ' ' + value);
    console.log(UpperCase + ' ' + LowerCase + ' ' + Min + ' ' + Max);
    //const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // const newData = Object.assign({}, loginData, { [name]: value })
    // return <button>Small</button>;
    // console.log('hndlPasswrdInput' + ' ' + ev.target.id );
    if(ev.target.id === 'email'){
      // console.log('its email');
      if(value && !value.match(regexEmail)){
        console.log('Email is not valid');
        // setEmailError("Email is not valid");
      // return <span>Email is not valid</span>;
      }else{
          // setEmailError("");
          console.log('Email is valid');
      }
    }
};

// function BigButton() {
//     console.log('BigButton');
// // return <button style={{padding: '20px 40px'}}>Big</button>;
// }

// 👇️ named exports
// export {SmallButton, BigButton};

