import { CDN_URL } from "../utils/constants";
const ItemsList=({items})=>{
     
     return(
        <div>
          {items.map((item)=>(
             <div key={item.card.info.id}
               className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                <div className="w-9/12">
                   <div className="py-2">
                    <p>{item.card.info.name}</p>
                    <p>₹{item.card.info.price?
                    item.card.info.price/100:
                    item.card.info.defaultPrice/100}
                    </p>
                    </div >
                    <p className="text-xs">{item.card.info.description}</p>
               </div>
               <div className="w-3/12">
               <div className="absolute"><button className="bg-white text-black rounded-lg shadow-lg p-2 mx-16 text-gray-180">Add +</button></div>
               <img className="w-full p-4" src={CDN_URL+item.card.info.imageId}/>
               
               </div>
               </div>
             

          ))}
        </div>
     );
};
export default ItemsList;