import React from "react";

interface props {
  rate: {
    min: string;
    max: string;
  };
  handleRateOnChaange: (e: any) => void;
}
const MinAndMaxRate = ({
  rate,
  handleRateOnChaange,
}: props) => {
  return (
    <div className="my-6">
      <p className="text-center text-[#1e272e] text-xs">
        بر اساس امتیاز فروشگاه از 1 تا 5 فیلتر خود را اعمال
        کنید
      </p>
      <div className="flex justify-around gap-5 items-center px-4 pt-3">
        <div className="flex items-center gap-2">
          <label>از:</label>
          <input
            value={rate.min}
            min={1}
            max={5}
            name="min"
            onChange={handleRateOnChaange}
            type="number"
            className="w-24 border border-solid  text-center  border-[#808e9b] text-md yekanBold py-1 px-1 outline-none rounded-md text-[#1e272e]"
          />
        </div>
        <div className="flex items-center gap-2">
          <label>تا:</label>
          <input
            value={rate.max}
            name="max"
            min={1}
            max={5}
            onChange={handleRateOnChaange}
            type="number"
            className="w-24 border border-solid text-center  border-[#808e9b] text-md yekanBold py-1 px-1 outline-none rounded-md text-[#1e272e]"
          />
        </div>
      </div>
    </div>
  );
};

export default MinAndMaxRate;
