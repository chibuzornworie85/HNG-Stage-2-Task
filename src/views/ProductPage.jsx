import React from "react";
import NavBar from "../components/navBar/NavBar";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import roundIcon from "../assets/round.svg";
import priceIcon from "../assets/Price.svg";
import CaretDown from "../assets/CaretDown.svg";
import searchIcon from "../assets/MagnifyingGlass.svg";
import picOne from "../assets/Image.svg";
import picTwo from "../assets/Image (2).svg";
import picThree from "../assets/Image (3).svg";
import pic from "../assets/Image (1).svg";
import StartIcon from "../assets/Star.svg";
import StartFullIcon from "../assets/Star full.svg";
import img from "../assets/test1.svg";
import img1 from "../assets/test2.svg";
import img2 from "../assets/test3.svg";
import buttonImg from "../assets/Button.svg";
import arowIcon from "../assets/last.svg";

const ProductPage = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-[rgb(249,250,250)] py-[20px] sticky top-[90px] z-10"></div>

      <div
        style={{ fontFamily: "Public Sans" }}
        className="h-[1020px] px-[5rem] flex gap-6 py-[40px]"
      >
        <div className="flex flex-col gap-3 w-[20%]">
          <h1 className="text-[#191C1F] text-[16px] font-[500] leading-[24px]">
            Category
          </h1>
          <div className="flex items-center gap-1">
            <img src={roundIcon} alt={roundIcon} />
            <p className="font-[500] leading-[20px] text-[14px] text-[#191C1F]">
              Bandages
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
            </div>
            <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
              Alcohol wipes
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
            </div>
            <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
              Sterile cotton balls
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
            </div>
            <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
              Streri-Strips
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
            </div>
            <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
              Medical Scissors
            </p>
          </div>
          <div className="flex items-center gap-1">
            <div>
              <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
            </div>
            <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
              Bun Creams
            </p>
          </div>

          <div className="border border-[#E4E7E9]"></div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[#191C1F] text-[16px] font-[500] leading-[24px]">
              Price Range
            </h1>

            <div>
              <img src={priceIcon} alt={priceIcon} />
            </div>

            <div className="flex justify-between gap-3">
              <input
                className="outline-none border border-[#E4E7E9] bg-[#FFFFFF] rounded-[3px] h-[40px] w-[50%] p-[10px]"
                placeholder="Min price"
              />
              <input
                className="outline-none border border-[#E4E7E9] bg-[#FFFFFF] rounded-[3px] h-[40px] w-[50%] p-[10px]"
                placeholder="Max price"
              />
            </div>

            <div className="flex items-center gap-1">
              <div>
                <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
              </div>
              <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
                Alcohol wipes
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
              </div>
              <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
                Sterile cotton balls
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
              </div>
              <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
                Streri-Strips
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <div className="w-[20px] h-[20px] bg-[#FFFFFF] border border-[#C9CFD2] rounded-[100px]"></div>
              </div>
              <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
                Medical Scissors
              </p>
            </div>
            <div className="flex items-center gap-1">
              <div>
                <div className="w-[20px] h-[20px] bg-[#FFFFFF] border-[2px] border-[#1B6392] rounded-[100px]"></div>
              </div>
              <p className="text-[#475156] font-[400] text-[14px] leading-[20px]">
                Bun Creams
              </p>
            </div>
            <div className="border border-[#E4E7E9]"></div>
            <div className="border border-[#E4E7E9]"></div>
          </div>
        </div>
        <div className="w-[80%] flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                className="w-[300px] outline-none h-[40px] rounded-[5px] border-[0.5px] border-[#37474F80] pl-[10px] pr-[30px]"
                placeholder="Search for anything..."
              />
              <img
                src={searchIcon}
                alt={searchIcon}
                className="h-[20px] w-[20px] relative right-7 -mr-7"
              />
            </div>
            <div className="flex gap-6 text-[#475156] font-[400] text-[14px] leading-[20px]">
              <button>Sort by:</button>
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] w-[180px] h-[44px] flex items-center p-[10px] justify-between rounded-[2px]">
                <p>Most Popular</p>
                <img src={CaretDown} alt={CaretDown} />
              </div>
            </div>
          </div>
          <div className="h-[44px] bg-[#F2F4F5] rounded-[4px] py-[12px] px-[24px] flex justify-between items-center">
            <div className="flex items-center gap-1 text-[#191C1F] font-[400] text-[14px] leading-[20px]">
              <p className="text-[#5F6C72]">Active Filters:</p>
              <p>Bandages X</p>
              <p>5 Star Rating X</p>
            </div>
            <div>
              <p className="font-[600] text-[14px] leading-[20px] text-[#191C1F]">
                65,867{" "}
                <span className="font-[400] text-[#5f6c72]">
                  Results found.
                </span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-5">
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <img src={picOne} alt={picOne} />
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartFullIcon} alt={StartFullIcon} />
                    <p>(738)</p>
                  </div>
                  <h1>Adhesive Bandages (Plasters)</h1>
                  <p className="text-[#929FA5]">#500</p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <img src={img2} alt={img2} />
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartFullIcon} alt={StartFullIcon} />
                    <p>(536)</p>
                  </div>
                  <h1>Elastic Bandages (ACE Wraps)</h1>
                  <p className="text-[#929FA5]">#4000</p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <img src={picTwo} alt={picTwo} />
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartFullIcon} alt={StartFullIcon} />
                    <p>(423)</p>
                  </div>
                  <h1>Transparent Film Dressings</h1>
                  <p className="text-[#929FA5]">#3000</p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <img src={picThree} alt={picThree} />
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartIcon} alt={StartIcon} />
                    <p>(816)</p>
                  </div>
                  <h1>Compression Bandages</h1>
                  <p className="text-[#929FA5]">#5000</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <img src={pic} alt={pic} />
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartFullIcon} alt={StartFullIcon} />
                    <p>(649)</p>
                  </div>
                  <h1>Elastic Bandages (ACE Wraps)</h1>
                  <p className="text-[#929FA5]">#3000</p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <img src={img1} alt={img1} />
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartIcon} alt={StartIcon} />
                    <p>(877)</p>
                  </div>
                  <h1>Bandages with cotton wool</h1>
                  <p className="text-[#929FA5]">#6000</p>
                </div>
              </div>
              <div className="test_shadow bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <div className="bg-[url('/src/assets/test.svg')] h-[172px] bg-no-repeat bg-cover bg-center flex justify-center items-center">
                  <div>
                    <img src={buttonImg} alt={buttonImg} />
                  </div>
                </div>
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartFullIcon} alt={StartFullIcon} />
                    <p>(426)</p>
                  </div>
                  <h1>Bandages for babies</h1>
                  <p className="text-[#929FA5]">#3800</p>
                </div>
              </div>
              <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[290px] w-[280px] p-[15px] flex flex-col gap-4">
                <img src={img} alt={img} />
                <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                    <img src={StartFullIcon} alt={StartFullIcon} />
                    <p>(583)</p>
                  </div>
                  <h1>Green bandage and supplement</h1>
                  <p className="text-[#929FA5]">#3000</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-[5rem] text-[#1B6392] font-[700] text-[17px] leading-[20px]">
            <div className="flex items-center gap-2">
              <p>Browse All Products</p>
              <img src={arowIcon} alt={arowIcon} />
            </div>
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
};

export default ProductPage;
