import React, { forwardRef, useEffect } from "react";
import { ReactComponent as Register } from "../assets/register.svg";
import { ReactComponent as Verify } from "../assets/verify.svg";
import { ReactComponent as Content } from "../assets/content.svg";
import { ReactComponent as Users } from "../assets/users.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const WorkingProcessSection = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section
      ref={ref}
      className="px-20 py-16 h-full w-full flex flex-col max-md:px-10 max-sm:px-6 gap-16 bg-custom-gradient3"
    >
      <h2
        data-aos="fade-down"
        className="text-5xl text-neutral-100 font-black text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl"
      >
        How It Works ?
      </h2>

      <div className="flex flex-col items-center max-lg:flex-row max-lg:h-[160vh]  max-lg:relative ">
        <div
          data-aos="fade-down"
          className="w-full flex flex-col items-center h-full"
        >
          <div className="w-full bg-custom-gradient4 h-1 max-lg:w-1 max-lg:h-full "></div>
          <div className="flex max-lg:flex-col justify-between items-center relative max-lg:absolute -top-8 max-lg:-top-0 w-full max-lg:h-full">
            <div className="bg-neutral-800 p-2 max-sm:p-1 rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex inner-circle-shadow items-center text-rose-500 bg-neutral-800 p-3 rounded-full">
                <Register className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4" />
              </div>
            </div>
            <div className="bg-neutral-800 p-2 max-sm:p-1 rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex inner-circle-shadow items-center text-rose-500 bg-neutral-800 p-3 rounded-full">
                <Verify className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4" />
              </div>
            </div>
            <div className="bg-neutral-800 p-2 max-sm:p-1 rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex inner-circle-shadow items-center text-rose-500 bg-neutral-800 p-3 rounded-full">
                <Content className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4" />
              </div>
            </div>
            <div className="bg-neutral-800 p-2 max-sm:p-1 rounded-full shadow-custom-icon cursor-pointer border border-neutral-800">
              <div className="flex inner-circle-shadow items-center text-rose-500 bg-neutral-800 p-3 rounded-full">
                <Users className="w-6 h-6 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full gap-10 max-lg:gap-0 h-full ">
          <div className="flex max-lg:flex-col justify-between items-center max-lg:gap-16 max-lg:h-full">
            <div
              data-aos="fade-right"
              data-aos-lg="fade-up"
              data-aos-md="fade-down"
              className="flex flex-col items-start max-lg:items-center max-lg:text-center gap-16 max-lg:gap-4 max-w-60"
            >
              <h3 className="text-2xl text-neutral-50 font-bold max-lg:text-xl max-md:text-lg">
                Register
              </h3>
              <p className="text-neutral-300 font-normal text-xl max-lg:text-lg max-md:text-sm">
                Support for multiple languages, making health monitoring
                accessible and easy for users around the globe.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-lg="fade-down"
              data-aos-md="fade-right"
              className="flex flex-col items-center text-center gap-16 max-w-60 max-lg:gap-4"
            >
              <h3 className="text-2xl text-neutral-50 font-bold max-lg:text-xl max-md:text-lg">
                Verify
              </h3>
              <p className="text-neutral-300 font-normal text-xl max-lg:text-lg max-md:text-sm">
                Support for multiple languages, making health monitoring
                accessible and easy for users around the globe.
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-lg="fade-left"
              data-aos-md="fade-down"
              className="flex flex-col items-center text-center gap-16 max-w-60 max-lg:gap-4"
            >
              <h3 className="text-2xl text-neutral-50 font-bold max-lg:text-xl text-center max-md:text-lg">
                Create Content
              </h3>
              <p className="text-neutral-300 font-normal text-xl max-lg:text-lg max-md:text-sm">
                Support for multiple languages, making health monitoring
                accessible and easy for users around the globe.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-lg="fade-right"
              data-aos-md="fade-up"
              className="flex flex-col items-end max-lg:items-center max-lg:text-center text-right gap-16 max-w-60 max-lg:gap-4"
            >
              <h3 className="text-2xl text-neutral-50 font-bold max-lg:text-xl text-center max-md:text-lg">
                Engage With Users
              </h3>
              <p className="text-neutral-300 font-normal text-xl max-lg:text-lg max-md:text-sm">
                Support for multiple languages, making health monitoring
                accessible and easy for users around the globe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default WorkingProcessSection;
