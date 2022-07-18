import React from "react";
import Ellipse1 from "../../img/Ellipse1.jpg";
import Ellipse2 from "../../img/Ellipse2.png";
import Ellipse3 from "../../img/Ellipse3.png";
import Ellipse4 from "../../img/Ellipse4.png";
const Hero = () => {
  return (
    <div class="bg-[#9426e9] overflow-x-clip pt-20 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 relative">
        <div>
          <h2 class="py-2 inline-block my-10 rounded-full px-4 bg-white text-accent bo">
            #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
          </h2>
          <h2 className="text-neutral text-4xl font-bold mt-6 mb-10">
            Unleash Your SCRUM Skills,Grab More Attention To Resume
          </h2>
          <button class="btn btn-sm btn-outline no-animation  text-white rounded-full">
            ENROLL NOW
          </button>
          <div>
            <h3 className="mt-10 mb-2 text-neutral text-center">
              10% OFF on all courses* | Offer Valid For
            </h3>
            <div class="grid justify-center mb-20 grid-flow-col gap-5 text-center auto-cols-max">
              <div class="flex flex-col p-2 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-lg  rounded-box text-white font-semibold">
                <span class="countdown font-mono text-5xl">
                  <span style={{ "--value": 5 }}></span>
                </span>
                days
              </div>
              <div class="flex flex-col p-2 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-lg  rounded-box text-white font-semibold">
                <span class="countdown font-mono text-5xl">
                  <span style={{ "--value": 5 }}></span>
                </span>
                hours
              </div>
              <div class="flex flex-col p-2 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-lg  rounded-box text-white font-semibold">
                <span class="countdown font-mono text-5xl">
                  <span style={{ "--value": 12 }}></span>
                </span>
                min
              </div>
              <div class="flex flex-col p-2 bg-white bg-opacity-20 backdrop-blur-md drop-shadow-lg  rounded-box text-white font-semibold">
                <span class="countdown font-mono text-5xl">
                  <span style={{ "--value": 30 }}></span>
                </span>
                sec
              </div>
            </div>
          </div>
        </div>
        <div className="md:relative flex justify-center items-center flex-wrap flex-row-reverse">
          <div class="w-24 h-24 rounded-full top-0 left-[50%] md:hidden lg:block sm:block static md:absolute z-10">
            <img className="h-full rounded-full object-cover" src={Ellipse2} />
          </div>
          <div class="w-36 bottom-[50%] left-[18%] h-36 rounded-full md:hidden lg:block sm:block static md:absolute z-10">
            <img
              className="h-full rounded-full object-cover  "
              src={Ellipse3}
            />
          </div>
          <div class="w-44 h-44 bottom-[10%] left-[-5%] rounded-full md:hidden lg:block sm:block static md:absolute z-10">
            <img
              className="h-full rounded-full object-cover  "
              src={Ellipse4}
            />
          </div>
          <div className="w-[530px] h-[530px] static md:absolute bottom-[-60px] right-[-161px] rounded-full">
            <img
              src={Ellipse1}
              className="h-full rounded-full object-cover	"
              alt="Ellipse_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
