
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';

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
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<Error/>
  },
  {
     path:"/about",
     element:<About/>
  },
  {
    path:"/contact",
    element:<Contact/>
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render( <RouterProvider router={appRouter}/>);










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
