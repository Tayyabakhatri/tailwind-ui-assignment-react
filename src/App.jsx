import React from "react";
import Navbar from "./Componenets/Navbar";
import HeroSection from "./Componenets/HeroSection";
import AboutMe from "./Componenets/AboutMe";
import Cards from "./Componenets/Cards";
import Testimonial from "./Componenets/Testimonial";
import Contact from "./Componenets/contact";
import Footer from "./Componenets/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutMe/>
      <Cards/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
