import React from "react";
import NavBar from "../components/navBar/NavBar";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import testimonialOne from "../assets/Frame 394.svg";
import testimonialTwo from "../assets/Frame 394 (1).svg";
import picOne from "../assets/Image.svg";
import picTwo from "../assets/Image (2).svg";
import picThree from "../assets/Image (3).svg";
import pic from "../assets/Image (1).svg";
import StartIcon from "../assets/Star.svg";
import StartFullIcon from "../assets/Star full.svg";
import rightArrowIcon from "../assets/arrowright1.svg";
import arrowIcon from "../assets/rightBlue.svg";
import caroIcon from "../assets/caro (1).svg";
import caroIcon1 from "../assets/caro (2).svg";
import caroIcon2 from "../assets/caro (3).svg";
import caroIcon3 from "../assets/caro (4).svg";
import caroIcon4 from "../assets/caro (5).svg";
import caroIcon5 from "../assets/caro (6).svg";
import rightArowButtonIcon from "../assets/Arrow Button.svg";
import leftArowButtonIcon from "../assets/Arrow Button (1).svg";
import packageIcon from "../assets/Package.svg";
import TrophyIcon from "../assets/Trophy.svg";
import creditIcon from "../assets/CreditCard.svg";
import headSetIcon from "../assets/Headphones.svg";
import scissorsIcon from "../assets/scissors.svg";
import bandIcon from "../assets/bandaid.svg";

