import React, { useEffect } from "react";
import coach1 from "../assets/coach-1.jpeg";
import coach2 from "../assets/coach-2.jpeg";
import coach3 from "../assets/coach-3.jpeg";
import coach4 from "../assets/coach-4.jpeg";
import coach5 from "../assets/coach-5.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
export default function CoachesSection() {
  const cards = [
    { image: coach1, title: "Fitness Trainer" },
    { image: coach2, title: "Meditation Trainer" },
    { image: coach3, title: "Yoga Trainer" },
    { image: coach4, title: "Physiotheraphy Trainer" },
    { image: coach5, title: "Rehab & Recovery Experts" },
    { image: coach5, title: "Doctors" },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const getAnimationType = (index) => {
    const animations = ["fade-right", "fade-down", "fade-left"];
    return animations[index % animations.length];
  };

  return (
    <section className="px-20 py-10 max-md:px-10 max-sm:px-6  max-sm:py-6 h-full w-full flex flex-col items-center gap-14">
      <div className="flex flex-col gap-4 items-center" data-aos="fade-down">
        <h2 className="text-5xl text-neutral-100 font-black text-center max-lg:text-4xl max-md:text-3xl max-sm:text-2xl">
          Join growing community of Coaches
        </h2>
        <p className="text-3xl text-neutral-300 font-semibold text-center max-lg:text-2xl max-md:text-xl max-sm:text-lg">
          FitnEarnPal is your getaway to connect with a global community of
          health and fitness enthusiastic, share experience and valuable
          knowledge, and grow their audience. As a coach you have the power to
          inspire, educate and motivate users worldwide by creating and sharing
          impactful content, workout videos, conducting live sessions and much
          more.
        </p>
      </div>
      <button className="bg-custom-gradient px-10 py-2 text-lg max-sm:text-sm  rounded text-white font-semibold">
        Join Now
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 mt-10">
        {cards.map((card, index) => (
          <div
            data-aos={getAnimationType(index)}
            data-aos-delay={index * 100}
            key={index}
            className="rounded-lg shadow-lg overflow-hidden cursor-pointer relative group"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-96 max-sm:h-60 object-cover filter grayscale group-hover:filter-none transition duration-500"
            />
            <div className="px-2 py-1 text-center transition duration-500 bg-neutral-400/60 group-hover:bg-custom-gradient">
              <h2 className="text-lg max-sm:text-sm text-white">
                {card.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
