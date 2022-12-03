import React from "react";
import Modal from "react-modal";
import "./ListTimeOpenShop.css";
import { IoMdClose } from "react-icons/io";
import { CSSTransition } from "react-transition-group";
import { FaCompass, FaPhone } from "react-icons/fa";
import { BiMap } from "react-icons/bi";
import { useRecoilValue } from "recoil";
import { TypeinfoShopData } from "../../type";
import { getLoansAndDiscountsKey } from "../../atom/atom";
// @ts-ignore
import persianJs from "persianjs";

interface props {
  isOpen: boolean;
  closeModal: () => void;
}

export const AdressInfoShop = ({
  closeModal,
  isOpen,
}: props) => {
  const infoShopData = useRecoilValue<TypeinfoShopData>(
    getLoansAndDiscountsKey
  );
  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="dialog"
    >
      <Modal
        closeTimeoutMS={500}
        className="modalListTimeOpenShop"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          content: {
            position: "absolute",
            left: "0px",
            right: "0px",
            bottom: "0px",
            border: "hidden",
            background: "#fff",
            overflow: "auto",
            width: "100%",
            height: "450px",
            WebkitOverflowScrolling: "touch",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            outline: "none",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          },
        }}
        isOpen={isOpen}
      >
        <div>
          {/* title & close button*/}
          <div className="flex flex-row-reverse justify-center items-start">
            <p className="yekanBold text-gray-500 text-md text-center flex-1 ">
              {infoShopData.NameJob}
            </p>
            <IoMdClose
              onClick={closeModal}
              size={25}
              className="text-[#1e272e] justify-self-end  "
            />
          </div>
          {/* map */}
          <div className="w-full bg-gray-600 h-32 rounded-lg mt-10">
            <h1 className="text-white">آدرس</h1>
          </div>
          <div className="flex flex-col justify-around">
            <div className="flex gap-2 border-b pb-4 mt-4">
              <div>
                <FaCompass
                  size={20}
                  className="text-gray-600  "
                />
              </div>
              <p className="text-[#808e9b] yekanBold text-sm text-justify">
                {infoShopData.AddressJob}
              </p>
            </div>
            {/* phone */}
            <div className="flex items-baseline mt-6  justify-between ">
              <div className="flex gap-2 items-baseline">
                <FaPhone
                  size={21}
                  className="text-[#808e9b]"
                />
                <p className="text-[#808e9b] regularYekan text-lg ">
                  {persianJs(
                    infoShopData.phoneHome
                      ? infoShopData.phoneHome
                      : "0"
                  )
                    .englishNumber()
                    .toString()}
                </p>
              </div>
              <div>
                <a
                  href={`tel:${infoShopData.phoneHome}`}
                  className="regularYekan text-[#0096f5]"
                >
                  تماس
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="flex items-center py-3 rounded-md text-white bg-[#0096f5] w-full justify-center gap-3">
          <BiMap size={25} />
          <span className="text-lg regularYekan ">
            {" "}
            مسیر یابی
          </span>
        </button>
      </Modal>
    </CSSTransition>
  );
};
