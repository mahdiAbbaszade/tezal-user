import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { GiCook } from "react-icons/gi";
interface props {
  Name: string;
  onClick:()=>void,
}
export const CardCategory = ({ Name ,onClick}: props) => {
  return (
    <div onClick={onClick} className="flex items-center justify-between px-4 py-4 border-b-[1.5px] border-gray-200">
      <div className="flex items-center gap-3">
        <GiCook size={26} className="text-[#ea2027]" />
        <p className="yekanBold text-sm text-[#1e272e] self-end">
          {Name}
        </p>
      </div>
      <RiArrowLeftSLine
        className="text-[#1e272e]"
        size={26}
      />
    </div>
  );
};
