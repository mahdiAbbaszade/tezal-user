import { useState } from "react";
import { HiOutlineArrowRight } from "react-icons/hi";

import { setRecoil } from "recoil-nexus";
import {
  loanInfoRequestKey,
  stepsRequestLoan,
} from "../../atom/atom";
import "./StepsThree.css";
import { TremPishkhanRequestLoan } from "./TremPishkhanRequestLoan";
import { useRecoilValue } from "recoil";
export const StepsThree = () => {
  const [
    doNextLevelRequsetLoan,
    setDoNextLevelRequsetLoan,
  ] = useState("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const info = useRecoilValue(loanInfoRequestKey);

  const handleOnchange = (e: any) => {
    const { value } = e.target;

    setDoNextLevelRequsetLoan(value);
    if (value === "پیشخوان") {
      setIsOpen(!isOpen);
    }
  };

  const nextSteps = async () => {
    if (!doNextLevelRequsetLoan) return null;
    await setRecoil(loanInfoRequestKey, {
      ...info,
      validationMethod: doNextLevelRequsetLoan,
    });
    setRecoil(stepsRequestLoan, 4);
  };
  return (
    <>
      <div className="grid grid-cols-1 px-3 gap-4 h-[85vh] justify-between">
        <table className="rounded-lg w-full table-info-requestLoan mt-24 ">
          <tbody>
            <tr>
              <th>اعتبار درخواستی:</th>
              <td className="!text-[#0096f5]">
                {info.infoLoan.money} تومان
              </td>
            </tr>

            <tr>
              <th>نام کالا یا خدمات</th>
              <td>{info.formData.name}</td>
            </tr>

            <tr>
              <th>تعداد کالا:</th>
              <td>1 عدد</td>
            </tr>
          </tbody>
        </table>
        <div className="flex flex-col gap-4">
          <p className="text-sm yekanBold text-[#1e272e]">
            انجام مراحل بعدی توسط چه کسی خواهد بود ؟
          </p>
          <div className="flex items-center gap-3">
            {info.infoLoan.loanInfo.CanDoByMySelf && (
              <div className="flex items-center gap-1 text-sm yekanBold">
                <input
                  value="خودم"
                  onChange={handleOnchange}
                  checked={
                    doNextLevelRequsetLoan === "خودم"
                  }
                  type="radio"
                  name="info"
                />{" "}
                <span>خود متقاضی</span>
              </div>
            )}
            {info.infoLoan.loanInfo
              .MustGoToGovernmentOffices && (
              <div className="flex items-center gap-1 text-sm yekanBold">
                <input
                  value="پیشخوان"
                  onChange={handleOnchange}
                  checked={
                    doNextLevelRequsetLoan === "پیشخوان"
                  }
                  type="radio"
                  name="info"
                />{" "}
                <span>پیشخوان</span>
              </div>
            )}
          </div>
        </div>
        {/* next and back button */}
        <div className="flex justify-between items-center  px-3 mb-2">
          <button
            onClick={() => setRecoil(stepsRequestLoan, 2)}
            className="flex justify-center items-center gap-1 yekanBold border-2 text-[#808e9b] py-2 w-32 rounded-lg border-[$1e272e]"
          >
            <HiOutlineArrowRight className="" size={17} />
            <span>بازگشت</span>
          </button>
          <button
            onClick={() => nextSteps()}
            className="bg-[#0096f5] py-2 px-4 rounded-lg yekanBold text-white w-32"
          >
            تائید
          </button>
        </div>
      </div>
      <TremPishkhanRequestLoan
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};
