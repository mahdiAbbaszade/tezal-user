import React from "react";
import "./RadioButtonFilterShops.css";

interface props {
  label: string;
  htmlFor: string;
  name: string;
  value: string;
  onChange: (value: any) => void;
  checked?: boolean;
}
export const RadioButtonFilterShops = ({
  htmlFor,
  label,
  name,
  value,
  onChange,
  checked
}: props) => {
  return (
    <>
      <input
        type="radio"
        id={htmlFor}
        name={name}
        value={value}
        onChange={onChange}
        // @ts-ignore
        checked={checked}
      />
      <label htmlFor={htmlFor}>{label}</label>
    </>
  );
};
