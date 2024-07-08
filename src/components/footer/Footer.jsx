import React from "react";
import logoIcon from "../../assets/Frame.svg";
import appleIcon from "../../assets/Apple.svg";
import googleIcon from "../../assets/google-play.svg";
import rightArrowIcon from "../../assets/right.svg";

const Footer = () => {
  return (
    <div className="bg-[#37474F] pt-[40px]">
      <div className="flex justify-between px-[5rem] h-[300px]">
        <div
          style={{ fontFamily: "Noto Sans" }}
          className="flex flex-col gap-[28px] text-[#F9FAFA]"
        >
          <div className="flex items-center font-[700] text-[32px] leading-[43.58px]">
            <img src={logoIcon} alt={logoIcon} />
            <h1>Shoppu</h1>
          </div>
          <div className="flex flex-col  gap-3">
            <div className="flex flex-col">
              <p className="font-[500] text-[16px] leading-[21.79px]">
                Customer Support:
              </p>
              <h1 className="font-[500] text-[20px] leading-[27.24px]">
                234 800 0004 9999
              </h1>
            </div>
            <div className="flex flex-col">
              <p className="font-[500] text-[16px] leading-[21.79px]">
                Address:
              </p>
              <h1 className="font-[500] text-[20px] leading-[27.24px]">
                Ikeja-Lagos, Nigeria
              </h1>
            </div>
            <div className="flex flex-col">
              <p className="font-[500] text-[16px] leading-[21.79px]">Email:</p>
              <h1 className="font-[500] text-[20px] leading-[27.24px]">
                info@shoppu.com
              </h1>
            </div>
          </div>
        </div>
        <div style={{ fontFamily: "Public Sans" }} className="flex gap-[10rem]">
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[#FFFFFF] font-[500] text-[16px] leading-[24px]">
              Top Category
            </h1>
            <ul className="flex flex-col gap-[10px] text-[#929FA5] font-[500] text-[14px] leading-[20px]">
              <li>Bandages</li>
              <li>Alcohol wipes</li>
              <li>Sanitizers</li>
              <li className="flex items-center gap-1">
                <div className="border-[2px] border-[#69F0AE] w-[24px]"></div>
                Accessories
              </li>
              <li>Surgical scissors</li>
              <li>Gloves</li>
              <li className="text-[#69F0AE] bg-[#191C1F] py-1 flex items-center gap-1">
                Browse All Product
                <img src={rightArrowIcon} alt={rightArrowIcon} />
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[#FFFFFF] font-[500] text-[16px] leading-[24px]">
              Quick links
            </h1>
            <ul className="flex flex-col gap-[10px] text-[#929FA5] font-[500] text-[14px] leading-[20px]">
              <li>Shop Product</li>
              <li>Shoping Cart</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>Customer Help</li>
              <li>About Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h1 className="text-[#FFFFFF] font-[500] text-[16px] leading-[24px]">
              Download APP
            </h1>
            <div className="flex flex-col gap-4">
              <div className="bg-[#303639] py-[20px] px-[16px] rounded-[3px] h-[69px] text-[#FFFFFF] flex items-center gap-2">
                <img src={googleIcon} alt={googleIcon} />
                <div>
                  <p className="font-[400] text-[11px] leading-[13px]">
                    Get it now
                  </p>
                  <h1 className="font-[600] text-[14px] leading-[20px]">
                    Google Play
                  </h1>
                </div>
              </div>
              <div className="bg-[#303639] py-[20px] px-[16px] rounded-[3px] h-[69px] text-[#FFFFFF] flex items-center gap-2">
                <img src={appleIcon} alt={appleIcon} />
                <div>
                  <p className="font-[400] text-[11px] leading-[13px]">
                    Get it now
                  </p>
                  <h1 className="font-[600] text-[14px] leading-[20px]">
                    App Store
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ fontFamily: "Noto Sans" }}
        className="flex justify-center text-[#FFFFFF] font-[400] leading-[20px] pb-[20px]"
      >
        <p>Shoppu © 2024</p>
      </div>
    </div>
  );
};

export default Footer;
