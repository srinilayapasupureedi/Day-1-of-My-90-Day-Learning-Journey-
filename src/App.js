
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Body } from './components/Body';

//food devlivery app
//step-1 planning before coding
/*
-Header
  -Logo
  -Nav-items
    -Home
    -ContactUS
    -AboutUS
    -Cart
-Body
 -Search
  -RestrauntList
  -RestrauntCard
    -RestrauntImage
    -RestrauntName
    -RestrauntRating
    -RestrauntCuisines
    -RestrauntDeliveryTime
-Footer
 -copyright
 -links

*/



const AppLayout=()=>{
  return(
    <div className='app-container'>
      <Header/>
      <Body/>
    </div>
  )
};
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>);










// const Body=()=>{
//   return(
//     <div className='body-container'>
//       <div className='search-container'>
//         <input type="text" placeholder="Search for restaurants..." />
//       </div>
//       <div className='restro-list-container'>
//        <RestroCard resData={resObj[0]} />
//        <RestroCard resData={resObj[1]} />
//        <RestroCard resData={resObj[2]} />
//        <RestroCard resData={resObj[3]} />
//        <RestroCard resData={resObj[4]} />
//       </div>
//     </div>
//   )
// }

// ...existing code...
