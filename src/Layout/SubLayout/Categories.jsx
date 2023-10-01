import React from "react";

function Categories() {
  return (
    <div className="w-full h-auto bg-white mt-3 rounded-md p-3 flex justify-around items-center shadow-md">
      <div className="Product-Cat  h-full flex flex-col items-center  gap-1">
        <img
          src="https://icms-image.slatic.net/images/ims-web/1440c427-d3fe-49f7-aa90-09c8eb0b84ea.png"
          alt=""
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> Mart </span>
      </div>
      <span className="text-gray-300 text-3xl font-thin">|</span>
      <div className="Product-Cat  h-full flex flex-col items-center  gap-1">
        <img
          src="https://icms-image.slatic.net/images/ims-web/4f250051-aac7-46bd-9bea-c5b836dea844.png"
          alt=""
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> Fashion </span>
      </div>
      <span className="text-gray-300 text-3xl font-thin">|</span>
      <div className="Product-Cat  h-full flex flex-col items-center  gap-1">
        <img
          src="https://icms-image.slatic.net/images/ims-web/0ed92f69-d596-458b-bcd6-8d2bb69ef911.png"
          alt=""
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> Beauty </span>
      </div>
      <span className="text-gray-300 text-3xl font-thin">|</span>
      <div className="Product-Cat  h-full flex flex-col items-center  gap-1">
        <img
          src="https://icms-image.slatic.net/images/ims-web/d85f0ced-6459-455a-8504-150655bf948c.png"
          alt=""
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> Home & Decor </span>
      </div>
      <span className="text-gray-300 text-3xl font-thin">|</span>
      <div className="Product-Cat  h-full flex flex-col items-center  gap-1">
        <img
          src="https://icms-image.slatic.net/images/ims-web/cc89e68e-c809-4638-a5a6-2dc7e450d2a1.png"
          alt=""
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> Free Delevery </span>
      </div>
      <span className="text-gray-300 text-3xl font-thin">|</span>
      <div className="Product-Cat  h-full flex flex-col items-center  gap-1">
        <img
          src="https://icms-image.slatic.net/images/ims-web/a13edb2b-61bf-4dec-a410-f85b63d41490.png"
          alt=""
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> Everyday Low Price </span>
      </div>
      <span className="text-gray-300 text-3xl font-thin">|</span>{" "}
      <div className="Product-Cat  h-full flex flex-col items-center  gap-1">
        <img
          src="https://icms-image.slatic.net/images/ims-web/eaac2292-b2bd-4e83-81ff-40cb013b0b80.png"
          alt=""
          className="h-[80%] w-[100px]"
        />
        <span className="h-[20%]"> Daraz Like New </span>
      </div>

      
    </div>
  );
}

export default Categories;
