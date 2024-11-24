import React, { forwardRef, useEffect } from "react";
import { ReactComponent as Blog } from "../assets/Blog.svg";
import { ReactComponent as Live } from "../assets/LiveSession.svg";
import { ReactComponent as Content } from "../assets/ContentCreation.svg";
import { ReactComponent as Video } from "../assets/Video.svg";
import AOS from "aos";
import "aos/dist/aos.css";

const FeaturesSection = forwardRef((props, ref) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const getAnimationType = (index) => {
    const animations = ["fade-right", "fade-down", "fade-up", "fade-left"];
    return animations[index % animations.length];
  };
  const cardData = [
    { title: "Blog Writing", content: "Coach can write blogs", icon: Blog },
    {
      title: "Live Sessions",
      content: "Coach can create live sessions",
      icon: Live,
    },
    {
      title: "Content Creation",
      content: "Coach can create contents",
      icon: Content,
    },
    {
      title: "Workout Videos",
      content: "Coach can create workout videos",
      icon: Video,
    },
  ];

  return (
    <section
      ref={ref}
      className="px-20 py-10 max-sm:px-6 h-full w-full flex flex-col max-md:px-10 gap-14 mt-10"
    >
      <h2 className="text-neutral-100 text-5xl max-lg:text-4xl max-md:text-3xl max-sm:text-2xl font-black text-center">
        Key Features
      </h2>
      <div className="flex max-lg:flex-wrap justify-between max-lg:justify-center gap-6 max-lg:gap-16 items-stretch">
        {cardData.map((card, index) => (
          <div
            data-aos={getAnimationType(index)}
            data-aos-delay={index * 100}
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 max-md:mt-6"
          >
            <div className="bg-neutral-800 flex flex-col items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-full">
              <div className="bg-neutral-800 p-[3px] rounded-full shadow-custom-icon cursor-pointer border border-neutral-800 relative -top-14">
                <div className="flex flex-col inner-circle-shadow items-center text-rose-500 bg-neutral-800 px-4 py-4 rounded-full">
                  <card.icon width={20} height={20} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-neutral-50 text-center mb-2 max-sm:text-lg">
                {card.title}
              </h3>
              <p className="text-neutral-300 font-normal text-xl text-center max-sm:text-sm">
                {card.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});
export default FeaturesSection;
