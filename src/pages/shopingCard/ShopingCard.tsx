import { useContext, useState } from "react";
import { SummaryItemInfo } from "../../components/SummaryItemInfo";
import { focusInputContext } from "../../contexts/FocusInput";
import { ChoicePay } from "./ChoicePay";
import { Orders } from "./Orders";
import { useNavigate, useLocation } from "react-router-dom";
import {
  convertF,
  addCommas,
  removeNonNumeric,
} from "../../utils/helper";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { TypeinfoShopData } from "../../type";
import { getLoansAndDiscountsKey } from "../../atom/atom";
import { RequestPaymentApi } from "../../utils/API";
import { ModalTransformUrlPayment } from "./ModalTransformUrlPayment";
export const ShopingCard = () => {
  const { focus } = useContext(focusInputContext);
  const [isOpen, setIsOpen] = useState(false);

  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation() as any;
  const infoPay = location.state.infoPay;
  const infoShopData = useRecoilValue<TypeinfoShopData>(
    getLoansAndDiscountsKey
  );
  const handleoOnChange = (e: any) => {
    if (removeNonNumeric(e.target.value) > 50000000) return;
    setAmount(addCommas(removeNonNumeric(e.target.value)));
  };

  const RequestUrlPayment = useQuery(
    [
      "RequestPaymentApi",
      infoShopData._id,
      infoPay._id,
      amount,
    ],
    () =>
      RequestPaymentApi({
        Amount: removeNonNumeric(amount),
        ToBusiness: infoShopData._id,
        discount: infoPay._id,
      }),
    {
      enabled: false,
      retry:2,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 1,
      onSuccess: (data) => {
        window.location.href = data.data.url;
      },
    }
  );

  const submitForm = async (e: any) => {
    e.preventDefault();
    if (!amount)
      return setError("مبلغ پرداختی را وارد کنید");

    await setIsOpen(!isOpen);
    RequestUrlPayment.refetch();
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <div
          className={`flex flex-col justify-between  ${
            focus ? "h-[154vh]" : "h-[91vh]"
          }`}
        >
          {/* input */}

          <div className="px-4">
            <div className="flex h-12 mt-10 justify-center items-center ">
              <input
                type="text"
                placeholder="مبلغ مورد نظر خود را وارد کنید"
                className="yekanBold px-2 text-md outline-none text-[#1e272e] placeholder:regularYekan placeholder:text-xs placeholder:text-[#808e9b] h-full flex-1 rounded-tr-lg rounded-br-lg"
                value={amount}
                onChange={handleoOnChange}
                onKeyDown={() => setError("")}
              />
              <p className="flex items-center rounded-tl-lg rounded-bl-lg bg-[#0096f5] h-full  text-center !text-[#fefefe] yekanBold px-2">
                تومان
              </p>
            </div>
            <p className="text-[#ea2027] text-xs pt-1 pr-1">
              {error}
            </p>
          </div>

          {/* Summary shop */}
          <div className=" shadow-sm bg-[#fefefe] py-4">
            <div className="flex flex-col gap-5">
              <SummaryItemInfo
                className="text-gray-500"
                name="ارزش واقعی"
                value={`${convertF(amount)} تومان`}
              />
              <SummaryItemInfo
                className="text-red-500 border-b border-dashed pb-3"
                name="میزان تخفیف"
                value={
                  isNaN(parseInt(amount))
                    ? `${convertF("0")}`
                    : `${convertF(
                        (infoPay.DiscountFromSEBToCustomers /
                          100) *
                          parseFloat(
                            removeNonNumeric(amount)
                          )
                      )} `
                }
              />
              <SummaryItemInfo
                className="text-gray-500  pb-3"
                name="مبلغ قابل پرداخت"
                value={`${convertF(amount)} تومان`}
                valueClass="text-green-500"
              />
            </div>
          </div>
          {/* choice pay */}
          <div className="">
            <p className="regularYekan px-4 text-[#1e272e] text-sm">
              انتخاب نحوه‌ی پرداخت
            </p>
            <div className="bg-[#fefefe]">
              <ChoicePay />
            </div>
          </div>

          {/* orders */}
          <Orders infoPay={infoPay} amount={amount} />

          {/* button */}
          <div className="px-4 mb-2 flex justify-between">
            <button
              onClick={() => navigate(-1)}
              type="button"
              className="!bg-[#0096f5] py-3 regularYekan rounded-md text-[#fefefe] w-32"
            >
              بازگشت
            </button>
            <button
              type="submit"
              className="!bg-[#4cd137] py-3 regularYekan rounded-md text-[#fefefe] w-32"
            >
              پرداخت
            </button>
          </div>
        </div>
      </form>

      <ModalTransformUrlPayment
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        RequestUrlPayment={RequestUrlPayment}
      />
    </>
  );
};
