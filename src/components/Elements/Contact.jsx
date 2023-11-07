import React from "react";

const Contact = () => {
  return (
    <div className="w-full h-[70vh] lg:h-screen pb-10 bg-primary" id="Contact">
      <div className="flex flex-col items-center h-full">
        <h1 className="pb-4 my-10 text-5xl font-semibold text-center border-b-2 border-black font-poppins">Contact Us.</h1>
        <form action="" className="flex flex-col justify-center h-full gap-5 px-5">
          <div className="flex gap-2 ">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 h-12 px-10 border-2 border-black rounded-md placeholder:text-button placeholder:font-medium bg-primary active:border-2 active:border-secondary"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 h-12 px-10 border-2 border-black rounded-md placeholder:text-button placeholder:font-medium bg-primary active:border-2 active:border-secondary"
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="h-12 px-10 border-2 border-black rounded-md placeholder:text-button placeholder:font-medium bg-primary active:border-2 active:border-secondary"
          />
          <input
            type="text"
            placeholder="Your Massages"
            className="h-32 px-10 border-2 border-black rounded-md placeholder:text-button placeholder:font-medium bg-primary active:border-2 active:border-secondary"
          />
          <button className="w-2/5 py-1 font-medium text-white transition-all duration-300 rounded-md bg-button font-poppins hover:bg-primary hover:border-2 hover:border-button hover:text-button hover:shadow-2xl">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
