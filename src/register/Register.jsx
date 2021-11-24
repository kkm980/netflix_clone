import React, { useRef, useState } from 'react'
import "./register.scss"
import back from "./img/back.jpg"
import logo from "./img/logo.png"
export default function Register() {

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
               <button className="_logging">Sign In</button>
             </div>
             <div className="_centered">
               <h1>Unlimited movies, TV</h1>
               <h1> Shows and more.</h1>
               <h2>Watch anywhere, cancel anytime.</h2>
               <p>Ready to watch? Please enter your email to start the membership.</p>
               {!mail?(<form className="_inputs">
                 <input type="email" placeholder="Email address" ref={mailRef}/>
                 <button className="_inputButton" onClick={(e)=>{
                   e.preventDefault();
                   firstOne();
                   
                 }}>Get Started</button>
               </form>):(<form className="_inputs">
               <input type="password" placeholder="Enter password" ref={passRef}/>
               <button className="_inputButton" onClick={(e)=>{
                 e.preventDefault();
                secondOne();
              }}>Start</button>
             </form>)}
               
             </div>
        </div>
    )
}
