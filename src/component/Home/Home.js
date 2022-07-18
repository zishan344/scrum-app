import React from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "./Contact";
import CourseDetils from "./CourseDetils";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CourseDetils />
      <Contact />
    </div>
  );
};

export default Home;
