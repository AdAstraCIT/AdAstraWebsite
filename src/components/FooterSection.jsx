import React from "react";
import Logo from "../assets/logo.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
import email from "../assets/email.svg";

const FooterSection = () => {
  return (
    <div>
      <div className="self-stretch mt-9 border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full w-auto"></div>

      <div id="logo_part" className="mt-1">
        <img
          id="logo"
          src={Logo}
          alt="Ad Astra Logo"
          className="h-16 w-1/2 mt-24 mb-24 block mx-auto"
        />
      </div>

      <div className="self-stretch mt-9 border border-solid bg-neutral-800 border-neutral-800 min-h-[1px] max-md:max-w-full w-auto"></div>

      <div className="mx-5 h-16 flex flex-row justify-between items-center bg-zinc-900 border-neutral-800 text-white p-2 mt-10 mb-10 md:mx-24 rounded-full">
        <div className="w-full flex items-center justify-between gap-5 px-5">
          <div className="w-full flex gap-5">
            <a
              href="https://twitter.com/adastracit"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full"
            >
              <img src={twitter} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/adastracit/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded-full"
            >
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
          <a
            className="w-full md:w-[250px] flex justify-center"
            href="mailto:adastra@cambridge.edu.in"
          >
            <button className="bg-[#CAFF33] py-4 pr-10 pl-5 rounded-full flex space-x-2 h-14 ">
           
              <img src={email} alt="Email icon" />
              <span className="text-black w-full text-sm">
                adastra@cambridge.edu.in
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
