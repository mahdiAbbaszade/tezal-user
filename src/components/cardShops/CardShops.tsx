import React from "react";
import { GoLocation } from "react-icons/go";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Rate from "./../../assests/img/rate.svg";
// @ts-ignore
import persianJs from "persianjs";
import { useNavigate } from "react-router-dom";
import "./cardShops.css"
interface props {
  className?: string;
  NameJob: string;
  maxOfDiscountAmount: number;
  loans: {
    from: number;
    to: number;
  };
  AddressHome: string;
  AddressJob: string;
  ProfilePic: string;
  id: string;
}
export const CardShops = ( {
  className,
  NameJob,
  maxOfDiscountAmount,
  loans,
  AddressHome,
  AddressJob,
  ProfilePic,
  id,
}: props ) => {
  const navigate = useNavigate();
  return (
    <div
      className={` pb-3 mt-3 flex flex-col gap bg-white rounded-2xl shadow-lg card_shops  ${className}`}
    >
      {/* card img name off */}
      <div className=" justify-between items-center">
        <div className="col-12 items-center gap-2">
          {/* <img
            className="w-24 h-[4.5rem] rounded-xl"
            src={`https://tt-pezq.onrender.com/api/v1/GetImage/${ProfilePic}`}
          /> */}
          <div className="flex flex-col mr-0">
            <p className="yekanBold text-white text-md nameJob bg-blue-600 p-3 rounded-t-2xl">
              {NameJob}
            </p>
            <p className="yekanBold text-[#13272e] text-md py-2">
              <span className="text-sm text-blue-700 p-4">آدرس : </span> 
            </p>
            {/* <div className="flex items-center gap-1">
              <div className="flex items-center">
                <GoLocation className="text-[#808e9b]" />
                <span className="regularYekan text-xs text-[#808e9b]">
                </span>
              </div>
              <p className="text-[#808e9b]">|</p>
              <div className="flex  items-center container_rate_start">
                <img
                  src={Rate}
                  className="text-[#ffc107] rate_icon"
                />
                <span className="regularYekan text-xs text-[#808e9b]">
                  {persianJs("3.5")
                    .englishNumber()
                    .toString()}
                </span>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div>
          <p className="regularYekan text-[#ea2027]">
            تا{" "}
            <span className="text-xl ">
              {persianJs(`${maxOfDiscountAmount}%`)
                .englishNumber()
                .toString()}
            </span>
          </p>
          <p className="regularYekan text-[#808e9b] text-sm">
            تخفیف
          </p>
        </div> */}
      </div>

      {/* border */}
      <p className="border-b-[1.5px] px-4 py-2 opacity-30 border-separate border-dashed border-[#808e9b]">{AddressJob}</p>
      <div className="flex items-center justify-between px-2">
        <p className="yekanBold text-xs text-[#13272e] pr-5 loans_from_to">
          {/* {persianJs(
            ` امکان خرید اعتباری از ${loans.from} تا ${loans.to} ماهه`
          )
            .englishNumber()
            .toString()} */}
        </p>
        <div className=" cursor-pointer ">
          <p
            className="yekanBold text-[0.65rem] flex items-center relative"
            style={{ color: "#0096f5" }}
          >
            <span
              onClick={() =>
                navigate( `${id}`, {
                  state: { id },
                } )
              }
              className="pl-[0.40rem] py-2"
            >
              {" "}
              درخواست وام از کسب و کار
            </span>

            <MdKeyboardArrowLeft
              size={18}
              color="#0096f5"
              className="absolute -left-3 top-[0.rem]"
            />
          </p>
        </div>
      </div>
    </div>
  );
};
