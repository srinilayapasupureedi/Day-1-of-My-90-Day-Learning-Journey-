import { useState, useEffect } from 'react';
import { RestroCard } from './RestroCard';
import  Shimmer  from './Shimmer';
import ResturantMenu  from './ResturantMenu';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';


export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants,setfilteredResturants]=useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
       'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
      );
      const json = await response.json();
      console.log(json);
      
      const mainRestaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      
      // const combinedRestaurants = [...topRestaurants, ...mainRestaurants];
      setAllRestaurants(mainRestaurants);
      setListOfRestaurants(mainRestaurants);
      setfilteredResturants(mainRestaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false)
  {
    return <h1>Looks like you are offline!Check your connection please</h1>;
  }

  return listOfRestaurants.length===0?<Shimmer/>:(
    <div className='body-container'>
      <div className='search-container'>
        <input type="text" placeholder="Search..." value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}/>
        <button className='search-button'
        onClick={() => {
            const filteredRestaurants = allRestaurants.filter(
              restaurant => restaurant.info?.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setfilteredResturants(filteredRestaurants);
          }
        }>Search</button>
        <button 
          className='filter-button' 
          onClick={() => {
            const filteredRestaurants = allRestaurants.filter(
              restaurant => restaurant.info?.avgRating >=1
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className='restro-list-container'>
        {filteredRestaurants.map((restaurant) => (
        //  <Link to='/reasturants/' key={restaurant.info.id}> <RestroCard resData={restaurant.info} /></Link>
        <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}> <RestroCard resData={restaurant.info} /></Link>

        ))}
      </div>
    </div>
  );
};
