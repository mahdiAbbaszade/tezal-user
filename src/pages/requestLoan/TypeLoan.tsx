import { useState } from "react";
import { CheckBoxController as CheckBox } from "./../../components/CheckBox";
import { UseFormReturn } from "react-hook-form";

interface props {
  register: UseFormReturn["register"];
  label: string;
  required: boolean;
  error: string;
  labelCount: string;
}
const TypeLoan = ({
  register,
  label,
  required,
  error,
  labelCount,
}: props) => {
  const [khadamat, setKhadamat] = useState(false);
  const [kala, setKala] = useState(false);
  return (
    <div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-4">
          <CheckBox
            value={kala}
            onChange={() => setKala(!kala)}
            className="-mt-1_5 "
            label="کالا"
            name=""
          />
          <CheckBox
            value={khadamat}
            onChange={() => setKhadamat(!khadamat)}
            className="-mt-1_5 "
            label="خدمات"
            name=""
          />
        </div>
        <div>
          <p className="block yekanBold text-xs pr-1 pb-1 text-[#1e272e]">
            نام کالا یا خدمات
          </p>
          <input
            {...register(label, {
              required: {
                value: required,
                message: "فیلد خالی است",
              },
            })}
            disabled={kala || khadamat ? false : true}
            className={`w-full border  border-solid border-[#808e9b] yekanBold text-md py-3 px-1 outline-none rounded-md text-[#1e272e]`}
          />
          {error && (
            <p className="text-red-500 regularYekan text-xs pt-2  pr-1">
              {error}
            </p>
          )}
        </div>
      </div>
      {kala && (
        <div className="flex items-center mt-6">
          <p className="text-xs regular ml-2">تعداد :</p>
          <input
            type="number"
            defaultValue={1}
            {...register(labelCount)}
            className={` border  border-solid border-[#808e9b] yekanBold py-3 px-1 outline-none text-md rounded-md text-[#1e272e]`}
          />
        </div>
      )}
    </div>
  );
};

export default TypeLoan;
