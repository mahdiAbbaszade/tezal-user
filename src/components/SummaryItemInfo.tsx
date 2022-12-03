import React from "react";


interface propsSummaryItemShop {
    name: string;
    value?: number | string;
    className: string;
    valueClass?: string;
    nameClass?: string;
  }
  
 export const SummaryItemInfo = ({
    name,
    value,
    className,
    valueClass,
    nameClass
  }: propsSummaryItemShop) => {
    return (
      <div className={`flex items-center justify-between px-3 ${className}`}>
        <p className={`regularYekan text-sm text-inherit ${nameClass}`}>{name}</p>
        <p
          className={`regularYekan text-sm  ${
            valueClass ? valueClass : " text-inherit"
          }`}
        >
          {value} 
        </p>
      </div>
    );
  };
  