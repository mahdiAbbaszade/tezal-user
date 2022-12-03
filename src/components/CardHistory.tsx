import { useState } from "react";
import SmoothCollapse from "react-smooth-collapse";
import moment from "jalali-moment";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { numberWithCommas } from "../utils/helper";
import { typeInstallmentMonths } from "../type";

interface props {
  AmountToPay: number;
  NameJob: string;
  CreatedAt: string;
  RequestLOANAmount: number;
  Status: string;
  RemainedAmountAfterCommissiondeficit: number;
  toggle: (e: any) => void;
  selected: boolean;
  Code: string;
  Duration: number;
}
export const CardCreiditHistory = ({
  selected,
  AmountToPay,
  CreatedAt,
  NameJob,
  RemainedAmountAfterCommissiondeficit,
  RequestLOANAmount,
  Status,
  toggle,
  Code,
  Duration,
}: props) => {
  const InstallmentMonths = ({
    RequestLOANAmount,
    Duration,
  }: typeInstallmentMonths) => {
    let result;
    if (Duration === 12) {
      result = Math.round(RequestLOANAmount / 11);
    } else if (Duration === 18) {
      result = Math.round(RequestLOANAmount / 16);
    }
    return digitsEnToFa(numberWithCommas(result));
  };
  return (
    <>
      <div className="bg-[#fefefe] px-3 transition-all rounded-lg duration-100 py-2  shadow-lg border border-transparent">
        <div className="space-y-2" onClick={toggle}>
          {/* text money closeed and open */}
          <div className="text-[#0096f5] regularYekan text-center">
            {selected ? (
              <p>
                مبلغ خرید:{" "}
                <span className="yekanBold">
                  {digitsEnToFa(
                    numberWithCommas(RequestLOANAmount)
                  )}{" "}
                  تومان
                </span>
              </p>
            ) : (
              <p className="flex items-center justify-center gap-2">
                <span className="text-[#808e9b]">
                  مبلغ:
                </span>{" "}
                <span className="yekanBold">
                  {digitsEnToFa(
                    numberWithCommas(RequestLOANAmount)
                  )}{" "}
                  تومان
                </span>
              </p>
            )}
          </div>
          {/* date and time */}
          <div className="flex justify-between regularYekan text-[#80839b]">
            <p className="flex items-center gap-3 text-sm">
              <span>تاریخ:</span>
              <span className="text-[#1e272e]">
                {digitsEnToFa(
                  moment(CreatedAt).format("jYYYY/jMM/jDD")
                )}
              </span>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <span>ساعت:</span>
              <span className="text-[#1e272e]">
                {digitsEnToFa(
                  moment(CreatedAt).format("HH:mm:ss")
                )}
              </span>
            </p>
          </div>
          <div
            className={`flex justify-between regularYekan text-[#80839b] ${
              selected &&
              "border-b-[1.5px] border-dashed pb-4"
            }`}
          >
            <p className="flex items-center gap-3 text-sm">
              <span
                className={`${
                  selected && "text-[#0096f5]"
                }`}
              >
                {selected ? "نوع خرید" : "نوع درخواست"}:{" "}
              </span>
              <span
                className={`${
                  selected
                    ? "text-[#0096f5]"
                    : "text-[#1e272e]"
                }`}
              >
                اعتباری
              </span>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <span>وضعیت:</span>
              <span className="text-[#ffc107]">
                {Status}
              </span>
            </p>
          </div>
        </div>
        <SmoothCollapse expanded={selected}>
          <div onClick={() => toggle}>
            <div className="space-y-2 regularYekan border-b-[1.5px] border-dashed py-2">
              <p className="text-[#808e9b] text-center  text-md">
                پیش‌پرداخت:{" "}
                <span className="text-md yekanBold text-[#4cd137]">
                  {digitsEnToFa(
                    numberWithCommas(AmountToPay)
                  )}
                </span>{" "}
                تومان
              </p>
              <p className="text-[#808e9b] text-center  text-md">
                اقساط ماهانه:{" "}
                <span className="text-md yekanBold text-[#4cd137]">
                  {InstallmentMonths({
                    Duration,
                    RequestLOANAmount,
                  })}
                </span>{" "}
                تومان
              </p>
            </div>
            <div className="text-[#808e9b] space-y-2 pt-2 regularYekan text-center text-sm">
              <p>
                <span>پذیره: </span>
                <span className="text-[#0096f5]">
                  {NameJob}
                </span>
              </p>
              <div className="flex justify-center gap-1 items-center">
                <span>مبلغ پرداخت به پذیرنده: </span>
                <p>
                  <span className="text-[.96rem] yekanBold text-[#4cd137]">
                    {digitsEnToFa(
                      numberWithCommas(
                        RemainedAmountAfterCommissiondeficit
                      )
                    )}
                  </span>
                  <span className="pr-1">تومان</span>
                </p>
              </div>
              <p>
                <span>کد پیگیری: </span>
                <span className="text-[#1e272e]">
                  {digitsEnToFa(Code)}
                </span>
              </p>
            </div>
          </div>
        </SmoothCollapse>
      </div>
    </>
  );
};

