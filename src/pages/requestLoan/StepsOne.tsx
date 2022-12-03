import React, { useContext, useState } from "react";
import { SummaryItemInfo } from "../../components/SummaryItemInfo";
import { focusInputContext } from "../../contexts/FocusInput";
import { useLocation } from "react-router-dom";
import { setRecoil } from "recoil-nexus";
import { useRecoilState } from "recoil";
import {
  loanInfoRequestKey,
  stepsRequestLoan,
} from "../../atom/atom";
import {
  InstallmentMonths,
  firstInstallmentActive,
  firstInstallmentInActive,
  precentAmount,
  prepaymentAmount,
} from "./data";
import { useQuery } from "react-query";
import { loanGetByIdApi } from "../../utils/API";
import {
  addCommas,
  removeNonNumeric,
} from "../../utils/helper";
export const StepsOne = () => {
  const [error, setError] = useState("");
  const [info, setInfo] = useRecoilState(
    loanInfoRequestKey
  );
  const location = useLocation() as any;
  const id = location.state.id;

  const getLoanById = useQuery(
    ["loanGetById", id],
    () => loanGetByIdApi({ id }),
    {
      cacheTime: 1,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setInfo({ loanInfo: data.data });
      },
    }
  );
  const [valueInput, setValueInput] = useState("");

  const onChangeInput = (e: any) => {
    if (removeNonNumeric(e.target.value) > 100000000)
      return;
    setValueInput(
      addCommas(removeNonNumeric(e.target.value))
    );
  };

  const nextSteps = async () => {
    if (!valueInput) {
      setError("لطفا مبلغ درخواستی را وارد کنید");
    } else {
      await setRecoil(loanInfoRequestKey, {
        ...info,
        money: valueInput,
      });
      setRecoil(stepsRequestLoan, 2);
    }
  };

  return (
    <>
      {getLoanById.isSuccess && (
        <div
          className={` flex flex-col h-full justify-between`}
        >
          <div>
            {/* info loan   and insert money */}
            <h1 className="text-center ExtraBold text-[#1e272e] text-xl ">
              {info.loanInfo.Title}
            </h1>
            <div className="flex h-12 justify-center items-center px-4 mt-10">
              <input
                value={valueInput}
                onChange={onChangeInput}
                type="text"
                placeholder="مبلغ درخواستی وام را وارد کنید"
                className="yekanBold px-2 text-sm outline-none text-[#1e272e] placeholder:text-[#808e9b] h-full flex-1 border border-[#808e9b] rounded-tr-lg rounded-br-lg"
              />
              <p className="flex items-center rounded-tl-lg rounded-bl-lg bg-[#0096f5] h-full  text-center !text-[#fefefe] yekanBold px-2">
                تومان
              </p>
            </div>
            <p className="px-4 text-xs text-[#ea2027] pt-1">
              {error}
            </p>
          </div>

          {/* precent */}
          <div className="flex flex-col gap-4 bg-white py-4">
            <SummaryItemInfo
              className="text-[#0096f5]"
              name="مدت زمان باز پرداخت وام"
              value={`${info.loanInfo.Duration} ماهه`}
              nameClass="ExtraBold text-[#0096f5]"
              valueClass="text-[#0096f5]"
            />
            <div className="border-b-[1.5px] border-dashed"></div>
            <SummaryItemInfo
              className="text-[#1e272e]"
              name="قسط اول"
              value={`${
                info.loanInfo.FirstInstalment.isActive
                  ? firstInstallmentActive({
                      valueInput:
                        removeNonNumeric(valueInput),
                      loan: info.loanInfo,
                    })
                  : firstInstallmentInActive({
                      valueInput:
                        removeNonNumeric(valueInput),
                      loan: info.loanInfo,
                    })
              } تومان`}
              nameClass="ExtraBold text-[#1e272e]"
            />
            <SummaryItemInfo
              className="text-[#1e272e] "
              name="اقساط ماهانه"
              value={`${InstallmentMonths({
                loan: info.loanInfo,
                valueInput: removeNonNumeric(valueInput),
              })} تومان`}
              nameClass="ExtraBold text-[#1e272e]"
            />
            <div className="border-b-[1.5px] border-dashed"></div>
            <SummaryItemInfo
              className="text-[#1e272e] "
              name="طرح فروش اقساطی"
              value={`${precentAmount({
                loan: info.loanInfo,
              })}%`}
              nameClass="ExtraBold text-[#1e272e]"
            />
            <SummaryItemInfo
              className="text-[#4cd137]"
              name="مبلغ پیش پرداخت"
              value={`${prepaymentAmount({
                loan: info.loanInfo,
                valueInput: removeNonNumeric(valueInput),
              })} تومان`}
              nameClass="ExtraBold text-[#4cd137]"
            />
          </div>
          <p className="text-xs text-justify px-3 yekanBold text-[#80839b]">
            توضیحات:{" "}
            <span className=" ">
              {info.loanInfo.Description}
            </span>
          </p>
          {/* next and back button */}
          <div className="flex justify-end items-center  px-5 pb-5">
            <button
              onClick={() => nextSteps()}
              className="bg-[#0096f5] py-2 px-4 rounded-lg yekanBold text-white w-32"
            >
              بعدی
            </button>
          </div>
        </div>
      )}
    </>
  );
};
