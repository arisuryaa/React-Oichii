import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

const Testi = () => {
  return (
    <div className="w-full h-screen pt-10 bg-third" id="Testi">
      <div className="flex flex-col items-center">
        <h1 className="px-5 pb-5 text-5xl font-semibold border-b-2 border-black font-poppins">Our Testimonial</h1>
      </div>
      <div className="flex items-center justify-center w-full h-5/6">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="w-1/2 shadow-2xl myswipper h-5/6"
        >
          <SwiperSlide>
            <div className="w-full h-full bg-white rounded-lg shadow-xl">
              <div className="flex py-10 mx-10">
                <img src="/img/header2.svg" className="border-2 border-black rounded-full h-11" alt="" />
                <div className="flex flex-col ml-5">
                  <h1 className="font-medium font-poppins">Dewa</h1>
                  <p>Probowo2024@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-2/5">
                <h1 className="text-xl font-semibold">Pesan dan Kesan</h1>
                <p className="w-2/3 mt-5 text-lg text-center">“Saya Sudah Mencobanya rasanya sangat enak.Kuenya Lembut dan manisnya pas Saya tidak akan ragu untuk pesan lagi !! ”</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white rounded-lg">
              <div className="flex py-10 mx-10">
                <img src="/img/header2.svg" className="overflow-hidden border-2 border-black rounded-full h-11" alt="" />
                <div className="flex flex-col ml-5">
                  <h1 className="font-medium font-poppins">RonaldoGoat</h1>
                  <p>CR7Goat@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-2/5">
                <h1 className="text-xl font-semibold">Pesan dan Kesan</h1>
                <p className="w-2/3 mt-5 text-lg text-center">“Saya Sudah Mencobanya rasanya sangat enak.Kuenya Lembut dan manisnya pas Saya tidak akan ragu untuk pesan lagi !! ”</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full bg-white rounded-lg">
              <div className="flex py-10 mx-10">
                <img src="/img/header2.svg" className="border-2 border-black rounded-full h-11" alt="" />
                <div className="flex flex-col ml-5">
                  <h1 className="font-medium font-poppins">HalaMadrid!</h1>
                  <p>BarcaClubAmpas@gmail.com</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-full h-2/5">
                <h1 className="text-xl font-semibold">Pesan dan Kesan</h1>
                <p className="w-2/3 mt-5 text-lg text-center">“Saya Sudah Mencobanya rasanya sangat enak.Kuenya Lembut dan manisnya pas Saya tidak akan ragu untuk pesan lagi !! ”</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testi;
