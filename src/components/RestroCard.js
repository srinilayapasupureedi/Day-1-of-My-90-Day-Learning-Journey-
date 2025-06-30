import { CDN_URL } from "../utils/constants";
export const RestroCard = (props) => {
  const { resData } = props;
  return (
    <div className='restro-card'>
      <img
        className='restro-image'
        src={`${CDN_URL}${resData.cloudinaryImageId}`}
        alt={resData.name}
      />
      <h3>{resData.name}</h3>
      <h4>{resData.cuisines?.join(", ") || "N/A"}</h4>
      <h4>{resData.avgRating} ⭐</h4>
      <h4>{resData.costForTwo}</h4>
      <h4>{resData.sla?.slaString}</h4>
    </div>
  );
};