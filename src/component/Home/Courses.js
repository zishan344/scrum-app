import React, { useEffect, useState } from "react";
// Import Swiper React components
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Rating from "react-rating";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Courses.css";
// import required modules

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Courses = () => {
  const [courses, setCourse] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  console.log(courses);
  return (
    <div className="mt-20">
      <div className="container mx-auto px-2">
        <h2 className="font-bold text-[20px] ">A broad range of courses </h2>
        <p className="font-semibold mt-2 mb-16">
          {" "}
          Choose from 100+ online video courses with new additions published
          every month
        </p>
        <div className=" bg-gray-100">
          <Swiper
            className="mb-10"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {courses.map((c) => (
              <SwiperSlide key={c._id}>
                <div class="card max-w-lg bg-base-100 shadow-xl sm:pl-5 md:pl-0">
                  <figure>
                    <img
                      src={c.image}
                      className="h-[190px] w-full object-cover"
                      alt="courseImage"
                    />
                  </figure>
                  <div class="card-body">
                    <h2 class="card-title">
                      Learn SCRUM: The Complete Beginner Course
                    </h2>
                    <p>Samay Jain, Ex-KPMG</p>
                    <p className="flex gap-1 items-center">
                      <span>{c.rating}</span>
                      <Rating
                        initialRating={c.rating}
                        emptySymbol={
                          <AiOutlineStar className="text-secondary" />
                        }
                        fullSymbol={<AiFillStar className="text-secondary" />}
                        readonly
                      ></Rating>
                    </p>
                    <div class="card-actions justify-start">
                      <button class="btn btn-secondary btn-sm btn-outline no-animation  text-white rounded-full">
                        ENROLL NOW
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Courses;
