import React from "react";
import { useRecoilValue } from "recoil";
import { getLoansAndDiscountsKey } from "../../atom/atom";
import { TypeinfoShopData } from "../../type";
import "./PropertyInfoShop.css";
export const PropertyInfoShop = () => {
  const infoShopData = useRecoilValue<TypeinfoShopData>(
    getLoansAndDiscountsKey
  );

  return (
    <div className="bg-[#fefefe] w-full h-fit my-3 p-3 ">
      <p className="yekanBold text-gray-700 text-md">
        ویژگی ها
      </p>
      {infoShopData.Features.map(
        (item: any, index: any) => {
          return <ItemProperty key={index} keyText={item} />;
        }
      )}
    </div>
  );
};

interface ItemPropertyTypes {
  keyText: string;
}
const ItemProperty = ({ keyText }: ItemPropertyTypes) => {
  return (
    <div className="flex items-center gap-2 py-2">
      <p className="h-3 w-3 mt-[7px] rounded-full bg-[#ea2027] yekanBold"></p>
      <p className=" yekanBold text-sm text-[#80839b]">
        {keyText}
      </p>
    </div>
  );
};
