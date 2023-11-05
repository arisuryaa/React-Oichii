import React, { useState } from "react";

const Hero = () => {
  const cakeImg = {
    img1: "/img/header1.svg",
    img2: "/img/header2.svg",
    img3: "/img/menu3.svg",
  };

  const [bigImage, setBigImage] = useState(cakeImg.img3);

  const changeImage = (url) => {
    setBigImage(url);
  };

  return (
    <div className="w-full h-screen bg-primary " id="Hero">
      <div className="absolute z-10 flex items-center justify-center w-full h-screen">
        <h1 className="absolute top-20 text-[10rem] z-0 opacity-5 overflow-x-hidden font-semibold whitespace-nowrap">OICHII CAKE</h1>
        <h1 className="absolute top-0 text-[10rem] z-0 opacity-5 overflow-x-hidden  mt-56 font-semibold whitespace-nowrap">OICHII CAKE</h1>
        <img src="/img/wheat1.svg" className="absolute h-48 top-40 right-40" alt="" />
        <img src="/img/wheat2.svg" className="absolute bottom-0 h-48 left-40" alt="" />
        <img src="/img/wheat2.svg" className="absolute h-20 bottom-28 right-40" alt="" />
        <img src="/img/wheat1.svg" className="absolute h-20 top-60 left-40" alt="" />
      </div>
      <div className="z-20 flex flex-col items-center justify-center h-full text-black font-poppins">
        <h1 className="z-20 text-6xl font-bold">OICHII.</h1>
        <p className="z-20 my-10 mt-2 font-thin text-center font-poppins">
          Make The World A Better Place With Cake
          <br />
          That Made With Love
        </p>
        <img src={bigImage} className="z-20 h-48 " alt="" />
        <img src="/img/shadow.svg" className="z-20 h-14" alt="" />
        <h1>Try Our Best Seller</h1>
        <div className="z-30 flex mt-5 cursor-pointer">
          <img src={cakeImg.img1} className="h-10 p-2 mr-5 border-2 rounded-md border-border" alt="" onClick={() => changeImage(cakeImg.img1)} />
          <img src={cakeImg.img2} className="h-10 p-2 mr-5 border-2 rounded-md border-border" alt="" onClick={() => changeImage(cakeImg.img2)} />
          <img src={cakeImg.img3} className="h-10 p-2 border-2 rounded-md border-border" alt="" onClick={() => changeImage(cakeImg.img3)} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
