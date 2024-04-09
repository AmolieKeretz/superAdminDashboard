
import React, { useState } from 'react';
import "./index.css";
//Image
import user_icon from '../registration/img/person.png';
import email_icon from '../registration/img/email.png';
import password_icon from '../registration/img/password.png';
const Registration = () => {
  const [action,setAction] = useState("Sign Up");
  return (
    <div className="container-background">
      <div className="container">
      <div className="container-items">
        <h2 className="header">{action}</h2>
      </div>
      <div className="input-items">
        {action==="Login"?<div></div>:<div className="items">
          <img src={user_icon} alt="" />
          <input type="text" placeholder='Name'/>
        </div>}
        
        <div className="items">
          <img src={email_icon} alt="" className='img'/>
          <input type="email" placeholder='Email'/>
        </div>
        <div className="items">
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here</span></div>}
      
      <div className="submit-container">
        <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </div>
    
  )
}
export default Registration;