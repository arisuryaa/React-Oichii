import React from "react";
import { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [Click, setClick] = useState(false);

  const HandleonClick = () => {
    setClick(!Click);
  };

  return (
    <nav className="bg-secondary text-white py-4 flex justify-between px-9 items-center shadow-xl">
      <h1 className="text-white font-poppins font-semibold text-xl">OICHII</h1>
      <img src="/img/hamburger.svg" className="cursor-pointer" alt="" onClick={() => HandleonClick()} />

      <AnimatePresence>
        {Click && (
          <motion.div
            className="fixed top-0 right-0 flex flex-col items-center w-2/6 h-screen  bg-secondary shadow-lg z-50"
            initial={{
              x: 450,
            }}
            animate={{
              x: 0,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
            exit={{
              x: 450,
              transition: {
                duration: 0.7,
                ease: "easeInOut",
              },
            }}
          >
            <div className="flex items-center w-2/3 pb-2 mt-10 mb-5 border-b-2 border-white text-white">
              <h1 className="w-full text-3xl font-semibold">Oichii.</h1>
              <img src="/img/close.svg" alt="" className="cursor-pointer" onClick={() => HandleonClick()} />
            </div>
            <div className="flex flex-col w-2/3 text-white">
              <a href="" className="mb-4 text-xl font-medium">
                Home
              </a>
              <a href="" className="mb-4 text-xl font-medium">
                About
              </a>
              <a href="" className="mb-4 text-xl font-medium">
                Menu
              </a>
              <a href="" className="mb-4 text-xl font-medium">
                Testimonial
              </a>
              <a href="" className="mb-4 text-xl font-medium">
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
