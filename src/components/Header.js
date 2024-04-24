import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { toggleMenu, defaultMenuOff } from "../utils/appSlice";
import { BiSearch } from "react-icons/bi";
import { SlMenu } from "react-icons/sl";
import { CgProfile } from "react-icons/cg";
import webLogo from "../assets/img/logo1.png";
import menuImg from "../assets/img/menu.png";
import userIcon from "../assets/img/user-icon.png";
import { GOOGLE_SIGNUP_LINK } from "../utils/constants";
import SearchContainer from "./SearchContainer";


const Header = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // State to manage search dialogue visibility
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
    dispatch(defaultMenuOff());
  };

  const toggleSearchHandler = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div
      className={
        "flex h-14 justify-between px-2 sticky top-0 z-20 bg-green-100 sm:px-4 sm:mb-2 sm:pr-6" +
        (isMenuOpen ? "" : " z-10")
      }
    >
      <div className="flex items-center gap-2 py-3">
        <div
          className="menu text-xs md:text-base cursor-pointer hover:bg-green-200 rounded-full p-3 "
          onClick={() => toggleMenuHandler()}
        >
          <SlMenu src={menuImg} />
        </div>
        <Link to="/" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            className="h-6 cursor-pointer md:h-8 md:pl-2 flex md:ml-auto md:mr-auto"
            src={webLogo}
            
          ></img>
        </Link>
      </div>

      <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
        <div
          className="hidden sm:block text-xl cursor-pointer hover:bg-green-200 rounded-full p-3 relative group"
          onClick={toggleSearchHandler}
        >
          <BiSearch />
          <span className="invisible group-hover:visible opacity-80 text-xs bg-gray-600 text-white block p-2 rounded-md absolute whitespace-nowrap -right-1/2 -bottom-9">
            Search
          </span>
        </div>
        <Link
          to={GOOGLE_SIGNUP_LINK}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="relative group">
            <CgProfile className="text-3xl transition hover:rotate-[360deg] hover:ease-in hover:duration-500  hover:scale-150 cursor-pointer hover:text-gray-700" />
            <span className="invisible group-hover:visible opacity-80 text-xs bg-gray-600 text-white block p-2 rounded-md absolute whitespace-nowrap -right-1/2 -bottom-9">
              Sign Up
            </span>
          </div>
        </Link>
      </div>

      {/* Conditionally render search container based on search icon click */}
      {isSearchOpen && (
        <div className="absolute top-14 right-0 z-50">
          <SearchContainer />
        </div>
      )}
    </div>
  );
};

export default Header;
