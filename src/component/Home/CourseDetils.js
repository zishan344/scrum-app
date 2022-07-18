import React from "react";
import eye from "../../img/eye.png";
import health from "../../img/healthIcon.png";
import matarial from "../../img/matrial.png";
import study from "../../img/study.png";
import task from "../../img/task.png";

const CourseDetils = () => {
  return (
    <div className="container my-20 mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="md:max-w-[50%] sm:max-w-[100%]">
        <h2 className="text-3xl font-bold mb-4 text-accent">
          Start learning with us right now!
        </h2>
        <p className="font-semibold mb-5">
          Choose from 100+ online video courses with new updates.
        </p>
        <button class="btn btn-sm btn-outline btn-primary no-animation  text-white rounded-full">
          ENROLL NOW
        </button>
      </div>
      <div className="flex justify-center gap-5 items-center">
        <div className="flex flex-col justify-center gap-7">
          <div className="flex gap-2 items-center mt-4 flex-wrap">
            <h2 className="text-amber-500 font-semibold ">
              Live <br /> Exams
            </h2>
            <div className="w-48 h-48 flex justify-center items-center rounded-full bg-amber-100">
              <img src={task} className="w-12 h1-12" alt="task" />
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4 flex-wrap">
            <h2 className="text-cyan-500 font-semibold">
              {" "}
              Live <br /> Classes
            </h2>
            <div className="w-48 h-48 flex justify-center items-center rounded-full bg-cyan-100	">
              <img src={health} className="w-12 h1-12" alt="task" />
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4 flex-wrap">
            <h2 className="text-orange-500 font-semibold">
              100 K+ <br /> Views
            </h2>
            <div className="w-48 h-48 flex justify-center items-center rounded-full bg-orange-100">
              <img src={eye} className="w-12 h1-12" alt="task" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-7">
          <div className="flex gap-2 items-center mt-4 flex-wrap">
            <h2 className="text-rose-500 font-semibold">
              1000+ <br />
              Lessons
            </h2>
            <div className="w-48 h-48 flex justify-center items-center rounded-full bg-rose-200	">
              <img src={matarial} className="w-12 h1-12" alt="task" />
            </div>
          </div>
          <div className="flex gap-2 items-center mt-4 flex-wrap">
            <h2 className="text-green-400 font-semibold">
              1000+ <br /> Lessons
            </h2>
            <div className="w-48 h-48 flex justify-center items-center rounded-full bg-green-200	">
              <img src={study} className="w-12 h1-12" alt="task" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetils;
