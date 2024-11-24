import React, { useEffect } from "react";
import { FaHeartbeat, FaDumbbell } from "react-icons/fa";
import { GiMeditation } from "react-icons/gi";
import { MdOutlineWheelchairPickup } from "react-icons/md";
import iphone from "../assets/iPhone.png";
import AOS from "aos";
import "aos/dist/aos.css";
export default function IphoneShowcase() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div
      className="relative flex justify-end items-center px-14 py-14 max-lg:px-7 max-lg:py-7 max-md:mt-10 max-sm:mt-0"
      data-aos="fade-left"
    >
      <div className="relative flex justify-center items-center mt-10">
        <div className="w-72 h-72 max-sm:w-60 max-sm:h-60 radial-gradient rounded-full flex items-center justify-center z-0">
          <div className="w-60 h-60 max-sm:w-48 max-sm:h-48 radial-gradient rounded-full"></div>
        </div>

        <div className="w-52 max-md:w-48 max-sm:w-32 absolute -top-20 max-sm:-top-0 left-10 max-sm:left-14 max-md:left-12">
          <img src={iphone} alt="iphone" className="w-full" />
        </div>
      </div>

      <div className="absolute flex flex-col justify-between h-1/2 max-sm:h-3/5  left-20 max-lg:left-12 max-sm:left-14 max-md:top-20 max-sm:top-28 top-24">
        <div className="group bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800 transition-transform transform hover:scale-110">
          <div className="flex flex-col items-center inner-circle-shadow text-color3 bg-neutral-800 px-2 py-1 rounded-full group-hover:text-rose-500 transition-colors duration-300">
            <FaHeartbeat size={10} />
            <FaDumbbell size={12} />
          </div>
        </div>
        <div className="group bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800 transition-transform transform hover:scale-110">
          <div className="items-center inner-circle-shadow text-color3 bg-neutral-800 px-2 py-2 rounded-full group-hover:text-rose-500 transition-colors duration-300">
            <FaHeartbeat size={15} />
          </div>
        </div>
      </div>

      <div className="absolute flex flex-col justify-between h-1/2 max-sm:h-3/5  right-16 max-lg:right-9 max-sm:right-12 top-40 max-md:top-36 max-sm:top-16">
        <div className="group bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800 transition-transform transform hover:scale-110">
          <div className="flex flex-col items-center inner-circle-shadow text-color3 bg-neutral-800 px-2 py-2 rounded-full group-hover:text-rose-500 transition-colors duration-300">
            <GiMeditation size={18} />
          </div>
        </div>
        <div className="group bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800 transition-transform transform hover:scale-110">
          <div className="flex flex-col items-center inner-circle-shadow text-color3 bg-neutral-800 px-2 py-2 rounded-full group-hover:text-rose-500 transition-colors duration-300">
            <MdOutlineWheelchairPickup size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}
