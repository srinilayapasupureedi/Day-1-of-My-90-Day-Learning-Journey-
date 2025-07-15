import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
export const RestroCard = (props) => {
  const {loginedUser}=useContext(UserContext);
  const { resData } = props;
  return (
    <div className='m-2 p-4 w-[200px] bg-gray-50 hover:bg-gray-200 shadow-lg rounded-sm'>
      <img
        className='rounded-sm mb-[8px]'
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
        alt={resData.name}
      />
      <h3 className="font-bold">{resData.name}</h3>
      <h4>{resData.cuisines?.join(", ") || "N/A"}</h4>
      <h4>{resData.avgRating} ⭐</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla?.slaString}</h4>
      <h4>userName:{loginedUser}</h4>
      
  
    </div>
  );
};
export const willPromotedLabel=(RestroCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="">Promoted</label>
        <RestroCard {...props}/>
      </div>

    );
  };
};