import React from "react";

const FooterContent = () => {
  return (
    <div className="w-full h-[40vh] bg-secondary">
      <div className="flex justify-between w-full px-10 py-5">
        <iframe
          className="rounded-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3944.700259754689!2d115.26358427321115!3d-8.624747587653088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd23fc2211db74b%3A0x8299213c237ad129!2sDENFILM%20Creative%20Supply%20%26%20Production!5e0!3m2!1sen!2sid!4v1699160760808!5m2!1sen!2sid"
        ></iframe>
        <div className="flex flex-col w-1/2 text-white">
          <h1 className="pb-5 text-4xl font-semibold border-b border-white">Oichii.</h1>
          <div className="flex gap-5 mt-3 mb-5">
            <a href="">Instagram</a>
            <a href="">Instagram</a>
            <a href="">Instagram</a>
          </div>
          <p className="font-light font-poppins"> Copyright by Dewa © All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default FooterContent;