const LandingPage = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-[50%] p-[80px]">
          <div className="pl-[30px]">
            <img src={bandIcon} alt={bandIcon} />
          </div>
          <div className="flex flex-col gap-8 pt-[30px]">
            <h1 className="font-[700] text-[56px] leading-[76.27px]">
              Get access to the best healthcare products with just a few clicks
            </h1>
            <button className="text-[#FFFFFF] font-[700] text-[30px] leading-[49.03px] bg-[#37474F] rounded-[20px] w-[200px] h-[60px]">
              SHOP NOW
            </button>
          </div>
          <div className="flex justify-end">
            <img src={scissorsIcon} alt={scissorsIcon} />
          </div>
        </div>
        <div className="bg-[url('/src/assets/bg.svg')] bg-no-repeat bg-cover bg-center h-[700px] w-[50%]"></div>
      </div>

      <div className="bg-[#1B6392] h-[108px] my-[40px] mx-[80px] flex justify-between items-center px-[10px]">
        <div className="bg-[#FFFFFF] h-[76px] w-[280px] flex items-center gap-2 p-[10px] mx-[10px]">
          <img src={packageIcon} alt={packageIcon} />
          <div className="text-[14px] leading-[20px]">
            <h1 className="text-[#191C1F] font-[500]">Fasted Delivery</h1>
            <p className="text-[#5F6C72] font-[400]">Delivery in 24/H</p>
          </div>
        </div>
        <div className=" border-r border-r-[#E4E7E9] h-[50px]"></div>
        <div className="bg-[#FFFFFF] h-[76px] w-[280px] flex items-center gap-2 p-[10px] mx-[10px]">
          <img src={TrophyIcon} alt={TrophyIcon} />
          <div className="text-[14px] leading-[20px]">
            <h1 className="text-[#191C1F] font-[500]">24 Hours Return</h1>
            <p className="text-[#5F6C72] font-[400]">
              100% money-back guarantee
            </p>
          </div>
        </div>
        <div className=" border-r border-r-[#E4E7E9] h-[50px]"></div>
        <div className="bg-[#FFFFFF] h-[76px] w-[280px] flex items-center gap-2 p-[10px] mx-[10px]">
          <img src={creditIcon} alt={creditIcon} />
          <div className="text-[14px] leading-[20px]">
            <h1 className="text-[#191C1F] font-[500]">Secure Payment</h1>
            <p className="text-[#5F6C72] font-[400]">Your money is safe</p>
          </div>
        </div>
        <div className=" border-r border-r-[#E4E7E9] h-[50px]"></div>
        <div className="bg-[#FFFFFF] h-[76px] w-[280px] flex items-center gap-2 p-[10px] mx-[10px]">
          <img src={headSetIcon} alt={headSetIcon} />
          <div className="text-[14px] leading-[20px]">
            <h1 className="text-[#191C1F] font-[500]">Support 24/7</h1>
            <p className="text-[#5F6C72] font-[400]">Live contact/message</p>
          </div>
        </div>
      </div>

      <div className="bg-[#A4A4A4] h-[220px] flex justify-center">
        <div className="flex items-center">
          <div className="flex flex-col gap-[30px] items-center">
            <h1 className="text-[32px] font-[600] text-[#ffff]">
              To Enjoy a Personalized Service and Experience
            </h1>
            <button className="text-[#FFFFFF] font-[700] text-[24px] leading-[32.69px] bg-[#0C239E] rounded-[20px] h-[60px] w-[300px]">
              Download Mobile App
            </button>
          </div>
        </div>
      </div>

      {/* Shop with Categories */}
      <div className="my-[40px] mx-[90px] flex flex-col gap-[40px]">
        <h1 className="flex justify-center text-[#191C1F] leading-[40px] text-[32px] font-[600]">
          Shop with Categories
        </h1>
        <div className="flex justify-between gap-4">
          <img
            src={leftArowButtonIcon}
            alt={leftArowButtonIcon}
            className="relative left-[30px] -ml-[30px]"
          />
          <div className="h-[220px] w-[205px] bg-[#FFFFFF] border border-[#E4E7E9] py-[12px] px-[15px] text-[#191C1F] font-[500] text-[15px] leading-[24px] flex flex-col items-center gap-4">
            <img src={caroIcon} alt={caroIcon} />
            <p>Bandages</p>
          </div>
          <div className="h-[220px] w-[205px] bg-[#FFFFFF] border border-[#E4E7E9] py-[12px] px-[15px] text-[#191C1F] font-[500] text-[15px] leading-[24px] flex flex-col items-center gap-4">
            <img src={caroIcon5} alt={caroIcon5} />
            <p>Alcohol wipes</p>
          </div>
          <div className="h-[220px] w-[205px] bg-[#FFFFFF] border border-[#E4E7E9] py-[12px] px-[15px] text-[#191C1F] font-[500] text-[15px] leading-[24px] flex flex-col items-center gap-4">
            <img src={caroIcon1} alt={caroIcon1} />
            <p>Sterile cotton balls</p>
          </div>
          <div className="h-[220px] w-[205px] bg-[#FFFFFF] border border-[#E4E7E9] py-[12px] px-[15px] text-[#191C1F] font-[500] text-[15px] leading-[24px] flex flex-col items-center gap-4">
            <img src={caroIcon2} alt={caroIcon2} />
            <p>Steri-Strips</p>
          </div>
          <div className="h-[220px] w-[205px] bg-[#FFFFFF] border border-[#E4E7E9] py-[12px] px-[15px] text-[#191C1F] font-[500] text-[15px] leading-[24px] flex flex-col items-center gap-4">
            <img src={caroIcon3} alt={caroIcon3} />
            <p>Medical Scissors</p>
          </div>
          <div className="h-[220px] w-[205px] bg-[#FFFFFF] border border-[#E4E7E9] py-[12px] px-[15px] text-[#191C1F] font-[500] text-[15px] leading-[24px] flex flex-col items-center gap-4">
            <img src={caroIcon4} alt={caroIcon4} />
            <p>Burn Creams</p>
          </div>
          <img
            src={rightArowButtonIcon}
            alt={rightArowButtonIcon}
            className="relative right-[35px] -mr-[35px]"
          />
        </div>
      </div>

      {/* Bandages */}
      <div className="my-[40px] mx-[90px] flex flex-col gap-[20px]">
        <div className="flex items-center">
          <h1 className="w-[20%] text-[#191C1F] font-[600] text-[24px] leading-[32px]">
            Bandages
          </h1>
          <ul className="flex gap-5 w-[80%] font-[400] text-[14px] leading-[20px] text-[#5F6C72]">
            <li className="font-[600] text-[#191C1F] border-b-[2px] pb-1 border-b-[#69F0AE]">
              All Product
            </li>
            <li>Adhesive Bandages</li>
            <li>Gauze Bandages</li>
            <li>Elastic Bandages</li>
            <li className="flex items-center gap-1 text-[#69F0AE] font-[600]">
              Browse All Product <img src={arrowIcon} alt={arrowIcon} />
            </li>
          </ul>
        </div>
        <div className="flex justify-between gap-5">
          <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[320px] w-[280px] p-[15px] flex flex-col gap-4">
            <img src={picOne} alt={picOne} />
            <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
              <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                <img src={StartIcon} alt={StartIcon} />
                <p>(994)</p>
              </div>
              <h1>Adhesive Bandages (Plasters)</h1>
              <p className="text-[#929FA5]">#500</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[320px] w-[280px] p-[15px] flex flex-col gap-4">
            <img src={pic} alt={pic} />
            <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
              <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                <img src={StartFullIcon} alt={StartFullIcon} />
                <p>(798)</p>
              </div>
              <h1>Adhesive Bandages (Plasters)</h1>
              <p className="text-[#929FA5]">#2000</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[320px] w-[280px] p-[15px] flex flex-col gap-4">
            <img src={picTwo} alt={picTwo} />
            <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
              <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                <img src={StartFullIcon} alt={StartFullIcon} />
                <p>(600)</p>
              </div>
              <h1>Adhesive Bandages (Plasters)</h1>
              <p className="text-[#929FA5]">#3000</p>
            </div>
          </div>
          <div className="bg-[#FFFFFF] border border-[#E4E7E9] h-[320px] w-[280px] p-[15px] flex flex-col gap-4">
            <img src={picThree} alt={picThree} />
            <div className="text-[#191C1F] text-[14px] font-[400] leading-[20px] flex flex-col gap-1">
              <div className="flex items-center gap-1 text-[#77878F] leading-[16px] text-[12px] font-[400]">
                <img src={StartFullIcon} alt={StartFullIcon} />
                <p>(492)</p>
              </div>
              <h1>Adhesive Bandages (Plasters)</h1>
              <p className="text-[#929FA5]">#5000</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <button className="flex items-center gap-2 text-[#37474F] font-[700] text-[14px] leading-[20px]">
            View All
            <img src={rightArrowIcon} alt={rightArrowIcon} />
          </button>
        </div>
      </div>

      {/* Testimonials */}
      <div className="my-[40px] mx-[90px] bg-[#A4A4A4] py-[50px] text-[#FFFFFF] flex flex-col gap-[40px] items-center">
        <h1 className="font-[600] text-[32px] leading-[48px]">Testimonials</h1>
        <div className="flex gap-36">
          <div className="flex flex-col gap-4">
            <img src={testimonialOne} alt={testimonialOne} />
            <div className="w-[250px] text-[20px] leading-[40px]">
              <h1 className="font-[600]">Janne</h1>
              <p className="font-[500] text-center">
                ‘’ Best shopping experience ever! “
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src={testimonialTwo} alt={testimonialTwo} />
            <div className="w-[250px] text-[20px] leading-[40px]">
              <h1 className="font-[600]">Adenne</h1>
              <p className="font-[500] text-center">
                ‘’ Easy order, fast delivery “
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <img src={testimonialOne} alt={testimonialOne} />
            <div className="w-[250px] text-[20px] leading-[40px]">
              <h1 className="font-[600]">Janne</h1>
              <p className="font-[500] text-center">
                ‘’ How can i rate this 10* “
              </p>
            </div>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </>
  );
};

export default LandingPage;
