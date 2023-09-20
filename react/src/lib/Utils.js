// import { useState } from 'react';
// const [email_error, setEmailError] = useState("");

export default function BigButton() {}


let _obj = {}

export const setGlobal = (obj) => {
    Object.assign(_obj, obj)
}
export const getGlobal = varName => {
   if(_obj[varName] !== undefined){
      return _obj[varName]
   }
   else {
      return '';
   }
}


export var hndlFullName = (ev) =>{
  const { name, value } = ev.target;
  const rgxSpclChrtr_forname = /^(?=.*[-\#\$\_\~\%\/\&\@\!\+\=\\*])/;
  
  let fullnameErr = '';
  if(value.trim().split(/\s+/).length <= 1){
    fullnameErr = "Doesn't seams like a full name!";          
  }
  if(value.trim().split(/\s+/).length > 4 || value.length > 32){
    fullnameErr = "Is that a name or a sentence!?";          
  }
  if(value.match(rgxSpclChrtr_forname)) {  
    fullnameErr = "Can't contain special character";
  }
  if(value){
    setGlobal({ fullnameErr : fullnameErr });
  } else{
    setGlobal({ fullnameErr : '' });
  }

}

export var hndlPasswrdInput = (UpperCase, LowerCase, Number, SpclChar, Min, Max, ev) =>{
// export var hndlPasswrdInput(UpperCase: Boolean, LowerCase: any, Number: any, SpclChar: any, Min: any, Max: any, ev: any) =>{
    const { name, value } = ev.target;
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    const rgxSpclChrtr = /^(?=.*[-\#\$\.\_\~\%\&\@\!\+\=\\*])/;

    let passwordError = '';
    if (value.length < Min || value.length > Max) {
      passwordError = 'Password should be ' + Min + ' to ' + Max + ' characters';
    }
    if(SpclChar && !value.match(rgxSpclChrtr)) {  
      passwordError = 'Must include 1 special character';
    }
    if(!value.match(Number && numbers)) {  
      passwordError = 'Must include 1 Number';
    }
    if(LowerCase && !value.match(lowerCaseLetters)) {  
      passwordError = 'Must include 1 lowercase';
    }
    if(UpperCase && !value.match(upperCaseLetters)) {  
      passwordError = 'Must include 1 Uppercase';
    }

    console.log(passwordError);

    if(value){
      setGlobal({ passwordError : passwordError });
    } else{
      setGlobal({ passwordError : '' });
    }

};

export var hndlPassConst = (pass, ev) =>{
  const { name, value } = ev.target;
  let passConrmError = '';
  if(value){
    if(pass === value){
      passConrmError = 'Passwords matched';
      if(pass === ""){passConrmError = '';}
    } else{
      passConrmError = "Doesn't match";
    }
  } else{
    if(pass){
      passConrmError = 'Value null';
    } else{
      passConrmError = '';
    } 
  }

  if(value){
    setGlobal({ passConrmError : passConrmError });
  } else{
    setGlobal({ passConrmError : '' });
  }
}

export var hndlEmailInput = (ev) =>{
    const { name, value } = ev.target;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    let emailError = '';

    console.log(name + ' ' + value);
    //if(ev.target.id === 'email'){
      if(!value.match(regexEmail)){
        emailError = 'Email is not valid';
      }else{
        emailError = '';
      }
    //}

    if(value){
      setGlobal({ emailError : emailError });
    } else{
      setGlobal({ emailError : '' });
    }
};


