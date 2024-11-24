import React, { useEffect } from "react";
import iphone3 from "../assets/iPhone3.png";
import iphone4 from "../assets/iPhone4.png";
import AppDownloadButtons from "./AppDownloadButtons";
import AOS from "aos";
import "aos/dist/aos.css";
export default function BecomeCoach() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <section className="px-20 py-16 max-sm:px-6 h-full w-full flex gap-16 max-md:px-10 flex-col items-center ">
      <h2
        data-aos="fade-down"
        className="text-neutral-100 font-black text-5xl max-md:text-3xl max-lg:text-4xl max-sm:text-2xl"
      >
        Become{" "}
        <span className="bg-clip-text text-transparent bg-custom-gradient">
          Coach
        </span>{" "}
        Today
      </h2>
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-center items-center w-full  relative -left-20 max-[405px]:-left-10 ">
          <img
            data-aos="fade-right"
            src={iphone3}
            alt="iphone3"
            className=" w-72 max-md:w-60 max-sm:w-48 max-[405px]:w-40 relative left-32 max-[405px]:left-20 z-10 "
          />
          <img
            data-aos="fade-left"
            src={iphone4}
            alt="iphone4"
            className="w-96 z-20 max-md:w-80 max-sm:w-64 max-[405px]:w-56"
          />
        </div>
      </div>
      <AppDownloadButtons BecomeCoachStyle={"flex-col"} />
    </section>
  );
}
