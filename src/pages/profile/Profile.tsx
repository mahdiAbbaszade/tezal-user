import React from "react";
import { RiArrowRightLine } from "react-icons/ri";
import { FcMoneyTransfer } from "react-icons/fc";
import {useNavigate} from "react-router-dom"

export const Profile = () => {
  const navigate = useNavigate()
  return (
    <div className="h-[93vh] flex flex-col justify-between">
      {/* top items profile */}
      <div>
        {/* back button */}
        <div className="flex gap-5 pr-4 items-center bg-[#fefefe] shadow-md py-3">
          <RiArrowRightLine onClick={()=> navigate(-1)} size={30} color="#1e272e" />
          <p className="text-[#80839b]">کیف پول</p>
        </div>
        {/* Inventory */}
        <div className="flex justify-center bg-[#fefefe] border-b border-[#808e9b] shadow-md mt-3">
          <div className="flex gap-7 items-end justify-center flex-col  py-6 ">
            <div className="flex items-center gap-3 text-[#1e272e]">
              <FcMoneyTransfer size={24} />
              <p>موجودی کیف پول</p>
            </div>
            <div className="flex  items-center gap-3 text-[#808e9b]">
              <p className="ExtraBold text-2xl text-[#1e272e]">۰</p>
              <p>تومان</p>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-sm text-[#1e272e] pr-6">
            سرویس بازگشت وجه
          </p>
          <div>
            {/* service back money */}
            <div className="flex justify-around items-center bg-[#fefefe]  border mt-2">
              <div className="flex flex-col gap-3 border-l flex-1">
                <p className="flex flex-col gap-1 items-center text-[#0096f5] pt-7">
                  <span className="ExtraBold text-2xl ">
                    ۰
                  </span>
                  <span>تومان</span>
                </p>
                <p className="flex flex-col items-center text-[#1e272e] text-sm pb-2">
                  <span>جمع خرید</span>
                  <span>با سرویس بازگشت وجه</span>
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <p className="flex flex-col gap-1 items-center text-[#4cd137] pt-7 ">
                  <span className="ExtraBold text-2xl ">
                    ۰
                  </span>
                  <span>تومان</span>
                </p>
                <p className="flex flex-col items-center text-[#1e272e] text-sm pb-2">
                  <span>جمع دریافتی</span>
                  <span>با سرویس بازگشت وجه</span>
                </p>
              </div>
            </div>

            {/* transaction */}
            <div className="text-center bg-[#fefefe] text-sm py-4 text-[#0096f5]">
              <p>مشاهده تراکنش‌ها</p>
            </div>
          </div>
        </div>
      </div>

      {/* btn  profile */}
      <div className="text-sm bg-[#fefefe] mt-10 flex justify-around py-6 px-2">
        <button className="text-[#0096f5] flex-1">
          درخواست‌‌های برداشت
        </button>
        <button className="text-[#4cd137] border border-[#4cd137] rounded-md flex-1 py-3">
          برداشت
        </button>
      </div>
    </div>
  );
};
