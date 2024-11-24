import React, { forwardRef } from "react";
import AppDownloadSection from "./AppDownloadSection";
import IphoneShowcase from "./IphoneShowcase";

const LandingPage = forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="flex justify-between max-md:px-10 max-sm:px-6 max-lg:justify-center items-center max-lg:flex-wrap gap-6 max-lg:gap-16 max-sm:gap-0  px-20 py-20 h-full w-full"
    >
      <AppDownloadSection />
      <IphoneShowcase />
    </section>
  );
});

export default LandingPage;
