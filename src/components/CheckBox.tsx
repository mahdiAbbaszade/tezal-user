import React from "react";
import { Controller } from "react-hook-form";
import "./CheckBox.css";
interface props {
  label?: string;
  className?: string;
  name: string;
  control: any;
}
const CheckBox = ({ label, className, name, control }: props) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: true }}
      render={({ field }) => (
        <div className="flex items-center gap-2">
          <input className="" type="checkbox" {...field} />

          {label && (
            <p className="text-xs yekanBold text-[#1e272e] pt-1">{label}</p>
          )}
        </div>
      )}
    />
  );
};

export default CheckBox;

interface propsCheckBoxController {
  label?: string;
  className?: string;
  value: boolean;
  onChange: any;
  name: string;
}
export const CheckBoxController = ({
  name,
  onChange,
  value,
  className,
  label,
}: propsCheckBoxController) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        className=""
        type="checkbox"
        // @ts-ignore
        value={value}
        onChange={onChange}
        name={name}
      />

      {label && (
        <p className="text-xs yekanBold text-[#1e272e] pt-1">{label}</p>
      )}
    </div>
  );
};
