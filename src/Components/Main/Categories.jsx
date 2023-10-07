import React from "react";
import categoriesData from "../../Data/categoriesData";


function Categories() {  
  return (
    <div className="w-full h-auto bg-white mt-3 rounded-md p-3 flex justify-around items-center shadow-md">
     {categoriesData.map((product,index)=>{
      return (
        <>
        <div key={product.id} className={`Product-Cat-${product.id}  h-full flex flex-col items-center  gap-1`}>
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> {product.name} </span>
      </div>
    {index < categoriesData.length-1 ? <span className="text-gray-300 text-3xl font-thin">|</span> : null}
      </>
      ) 
     })}
      
    </div>
  );
}

export default Categories;
