
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
import {lazy,  Suspense} from 'react';
import UserContext from './utils/UserContext';
import { useEffect,useState } from 'react';

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

const Grocery = lazy(() => import('./components/Grocery'));
const About= lazy(() => import('./components/About'));


const AppLayout=()=>{
       const [userName,setUserName]=useState();
       useEffect(()=>{
          setUserName("srinilaya")},
          []);
  return(
    <UserContext.Provider value={{loginedUser:userName,setUserName}}>
    <div className='app-container'>
      <Header/>
      <Outlet/>
    </div>
    </UserContext.Provider>
  )
};
const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
        {
        path:"/",
        element:<Body/>
        },
        {
        path:"/about",
        element:<Suspense fallback={<h1>Loading....</h1>}><About/></Suspense>
        },
        {
        path:"/contact",
        element:<Contact/>
        },
        {
        path:"/grocery",
        element:<Suspense fallback="Loading...."><Grocery/></Suspense>
        },
        {
          path:"/restaurants/:resId",
          element:<ResturantMenu/>
        }
    ],
    errorElement:<Error/>
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