interface propsCardCasheHistory {
  Mablag: number;
  BusinessName: string;
  CreatedAt: string;
  AmountAfterCommissiondeficit?: any;
  toggle: (e: any) => void;
  selected: boolean;
  TrackCode: string;
  typeOfTrans: string;
}

export const CardCasheHistory = ({
  AmountAfterCommissiondeficit,
  BusinessName,
  CreatedAt,
  Mablag,
  TrackCode,
  typeOfTrans,
  selected,
  toggle,
}: propsCardCasheHistory) => {
  const TypeOfTransactions = {
    Payment: "پرداخت",
    SEBCommission: "درصد سب",
    BrokerPercent: "درصد کارگزاری",
    CashBack: "بازگشت وجه",
    WalletCharge: "شارژ ولت",
  };

  return (
    <div className="bg-[#fefefe] px-3 transition-all rounded-lg duration-100 py-2  shadow-lg border border-transparent">
      <div className="space-y-2" onClick={toggle}>
        {/* text money closeed and open */}
        <div className="text-[#0096f5] regularYekan text-center">
          {selected ? (
            <p>
              مبلغ خرید:{" "}
              <span className="yekanBold">
                {digitsEnToFa(numberWithCommas(Mablag))}{" "}
                تومان
              </span>
            </p>
          ) : (
            <p className="flex items-center justify-center gap-2">
              <span className="text-[#808e9b]">مبلغ:</span>{" "}
              <span className="yekanBold">
                {digitsEnToFa(numberWithCommas(Mablag))}{" "}
                تومان
              </span>
            </p>
          )}
        </div>
        {/* date and time */}
        <div className="flex justify-between regularYekan text-[#80839b]">
          <p className="flex items-center gap-3 text-sm">
            <span>تاریخ:</span>
            <span className="text-[#1e272e]">
              {digitsEnToFa(
                moment(CreatedAt).format("jYYYY/jMM/jDD")
              )}
            </span>
          </p>
          <p className="flex items-center gap-3 text-sm">
            <span>ساعت:</span>
            <span className="text-[#1e272e]">
              {digitsEnToFa(
                moment(CreatedAt).format("HH:mm:ss")
              )}
            </span>
          </p>
        </div>
        <div
          className={`flex justify-between regularYekan text-[#80839b] ${
            selected &&
            "border-b-[1.5px] border-dashed pb-4"
          }`}
        >
          <p className="flex items-center gap-3 text-sm">
            <span
              className={`${selected && "text-[#0096f5]"}`}
            >
              نوع خرید:
            </span>
            <span
              className={`${
                selected
                  ? "text-[#0096f5]"
                  : "text-[#1e272e]"
              }`}
            >
              {typeOfTrans === TypeOfTransactions.Payment
                ? "نقدی" :typeOfTrans === TypeOfTransactions.CashBack? "بازگشت‌وجه"
                : "شارژ"}
            </span>
          </p>
          <p className="flex items-center gap-3 text-sm">
            <span>تراکنش:</span>
            <span className="text-[#4cd137]">موفق</span>
          </p>
        </div>
      </div>

      <SmoothCollapse expanded={selected}>
        <div className="flex flex-col justify-center items-center gap-2 text-[.86rem] pt-2">

          {
            typeOfTrans === TypeOfTransactions.CashBack? "": 
              <div className="flex flex-col regularYekan text-[#1e272e]">
            <p className="text-[#808e9b] text-center">
              پذیرنده:
            </p>
            <p>{BusinessName}</p>
          </div>
          }
       
          {typeOfTrans === TypeOfTransactions.Payment ? (
            <div className="flex gap-1 regularYekan text-[#1e272e]">
              <p className="text-[#808e9b]">
                مبلغ سود شما از خرید:{" "}
              </p>
              <p>
                {digitsEnToFa(
                  numberWithCommas(
                    AmountAfterCommissiondeficit[0].Mablag
                  )
                )}{" "}
                تومان
              </p>
            </div>
          ) : null}

          <div className="flex gap-1 regularYekan text-[#1e272e]">
            <p className="text-[#808e9b]">کد پیگیری: </p>
            <p>{digitsEnToFa(TrackCode)}</p>
          </div>
        </div>
      </SmoothCollapse>
    </div>
  );
};
