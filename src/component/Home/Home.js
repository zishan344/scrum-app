import React from "react";
import Navbar from "../Navbar/Navbar";
import CourseDetils from "./CourseDetils";
import Hero from "./Hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CourseDetils />
    </div>
  );
};

export default Home;
