import React from "react";
import header_img from "../assets/header_img.png";

export const ImageHeader = (): JSX.Element => {
  return (
    <div className="relative w-full flex justify-center items-center py-16 bg-white overflow-hidden">
      {/* Left Blur Circle - looks good on mobile & desktop */}
      <div className="pointer-events-none absolute top-25 left-0 translate-x-[-30%] w-[60px] h-[180px] md:w-[250px] md:h-[400px] bg-[#46B8FF]  rounded-full blur-[40px] md:blur-[100px] opacity-50 md:opacity-30 z-0" />

      {/* Right Blur Circle */}
      <div className="pointer-events-none absolute top-25 right-0 translate-x-[30%] w-[60px] h-[180px] md:w-[250px] md:h-[400px] bg-[#8958FF] rounded-full  blur-[40px] md:blur-[100px] opacity-50 md:opacity-30 z-0" />
      
      {/* Main Image */}
      <img
        className="relative z-10 w-full max-w-6xl px-4"
        src={header_img}
        alt="Header"
        loading="lazy"
      />
    </div>
  );
};
