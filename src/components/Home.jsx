import React from "react";
import something  from "../assets/something.svg"; 
import AnimatedSvg from "../components/AnimatedSvg";
import logo from "../assets/logo.svg"
import BackgroundComponent from './Background'

const Home = () => {
  return (
    <>
    <div className="relative w-full flex justify-center items-center h-screen overflow-hidden bg-gradient-to-t from-black via-transparent to-transparent max-sm:w-screen max-sm:h-screen">
	<img className="w-64 md:w-96 duration-300" src={logo} alt="ad_astra_Logo" />
	<BackgroundComponent />
</div>
    
      <section className="w-full h-64 bg-black"></section>
      <div className="px-10 md:px-20 flex w-full h-full">
        <div className="flex gap-10 w-full h-full items-center justify-center">
          <div className="flex flex-col w-full lg:w-3/5">
            <h2 className="text-4xl font-medium leading-10 text-white">What is Ad Astra?</h2>
            <p className="mt-10 text-xl leading-8 text-white text-opacity-60 max-md:max-w-full">
              Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
              graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
              century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for
              use in a type specimen book. It usually begins with:
            </p>
          </div>
          <div className="w-2/5 hidden lg:block">
            <AnimatedSvg />
          </div>
        </div>
      </div>
      <section className="w-full h-64"></section>

      <section className="w-full px-10 md:px-20">
        <div className="flex gap-5 flex-col md:flex-row items-center justify-center md:gap-0">
          <div className="w-full">
            <div className="z-10 flex flex-col self-stretch my-auto text-xl leading-8 text-white text-opacity-60 mt-10 md:mt-0">
              <h1 className="text-4xl font-medium leading-10 text-white">What we do?</h1>
              <p className="mt-10">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print,
                graphic or web designs. The passage is attributed to an unknown typesetter in the 15th
                century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum
                for use in a type specimen book. It usually begins with:
              </p>
              <ul className="mt-9 list-disc ml-5">
                <li>Robotics</li>
                <li>Drones</li>
                <li>Programming</li>
              </ul>
            </div>
          </div>
          <div
            className="hidden lg:block flex-col w-full md:ml-5 items-center justify-center overflow-hidden"
            style={{ backgroundImage: "linear-gradient(to right, black, transparent)" }}
          >
            <img
              loading="lazy"
              src={something}
              alt=""
              className="w-full aspect-[0.98] scale-[210%]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
