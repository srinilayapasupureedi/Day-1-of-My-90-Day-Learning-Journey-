import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
export const Header=()=>{
  const [btnNameReact, setBtnNameReact] = useState("Login");
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
          <button className='login-button' 
          onClick={() => {
            btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login");
          }}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
};