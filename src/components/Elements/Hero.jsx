import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <div className="w-full h-screen overflow-x-hidden bg-primary " id="Hero">
      <div className="absolute z-10 flex items-center justify-center w-full h-screen overflow-x-hidden">
        <h1 className="absolute top-20 text-[10rem] z-0 opacity-5 overflow-x-hidden font-semibold whitespace-nowrap">OICHII CAKE</h1>
        <h1 className="absolute top-0 text-[10rem] z-0 opacity-5 overflow-x-hidden  mt-56 font-semibold whitespace-nowrap">OICHII CAKE</h1>
        <img src="/img/wheat1.svg" className="hidden h-48 top-40 right-40 lg:block lg:absolute" alt="" />
        <img src="/img/wheat2.svg" className="absolute bottom-0 hidden h-48 left-40 lg:block lg:absolute" alt="" />
        <img src="/img/wheat2.svg" className="absolute hidden h-20 bottom-28 right-40 lg:block lg:absolute" alt="" />
        <img src="/img/wheat1.svg" className="absolute hidden h-20 top-60 left-40 lg:block lg:absolute" alt="" />
      </div>
      <div className="z-20 flex flex-col items-center justify-center h-full text-black font-poppins">
        <h1 className="z-20 text-6xl font-bold">OICHII.</h1>
        <p className="z-20 my-10 mt-2 font-thin text-center font-poppins">
          Make The World A Better Place With Cake
          <br />
          That Made With Love
        </p>
        <motion.img src={bigImage} className="z-20 h-1/5 lg:h-2/6" alt="" initial={{ y: 0 }} animate={{ y: [25, 0, 25], transition: { repeat: Infinity, duration: 3, delay: 1, ease: "easeInOut" } }} />
        <img src="/img/shadow.svg" className="z-20 h-14" alt="" />
        <h1>Try Our Best Seller</h1>
        <div className="z-30 flex mt-5 cursor-pointer">
          <img
            src={cakeImg.img1}
            className="w-16 h-10 py-2 mr-5 transition-all duration-200 border-2 rounded-md hover:scale-105 hover:shadow-2xl border-border"
            alt=""
            onClick={() => changeImage(cakeImg.img1)}
          />
          <img
            src={cakeImg.img2}
            className="w-16 h-10 py-2 mr-5 transition-all duration-200 border-2 rounded-md hover:scale-105 hover:shadow-2xl border-border"
            alt=""
            onClick={() => changeImage(cakeImg.img2)}
          />
          <img
            src={cakeImg.img3}
            className="w-16 h-10 py-2 transition-all duration-200 border-2 rounded-md hover:scale-105 hover:shadow-2xl border-border"
            alt=""
            onClick={() => changeImage(cakeImg.img3)}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
