import React from "react";
import { AiOutlineUser } from "react-icons/ai";
interface props {
    name: string;
    icon:JSX.Element,
    onClick?:()=>void,
}
export const Item = ({name, icon,onClick}:props) => {
  return (
    <div onClick={onClick} className="flex items-center gap-3">
       {icon}
      <p className="flex-end text-[#1e272e] text-sm ">{name}</p>
    </div>
  );
};
