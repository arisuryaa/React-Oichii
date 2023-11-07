import React from "react";
import { useState } from "react";
import { easeInOut, motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
const Navbar = () => {
  const [Click, setClick] = useState(false);

  const HandleonClick = () => {
    setClick(!Click);
  };

  return (
    <nav className="flex items-center justify-between py-4 overflow-x-hidden text-white shadow-xl bg-secondary px-9">
      <h1 className="text-xl font-semibold text-white font-poppins">OICHII</h1>
      <img src="/img/hamburger.svg" className="cursor-pointer" alt="" onClick={() => HandleonClick()} />

      <AnimatePresence>
        {Click && (
          <motion.div
            className="fixed top-0 right-0 z-50 flex flex-col items-center w-[55%] lg:w-2/6 h-screen shadow-lg bg-secondary"
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
            <div className="flex items-center w-2/3 pb-2 mt-10 mb-5 text-white border-b-2 border-white">
              <h1 className="w-full text-3xl font-semibold">Oichii.</h1>
              <img src="/img/close.svg" alt="" className="cursor-pointer" onClick={() => HandleonClick()} />
            </div>
            <div className="flex flex-col w-2/3 overflow-x-hidden text-white">
              <Link to="Hero" className="mb-4 text-xl font-medium cursor-pointer" spy={true} smooth={true} offset={10} duration={500}>
                Home
              </Link>
              <Link to="story" className="mb-4 text-xl font-medium cursor-pointer" spy={true} smooth={true} offset={10} duration={500}>
                About
              </Link>
              <Link to="SellProduct" className="mb-4 text-xl font-medium cursor-pointer" spy={true} smooth={true} offset={10} duration={500}>
                Menu
              </Link>
              <Link to="Testi" className="mb-4 text-xl font-medium cursor-pointer" spy={true} smooth={true} offset={10} duration={500}>
                Testimonial
              </Link>
              <Link to="Contact" className="mb-4 text-xl font-medium cursor-pointer" spy={true} smooth={true} offset={10} duration={500}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
