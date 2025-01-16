import React from "react";
import back from "../assets/back1.png"
const BackgroundComponent = () => {
  return (
    <div className=" absolute top-0 w-full h-full -z-20 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent ">
      <img
        src={back}
        className="w-full h-[70%] object-contain scale-[300%] z-[-1] duration-300 max-sm:w-1/2 max-sm:h-96"
        alt="background"
      />
    </div>
  );
};

export default BackgroundComponent;
