
import ItemsList from "./ItemsList"
const ResturantCategory=({data,showItems,setShowIndex})=>{
   
   const handleClick=()=>{
    setShowIndex();
   }
    return(
      <div>
       <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        {/* header */}
     
        <div onClick={handleClick} className="
        flex justify-between cursor-pointer">
          <span className="font-bold text-lg">
          {data.title}({data.itemCards.length})</span>
          <span>{"⬇️"}</span>
          </div>
           {/* Body accordian */}
           {showItems&&<ItemsList items={data.itemCards}/>}
         
       </div>
        
       </div>
    );
};
export default ResturantCategory;