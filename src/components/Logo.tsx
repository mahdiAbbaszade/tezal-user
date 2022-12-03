import React from "react";
import LogoApp from "./../assests/img/logoTezal.svg.svg";
interface props {
  className?: string;
}
export const Logo = ({ className = "h-36" }: props) => {
  return (
    <div className="flex justify-center items-center">
      <img
        src={LogoApp}
        alt="logo"
        className={`object-contain ${className}`}
      />
    </div>
  );
};
