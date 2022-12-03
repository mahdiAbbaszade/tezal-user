import React from "react";
import ReactSelect from "react-select";
import {Controller} from "react-hook-form"
import "./Select.css"

interface props {
  placeholder: string;
  option: {
    label: string;
    value: number;
  }[];
  error: string;
  name:string,
  control:any
}
const Select = ({ placeholder, option, name,control, error }: props) => {
  const customStyles = {
    
    menu: (provided: any, state: any) => ({
      ...provided,
      fontFamily: "yekanBold",
      fontSize: "0.75rem",
      color: "#808e9b",
    }),

    placeholder: (provided: any, state: any) => ({
      ...provided,
      fontFamily: "yekanBold",
      fontSize: "0.75rem",
      color: "#808e9b",
    }),

    noOptionsMessage: (provided: any, state: any) => ({
      ...provided,
      fontFamily: "yekanBold",
      fontSize: "0.75rem",
      color: "gray",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      cursor: "pointer",
      
      "&:hover":{
        backgroundColor:"#0096f5",
        color: "#fff !import"
      }
    }),

    menuList: (base: any) => ({
      ...base,

      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
  };
  return (
    <Controller
    name={name}
    control={control}
    rules={{ required: {value:true,message:"فیلد خالی است"}}}
    render={({ field: { onChange, value, ref }}) => (
      <div>
      <p className="block yekanBold text-xs pr-1 pb-1 text-[#1e272e]">
        انتخاب شغل
      </p>
      <ReactSelect
      // @ts-ignore
      inputRef={ref}
      value={option.find((c:any) => c.value === value)}

        onChange={(val:any) => onChange(val)}
        options={option}
        styles={customStyles}
        placeholder={placeholder}
        noOptionsMessage={() => "موردی وجود ندارد"}
      />
      {error && (
        <p className="text-red-500 yekanBold text-xs pt-2 pr-1">{error}</p>
      )}
    </div>
    )}
    />
    
  );
};

export default Select;
