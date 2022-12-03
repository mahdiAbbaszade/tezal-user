import { useContext, useState, useEffect } from "react";
import Lottie from "react-lottie";
import File from "./../../components/LottieFils.json";
import { CardShops } from "../../components/cardShops/CardShops";
import "./Shops.css";
import { focusInputContext } from "../../contexts/FocusInput";
import { Header } from "../../components/Header";
import { useQuery } from "react-query";
import {
  getStatusByOrderIdApi,
  shopsListApi,
} from "../../utils/API";
import { Outlet, useLocation } from "react-router-dom";
import { ResultPay } from "./ResultPay";
import { LoadingShops } from "./LoadingShops";
import { FilterShops } from "./FilterShops";

export const Shops = () => {
  const [skip, setSkip] = useState<number>( 0 );
  const [isOpenFilter, setIsOpenFilter] = useState( false );
  const [filterOption, setFilterOption] = useState( {
    rate: {
      min: "",
      max: "",
    },
    discount: {
      min: "",
      max: "",
    },
    credit: "",
  } );
  const [isOpen, setIsOpen] = useState( false );
  const [error, setError] = useState( "" );
  const [items, setItems] = useState( [] );
  const [search, setSearch] = useState( "" );
  const location = useLocation();
  const loadingCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  // const IdPayment = new URLSearchParams(
  //   location.search
  // ).get( "id" );
  const OrderId = new URLSearchParams( location.search ).get(
    "OrderId"
  );
  // @ts-ignore
  const idCategory = location.state
    ? // @ts-ignore
    location.state.idCategory
    : "";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: File,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // const getStatusByOrderId = useQuery(
  //   ["getStatusByOrderId", OrderId],
  //   () => getStatusByOrderIdApi( { id: OrderId } ),
  //   {
  //     retry: 2,
  //     refetchOnWindowFocus: false,
  //     cacheTime: 1,
  //     refetchOnMount: false,
  //     enabled: false,
  //   }
  // );
  // @ts-ignore
  // useEffect( () => {
  //   if ( IdPayment ) {
  //     setIsOpen( !isOpen );
  //     getStatusByOrderId.refetch();
  //   }
  // }, [] );
  // request list shops
  const ShopsList = useQuery(
    ["shopsList", skip, idCategory, search],
    () =>
      shopsListApi( {
        skip,
        idCategory,
        query: search,
        filterOption,
      } ),
    {
      retry: 0,
      refetchOnWindowFocus: false,
      refetchOnMount: true,
      enabled: true,
      keepPreviousData: true,
      onSuccess: ( data ) => {
 console.log(data.data);
        const list = data.data.Businesses.map(
          ( item: any ) => {
            return item;
          }
        );
        // @ts-ignore
        // setItems([...items, ...list]);
        setItems( list );
      },
      onError: ( data: any ) => {
        if ( data.response.status === 404 ) {
          setError( "کسب و کاری یافت نشد" );
        }
      },
    }
  );

  // useEffect( () => {
  //   if ( !IdPayment ) ShopsList.refetch();
  // }, [skip, IdPayment] );

  // const handleScroll = (event: any) => {
  //   const { scrollTop, clientHeight, scrollHeight } =
  //     event.currentTarget;

  //   if (scrollHeight - scrollTop <= clientHeight * 1.5) {
  //     if (ShopsList.isFetching) return false;

  //     setSkip((prev) => prev + 10);
  //   }
  // };

  const handleSearchChange = async ( e: any ) => {
    setSearch( e.target.value );
  };

  console.log( ShopsList )

  return (
    <>
      <div className="body_shops">
        <div className="sticky container_header_shops bg-[#f2f2f2] left-0  top-0 w-full  ">
          <Header
            isShowSearch
            value={search}
            onChange={handleSearchChange}
            onClickFilter={() =>
              setIsOpenFilter( !isOpenFilter )
            }
          />
        </div>

        {ShopsList.isLoading || ShopsList.isFetching ? (
          <div className="overflow-auto mx-4  container_shops  container_lottie_card">
            <div className="flex flex-col mb-[7rem]">
              {loadingCount.map( ( item: any, index: any ) => {
                return <LoadingShops key={index} />;
              } )}
            </div>
          </div>
        ) : ShopsList.isSuccess ? (
          //   <div className=" flex justify-center items-center ">
          //   <div className="w-full h-36 bg-gray-600 shadow-md rounded-3xl">
          //     <Lottie
          //       options={defaultOptions}
          //       width="100%"
          //     />
          //   </div>
          // </div>
          <div className="overflow-auto mx-4 container_shops container_lottie_card">
            <div className="flex flex-col mb-[7.9rem]">
              {/* @ts-ignore */}
              {items.map( ( item: any, index: any ) => (
                <CardShops
                  key={index}
                  AddressHome={item.AddressHome}
                  AddressJob={item.AddressJob}
                  id={item._id}
                  loans={item.loans}
                  NameJob={item.NameJob}
                  maxOfDiscountAmount={
                    item.maxOfDiscountAmount
                  }
                  ProfilePic={item.ProfilePic}
                />
              ) )}
            </div>
          </div>
        ) : ShopsList.isError ? (
          <p className="text-center text-sm ">{error}</p>
        ) : null}

        {/* lottie && card shop */}
      </div>
      {/* <ResultPay
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        OrderId={OrderId}
        getStatusByOrderId={getStatusByOrderId}
      /> */}

      <FilterShops
        isOpenFilter={isOpenFilter}
        setIsOpenFilter={setIsOpenFilter}
        filterOption={filterOption}
        setFilterOption={setFilterOption}
        ShopsList={ShopsList}
      />
      <Outlet />
    </>
  );
};
