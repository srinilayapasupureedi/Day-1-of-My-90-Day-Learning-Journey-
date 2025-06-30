import { RestroCard } from './RestroCard';
import { resObj } from '../utils/mockData';
import  { useState } from 'react';
export const Body=()=>{
 // Combine all restaurant arrays from all cards in resObj
const allRestaurantsMap = {};// Use an object to avoid duplicates

resObj.forEach(obj => {
  // Safely check if restaurants array exists in this card
  const restaurants = obj?.card?.card?.gridElements?.infoWithStyle?.restaurants;//optional chaining
  // If restaurants is an array, iterate through it
  if (Array.isArray(restaurants)) {
    restaurants.forEach(r => {
      // Some entries may have 'info' directly, some may be wrapped
      const info = r.info || r;
      allRestaurantsMap[info.id] = info;
    });
  }
});
// Convert the object back to an array
// This will ensure all restaurants are unique by their 'id'
  const allRestaurants = Object.values(allRestaurantsMap);
  //react hooks
  //useState is a react hook that allows us to create state variables in functional components
  //useState returns an array with two elements: the current state and a function to update it
  const [ListOfRestaurants, setListOfRestaurants] = useState(allRestaurants);

  return(
    <div className='body-container'>
      <div className='search-container'>
        {/* <input type="text" placeholder="Search for restaurants..." /> */}
        <button className='filter-button' onClick={(res) => {
          const filteredRestaurants = allRestaurants.filter(restaurant => restaurant.avgRating >= 4.0);
          setListOfRestaurants(filteredRestaurants);
        }}>Top rated Restaurants</button>
      </div>
      <div className='restro-list-container'>
        {ListOfRestaurants.map((restaurant) => (
          <RestroCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  )
};
