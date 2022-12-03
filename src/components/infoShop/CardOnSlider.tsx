import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaBuilding, FaCompass } from "react-icons/fa";
import {
  MdOutlineKeyboardArrowLeft,
  MdWatchLater,
} from "react-icons/md";
import { useRecoilValue } from "recoil";
//@ts-ignore
import persianJs from "persianjs";
import { getLoansAndDiscountsKey } from "../../atom/atom";
import { TypeinfoShopData } from "./../../type";
import { digitsEnToFa } from "@persian-tools/persian-tools";
interface props {
  handleToggleModal: () => void;
  toggleAddressInfoshop: () => void;
}

export const CardOnSlider = ({
  handleToggleModal,
  toggleAddressInfoshop,
}: props) => {
  const infoShopData = useRecoilValue<TypeinfoShopData>(
    getLoansAndDiscountsKey
  );
  const Amount = Math.max(
    // @ts-ignore
    infoShopData.Discounts.map((i: any) => i.Amount)
  );

  const getDayActive = () => {
    let activeDay = infoShopData.WorkingDays.filter(
      (item: any) =>
        item.Day ===
        new Intl.DateTimeFormat("fa-IR", {
          weekday: "long",
        }).format(new Date())
    );

    return activeDay as [];
  };

  return (
    <div className="bg-[#fefefe]  py-5 w-[95%] mx-auto rounded-md shadow-lg z-30">
      {/* item  1 of card */}
      <div className="flex justify-between items-center flex-row-reverse px-2 border-b pb-2">
        <div className="flex-[4]">
          <div className="flex flex-row-reverse items-center gap-2 ">
            <div className="flex items-center flex-col w-14">
              <div className="flex justify-center items-center border w-full rounded-t">
                <FaBuilding
                  size={30}
                  className="text-[#808e9b] my-2"
                />
              </div>
              <div className="flex justify-center items-center gap-1 border border-t-0 w-full rounded-b">
                <p className="text-[#808e9b] text-xs yekanBold">
                  {persianJs(`${infoShopData.Rate}`)
                    .englishNumber()
                    .toString()}
                </p>
                <AiFillStar size={20} color="yellow" />
              </div>
            </div>
            <div className="flex items-end flex-col gap-4">
              <p className="yekanBold text-[#1e272e]">
                {infoShopData.NameJob}
              </p>
            </div>
          </div>
        </div>
        <div className="border-r flex-[1]">
          <p className="yekanBold text-sm text-[#80839b]">
            {" "}
            <span className="text-2xl text-[#ea2027]">
              {/* @ts-ignore */}
              {persianJs(Amount ? `${Amount}%` : "0")
                .englishNumber()
                .toString()}
            </span>{" "}
            تا
          </p>
          <p className="yekanBold text-sm text-[#80839b]">
            تخفیف
          </p>
        </div>
      </div>

      {/* item 2 of card */}

      <div
        onClick={handleToggleModal}
        className="flex  p-2 justify-between items-center flex-row-reverse border-b"
      >
        <div className="flex gap-2 items-center flex-row-reverse">
          <MdWatchLater
            size={23}
            className="text-[#4cd137]"
          />
          {getDayActive().map((item: any, index: any) => {
            return (
              <p className="yekanBold text-xs">
                {" "}
                <span className="text-[#4cd137]">
                  باز است
                </span>{" "}
                <span className="text-[#80839b]">
                  {digitsEnToFa(item.From)}
                </span>{" "}
                تا <span>{digitsEnToFa(item.To)}</span>
              </p>
            );
          })}
        </div>
        <div>
          <MdOutlineKeyboardArrowLeft size={24} />
        </div>
      </div>
      {/* item 3 of card */}

      <div
        onClick={toggleAddressInfoshop}
        className="flex mt-2 px-2 justify-between items-center flex-row-reverse"
      >
        <div className="flex gap-2 items-center flex-row-reverse">
          <FaCompass size={21} className="text-gray-500" />
          <p className="yekanBold text-xs text-[#80839b]">
            {" "}
            مسیر1 : {infoShopData.AddressJob.slice(0, 26)}
          </p>
        </div>
        <div>
          <MdOutlineKeyboardArrowLeft size={24} />
        </div>
      </div>
    </div>
  );
};
