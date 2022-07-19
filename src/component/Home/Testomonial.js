import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
// import required modules
import "./Testomonial.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
const Testomonial = () => {
  const [reviews, setReview] = useState([]);
  useEffect(() => {
    fetch("Review.json")
      .then((res) => res.json())
      .then((data) => setReview(data));
  }, []);
  return (
    <div className="container mx-auto">
      <div>
        <h2 className="b flex sm:flex-row sm:text-center text-left flex-col  items-center gap-10 font-bold text-secondary uppercase">
          Our Testimonials
        </h2>
      </div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Keyboard, Pagination, Navigation]}
        className="mySwiper my-20"
      >
        {reviews.map((r) => (
          <SwiperSlide key={r._id}>
            <div className="text-center md:px-6">
              <div class="avatar"></div>
              <div class="avatar">
                <div class="w-24 rounded-full">
                  <img src={r.picture} alt="" />
                </div>
              </div>

              <p>" {r.about} "</p>
              <h2 className="font-bold text-accent mt-5">{r.name}</h2>
              <h2 className="font-semibld text-accent">{r.company}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testomonial;
