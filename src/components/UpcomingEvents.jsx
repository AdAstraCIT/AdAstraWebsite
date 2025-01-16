import React from "react";
import EventBg5 from "../assets/Events/image5.png";
import EventBg6 from "../assets/Events/image6.png";
import EventBg7 from "../assets/Events/image7.png";
import Between from "../assets/Between.png"

const UpcomingEvents = () => {
  return (
    <div className="m-10">
  
      <div className="mt-20 text-3xl font-medium leading-10 text-white md:w-full">
        Upcoming Events
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mt-5 gap-10">
        <div className="box w-full md:w-1/4 h-58 rounded-2xl shadow-lg overflow-hidden duration-500 cursor-pointer" data-aos="fade-up"
            data-aos-duration="1700">
          <img
            className="w-full h-full object-contain object-top duration-500"
            src={EventBg5}
            alt=""
          />
        </div>
        <div className="box w-full md:w-1/4 h-58 rounded-2xl shadow-lg overflow-hidden duration-500 cursor-pointer" data-aos="fade-up"
            data-aos-duration="1800">
          <img
            className="w-full h-full object-contain object-top duration-500"
            src={EventBg6}
            alt=""
          />
        </div>
        <div className="box w-full md:w-1/4 h-58 rounded-2xl shadow-lg overflow-hidden duration-500 cursor-pointer" data-aos="fade-up"
            data-aos-duration="1900">
          <img
            className="w-full h-full object-contain object-top duration-500"
            src={EventBg7}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <div className="box w-full rounded-lg shadow-lg overflow-hidden duration-500 cursor-pointer">
          <img
            className="w-full h-full rounded-lg object-contain object-top duration-500"
            src={Between}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
