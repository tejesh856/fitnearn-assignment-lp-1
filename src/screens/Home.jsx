import React, { useRef, useState, useEffect } from "react";
import Header from "../components/Header";
import LandingPage from "../components/LandingPage";
import CoachesSection from "../components/CoachesSection";
import CoachBenefits from "../components/CoachBenefits";
import FeaturesSection from "../components/FeaturesSection";
import BecomeCoach from "../components/BecomeCoach";
import WorkingProcessSection from "../components/WorkingProcessSection";
import CoachesReview from "../components/CoachesReview";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const workingProcessRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="h-full w-full flex flex-col ">
      <div
        data-aos="fade-down"
        className={`fixed top-0 left-0 w-full z-50 px-20 max-md:px-10 max-sm:px-6 py-3 shadow border-[#171717] border-t-0 border-l-0 border-r-0 transition-colors duration-300 ${
          isScrolled ? "bg-[#171717]" : "bg-custom-gradient2"
        }`}
      >
        <Header
          scrollToHome={() => scrollToSection(homeRef)}
          scrollToFeatures={() => scrollToSection(featuresRef)}
          scrollToHowItWorks={() => scrollToSection(workingProcessRef)}
        />
      </div>

      <LandingPage ref={homeRef} />
      <CoachesSection />
      <CoachBenefits />

      <FeaturesSection ref={featuresRef} />
      <BecomeCoach />
      <WorkingProcessSection ref={workingProcessRef} />
      <CoachesReview />
      <Footer
        scrollToHome={() => scrollToSection(homeRef)}
        scrollToFeatures={() => scrollToSection(featuresRef)}
        scrollToHowItWorks={() => scrollToSection(workingProcessRef)}
      />
    </div>
  );
}
