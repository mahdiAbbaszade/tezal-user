import React from "react";
import Modal from "./Modal";

interface props {
  onClick:()=>void,
  OrderId: string | null | undefined;
}
export const FaieldPayment = ({OrderId,onClick}: props) => {
  return (
    <div className="flex justify-center flex-col h-full">
      <div className="flex justify-center">
        <div className="o-circle c-container__circle o-circle__sign--failure">
          <div className="o-circle__sign"></div>
        </div>
      </div>

      <h1 className="text-[#ea2027] text-center ExtraBold mt-10 text-lg">
        پرداخت با موفقیت انجام نشد
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
