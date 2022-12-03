import { DiReact } from "react-icons/di";
import {FcShop} from "react-icons/fc"
interface propsCardOrder {
  address: string;
  count: string;
  off: string;
  money: string;
}
export const CardOrder = ({ address, count, money, off }: propsCardOrder) => {
  return (
    <div className="flex border shadow-sm bg-white p-2 gap-3 rounded-md">
      <div className="bg-gray-200 w-20 h-20 rounded-lg flex items-center justify-center">
        <FcShop size={55} />
      </div>
      <div className="flex flex-1 flex-col justify-between">
        <p className="text-gray-400 regularYekan text-xs">{address}</p>
        <div className="flex items-center justify-between w-full">
          <p className="text-xs w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
            {count}
          </p>
          <p className="regularYekan text-gray-400 text-xs line-through">
            {off}
          </p>
          <p className="flex items-center gap-1 text-xs regularYekan text-gray-500">
            <span className="text-lg text-gray-700">{money}</span> تومان
          </p>
        </div>
      </div>
    </div>
  );
};
