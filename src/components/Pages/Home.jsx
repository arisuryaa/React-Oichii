import React from "react";
import Header from "../Fragments/Header";
import About from "../Fragments/About";
import Product from "../Fragments/Product";
import Testimonial from "../Fragments/Testimonial";
import ContactMe from "../Fragments/ContactMe";
import Footer from "../Fragments/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Product />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
};

export default Home;
