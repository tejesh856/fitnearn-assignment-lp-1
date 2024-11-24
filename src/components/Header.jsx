import React, { useState } from "react";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";
export default function Header({
  scrollToHome,
  scrollToFeatures,
  scrollToHowItWorks,
}) {
  const [toggle, settoggle] = useState(false);
  return (
    <header className="flex justify-between items-center">
      <div className="flex gap-2 items-center cursor-pointer">
        <img
          src={logo}
          alt="logo"
          className="w-10 h-10 max-md:w-8 max-md:h-8 max-sm:w-6 max-sm:h-6"
        />
        <h1 className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl font-bold bg-clip-text text-transparent bg-custom-gradient">
          FitnEarnPal
        </h1>
      </div>

      <div
        className={`flex gap-6 max-md:absolute transition-all duration-500 ease-in-out ${
          toggle
            ? "max-md:max-h-[400px] max-md:opacity-100"
            : "max-md:max-h-0 max-md:opacity-0"
        } max-md:overflow-hidden max-md:top-[3.7rem] max-md:left-0 max-md:flex-col max-md:bg-[#171717] max-md:shadow-md max-md:px-0 max-md:py-0 max-md:w-full items-center max-md:items-start cursor-pointer text-lg max-md:text-sm text-neutral-200`}
      >
        <span
          onClick={() => {
            scrollToHome();
            settoggle(false);
          }}
          className="hover:underline hover:underline-offset-4 max-md:border-b-[1px] max-md:hover:no-underline max-md:px-10 max-md:py-2 max-md:border-neutral-200 max-md:w-full"
        >
          Home
        </span>
        <span
          onClick={() => {
            scrollToFeatures();
            settoggle(false);
          }}
          className="hover:underline hover:underline-offset-4 max-md:border-b-[1px] max-md:hover:no-underline max-md:px-10 max-md:py-2 max-md:border-neutral-200 max-md:w-full"
        >
          Features
        </span>
        <span
          onClick={() => {
            scrollToHowItWorks();
            settoggle(false);
          }}
          className="hover:underline hover:underline-offset-4 max-md:w-full max-md:hover:no-underline max-md:border-b-[1px] max-md:px-10 max-md:py-2 max-md:border-neutral-200"
        >
          How It Works
        </span>
      </div>

      <div className="flex justify-center items-center gap-3">
        <div>
          <button className="border-none bg-[#171717] text-sm flex justify-center items-center text-color1 rounded-full px-6 py-2 max-sm:px-4 max-sm:py-1 max-sm:text-xs relative after:absolute after:h-[108%] after:w-[102%] after:rounded-full after:bg-custom-gradient after:-z-50 font-semibold">
            Sign Up Form
          </button>
        </div>
        {!toggle ? (
          <GiHamburgerMenu
            onClick={() => settoggle(true)}
            size={20}
            className="max-md:text-neutral-200 md:hidden cursor-pointer"
          />
        ) : (
          <FaXmark
            onClick={() => settoggle(false)}
            size={20}
            className="max-md:text-neutral-200 md:hidden cursor-pointer"
          />
        )}
      </div>
    </header>
  );
}
