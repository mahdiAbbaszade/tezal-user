import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { AdressInfoShop } from "../../components/infoShop/AdressInfoShop";
import { ListTimeOpenShop } from "../../components/infoShop/ListTimeOpenShop";
import { PropertyInfoShop } from "../../components/infoShop/PropertyInfoShop";
import { SlideInfoShop } from "../../components/infoShop/SlideInfoShop";
import { TabsInfoShop } from "../../components/infoShop/TabsInfoShop";
import { TermsofUse } from "../../components/infoShop/TermsofUse";
import { useModal } from "../../customHook/useModal";
import { useNavigate, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import {
  getLoansAndDiscountsApi,
  get_Loan_Business,
  RequestPaymentApi,
} from "../../utils/API";
import { useRecoilState } from "recoil";
import { getLoansAndDiscountsKey } from "../../atom/atom";
export const InfoShop = () => {
  const { isOpen, handleToggleModal } = useModal();


  const navigate = useNavigate();
  const location = useLocation() as any;
  const id = location.state.id;

  const [infoShopData, setInfoShopData] = useRecoilState(
    getLoansAndDiscountsKey
  );

  // request information shops
  const getLoansAndDiscounts = useQuery(
    ["getLoansAndDiscounts", id],
    () => get_Loan_Business( id ),
    {
      retry: 2,
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      cacheTime: 1,
      onSuccess: ( { data } ) => {
        setInfoShopData( data[0] );
      },
    }
  );

  console.log( infoShopData )
  return (
    <div>
      <div>
        <IoIosArrowRoundBack
          onClick={() => navigate( -1 )}
          size={55}
          className="absolute top-2 left-2 z-20 text-[#fff] shadow-lg rounded-full"
        />
        <div>
          {/* @ts-ignore */}

          <div className="border-2 my-2">
            <div className="px-2 py-2">
              <h1 className="bg-blue-400 p-4 text-lg">
                فروشگاه :
              </h1>
              <h4 className="bg-blue-100 text-sm p-2">{infoShopData?.Title}</h4>
              <h4 className="bg-blue-100 text-sm p-2">{infoShopData?.Description}</h4>

              <button onClick={handleToggleModal} className="px-3 py-3 text-xs bg-gray-900 text-red-500 rounded-lg mt-4 mx-auto"> محاسبه آنلاین اقساط </button>
            </div>
          </div>
        </div>

        {/* <SlideInfoShop
          handleToggleModal={handleToggleModal}
          toggleAddressInfoshop={toggleAddressInfoshop}
        /> */}
        {/* <TabsInfoShop /> */}
        {/* <PropertyInfoShop /> */}
      </div>
      <ListTimeOpenShop
        isOpen={isOpen}
        closeModal={handleToggleModal}
      />
      {/* <AdressInfoShop
        isOpen={openAddressInfoshop}
        closeModal={toggleAddressInfoshop}
      /> */}
      {/* <TermsofUse /> */}

    </div>
  );
};
