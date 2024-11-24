import React, { useEffect } from "react";
import iphone from "../assets/iPhone2.png";
import { ReactComponent as Brand } from "../assets/brand.svg";
import { ReactComponent as Network } from "../assets/Network.svg";
import { ReactComponent as Revenue } from "../assets/Revenue.svg";
import { ReactComponent as Schedule } from "../assets/Schedule.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CoachBenefits() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="px-20 py-10  max-md:px-10 max-sm:px-6 h-full w-full flex flex-col items-center gap-16 ">
      <div className="flex flex-col gap-6 items-center" data-aos="fade-down">
        <h2 className="text-5xl text-color3 font-black text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
          What’s in it for{" "}
          <span className="bg-clip-text text-transparent bg-custom-gradient">
            Coach
          </span>
        </h2>
        <p className="text-neutral-300 text-3xl max-lg:2xl max-md:text-xl max-sm:text-lg font-semibold text-center">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          valuable health and fitness insights to users.{" "}
        </p>
      </div>
      <div className="relative flex gap-4 justify-center items-stretch    w-full">
        <div className="flex flex-col justify-between  relative top-10  w-full">
          <div
            data-aos="fade-right"
            className="flex flex-col items-end justify-center"
          >
            <div className="bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex flex-col inner-circle-shadow max-sm:p-1 items-center text-rose-500 bg-neutral-800 px-2 py-2  rounded-full ">
                <Network className="w-5 h-5 max-[405px]:w-4 max-[405px]:h-4" />
              </div>
            </div>
            <h5 className="text-lg max-sm:text-center text-neutral-50 font-bold max-[894px]:text-sm max-sm:text-xs">
              Global Audience Access
            </h5>
            <span className="text-sm text-neutral-300 max-sm:text-center font-normal max-[894px]:text-xs ">
              Helps you gain global audience
            </span>
          </div>
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="flex flex-col items-end justify-center relative left-6 -top-10 max-sm:-top-0 max-sm:left-4"
          >
            <div className="bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex flex-col inner-circle-shadow max-sm:p-1  items-center text-rose-500 bg-neutral-800 px-2 py-2  rounded-full ">
                <Revenue className="w-5 h-5 max-[405px]:w-4 max-[405px]:h-4" />
              </div>
            </div>
            <h5 className="text-lg text-neutral-50 font-bold max-[894px]:text-sm max-sm:text-xs max-sm:text-center">
              Revenue Opportunities{" "}
            </h5>
            <span className="text-sm text-neutral-300 font-normal max-[894px]:text-xs max-sm:text-center">
              Helps you gain global audience{" "}
            </span>
          </div>
        </div>
        <div className="relative flex justify-center items-center mt-10">
          <div className="w-96 h-96 max-md:w-72 max-md:h-72 max-sm:w-52 max-sm:h-52 radial-gradient rounded-full flex items-center justify-center z-0">
            <div className="w-72 h-72 max-md:w-60 max-md:h-60 max-sm:w-40 max-sm:h-40 radial-gradient rounded-full"></div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-delay="400"
            className="w-56 absolute -top-10 left-20 max-md:w-48 max-sm:w-32 max-sm:-top-4 max-md:left-10"
          >
            <img src={iphone} alt="iphone" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col justify-between w-full   ">
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            className="flex flex-col items-start justify-center"
          >
            <div className="bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex flex-col inner-circle-shadow  items-center text-rose-500 bg-neutral-800 px-2 py-2 max-sm:p-1  rounded-full ">
                <Brand className="w-5 h-5 max-[405px]:w-4 max-[405px]:h-4" />
              </div>
            </div>
            <h5 className="text-lg max-sm:text-center text-neutral-50 font-bold max-[894px]:text-sm max-sm:text-xs">
              Personal Brand{" "}
            </h5>
            <span className="text-sm text-neutral-300 font-normal max-[894px]:text-xs max-sm:text-center">
              Helps you gain global audience
            </span>
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="300"
            className="flex flex-col items-start justify-center relative -left-4 max-sm:-left-2 -top-12 max-sm:-top-0 max-[405px]:top-6 "
          >
            <div className="bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex flex-col inner-circle-shadow  items-center text-rose-500 bg-neutral-800 px-2 py-2 max-sm:p-1  rounded-full ">
                <Schedule className="w-5 h-5 max-[405px]:w-4 max-[405px]:h-4" />
              </div>
            </div>
            <h5 className="text-lg text-neutral-50 font-bold max-[894px]:text-sm max-sm:text-center max-sm:text-xs">
              Work on Your Own Schedule{" "}
            </h5>
            <span className="text-sm text-neutral-300 max-sm:text-center font-normal max-[894px]:text-xs">
              Helps you gain global audience{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
