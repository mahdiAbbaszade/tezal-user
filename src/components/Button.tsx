import React from "react";
import Loading from "react-loading";

interface props {
  name: string;
  className?: string;
  loading?: boolean;
  container?: string;
  onClick?: () => void;
}

const Button = ({ name, className, loading, container, onClick }: props) => {
  return (
    <div className={`${container}`}>
      <button
        onClick={onClick}
        disabled={loading ? true : false}
        className={`shadow-md flex justify-center items-center yekanBold bg-[#0096f5] text-md text-white py-2 px-7 rounded-lg ${className}`}
      >
        {loading ? (
          // @ts-ignore
          <Loading type="spokes" color="#fff" width={19} height={19} />
        ) : (
          name
        )}
      </button>
    </div>
  );
};

export default Button;
