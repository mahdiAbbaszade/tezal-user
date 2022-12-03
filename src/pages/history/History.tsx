import React, {
  useContext,
  useState,
  useTransition,
} from "react";
import {
  CardCasheHistory,
  CardCreiditHistory,
} from "../../components/CardHistory";
import { Header } from "../../components/Header";
import { focusInputContext } from "../../contexts/FocusInput";
import "./History.css";
import { Tab, TabList, Tabs, TabPanel } from "react-tabs";
import { useQuery } from "react-query";
import {
  getCreditRequestApi,
  myTransactionsApi,
} from "../../utils/API";
import { Loading } from "../../components/Loading";

export const History = () => {
  const { focus } = useContext(focusInputContext);
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState("");
  const [myTransactionsAvtive, setMyTransactionsActive] =
    useState(true);

  const [creditRequestQuery, setCreditRequestQuery] =
    useState("");

  const toggle = (i: any) => {
    if (selected === i) {
      // @ts-ignore
      return setSelected(null);
    }
    setSelected(i);
  };

  const myTransactions = useQuery(
    ["myTransactions", search],
    () =>
      myTransactionsApi({
        limit: 100,
        skip: 0,
        query: search,
      }),
    {
      retry: 2,
      enabled: true,
      cacheTime: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const getCreditRequest = useQuery(
    ["getCreditRequest", creditRequestQuery],
    () =>
      getCreditRequestApi({
        limit: 100,
        skip: 0,
        query: creditRequestQuery,
      }),
    {
      retry: 2,
      enabled: false,
      cacheTime: 1,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    }
  );

  const handleSearchChange = async (e: any) => {
    await setSearch(e.target.value);
    myTransactions.refetch();
  };
  const creaditRequestChange = async (e: any) => {
    await setCreditRequestQuery(e.target.value);
    getCreditRequest.refetch();
  };

  return (
    <Tabs defaultIndex={0} className="history">
      <div className="container_header_history sticky bg-[#f2f2f2] left-0  top-0 w-full  ">
        {myTransactionsAvtive ? (
          <Header
            isShowSearch
            value={search}
            onChange={handleSearchChange}
          />
        ) : (
          <Header
            isShowSearch
            value={creditRequestQuery}
            onChange={creaditRequestChange}
          />
        )}

        <TabList className="flex gap-2  pb-4 px-4">
          <Tab
            tabIndex="0"
            onClick={async () => {
              await setMyTransactionsActive(true);
              myTransactions.refetch();
            }}
            className="yekanBold py-2 px-4 text-[#80839b] text-sm border-[0.08rem] border-[#80839b] rounded-md"
          >
            سابقه نقدی
          </Tab>

          <Tab
            tabIndex="1"
            onClick={async () => {
              await setMyTransactionsActive(false);
              getCreditRequest.refetch();
            }}
            className="yekanBold p-2 px-4 text-[#80839b] text-sm border-[0.08rem] border-[#80839b] rounded-md"
          >
            سابقه‌ی اعتباری
          </Tab>
        </TabList>
      </div>

      <div className="container_history_card overflow-auto mx-4">
        <TabPanel tabIndex={0}>
          {myTransactions.isLoading ? (
            <Loading />
          ) : myTransactions.isSuccess ? (
            <div>
              {myTransactions.data?.data.MyTransactions
                .Transactions.length === 0 ? (
                <p className="text-center text-[#1e272e]">
                  سابقه‌ای یافت نشد
                </p>
              ) : (
                <div className="flex flex-col mb-[7.3rem] gap-3">
                  {myTransactions.data?.data.MyTransactions.Transactions.map(
                    (item: any, index: any) => {
                      return (
                        <CardCasheHistory
                          key={index}
                          AmountAfterCommissiondeficit={
                            item.referenceTransactions
                          }
                          BusinessName={item.BusinessName}
                          CreatedAt={item.CreatedAt}
                          Mablag={item.Mablag}
                          TrackCode={item.TrackCode}
                          typeOfTrans={item.typeOfTrans}
                          selected={selected === index}
                          toggle={() => toggle(index)}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </div>
          ) : myTransactions.isError ? (
            "مشکل سابقه نقدی"
          ) : null}
        </TabPanel>

        <TabPanel tabIndex={1}>
          {getCreditRequest.isLoading ? (
            <Loading />
          ) : getCreditRequest.isSuccess ? (
            <div>
              {getCreditRequest.data.data.myCreditRequest
                .length === 0 ? (
                <p className="text-center text-[#1e272e]">
                  سابقه‌ای یافت نشد
                </p>
              ) : (
                <div  className="flex flex-col gap-3 mb-[7.2rem]">
                  {getCreditRequest.data.data.myCreditRequest.map(
                    (item: any, index: any) => {
                      return (
                        <CardCreiditHistory
                          Duration={item.LoanType.Duration}
                          key={index}
                          AmountToPay={item.AmountToPay}
                          Code={item.Code}
                          CreatedAt={item.CreatedAt}
                          NameJob={item.NameJob}
                          RemainedAmountAfterCommissiondeficit={
                            item.RemainedAmountAfterCommissiondeficit
                          }
                          RequestLOANAmount={
                            item.RequestLOANAmount
                          }
                          Status={item.Status}
                          selected={selected === index}
                          toggle={() => toggle(index)}
                        />
                      );
                    }
                  )}
                </div>
              )}
            </div>
          ) : getCreditRequest.isError ? (
            "مشکل سابقه ی اعتبار"
          ) : null}
        </TabPanel>
      </div>
    </Tabs>
  );
};
