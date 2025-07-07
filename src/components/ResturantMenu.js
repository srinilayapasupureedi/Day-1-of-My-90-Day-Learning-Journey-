import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL}  from "../utils/constants";  
const ResturantMenu=()=>{
  const [resInfo,setresInfo]=useState(null);
  const {resId}=useParams();
  console.log(resId);

  useEffect(()=>{
    fetchMenu();
  },[resId]);
  const fetchMenu=async()=>{
    const data=await fetch(MENU_URL+resId+`&catalog_qa=undefined&submitAction=ENTER`
    );

    const json=await data.json();
    setresInfo(json.data);
  };
    if(resInfo==null)
    return <Shimmer/>;
  const {name,cuisines,cloudinaryImageId,costForTwo}=resInfo?.cards[2]?.card?.card?.info||{};
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card||{};
  
 


  return(
      <div className="menu">
        <h1>{name}</h1> 
        <h2>{cuisines.join(",")}</h2>
        <h3>{costForTwo}</h3> 
        <ul>
          {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name}-{"RS"}-{item.card.info.price/100||item.card.info.defaultPrice/100}</li>)}
    
        </ul>
        </div>
  );
};
export default ResturantMenu;