import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useRecoilValue } from "recoil";
import { getLoansAndDiscountsKey } from "../../atom/atom";
import { TypeinfoShopData } from "../../type";
import { CardTabInfoshop } from "./CardTabInfoshop";
import { useNavigate } from "react-router-dom";
import "./TabShopInfo.css";

export const TabsInfoShop = () => {
  const infoShopData = useRecoilValue<TypeinfoShopData>(
    getLoansAndDiscountsKey
  );
  const navigate = useNavigate();
  return (
    <>
      <Tabs className="pt-32 bg-white">
        <TabList className="flex gap-2 border-b pb-4 px-4">
          {infoShopData.Discounts.length > 0 && (
            <Tab className="yekanBold py-2 px-4 text-[#80839b] text-sm border-[0.08rem] border-[#80839b] rounded-md">
              خرید نقدی
            </Tab>
          )}
          {infoShopData.Loans.length > 0 && (
            <Tab className="yekanBold p-2 px-4 text-[#80839b] text-sm border-[0.08rem] border-[#80839b] rounded-md">
              خرید اعتباری
            </Tab>
          )}
        </TabList>
        {infoShopData.Discounts.length > 0 && (
          <TabPanel>
            {infoShopData.Discounts.map(
              (item: any, index) => {
                return (
                  <CardTabInfoshop
                    onClick={() => {
                   
                     navigate("/user/shops/pay",{state:{infoPay:item}})
                    }}
                    key={index}
                    name={item.Title}
                    DiscountFromSEBToCustomers={
                      item.DiscountFromSEBToCustomers
                    }
                  />
                );
              }
            )}
          </TabPanel>
        )}
        {infoShopData.Loans.length > 0 && (
          <TabPanel>
            {infoShopData.Loans.map((item: any, index) => {
              return (
                <CardTabInfoshop
                  onClick={() =>
                    navigate("/user/requestloan", {
                      state: { id: item._id },
                    })
                  }
                  key={index}
                  name={item.Title}
                  DiscountFromSEBToCustomers={
                    item.DiscountFromSEBToCustomers
                  }
                />
              );
            })}
          </TabPanel>
        )}
      </Tabs>
 
    </>
  );
};
