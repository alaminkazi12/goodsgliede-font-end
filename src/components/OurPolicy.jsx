import React from "react";
import { MdOutlineSupportAgent } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-500">
      <div className="flex flex-col md:flex-row gap-4 md:gap-10 lg:gap-[200px]">
        <div className="flex flex-col justify-center items-center space-y-2">
          <RiExchangeDollarLine className="text-4xl md:text-6xl text-black" />
          <p className="font-semibold text-xl">Easy Exchange Policy</p>
          <p className="text-gray-400">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <TbTruckReturn className="text-4xl md:text-6xl text-black" />
          <p className="font-semibold text-xl">7 Days Return Policy</p>
          <p className="text-gray-400">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-2">
          <MdOutlineSupportAgent className="text-4xl md:text-6xl text-black" />
          <p className="font-semibold text-xl">Best customer support</p>
          <p className="text-gray-400">We provide 23/7 customer support</p>
        </div>
      </div>
    </div>
  );
};

export default OurPolicy;
