import React, { useEffect } from "react";
import { ReactComponent as Heart } from "../assets/heart.svg";
import AppDownloadButtons from "./AppDownloadButtons";
import { IoMdMail } from "react-icons/io";
import logo from "../assets/logo.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaGithub } from "react-icons/fa";

export default function Footer({
  scrollToHome,
  scrollToFeatures,
  scrollToHowItWorks,
}) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <footer className="px-20 pt-10 pb-6 max-md:px-10 max-sm:px-6 w-full h-full bg-custom-gradient3 flex flex-col">
      <div className="flex items-start gap-10 justify-between pb-10 max-lg:flex-col">
        <div
          data-aos="fade-right"
          className="flex flex-col gap-4 w-1/2 max-lg:w-full"
        >
          <div className="flex items-center gap-4">
            <img src={logo} alt="logo" width={48} />
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-custom-gradient">
              FitnEarnPal
            </h2>
          </div>
          <p className="text-sm text-neutral-300 font-normal">
            FitnEarnPal is your all-in-one place where you can train people as
            per your schedule. It’s a place where you can upload workout videos,
            create live sessions, write blogs and much more. Available on
            Android and iOS. Join our community of coaches today!
          </p>
          <div className="flex items-center gap-3 text-neutral-300 text-sm font-normal">
            <IoMdMail size={16} className="text-neutral-100" />
            help-support@fitnearn.com
          </div>
          <ul className="flex gap-4 items-center">
            <li className="text-neutral-50 p-2 rounded-full bg-neutral-800 shadow-md cursor-pointer">
              <a
                href="https://twitter.com/fitnearn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={14} />
              </a>
            </li>
            <li className="text-neutral-50 p-2 rounded-full bg-neutral-800 shadow-md cursor-pointer">
              <a
                href="https://www.facebook.com/BeFitGetRich"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={14} />
              </a>
            </li>
            <li className="text-neutral-50 p-2 rounded-full bg-neutral-800 shadow-md cursor-pointer">
              <a
                href="https://www.instagram.com/fitearn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={14} />
              </a>
            </li>
            <li className="text-neutral-50 p-2 rounded-full bg-neutral-800 shadow-md cursor-pointer">
              <a
                href="https://github.com/tejesh856"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={14} />
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-start justify-between w-1/2 max-lg:w-full max-sm:flex-col max-sm:gap-10">
          <ul
            data-aos="fade-right"
            className="flex flex-col gap-4 items-start text-neutral-300"
          >
            <h3 className="text-neutral-100 mb-4">Useful Links</h3>
            <li
              onClick={() => {
                scrollToHome();
              }}
              className=" hover:underline hover:underline-offset-4 cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => {
                scrollToHowItWorks();
              }}
              className=" hover:underline hover:underline-offset-4 cursor-pointer"
            >
              How it works
            </li>
            <li
              onClick={() => {
                scrollToFeatures();
              }}
              className=" hover:underline hover:underline-offset-4 cursor-pointer"
            >
              Features
            </li>
            <li className=" hover:underline hover:underline-offset-4 cursor-pointer">
              Sign Up form
            </li>
          </ul>
          <ul
            data-aos="fade-down"
            className="flex flex-col gap-4 items-start text-neutral-300"
          >
            <h3 className="text-neutral-100 mb-4">Policies</h3>
            <li className=" hover:underline hover:underline-offset-4 cursor-pointer">
              About us
            </li>
            <li className=" hover:underline hover:underline-offset-4 cursor-pointer">
              Privacy Policy
            </li>
            <li className=" hover:underline hover:underline-offset-4 cursor-pointer">
              Term & Conditions
            </li>
            <li className=" hover:underline hover:underline-offset-4 cursor-pointer">
              Data Deletion
            </li>
          </ul>
          <div data-aos="fade-left" className="flex flex-col gap-4 items-start">
            <h3 className="text-neutral-100 mb-4">Download Now</h3>
            <AppDownloadButtons footerstyle={"flex-col"} />
          </div>
        </div>
      </div>
      <hr className="border border-neutral-400" />
      <div className="flex justify-between items-center pt-6 text-neutral-400 text-xs">
        <span>© Copyright 2024, All Rights Reserved.</span>
        <span className="flex gap-1">
          Made with{" "}
          <span>
            <Heart width={15} height={15} />
          </span>{" "}
          in India
        </span>
        <span>Reg@2024</span>
      </div>
    </footer>
  );
}
