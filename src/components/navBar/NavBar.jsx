import React from "react";
import logoIcon from "../../assets/logo.svg";
import searchIcon from "../../assets/MagnifyingGlass.svg";
import shoppingIcon from "../../assets/ShoppingCartSimple.svg";
import heartIcon from "../../assets/Heart.svg";
import profileIcon from "../../assets/profile.svg";

const NavBar = () => {
  return (
    <div className="bg_shadow bg-[#FFFFFF] h-[100px] flex justify-between items-center px-[5rem] sticky top-0 z-10">
      <div className="flex items-center gap-[10rem]">
        <div className="flex items-center text-[#37474F] font-[700] text-[32px] leading-[43.58px]">
          <img src={logoIcon} alt={logoIcon} />
          <h1>Shoppu</h1>
        </div>
        <div className="flex items-center">
          <img
            src={searchIcon}
            alt={searchIcon}
            className="relative -ml-[40px] left-[40px] h-[30px] w-[30px]"
          />
          <input
            type="text"
            className="border-[0.5px] h-[40px] w-[300px] border-[#37474F80] rounded-[5px] outline-none pl-[45px]"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex items-center gap-[20px]">
        <img src={shoppingIcon} alt={shoppingIcon} />
        <img src={heartIcon} alt={heartIcon} />
        <img src={profileIcon} alt={profileIcon} />
      </div>
    </div>
  );
};

export default NavBar;
