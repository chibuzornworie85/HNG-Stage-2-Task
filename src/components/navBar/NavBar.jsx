import React from "react";
import logoIcon from "../../assets/logo.svg";
import searchIcon from "../../assets/MagnifyingGlass.svg";
import shoppingIcon from "../../assets/ShoppingCartSimple.svg";
import heartIcon from "../../assets/Heart.svg";
import profileIcon from "../../assets/profile.svg";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="bg_shadow bg-[#FFFFFF] h-[100px] flex justify-between items-center px-[15px] lg:px-[5rem] sticky top-0 z-10">
      <div className="flex items-center gap-[6rem] lg:gap-[10rem]">
        <div
          style={{ fontFamily: "Noto Sans" }}
          className="flex items-center text-[#37474F] font-[700] text-[32px] leading-[43.58px]"
        >
          <img src={logoIcon} alt={logoIcon} />
          <h1 className="hidden md:flex">Shoppu</h1>
        </div>
        <div className="flex items-center">
          <img
            src={searchIcon}
            alt={searchIcon}
            className="relative md:-ml-[40px] md:left-[40px] h-[30px] w-[30px]"
          />
          <input
            type="text"
            className="border-[0.5px] hidden lg:flex h-[40px] w-[300px] border-[#37474F80] rounded-[5px] outline-none pl-[45px]"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <NavLink to="/cart">
          <img src={shoppingIcon} alt={shoppingIcon} className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" />
        </NavLink>
        <img src={heartIcon} alt={heartIcon} className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" />
        <img src={profileIcon} alt={profileIcon} className="w-[24px] h-[24px] lg:w-[40px] lg:h-[40px]" />
      </div>
    </div>
  );
};

export default NavBar;
