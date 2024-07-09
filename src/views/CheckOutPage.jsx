import React from "react";
import NavBar from "../components/navBar/NavBar";
import houseIcon from "../assets/House.svg";
import arrowIcon from "../assets/CaretRight.svg";
import Footer from "../components/footer/Footer";
import CaretDown from "../assets/CaretDown.svg";
import CurrencyDollar from "../assets/CurrencyDollar.svg";
import amazonIcon from "../assets/amazon-icon-1 1.svg";
import paypalIcon from "../assets/paypal.svg";
import CreditCarIcon from "../assets/CreditCar.svg";
import elementIcon from "../assets/From Elements.svg";
import chipIcon from "../assets/chip.svg";
import chipIcontwo from "../assets/chiptwo.svg";
import arrowIco from "../assets/ArrowRight.svg";
import { NavLink } from "react-router-dom";

const CheckOutPage = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{ fontFamily: "Public Sans" }}
        className="bg-[rgb(249,250,250)] py-[20px] sticky top-[90px] z-10 lg:px-[9rem] px-[15px]"
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
        className="lg:h-[1327px] h-[100%] flex flex-col lg:flex-row justify-between gap-10 px-[15px] lg:px-[9rem] py-[30px] lg:py-[60px]"
      >
        <div className="lg:w-[60%] w-[100%]">
          <h1 className="pb-[20px] text-[#191C1F] font-[500] leading-[24px] text-[18px]">
            Billing Information
          </h1>
          <form className="flex flex-col gap-4">
            <div className="w-[100%] flex flex-col gap-2">
              <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                User name
              </p>
              <div className="flex flex-col lg:flex-row gap-3 w-[100%]">
                <input
                  className="lg:w-[50%] w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]"
                  placeholder="First name"
                />
                <input
                  className="lg:w-[50%] w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]"
                  placeholder="Last name"
                />
              </div>
            </div>
            <div>
              <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                Address
              </p>
              <input
                className="outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px] w-[100%]"
                placeholder="Address"
              />
            </div>
            <div className="flex justify-between gap-3 w-[100%]">
              <div className="flex flex-col w-[100%]">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  Region/State
                </p>
                <div className="flex">
                  <input
                    className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px] pr-[40px]"
                    placeholder="Select..."
                  />
                  <img
                    src={CaretDown}
                    alt={CaretDown}
                    className="relative right-8 -mr-8"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[100%]">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  City
                </p>
                <div className="flex">
                  <input
                    className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px] pr-[40px]"
                    placeholder="Select..."
                  />
                  <img
                    src={CaretDown}
                    alt={CaretDown}
                    className="relative right-8 -mr-8"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[100%]">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  Zip Code
                </p>
                <input
                  className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]"
                  placeholder="Zip Code"
                />
              </div>
            </div>
            <div className="w-[100%] flex gap-2">
              <div className="flex flex-col w-[100%]">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  Email
                </p>
                <input className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]" />
              </div>
              <div className="flex flex-col w-[100%]">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  Phone Number
                </p>
                <input className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                Ship into different address
              </p>
            </div>

            <div className="h-[520px] flex flex-col gap-5 bg-[#FFFFFF] border border-[#E4E7E9] rounded-[4px] mt-[40px] p-[10px] lg:p-[20px]">
              <h1 className="text-[#191C1F] font-[500] leading-[24px] text-[18px]">
                Payment Option
              </h1>
              <div className="h-[144px] bg-[#FFFFFF] border border-[#E4E7E9] flex items-center">
                <div className="h-[96px] w-[25%] lg:w-[160px] flex flex-col gap-2 lg:gap-3 items-center">
                  <div>
                    <img src={CurrencyDollar} alt={CurrencyDollar} />
                  </div>
                  <p className="text-[#191C1F] font-[500] text-[9px] text-center lg:text-[15px] leading-[20px]">
                    Cash on Delivery
                  </p>
                  <div>
                    <div className="bg-[#FFFFFF] border border-[#C9CFD2] w-[20px] h-[20px] rounded-[100px]"></div>
                  </div>
                </div>
                <div className=" border-r border-r-[#E4E7E9] h-[110px]"></div>
                <div className="h-[96px] w-[25%] lg:w-[160px] flex flex-col gap-2 lg:gap-3 items-center">
                  <div>
                    <img src={paypalIcon} alt={paypalIcon} />
                  </div>
                  <p className="text-[#191C1F] font-[500] text-[9px] text-center lg:text-[15px] leading-[20px]">
                    Paypal
                  </p>
                  <div>
                    <div className="bg-[#FFFFFF] border border-[#C9CFD2] w-[20px] h-[20px] rounded-[100px]"></div>
                  </div>
                </div>
                <div className=" border-r border-r-[#E4E7E9] h-[110px]"></div>
                <div className="h-[96px] w-[25%] lg:w-[160px] flex flex-col gap-2 lg:gap-3 items-center">
                  <div>
                    <img src={amazonIcon} alt={amazonIcon} />
                  </div>
                  <p className="text-[#191C1F] font-[500] text-[9px] text-center lg:text-[15px] leading-[20px]">
                    Amazon Pay
                  </p>
                  <div>
                    <div className="bg-[#FFFFFF] border border-[#C9CFD2] w-[20px] h-[20px] rounded-[100px]"></div>
                  </div>
                </div>
                <div className=" border-r border-r-[#E4E7E9] h-[110px]"></div>
                <div className="h-[96px] w-[25%] lg:w-[160px] flex flex-col gap-2 lg:gap-3 items-center">
                  <div>
                    <img src={CreditCarIcon} alt={CreditCarIcon} />
                  </div>
                  <p className="text-[#191C1F] font-[500] text-[9px] text-center lg:text-[15px] leading-[20px]">
                    Debid/Credit Card
                  </p>
                  <div>
                    <img src={elementIcon} alt={elementIcon} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[100%]">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  Name on Card
                </p>
                <input className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]" />
              </div>
              <div className="flex flex-col w-[100%]">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  Card Number
                </p>
                <input className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]" />
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col w-[100%]">
                  <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                    Expire Date
                  </p>
                  <input className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]" />
                </div>
                <div className="flex flex-col w-[100%]">
                  <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                    CVC
                  </p>
                  <input className="w-[100%] outline-none border border-[#E4E7E9] h-[44px] rounded-[2px] pl-[10px]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="text-[#191C1F] font-[500] leading-[24px] text-[18px]">
                Additional Information
              </h1>
              <div className="flex flex-col gap-2">
                <p className="text-[#191C1F] leading-[20px] text-[14px] font-[400]">
                  Order Notes (Optional)
                </p>
                <textarea
                  className="h-[124px] p-[15px] outline-none w-[100%] bg-[#FFFFFF] border border-[#E4E7E9] rounded-[2px]"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:w-[40%] w-[100%]">
          <div className="bg-[#FFFFFF] w-[100%] lg:w-[424px] border border-[#E4E7E9] rounded-[4px] p-[20px] flex flex-col gap-4">
            <h1 className="text-[#1D1D1D] font-[500] leading-[24px] text-[18px]">
              Order Summary
            </h1>
            <div className="flex items-center gap-2">
              <img src={chipIcon} alt={chipIcon} />
              <div className="leading-[20px] text-[14px] flex flex-col gap-2">
                <p className="text-[#191C1F] font-[400]">Bandages for babies</p>
                <p className="font-[700] text-[#1D1D1D]">
                  1 x <span className="text-[#69F0AE]">#3000</span>
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <img src={chipIcontwo} alt={chipIcontwo} />
              <div className="leading-[20px] text-[14px] flex flex-col gap-2">
                <p className="text-[#191C1F] font-[400]">
                  Compression Bandages
                </p>
                <p className="font-[700] text-[#1D1D1D]">
                  3 x <span className="text-[#69F0AE]">#4000</span>
                </p>
              </div>
            </div>

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
            <NavLink to="/success">
              <div className="bg-[#0C239E] h-[56px] mt-[20px] flex justify-center items-center text-[#FFFFFF] leading-[56px] text-[16px] font-[700] gap-2">
                <p>Proceed to Checkout</p>
                <img src={arrowIco} alt={arrowIco} />
              </div>
            </NavLink>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CheckOutPage;
