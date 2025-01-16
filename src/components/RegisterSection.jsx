import React from "react";
import RegisterBg from "../assets/registerbg.svg"; 

const RegisterSection = () => {
  return (
    <>
      <section className="w-full h-20"></section>
      <main
        className="overflow-hidden rounded-3xl border border-solid bg-blend-screen border-neutral-800 mx-10 md:mx-20 md:max-w-full"
        style={{
          backgroundImage: `url(${RegisterBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="w-full h-full flex md:gap-10 max-md:flex-col items-center justify-center p-10">
          <div className="md:px-20 flex flex-col h-full w-full md:w-3/4">
            <article className="flex flex-col md:w-full">
              <h1 className="text-4xl text-white leading-[60px] md:w-full">
                Start your journey with{" "}
                <span className="text-[#CAFF33]">Ad Astra today!</span>
              </h1>
              <p className="mt-3.5 text-lg font-light leading-7 text-zinc-400 max-md:max-w-full">
                Lorem ipsum, or lipsum as it is sometimes known, is text used in
                laying out print, graphic or web designs. The passage is
                attributed to an unknown typesetter in the 15th century who is
                thought to have scrambled parts
              </p>
            </article>
          </div>

          <button
            className="justify-center self-stretch px-8 py-3 my-auto w-full h-full md:w-1/4 text-lg font-bold leading-7 whitespace-nowrap bg-[#CAFF33] rounded-[82px] text-zinc-900 max-md:px-5 mt-10"
            type="button"
          >
            Register
          </button>
        </section>
      </main>
    </>
  );
};

export default RegisterSection;
