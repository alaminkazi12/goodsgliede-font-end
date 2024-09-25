import React, { useState } from "react";
import Logo from "./Logo";
import { Link, NavLink } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* menu bar for mob  */}
      <HiMenuAlt2
        onClick={() => setVisible(true)}
        className=" text-[20px] md:hidden cursor-pointer"
      />
      {/* sidebar menue for small screen */}
      <div
        className={` pt-6  absolute top-0  bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full right-0" : "w-0 -right-4"
        }`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-2 mb-4 text-lg  cursor-pointer hover:text-black"
          >
            <RxCross1 className="text-xl" /> Close
          </div>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setVisible(false)}
            className="py-2 pl-6 border hover:text-black"
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>

      {/* logo */}
      <Logo></Logo>

      {/* nav center */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700 uppercase">
        <NavLink to="/" className="flex flex-col items-center gap-1 text-lg">
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 text-lg"
        >
          <p>collection</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 text-lg"
        >
          <p>about</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 text-lg"
        >
          <p>contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      {/* nav end */}
      <div className="flex items-center gap-6 ">
        <CiSearch className="text-3xl cursor-pointer hidden md:flex" />

        <div className="group relative hidden md:flex">
          <FaUserAlt className="text-[20px] cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-400 uppercase">
              <p className=" cursor-pointer hover:text-black">My Profile</p>
              <p className=" cursor-pointer hover:text-black">Orders</p>
              <p className=" cursor-pointer hover:text-black">Logout</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative text-[20px] md:text-[25px]">
          <MdOutlineAddShoppingCart />
          <p className=" absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px]">
            10
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
