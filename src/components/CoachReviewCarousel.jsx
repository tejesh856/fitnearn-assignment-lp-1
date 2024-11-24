import React, { useEffect } from "react";
import { ReactComponent as Star } from "../assets/Star.svg";
import review1 from "../assets/Review1.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function CoachReviewCarousel({ currentCard, setCurrentCard }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Animate only once when the element is in view
    });
  }, []);
  const testimonials = [
    {
      name: "Coach Name 1",
      role: "Yoga Trainer",
      text: "After joining FitnEarnPal, my audience reach has increased, and I can work according to my time, which I liked the most.",
      image: review1,
    },
    {
      name: "Coach Name 2",
      role: "Fitness Coach",
      text: "FitnEarnPal has been a game-changer for me, allowing me to connect with more clients than ever.",
      image: review1,
    },
    {
      name: "Coach Name 3",
      role: "Pilates Instructor",
      text: "The flexibility and reach I have achieved with FitnEarnPal are unmatched!",
      image: review1,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="carousel-container w-full h-full relative "
    >
      <div className="relative w-full h-full">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`card absolute top-0 left-0 w-full h-full flex flex-col items-center  gap-20 transition-opacity duration-1000 ${
              currentCard === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-3">
                {Array(5)
                  .fill()
                  .map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-6 w-6 max-[405px]:w-5 max-[405px]:h-5"
                    />
                  ))}
              </div>
              <p className="text-neutral-300 text-lg max-[405px]:text-sm font-normal text-center">
                {testimonial.text}
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="relative rounded-full overflow-hidden w-24 max-[405px]:w-16 h-24 max-[405px]:h-16 group bg-custom-gradient3 cursor-pointer">
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 rounded-full z-10 "></div>

                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h4 className="text-neutral-100 text-lg max-[405px]:text-sm">
                  {testimonial.name}
                </h4>
                <span className="text-neutral-300 text-sm max-[405px]:text-xs">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
