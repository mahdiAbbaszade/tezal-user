import React from "react";
import { HashLoader } from "react-spinners";
import { FaieldPayment } from "../../components/FaieldPayment";
import Modal from "../../components/Modal";
import { SuccessPayment } from "../../components/SuccessPayment";
import { useNavigate } from "react-router-dom";
interface props {
  getStatusByOrderId: any;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  OrderId: string | null | undefined;
}

export const ResultPay = ({
  getStatusByOrderId,
  isOpen,
  setIsOpen,
  OrderId,
}: props) => {
  const navigate = useNavigate();
  const sadaPaymentStatus = {
    pending: "در انتظار پرداخت",
    paid: "پرداخت شده",
    unsuccess: "ناموفق",
  };

  return (
    <Modal isOpen={isOpen}>
      {getStatusByOrderId.isLoading ? (
        <div className="flex flex-col items-center h-full  justify-center">
          <HashLoader color="#0096f5" />
          <p className="pt-6 text-[#1e272e]">
            در حال استعلام...
          </p>
        </div>
      ) : getStatusByOrderId.isSuccess ? (
        getStatusByOrderId.data?.data.Status ===
        sadaPaymentStatus.paid ? (
          <SuccessPayment
            OrderId={OrderId}
            onClick={() => {
              navigate("/user/shops");
              setIsOpen(!isOpen);
            }}
          />
        ) : getStatusByOrderId.data?.data.Status ===
            sadaPaymentStatus.pending ||
          getStatusByOrderId.data?.data.Status ===
            sadaPaymentStatus.unsuccess ? (
          <FaieldPayment
            OrderId={OrderId}
            onClick={() => {
              navigate("/user/shops");
              setIsOpen(!isOpen);
            }}
          />
        ) : null
      ) : getStatusByOrderId.isError ? (
        <FaieldPayment
          OrderId=""
          onClick={() => {
            navigate("/user/shops");
            setIsOpen(!isOpen);
          }}
        />
      ) : null}
    </Modal>
  );
};
