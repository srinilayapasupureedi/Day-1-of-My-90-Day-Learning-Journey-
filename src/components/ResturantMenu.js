import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; 
import ResturantCategory from "./ResturantCategory";

const ResturantMenu=()=>{
  const [showIndex,setShowIndex]=useState(0);
  const {resId}=useParams();
  const resInfo=useRestaurantMenu(resId);
    if(resInfo==null)
    return <Shimmer/>;
  const {name,cuisines,cloudinaryImageId,costForTwo}=resInfo?.cards[2]?.card?.card?.info||{};
  const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card||{};
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
  const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
   (c)=>c.card?.card?.['@type']===
    ("type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  );
  console.log(categories);
  



  return(
      <div className="text-center m-4" data-testid="food-items">
        <h1 className="font-bold">{name}</h1> 
        <h2>{cuisines.join(",")}-{costForTwo/100}</h2> 
        {categories.map((category,index)=>(<ResturantCategory data={category.card.card}
         key={category.card.card.title}
         showItems={index===showIndex?true:false}
         setShowIndex={()=>setShowIndex(index)}
         />))};
        </div>
  );
};
export default ResturantMenu;