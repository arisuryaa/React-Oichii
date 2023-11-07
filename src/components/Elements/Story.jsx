import React from "react";

const Story = () => {
  return (
    <div className="w-full h-[70vh] lg:h-screen bg-primary" id="story">
      <div className="relative flex flex-col items-center w-full h-full lg:justify-center">
        <img src="/img/aboutcake.svg" className="bottom-0 hidden rotate-45 -left-20 h-60 lg:block lg:absolute" alt="" />
        <h1 className="px-5 pb-4 mb-10 text-5xl font-semibold border-b-2 border-black font-poppins">Our Story</h1>
        <p className="w-full px-10 text-lg text-center lg:w-1/2">
          Oichii Dibuat Oleh Ibu Apriyanti sejak tahun 2000.Ibu Apriyanti Memulai Membuat kue dari dapur rumahnya, dibuat dengan penuh kasih sayang dan cinta Membuat Kue yang dihasilkan sangat otentik
          dan lezat.Kami Selalu Mengutamakan Kualitas Kue yang kami buat untuk selalu memenuhi kepuasaan customer. visi kami adalah membuat dunia lebih baik dengan kue manis yang dibuat dengan cinta
        </p>
      </div>
    </div>
  );
};

export default Story;
