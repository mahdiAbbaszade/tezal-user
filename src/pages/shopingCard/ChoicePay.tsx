import { useState } from "react";
import "./ChoicePay.css";
export const ChoicePay = () => {
  const [choice, setChoice] = useState("sadad");

  return (
    <div className="p-4 flex flex-col gap-4 mt-3 shadow-sm">
      {/* <label className="container block">
        <p
          className={`regularYekan text-xs mr-10 border border-[#808e9b]  p-4 rounded-lg ${
            choice === "saman" && "!border-[#ea2027]"
          }`}
        >
          بانک سامان
        </p>

        <input
          //@ts-ignore
          value="saman"
          checked={choice === "saman"}
          onChange={() => setChoice("saman")}
          type="radio"
          name="pay"
        />
        <span className="checkmark"></span>
      </label> */}
      <label className="container block">
        <p
          className={` regularYekan text-xs mr-10 border border-[#808e9b] p-4 rounded-lg ${
            choice === "sadad" && "!border-[#ea2027]"
          }`}
        >
         درگاه سداد
        </p>
        <input
          value="mellet"
          onChange={() => setChoice("sadad")}
          checked={choice === "sadad"}
          type="radio"
          name="pay"
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};
