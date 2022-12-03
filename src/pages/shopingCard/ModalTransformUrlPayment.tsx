import { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import { HashLoader } from "react-spinners";
interface props {
  RequestUrlPayment: any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const ModalTransformUrlPayment = ({
  RequestUrlPayment,
  isOpen,
  setIsOpen,
}: props) => {
  return (
    <Modal isOpen={isOpen}>
      {RequestUrlPayment.isLoading ||
      RequestUrlPayment.isSuccess ? (
        <div className="flex flex-col items-center h-full  justify-center">
          <HashLoader color="#0096f5" />
          <p className="pt-6 text-[#1e272e]">
            در حال انتقال به درگاه بانکی...
          </p>
        </div>
      ) : RequestUrlPayment.isError ? (
        <div className="flex flex-col items-center h-full justify-center">
          <div className="flex justify-center">
            <div className="o-circle c-container__circle o-circle__sign--failure">
              <div className="o-circle__sign"></div>
            </div>
          </div>

          <p className="text-center text-[#ea2027] pt-4">
            مشکلی در انتقال شما به درگاه پرداخت پیش آمده است
          </p>
          <div className="flex justify-center pt-10">
            <button
              onClick={() => setIsOpen(false)}
              type="button"
              className="!bg-[#0096f5] py-2 active:bg-[#0096f6] border border-white regularYekan rounded-md text-[#fefefe] w-32"
            >
              متوجه شدم
            </button>
          </div>
        </div>
      ) : null}
    </Modal>
  );
};
