import React, { useRef, useState } from 'react'
import "./login.scss"
import Checkbox from '@mui/material/Checkbox';




import back from "./img/back.jpg"
import logo from "./img/logo.png"
export default function Login() {

  const [mail,setMail] =useState("");
  const mailRef=useRef();

  const [pass,setPass] =useState("");
  const passRef=useRef();

  const firstOne=()=>{
    setMail(mailRef.current.value);
    mailRef.current.value="";
   
  }
  const secondOne=()=>{
    setPass(passRef.current.value);
    passRef.current.value="";
  }

    return (
        <div className="regisPage" >
             <div className="_floating">
               <img alt="logo" src={logo}/>
               
             </div>
             <div className="_centered">
              <div className="_mainBox">
                 <h1> Sign In</h1>
                 <input placeholder="Email or phone number" type="email"/>
                 <input placeholder="Password" type="password"/>
                 <button className="_signButton">Sign In</button>
                 <div className="checkFlex">
                   <div className="rememberMe">
                      <Checkbox style={{padding:"0px", borderRadius:"0px", backgroundColor:"white"}} defaultChecked />
                      <h5>Remember me</h5>
                   </div>
                   <div className="helpNeed">Need help?</div>
                 </div>
                 <div className="fbLog">
                 <img src="https://img.icons8.com/ios-filled/30/4a90e2/facebook-new.png" alt=""/>
                 <h5>Login with Facebook</h5>
                 </div>
                   <div className="signupText">
                       <h5>New to Netflix ?</h5>
                       <div> <a href="www.google.com">Sign up now</a></div>
                   </div>
                   <div className="googleInfo">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="www.google.com">Learn more.</a></div>
              </div>
               
             </div>
        </div>
    )
}
