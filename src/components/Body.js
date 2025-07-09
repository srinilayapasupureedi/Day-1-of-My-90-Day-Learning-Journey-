import { useState, useEffect } from 'react';
import { RestroCard ,willPromotedLabel} from './RestroCard';
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
  const ResturantCardPromoted=willPromotedLabel(RestroCard);
  console.log(ResturantCardPromoted);

  return listOfRestaurants.length===0?<Shimmer/>:(
    <div className='body-container'>
      <div className='flex p-4 m-4'>
        <input  className="border border-solid border-black rounded-b-[2px]"type="text" placeholder="Find Resturants" value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}/>

        <button className='bg-gray-400 px-4 rounded-b-[2px] text-white'
        onClick={() => {
            const filteredRestaurants = allRestaurants.filter(
              restaurant => restaurant.info?.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setfilteredResturants(filteredRestaurants);
          }
        }>Search</button>

        <button 
          className='bg-gray-400 mx-[20px] p-2 text-white' 
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
      <div className='flex flex-wrap'>
        {filteredRestaurants.map((restaurant) => (
        <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
           {restaurant.info.promoted?<ResturantCardPromoted resData={restaurant.info}/>: <RestroCard resData={restaurant.info} />}</Link>

        ))}
      </div>
    </div>
  );
};
