import React, { useRef, useState } from "react";

import social1 from "@/assets/youtube.svg";
import social2 from "@/assets/facebook.svg";
import social3 from "@/assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer py-12 mt-4 dark:text-slate-200 dark:bg-slate-900">
      <div className="footer__wrapper wrapper grid sm:grid-cols-2 md:grid-cols-[5fr_3fr_3fr_3fr] md:justify-items-center px-2 gap-10">
        <div className="footer--item overflow-hidden w-full">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">StayHealthy</h3>
            {/* <FaAngleDown className="sm:hidden" /> */}
          </div>
          <p className="leading-relaxed font-light mt-2 text-[.92rem]">
            Online Training, and Consultation About Diet and Exercise tailored
            based on user needs.
          </p>
          <div className="socials flex gap-4 mt-4">
            <img
              className="max-w-9 p-[.5rem] bg-[#F3F3F3] hover:bg-white duration-200 cursor-pointer rounded-full overflow-visible"
              src={social1}
              alt=""
            />
            <img
              className="max-w-9 p-[.5rem] bg-[#F3F3F3] hover:bg-white duration-200 cursor-pointer rounded-full overflow-visible"
              src={social2}
              alt=""
            />
            <img
              className="max-w-9 p-[.5rem] bg-[#F3F3F3] hover:bg-white duration-200 cursor-pointer rounded-full overflow-visible"
              src={social3}
              alt=""
            />
          </div>
        </div>
        <div className="footer--item overflow-hidden w-full">
          <div className="flex justify-between items-center mb-4 w-full">
            <h4 className="text-xl">Product</h4>
            {/* <FaAngleDown className="sm:hidden" /> */}
          </div>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Gym Equipment
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Suplement
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Blog
          </p>
        </div>
        <div className="footer--item overflow-hidden w-full">
          <div className="flex justify-between items-center mb-4 w-full">
            <h4 className="text-xl">Explore Us</h4>
            {/* <FaAngleDown className="sm:hidden" /> */}
          </div>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            FAQ
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Privacy Policy
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            Term and Conditions
          </p>
        </div>
        <div className="footer--item overflow-hidden w-full">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl">Contact</h4>
            {/* <FaAngleDown className="sm:hidden" /> */}
          </div>

          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            hi@stayhealthy.com
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            021-123-636
          </p>
          <p className="leading-7 cursor-pointer hover:underline underline-offset-2 font-light">
            stayhealthy.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
