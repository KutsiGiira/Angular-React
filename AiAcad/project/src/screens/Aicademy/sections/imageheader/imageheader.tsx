import React from "react";
import header_img from "../assets/header_img.png";

export const ImageHeader = (): JSX.Element => {
  return (
    <div className="relative w-full flex justify-center items-center py-16 overflow-visible bg-gradient-to-b from-white via-white to-white ">
      {/* Blur Circles */}
      <div className="absolute left-[-150px] top-[5px] md:w-[315px] md:h-[800px] w-[170px] h-[600px] bg-[#46B8FF] rounded-full blur-[150px] opacity-70 z-0" />
      <div className="absolute right-[-150px] top-[5px] md:w-[315px] md:h-[800px] w-[170px] h-[600px] bg-[#8958FE] rounded-full blur-[150px] opacity-70 z-0" />
      
      {/* Main Image */}
      <img
        className="relative z-10 w-full max-w-6xl px-4"
        src={header_img}
        alt="Header"
      />
    </div>
  );
};
