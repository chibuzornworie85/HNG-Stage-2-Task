import React from "react";
import arrowIcon from "../../assets/ArrowRight.svg";

const NewsLetter = () => {
  return (
    <div
      style={{ fontFamily: "Public Sans" }}
      className="bg-[#1B6392] h-[223px] md:h-[324px] flex justify-center"
    >
      <div className="flex items-center">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center">
            <h1 className="md:text-[32px] text-[20px] font-[600] leading-[40px] text-[#ffff]">
              Subscribe to our newsletter
            </h1>
            <p className="font-[400] text-[14px] md:text-[16px] leading-[24px] text-[#ffff]">
              Get the latest updates on restock and new products
            </p>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              className="outline-none w-[100%] md:w-[624px] h-[60px] md:h-[72px] bg-[#FFFFFF] rounded-[3px] py-[12px] pl-[12px] pr-[10.5rem]"
              placeholder="Email address"
            />
            <button className="flex gap-1 items-center text-[#ffff] text-[14px] leading-[48px] font-[700] bg-[#0C239E] rounded-[2px] h-[32px] md:h-[48px] px-[24px] py-[0px] relative right-40 -mr-40">
              Subscribe <img src={arrowIcon} alt={arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
