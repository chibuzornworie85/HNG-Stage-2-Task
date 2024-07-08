import React from "react";
import NavBar from "../components/navBar/NavBar";
import NewsLetter from "../components/newsletter/NewsLetter";
import Footer from "../components/footer/Footer";
import houseIcon from "../assets/House.svg";
import arrowIcon from "../assets/CaretRight.svg";
import xIcon from "../assets/XCircle.svg";
import chipIcon from "../assets/chip.svg";
import chipIcontwo from "../assets/chiptwo.svg";
import xIcontwo from "../assets/XCircletwo.svg";
import leftArrow from "../assets/leftarrows.svg";
import arrowIco from "../assets/ArrowRight.svg";
import { NavLink } from "react-router-dom";

const CartPage = () => {
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
          <h1 className="text-[#69F0AE]">Cart Page</h1>
        </div>
      </div>

      <div
        style={{ fontFamily: "Public Sans" }}
        className="px-[9rem] h-[800px] py-[80px] flex justify-between gap-12"
      >
        <div className="h-[350px] w-[650px] bg-[#FFFFFF] border border-[#E4E7E9] rounded-[4px]">
          <div className="h-[64px] py-[20px] px-[24px] text-[#191C1F] leading-[24px] font-[500] text-[18px]">
            <h1>Shopping Cart</h1>
          </div>
          <div className="bg-[#F2F4F5] border py-[10px] px-[24px] text-[#475156] font-[500] text-[12px] leading-[18px] flex justify-between">
            <p>Products</p>
            <div className="flex items-center gap-[85px]">
              <p>Price</p>
              <p>Quantity</p>
              <p>Sub-Total</p>
            </div>
          </div>
          <div className="h-[72px] flex items-center justify-between p-[15px]">
            <div className="flex items-center gap-2 text-[14px] leading-[20px] font-[400] text-[#191C1F]">
              <img src={xIcon} alt={xIcon} className="" />
              <img
                src={chipIcon}
                alt={chipIcon}
                className="h-[50px] w-[50px]"
              />
              <p>Bandages for babies</p>
            </div>
            <div className="flex gap-[70px] text-[#475156] font-[400] leading-[20px] text-[14px]">
              <p>#3000</p>
              <div className="h-[48px flex items-center px-[6px] gap-6 bg-[#FFFFFF] border border-[#E4E7E9]">
                <p>-</p>
                <p>01</p>
                <p>+</p>
              </div>
              <p className="text-[#191C1F] font-[500]">#3000</p>
            </div>
          </div>
          <div className="h-[72px] flex items-center justify-between p-[15px]">
            <div className="flex items-center gap-2 text-[14px] leading-[20px] font-[400] text-[#191C1F]">
              <img src={xIcontwo} alt={xIcontwo} className="" />
              <img
                src={chipIcontwo}
                alt={chipIcontwo}
                className="h-[50px] w-[50px]"
              />
              <p>Compression Bandages</p>
            </div>
            <div className="flex gap-[70px] text-[#475156] font-[400] leading-[20px] text-[14px]">
              <p>#4000</p>
              <div className="h-[48px flex items-center px-[6px] gap-6 bg-[#FFFFFF] border border-[#E4E7E9]">
                <p>-</p>
                <p>03</p>
                <p>+</p>
              </div>
              <p className="text-[#191C1F] font-[500]">#1200</p>
            </div>
          </div>

          <div className="flex justify-end p-[24px] border-t border-[#E4E7E9]">
            <NavLink to="/product">
              <button className="border-[2px] rounded-[2px] border-[#69F0AE] flex items-center gap-2 px-[24px] h-[48px] text-[#69F0AE] font-[700] text-[14px] leading-[48px]">
                <img src={leftArrow} alt={leftArrow} />
                Return to Shop
              </button>
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="w-[351px] h-[344px] bg-[#FFFFFF] rounded-[4px] border border-[#E4E7E9] relative bottom-10 -mb-10">
            <div className="p-[10px] flex flex-col gap-3">
              <h1 className="text-[#191C1F] font-[500] text-[18px] leading-[24px]">
                Card Totals
              </h1>
              <div className="flex flex-col gap-3 leading-[20px] text-[14px]">
                <div className="flex justify-between">
                  <p className="text-[#5F6C72] font-[400]">Sub-total</p>
                  <h1 className="text-[#191C1F] font-[500]">#9,500</h1>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#5F6C72] font-[400]">Shipping</p>
                  <h1 className="text-[#191C1F] font-[500]">Free</h1>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#5F6C72] font-[400]">Discount</p>
                  <h1 className="text-[#191C1F] font-[500]">#24</h1>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#5F6C72] font-[400]">Tax</p>
                  <h1 className="text-[#191C1F] font-[500]">#61.99</h1>
                </div>
              </div>
              <div className="border-[#E4E7E9] border mt-[20px]"></div>
              <div className="flex justify-between font-[600] text-[16px] leading-[24px] text-[#191C1F]">
                <p>Total</p>
                <h1>#12,000</h1>
              </div>
            </div>
            <NavLink to="/checkout">
              <div className="bg-[#0C239E] h-[56px] mt-[20px] flex justify-center items-center text-[#FFFFFF] leading-[56px] text-[16px] font-[700] gap-2">
                <p>Proceed to Checkout</p>
                <img src={arrowIco} alt={arrowIco} />
              </div>
            </NavLink>
          </div>

          <div className="h-[220px] w-[318px] bg-[#FFFFFF] border border-[#E4E7E9] rounded-[4px]">
            <h1 className="p-[20px] border-b border-b-[#E4E7E9] font-[500] text-[18px] leading-[24px]">
              Coupon Code
            </h1>
            <p className="p-[20px] border-b border-b-[#E4E7E9] text-[#77878F] leading-[20px] text-[14px] font-[400]">
              Email address
            </p>
            <button className="my-[20px] w-[159px] rounded-[2px] text-[#FFFFFF] font-[700] text-[14px] leading-[48px] h-[48px] bg-[#69F0AE] px-[24px]">
              Apply Coupon
            </button>
          </div>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default CartPage;
