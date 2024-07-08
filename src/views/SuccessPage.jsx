import React from "react";
import NavBar from "../components/navBar/NavBar";
import houseIcon from "../assets/House.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Footer from "../components/footer/Footer";
import checkIcon from "../assets/CheckCircle1.svg";
import arrowIco from "../assets/ArrowRight.svg";
import stackIcon from "../assets/Stack.svg";
import { NavLink } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{ fontFamily: "Public Sans" }}
        className="bg-[rgb(249,250,250)] py-[20px] sticky top-[90px] z-10 px-[9rem]"
      >
        <div className="flex items-center gap-2 font-[500] text-[14px] leading-[20px]">
          <img src={houseIcon} alt={houseIcon} />
          <h1 className="text-[#5F6C72]">Home</h1>
          <img src={arrowIcon} alt={arrowIcon} />
          <h1>Shopping Card</h1>
          <img src={arrowIcon} alt={arrowIcon} />
          <h1 className="text-[#69F0AE]">Checkout</h1>
        </div>
      </div>

      <div
        style={{ fontFamily: "Public Sans" }}
        className="flex justify-center h-[400px]"
      >
        <div className="flex items-center">
          <div className="flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-2 items-center">
              <img src={checkIcon} alt={checkIcon} />
              <h1 className="text-[#191C1F] text-[24px] leading-[32px] font-[600]">
                Your order has been placed successfully
              </h1>
              <p className="text-[#5F6C72] text-[14px] leading-[20px]">
                Thank you for shopping with us!
              </p>
            </div>
            <div className="flex gap-4 font-[700] text-[14px] leading-[48px]">
              <NavLink to="/">
                <button className="flex items-center border-[2px] border-dashed border-[#FFE7D6] gap-2 px-[24px] h-[48px] text-[#0C239E] rounded-[2px]">
                  <img src={stackIcon} alt={stackIcon} />
                  Go to Dashboard
                </button>
              </NavLink>
              <NavLink to="/product">
                <button className="flex items-center gap-2 bg-[#0C239E] px-[24px] h-[48px] text-[#ffff] rounded-[2px]">
                  View Order <img src={arrowIco} alt={arrowIco} />
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SuccessPage;
