import React from "react";
import flashSaleData from "../../Data/flashSaleData";

function ProductCard() {
  return (
    <section className="Prodcuts-Card-Container border-t-4 bg-white flex">

        {flashSaleData.map(product=>{
            return (
<article key={product.id} className="Prodcut-Card w-36 text-xs p-2">
        <div className={`Card-Image-${product.id} bg-white p-2 `}>
          <img
            src={product.imageUrl}
            alt=""
          />
        </div>
        <div className="Card-Title ">
        {product.title.slice(0,55)}...
        </div>
        <div className="Card-Price text-base text-[#FF6801]">Rs. {product.price}</div>
        <div className="Card-Discounted-Price">
            <span className="line-through text-gray-400 mr-2">Rs {product.discount}</span>
            <span>-60%</span>
        </div>
      </article>
            )
        })}
      
         </section>
  );
}

export default ProductCard;
