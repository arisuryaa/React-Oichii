import React from "react";
import Button from "./Button";

const Menus = [
  {
    id: 1,
    name: "Cheese Cake",
    desc: "Kue Keju yang dibuat dengan keju pilihan menghasilkan rasa yang sangat enak",
    price: "Rp.50.000",
    image: "/img/menu1.svg",
  },
  {
    id: 2,
    name: "Roll Cake",
    desc: "Kue Keju yang dibuat dengan keju pilihan menghasilkan rasa yang sangat enak",
    price: "Rp.50.000",
    image: "/img/menu2.svg",
  },
  {
    id: 3,
    name: "Roll Cake",
    desc: "Kue Keju yang dibuat dengan keju pilihan menghasilkan rasa yang sangat enak",
    price: "Rp.50.000",
    image: "/img/menu3.svg",
  },
  {
    id: 4,
    name: "Roll Cake",
    desc: "Kue Keju yang dibuat dengan keju pilihan menghasilkan rasa yang sangat enak",
    price: "Rp.50.000",
    image: "/img/menu4.svg",
  },
  {
    id: 5,
    name: "Roll Cake",
    desc: "Kue Keju yang dibuat dengan keju pilihan menghasilkan rasa yang sangat enak",
    price: "Rp.50.000",
    image: "/img/menu5.svg",
  },
  {
    id: 6,
    name: "Roll Cake",
    desc: "Kue Keju yang dibuat dengan keju pilihan menghasilkan rasa yang sangat enak",
    price: "Rp.50.000",
    image: "/img/header1.svg",
  },
];

const SellProduct = () => {
  return (
    <div className="w-full min-h-fit bg-primary">
      <div className="relative flex flex-col items-center w-full h-full">
        <h1 className="pb-4 my-10 text-5xl font-semibold text-center border-b-2 border-black font-poppins">Our Product</h1>
        <div className="flex flex-wrap items-center justify-center w-full h-full pb-20 gap-7">
          {Menus.length > 0 &&
            Menus.map((e) => (
              <div className="flex flex-col items-center py-5 mx-2 border-2 border-black rounded-lg shadow-2xl w-72 h-[22rem]" key={e.id}>
                <div className="relative flex flex-col items-center w-full h-3/4">
                  <img src="/img/elipse.svg" className="absolute z-10 h-40 -top-5" alt="" />
                  <img src={e.image} className="z-20 h-1/2" alt="" />
                  <div className="flex flex-col items-center h-1/2">
                    <h1 className="my-5 text-2xl font-medium font-poppins">{e.name}</h1>
                    <p className="w-full px-4 h-1/2 ">{e.desc.substring(0, 90)}...</p>
                  </div>
                </div>
                <div className="flex items-end justify-between w-full h-full px-5 ">
                  <Button>Buy Now</Button>
                  <h1 className="text-xl font-semibold font-poppins">{e.price}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SellProduct;
