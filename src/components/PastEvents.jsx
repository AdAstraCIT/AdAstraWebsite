import React from "react";
import EventBg1 from "../assets/Events/image1.png";
import EventBg2 from "../assets/Events/image2.png";
import EventBg3 from "../assets/Events/image3.png";
import EventBg4 from "../assets/Events/image4.png";

const PastEvents = () => {
  return (
    <div className="flex flex-col px-5 mt-4 w-full max-w-[1206px] max-md:max-w-full mx-auto">
      <div className="text-3xl font-medium leading-10 text-white max-md:max-w-full">
        Past Events
      </div>

      <div className="mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow text-white max-md:mt-5 max-md:max-w-full" >
              <div data-aos="fade-right" data-aos-duration="1000">
              <img
                loading="lazy"
                src={EventBg1}
                alt="Event Background 1"
                className="w-full aspect-[2.63] max-md:max-w-full" 
              />
              </div>
              <div data-aos="fade-right" data-aos-duration="1000">
              <img
                loading="lazy"
                src={EventBg3}
                alt="Event Background 3"
                className="mt-6 w-full aspect-[2.44] max-md:max-w-full" 
              />
              </div>
              <div className="flex flex-col items-start py-6 pr-20 pl-5 mt-4 rounded-2xl bg-white bg-opacity-10 max-md:pr-5 max-md:max-w-full">
                <div className="text-2xl font-medium leading-7 whitespace-nowrap">
                  See more of Past Events
                </div>
                <div className="justify-center px-4 py-2 mt-2 text-xs leading-4 text-center bg-black rounded-[32.853px] cursor-pointer">
                  Visit Page
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full" >
            <div className="flex flex-col grow max-md:mt-5 max-md:max-w-full">
              <div data-aos="fade-left" data-aos-duration="1000">
              <img
                loading="lazy"
                src={EventBg2}
                alt="Event Background 2"
                className="w-full aspect-[1.14] max-md:max-w-full"
              />
              </div>
              <div data-aos="fade-left" data-aos-duration="1000">
              <img
                loading="lazy"
                src={EventBg4}
                alt="Event Background 4"
                className="mt-4 w-full aspect-[2] max-md:max-w-full"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvents;
