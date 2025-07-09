import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
export const Header=()=>{
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus=useOnlineStatus();
  return(
    <div className='flex justify-between bg-pink-200 shadow-lg'>
      <div className='w-26'>
        <img className='logo' src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul className="flex items-center">
          
          <li className="p-4 m-2">OnlineStatus{onlineStatus?"✅ ":"🔴"}</li>
          <li className="p-4 m-2"><Link to='/'>Home</Link></li>
          <li className="p-4 m-2"><Link to='/contact'>Contact Us</Link></li>
          <li className="p-4 m-2"><Link to='/about'>About Us</Link></li>
          <li className="p-4 m-2"><Link to='/grocery'>Grocery</Link></li>
          <li className="p-4 m-2">Cart</li>
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