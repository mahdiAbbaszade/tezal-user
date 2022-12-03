import React from "react";
import { useRecoilState } from "recoil";
import { tremsOfUseInfoShop } from "./../../atom/atom";
import { Link } from "react-router-dom";
//@ts-ignore
import persianJs from "persianjs";
interface props {
  name: string;
  DiscountFromSEBToCustomers: number;
  onClick?: () => void;
}
export const CardTabInfoshop = ({
  name,
  DiscountFromSEBToCustomers,
  onClick,
}: props) => {
  const [isOpen, setIsOpen] = useRecoilState(
    tremsOfUseInfoShop
  );
  return (
    <div className="py-4 border-b bg-white px-4">
      {/* item 1 */}
      <div className="flex items-center gap-3">
        <img
          className="w-16 h-16 rounded-md"
          src="https://images.unsplash.com/photo-1518907712641-d260ce0b249e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJpZHxlbnwwfHwwfHw%3D&w=1000&q=80"
        />
        <div className="flex flex-col gap-2">
          <p className="ExtraBold text-[#1e272e] text-sm">
            {name}
          </p>
        </div>
      </div>
      {/* item 2 */}
      <div className="flex justify-between items-center mt-6">
        <p
          className="text-sm text-[#0096f5] yekanBold"
          onClick={() => setIsOpen(!isOpen)}
        >
          شرایط استفاده
        </p>

        <div className="flex  items-center gap-3">
          <div className="flex flex-col gap-2">
            <p>
              <span className="yekanBold text-white bg-[#ea2027] text-xs p-1 rounded-md">
                {persianJs(
                  DiscountFromSEBToCustomers
                    ? `% ${DiscountFromSEBToCustomers}`
                    : 0
                )
                  .englishNumber()
                  .toString()}
              </span>
            </p>
          </div>
          <button
            onClick={onClick}
            className="text-[#4cd137]
           border border-[#4cd137] yekanBold 
           text-sm py-3 px-6 rounded-md 
           outline-none"
          >
            انتخاب
          </button>
        </div>
      </div>
    </div>
  );
};
