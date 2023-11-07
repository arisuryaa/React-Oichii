import React, { useRef } from "react";

const TheBest = () => {
  const scrollRef = useRef(null);

  const scrollToElements = () => {
    scrollRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full pb-16 min-h-fit bg-third">
      <div className="flex flex-col items-center w-full h-full">
        <h1 className="px-5 pb-4 my-10 text-4xl font-semibold text-center border-b-2 border-black lg:text-5xl font-poppins">
          We Provide
          <br /> The Best
        </h1>
        <div className="flex flex-wrap justify-center w-full h-full gap-10 items-centers">
          <div className="flex flex-col items-center w-56 pb-5 rounded-lg shadow-2xl bg-secondary h-3/4">
            <img src="/img/quality1.svg" className="h-10 mt-8" alt="" />
            <h1 className="mt-5 text-2xl font-semibold text-white">Fast Delivery</h1>
            <p className="w-3/4 mt-5 text-center text-white">kami tidak ingin mengecewakan customer kami karena pengiriman yang lambat</p>
          </div>
          <div className="flex flex-col items-center w-56 pb-5 rounded-lg shadow-2xl bg-secondary h-3/4">
            <img src="/img/quality2.svg" className="h-10 mt-8" alt="" />
            <h1 className="mt-5 text-2xl font-semibold text-white">Best Quality</h1>
            <p className="w-3/4 mt-5 text-center text-white">kami akan selalu memastikan bahwa kue yang sampai di tangan customer adalah kualitas terbaik</p>
          </div>
          <div className="flex flex-col items-center w-56 pb-5 rounded-lg shadow-2xl bg-secondary h-3/4">
            <img src="/img/quality3.svg" className="mt-8 h-11" alt="" />
            <h1 className="mt-5 text-2xl font-semibold text-white">Freshly Made</h1>
            <p className="w-3/4 mt-5 text-center text-white">kami ingin semua kue yang diterima customer selalu fresh maka kami hanya membuat kue ketika pesanan dibuat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheBest;
