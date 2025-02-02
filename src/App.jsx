import React from "react";
import Navbar from "./Componenets/Navbar";
import HeroSection from "./Componenets/HeroSection";
import AboutMe from "./Componenets/AboutMe";
import Cards from "./Componenets/Cards";
import Testimonial from "./Componenets/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection/>
      <AboutMe/>
      <Cards/>
      <Testimonial/>
    </>
  );
}

export default App;
