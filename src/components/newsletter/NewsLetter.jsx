import React from "react";
import arrowIcon from "../../assets/ArrowRight.svg";

const NewsLetter = () => {
  return (
    <div style={{ fontFamily: "Public Sans" }} className="bg-[#1B6392] h-[324px] flex justify-center">
      <div className="flex items-center">
        <div className="flex flex-col gap-3 items-center">
          <h1 className="text-[32px] font-[600] text-[#ffff]">
            Subscribe to our newsletter
          </h1>
          <p className="font-[400] text-[16px] leading-[24px] text-[#ffff]">
            Get the latest updates on restock and new products
          </p>
          <div className="flex items-center">
            <input
              type="text"
              className="outline-none w-[624px] h-[72px] bg-[#FFFFFF] rounded-[3px] py-[12px] pl-[12px] pr-[10.5rem]"
              placeholder="Email address"
            />
            <button className="flex gap-1 items-center text-[#ffff] bg-[#0C239E] rounded-[2px] h-[48px] px-[24px] py-[0px] relative right-40 -mr-40">
              Subscribe <img src={arrowIcon} alt={arrowIcon} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
