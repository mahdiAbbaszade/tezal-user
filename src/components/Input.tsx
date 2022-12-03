import React from "react";
import { UseFormReturn } from "react-hook-form";

interface props {
  className?: string;
  name: string;
  disabled?: boolean;
  type: string;
  register: UseFormReturn["register"];
  required: boolean;
  minLength?: number | any;
  error: any;
  maxLength?: number | any;
  message?: string | any;
  autoComplete?: string;
  autoFocus?: boolean;
  label: string;
  onKeyUp?: () => void;
}
const Input = ({
  className,
  label,
  disabled,
  register,
  required,
  type,
  autoComplete,
  autoFocus,
  maxLength,
  message,
  minLength,
  name,
  error,
  onKeyUp,
}: props) => {
  return (
    <div>
      <label className="block yekanBold text-xs pr-1 pb-1 text-[#1e272e]">
        {name}
      </label>
      <input
        {...register(label, {
          required: { value: required, message: "فیلد خالی است" },
          minLength: { value: minLength, message: message },
          maxLength: { value: maxLength, message: message },
        })}
        type={type}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        disabled={disabled}
        onKeyUp={onKeyUp}
        className={`w-full border border-solid  border-[#808e9b] text-md yekanBold py-3 px-1 outline-none rounded-md text-[#1e272e] ${className}`}
      />
      <p className="text-red-500 regularYekan text-xs pt-2 pr-1">{error}</p>
    </div>
  );
};

export default Input;
