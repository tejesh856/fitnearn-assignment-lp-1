import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CoachReviewCarousel from "./CoachReviewCarousel";
import review2 from "../assets/review2.png";
export default function CoachesReview() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const [currentCard, setCurrentCard] = useState(0);
  return (
    <section className="px-20 py-14 max-md:px-10 max-sm:px-6 h-full w-full flex flex-col items-center gap-10 max-sm:gap-0">
      <div data-aos="fade-down" className="flex flex-col items-center gap-4">
        <h2 className="text-neutral-100 text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-black text-center">
          What our{" "}
          <span className="bg-clip-text text-transparent bg-custom-gradient">
            Coach Say
          </span>
        </h2>
        <p className="text-neutral-300 font-semibold text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg text-center">
          FitnEarnPal empowers coaches to grow and reach a global audience while
          valuable health and fitness insights to users.{" "}
        </p>
      </div>

      <div className="flex flex-col items-center gap-12 w-full h-full">
        <div className="mt-20 h-96 max-[405px]:h-80 w-full flex justify-evenly ">
          <div className="flex flex-col justify-between relative">
            {Array(3)
              .fill()
              .map((_, reviewIndex) => (
                <div
                  data-aos="fade-right"
                  data-aos-delay={reviewIndex * 100}
                  key={reviewIndex}
                  className={`flex items-center rounded-full relative cursor-pointer ${
                    reviewIndex === 1
                      ? "-left-32 max-lg:-left-20 max-md:-left-16 max-sm:-left-8 max-[550px]:-left-4"
                      : "-left-0"
                  } ${
                    reviewIndex === 2 ? "top-10" : "top-0"
                  } group w-14  max-[405px]:w-10 h-14 max-[405px]:h-10 overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-red-500 rounded-full"></div>
                  <img
                    src={review2}
                    alt="review2"
                    key={reviewIndex}
                    className="rounded-full w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-full"></div>
                </div>
              ))}
          </div>
          <CoachReviewCarousel
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
          />
          <div className="flex flex-col justify-between relative">
            {Array(3)
              .fill()
              .map((_, reviewIndex) => (
                <div
                  data-aos="fade-left"
                  data-aos-delay={reviewIndex * 100}
                  key={reviewIndex}
                  className={`flex items-center rounded-full relative cursor-pointer ${
                    reviewIndex === 1
                      ? "left-32 max-lg:left-20 max-md:left-16 max-sm:left-8 max-[550px]:left-4"
                      : "left-0"
                  } ${
                    reviewIndex === 2 ? "top-6" : "top-0"
                  } group w-14 h-14 max-[405px]:w-10 max-[405px]:h-10 overflow-hidden`}
                >
                  <div className="absolute inset-0 rounded-full"></div>
                  <img
                    src={review2}
                    alt="review2"
                    key={reviewIndex}
                    className="rounded-full w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-full"></div>
                </div>
              ))}
          </div>
        </div>

        <div data-aos="fade-down" className="flex items-center gap-6 ">
          <span
            onClick={() => setCurrentCard(0)}
            className={`${
              currentCard === 0 ? "bg-custom-gradient" : "bg-neutral-800"
            } w-5 h-5 rounded-full cursor-pointer`}
          ></span>
          <span
            onClick={() => setCurrentCard(1)}
            className={`${
              currentCard === 1 ? "bg-custom-gradient" : "bg-neutral-800"
            } w-5 h-5 rounded-full cursor-pointer`}
          ></span>
          <span
            onClick={() => setCurrentCard(2)}
            className={`${
              currentCard === 2 ? "bg-custom-gradient" : "bg-neutral-800"
            } w-5 h-5 rounded-full cursor-pointer`}
          ></span>
        </div>
      </div>
    </section>
  );
}
