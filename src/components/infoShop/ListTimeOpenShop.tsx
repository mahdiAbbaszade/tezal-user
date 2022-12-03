import { useState } from "react";
import "./ListTimeOpenShop.css";
import { IoMdClose } from "react-icons/io";
import { MdWatchLater } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import { useRecoilValue } from "recoil";
import { TypeinfoShopData } from "../../type";
import { getLoansAndDiscountsKey } from "../../atom/atom";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import Modal from "../Modal";

interface props {
  isOpen: boolean;
  closeModal: () => void;
}
export const ListTimeOpenShop = ( {
  isOpen,
  closeModal,

}: props ) => {
  const infoShopData = useRecoilValue(
    getLoansAndDiscountsKey
  );
  const [range, setRange] = useState<any>( "" )

  console.log( infoShopData )
  return (

    <Modal
      isOpen={isOpen}
    >
      <div className="!px-5 py-4 felx">
        {/* @ts-ignore */}
        <div className="mb-4">
        <h2 className="text-center text-lg text-red p-4 bg-blue-400">
          مدارک و شرایط برای دریافت وام
        </h2>
        <h6 className="text-sm bg-blue-200 p-4">*** {infoShopData.Assurances}</h6>
        </div>
        <div className="flex items-center border-2 mb-2 px-3">
        {/* @ts-ignore */}
        {/* <h1>{infoShopData.Title}</h1> */}
        <span className="bg-red-400 p-1 px-3"> مبلغ درخواستی وام از 0 تا 100میلیون</span>
        <input className="mr-4 w-2/3 flex-1 mx-5 border p-1 " min={0} max={10} value={range} onChange={( e ) => setRange( e.target.value )} type="range" />
        <h1 className="px-10 bg-green-600 text-lg py-4 my-1 mr-auto rounded-lg">{infoShopData.BrokerPercents && ( infoShopData?.BrokerPercents[0]?.Percent + infoShopData?.BrokerPercents[1]?.Percent ) * range}</h1>
        </div>
        <p className="bg-green-500 text-2xl text-center p-3 rounded text-white">قسط ماهانه شما  : </p>
        <p className="bg-green-300 my-3 p-3 rounded text-lg">
          مدت وام :  {infoShopData.Duration} _ ماه
        </p>
        <br />
        <div className="flex">
          <button className="flex-initial w-32 px-2 py-2 bg-blue-500 text-white rounded-lg my-2 mx-auto w-full">پرداخت</button>
        </div>
        <div className="flex">
          <button className="flex-initial w-32 px-2 py-2 bg-red-500 text-white rounded-lg my-2 mx-auto w-full" onClick={closeModal}>close</button>
        </div>
      </div>
    </Modal>
  );
};



