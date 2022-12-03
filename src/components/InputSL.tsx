import React from "react";
import { UseFormReturn } from "react-hook-form";

interface props {
  className: string;
  src: string;
  type: string;
  label: string;
  register: UseFormReturn["register"];
  required: boolean;
  minLength?: number | any;
  error: any;
  maxLength?: number | any;
  container: string;
  message?: string | any;
  classImg?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  onKeyDown?: () => void;
}
const InputSL = ({
  className,
  src,
  type,
  register,
  required,
  label,
  minLength,
  error,
  maxLength,
  container,
  message,
  classImg,
  autoComplete,
  autoFocus,
  onKeyDown,
}: props) => {
  return (
    <>
      <div className={`relative ${container}`}>
        <img
          className={`absolute bottom-2 ${classImg}`}
          src={src}
          alt="icon"
        />
        <input
          onKeyDown={onKeyDown}
          {...register(label, {
            required: {
              value: required,
              message: "فیلد خالی است",
            },
            minLength: {
              value: minLength,
              message: message,
            },
            maxLength: {
              value: maxLength,
              message: message,
            },
          })}
          type={type}
          className={`w-full outline-none yekanBold text-[#1e272e] ${className}`}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
        />
      </div>
      <p className="text-red-500 yekanBold text-xs pt-2">
        {error}
      </p>
    </>
  );
};

export default InputSL;
