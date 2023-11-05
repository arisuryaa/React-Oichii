import React from "react";

const TheBest = () => {
  return (
    <div className="w-full h-screen bg-third">
      <div className="w-full h-full flex flex-col items-center">
        <h1 className="my-10 font-poppins text-5xl font-semibold border-b-2 border-black pb-4 px-5">We Provide The Best</h1>
        <div className="flex w-full justify-center h-full  items-center gap-10">
          <div className="flex flex-col bg-secondary w-1/4 h-3/4 rounded-lg items-center shadow-2xl">
            <img src="/img/quality1.svg" className="h-10 mt-8" alt="" />
            <h1 className="text-2xl text-white font-semibold mt-5">Fast Delivery</h1>
          </div>
          <div className="flex flex-col bg-secondary w-1/4 h-3/4 rounded-lg items-center shadow-2xl">
            <img src="/img/quality2.svg" className="h-10 mt-8" alt="" />
            <h1 className="text-2xl text-white font-semibold mt-5">Best Quality</h1>
          </div>
          <div className="flex flex-col bg-secondary w-1/4 h-3/4 rounded-lg items-center shadow-2xl">
            <img src="/img/quality3.svg" className="h-11 mt-8" alt="" />
            <h1 className="text-2xl text-white font-semibold mt-5">Freshly Made</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBest;
