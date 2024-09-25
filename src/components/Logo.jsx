import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <>
      <Link to="/">
        <div className=" cursor-pointer">
          <p className=" uppercase text-2xl  md:text-3xl lg:text-4xl orbitro font-bold">
            GoodsGlide <span className=" text-red-500">.</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default Logo;
