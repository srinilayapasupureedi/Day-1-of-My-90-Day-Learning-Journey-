import { useState } from "react";

const User=({name})=>{
  const [count]=useState(0);//creating state variable
  return(
        <div className="user-card">
          <h1>count:{count}</h1>
          <h2>Name:{name}</h2>
          <h3>Location:Anakapalli</h3>
        </div>
  );
};
export default User;