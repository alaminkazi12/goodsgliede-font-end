import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400 mt-10">
      {/* Hero left side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className=" text-gray-700">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-gray-500"></p>
            <p className=" font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
            <p className="w-8 md:w-11 h-[1px] bg-gray-500"></p>
          </div>
        </div>
      </div>
      {/* Hero right side */}
      <img
        className="w-full sm:w-1/2 "
        src="../../src/assets/hero-image.jpg"
        alt="hero image"
      />
    </div>
  );
};

export default Hero;
