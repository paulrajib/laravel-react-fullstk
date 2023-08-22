// import { useState } from 'react';
// const [email_error, setEmailError] = useState("");

export default function BigButton() {}


export var SmallButton = (ev) =>{
    const { name, value } = ev.target;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    // const newData = Object.assign({}, loginData, { [name]: value })
    // return <button>Small</button>;
    // console.log('SmallButton' + ' ' + ev.target.id );
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

