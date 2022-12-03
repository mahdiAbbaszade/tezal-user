import React from "react";
import "./SuccessPayment.css";
import Modal from "./Modal";
interface props {
  onClick:()=>void,
  OrderId: string | null | undefined;
}
export const SuccessPayment = ({OrderId,onClick}: props ) => {
  return (
 
      <div className="h-full flex flex-col justify-center items-center">
        <div className="wrapper">
          {" "}
          <svg
            className="animated-check"
            viewBox="0 0 24 24"
          >
            <path
              d="M4.1 12.7L9 17.6 20.3 6.3"
              fill="none"
            />{" "}
          </svg>
        </div>

        <h1 className="text-center text-lg ExtraBold text-[#4cd137]">
          پرداخت با موفقیت انجام شد
        </h1>
        <p className="text-center pt-4 text-xs regularYekan text-[#1e272e]">
          کد‌پیگیری:{OrderId}
        </p>

        <div className="flex justify-center mt-10">
          <button onClick={onClick} className="bg-[#0096f5] appearance-none text-white py-[10px] border border-white shadow-lg px-8 rounded-lg w-fit">
            متوجه شدم
          </button>
        </div>
      </div>

  );
};
