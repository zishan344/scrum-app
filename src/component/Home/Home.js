import React from "react";
import Navbar from "../Navbar/Navbar";
import Contact from "./Contact";
import CourseDetils from "./CourseDetils";
import Courses from "./Courses";
import Hero from "./Hero";
import Testomonial from "./Testomonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Courses />
      <CourseDetils />
      <Testomonial />
      <Contact />
    </div>
  );
};

export default Home;
