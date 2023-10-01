import React, { useState } from "react";

function Slider() {
  const [slide, setSlide] = useState([
    "https://icms-image.slatic.net/images/ims-web/b3b10ef8-b6ee-4346-b4f5-754a66ccb9f8.png",
    "https://icms-image.slatic.net/images/ims-web/d62691e2-30aa-4434-8f00-7d5019f5f43d.jpg",
    "https://icms-image.slatic.net/images/ims-web/0aa3efcd-bb13-47c8-8aef-c34ec32d2b9d.png",
  ]);
  const [currentSlide,setCurrentSlide] = useState("https://icms-image.slatic.net/images/ims-web/b3b10ef8-b6ee-4346-b4f5-754a66ccb9f8.png");

 const [currentIndex,setCurrentIndex] = useState(0);

  function handleChangeSlide() {
    // console.log(slide.length)
    if(currentIndex < slide.length){
        setCurrentIndex(prev => prev + 1);
   setCurrentSlide(slide[currentIndex])
    }else{
        setCurrentIndex(0)
       
    }

   console.log(currentIndex)
   
  }

  setTimeout(handleChangeSlide,1500)
  return (
    <section className="Slider-Container mt-1  shadow-xl ">
      <article className="Slider rounded-md overflow-hidden  border-2 relative">
        <img
          src={currentSlide}
          alt=""
          className="h-[50vh] w-full object-cover"
        />
        <button className="absolute top-[50%] bottom-[50%] left-0 py-2 px-2 text-white bg-black bg-opacity-60">
          <i className="fa-solid fa-arrow-left absolute top-0 left-0"></i>
        </button>
        <button className="absolute top-[50%] bottom-[50%] right-0 py-2 px-2 text-white bg-black bg-opacity-60" >
          <i className="fa-solid fa-arrow-right absolute top-0 right-0 " onClick={handleChangeSlide}></i>
        </button>
      </article>
    </section>
  );
}

export default Slider;