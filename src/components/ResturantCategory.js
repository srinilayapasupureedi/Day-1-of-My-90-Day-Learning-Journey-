const ResturantCategory=({data})=>{
  console.log(data);
    return(
       <div>
        {/* header */}
        {/* Body accordian */}
        <span>
          {data.title};
          {"⬇️"};
        </span>

       </div>
    );
};
export default ResturantCategory;