import React from "react";
import { IoLogoApple } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
export default function AppDownloadButtons({
  footerstyle,
  landingresponsive,
  BecomeCoachStyle,
}) {
  return (
    <div
      className={`flex gap-6 items-start mt-4 ${footerstyle} max-md:${landingresponsive} max-sm:${BecomeCoachStyle} max-md:items-center`}
    >
      <button className="flex gap-2 items-center bg-custom-gradient rounded px-6 outline-none py-2">
        <IoLogoApple size={25} className="text-color2" />
        <p className="flex flex-col items-center">
          <span className="text-color2 text-xs">Download on the</span>
          <span className="text-color2 text-sm">App Store</span>
        </p>
      </button>
      <button className="flex gap-2 items-center bg-custom-gradient outline-none rounded px-9 py-2">
        <FaGooglePlay size={20} className="text-color2" />
        <p className="flex flex-col items-center">
          <span className="text-color2 text-xs self-start">Get it on</span>
          <span className="text-color2 text-sm">Google Play</span>
        </p>
      </button>
    </div>
  );
}
