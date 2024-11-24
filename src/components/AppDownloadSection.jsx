import React, { useEffect, useRef } from "react";
import smile from "../assets/smile.png";
import AppDownloadButtons from "./AppDownloadButtons";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AppDownloadSection() {
  const el = useRef(null);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hey, Awesome Coach"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      className="flex  flex-col gap-6 max-lg:w-full w-1/2"
      data-aos="fade-right"
    >
      <div className="flex flex-col gap-4">
        <div className="flex gap-5 items-center">
          <img src={smile} alt="Smile" width={30} />
          <h1 className="text-5xl text-neutral-100 font-extrabold italic max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
            <span ref={el}></span>
          </h1>
        </div>
        <div>
          <p className="text-neutral-100 text-3xl max-lg:text-2xl font-semibold max-md:text-xl max-sm:text-lg">
            Expand Your Reach, Inspire More Lives{"  "}
            <span className="bg-clip-text text-transparent bg-custom-gradient ml-1">
              Join FitnEarnPal Today !
            </span>
          </p>
        </div>
        <div className="mt-2">
          <p className="text-neutral-300 text-xl max-lg:text-lg max-sm:text-sm font-medium">
            A global platform for coaches to connect, Inspire and change Lives
          </p>
        </div>
      </div>
      <AppDownloadButtons landingresponsive={"flex-col"} />
    </div>
  );
}
