import { useState, useCallback } from "react";
import Modal from "react-modal";
import Filter from "./../../assests/img/filter_modal.svg";
import {
  filterOptionCredit,
  filterOptionDiscount,
} from "./data";
import "./FilterShops.css";
import MinAndMaxRate from "./MinAndMaxRate";
import { RadioButtonFilterShops } from "./RadioButtonFilterShops";
interface props {
  setFilterOption: any;
  filterOption: any;
  isOpenFilter: boolean;
  setIsOpenFilter: React.Dispatch<
    React.SetStateAction<boolean>
  >;
  ShopsList: any;
}
export const FilterShops = ({
  setFilterOption,
  filterOption,
  isOpenFilter,
  setIsOpenFilter,
  ShopsList,
}: props) => {
  const [isOpneRate, setIsOpenRate] = useState(false);
  const [discount, setDicount] = useState("");
  const [selected, setSelected] = useState<number | null>(
    null
  );
  const [selectedCredit, setSelectedCredit] = useState<
    number | null
  >(null);

  const [rate, setRate] = useState({
    min: "",
    max: "",
  });
  const discountEnum = {
    discount5: "discount5",
    discount15: "discount15",
  };

  const creditEnum = {
    credit6: "credit6",
    credit12: "credit12",
  };

  const handleRateOnChaange = (e: any) => {
    const { name, value } = e.target;

    setRate({
      ...rate,
      [name]: value,
    });
  };

  const handleDiscount = (item: any) => {
    if (selected === item) {
      // @ts-ignore
      setSelected(null);
      setFilterOption({
        ...filterOption,
        discount: {
          min: "",
          max: "",
        },
      });
      return;
    }
    setSelected(item);

    if (item === 0) {
      setSelected(0);
      setFilterOption({
        ...filterOption,
        discount: {
          min: 1,
          max: 5,
        },
      });
    } else if (item === 1) {
      setSelected(1);
      setFilterOption({
        ...filterOption,
        discount: {
          min: 5,
          max: 15,
        },
      });
    }
  };
  const handleCredit = (item: any) => {
    if (selectedCredit === item) {
      // @ts-ignore
      setSelectedCredit(null);
      setFilterOption({
        ...filterOption,
        credit: "",
      });
      return;
    }
    setSelectedCredit(item);

    if (item === 0) {
      setSelectedCredit(0);
      setFilterOption({
        ...filterOption,
        credit: 6,
      });
    } else if (item === 1) {
      setSelectedCredit(1);
      setFilterOption({
        ...filterOption,
        credit: 12,
      });
    }
  };

  const verifyFilterButton = async () => {
    await setFilterOption({
      ...filterOption,
      rate: {
        min: isOpneRate ? rate.min : " ",
        max: isOpneRate ? rate.max : "",
      },
    });
    await setIsOpenFilter(false);
    ShopsList.refetch();
  };

  return (
    <Modal
      isOpen={isOpenFilter}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgb(0, 0, 0, 0.5)",
          zIndex: 666,
        },
        content: {
          position: "absolute",
          top: "25%",
          left: "0px",
          right: "0px",
          bottom: "0px",
          border: "hidden",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "20px",
          outline: "none",
          height: "fit-content",
          width: "95%",
          padding: "0 ",
          margin: "0 auto",
        },
      }}
    >
      <div className="flex justify-center items-center gap-2 pt-5">
        {/* filter icon */}
        <p className="text-[#0096f5] ExtraBold text-md">
          فیلتر
        </p>
        <img src={Filter} alt="filter" />
      </div>

      {/* text */}
      <p className="text-sm ExtraBold text-[#1e272e] text-center pt-10">
        بر اساس وضعیت زیر نمایش داده شود
      </p>
      {/* filter options */}
      <div className="flex flex-wrap justify-around gap-1 gap-y-2 pt-4 border-b-[1.5px] border-dashed radio-toolbar  pb-4">
        <button
          onClick={() => setIsOpenRate(!isOpneRate)}
          className={`border-[1.5px] py-1 px-2 text-sm rounded-lg overflow-hidden border-[#0096f5]  ${
            isOpneRate
              ? "bg-[#0096f5] text-white"
              : "text-[#808e9b]"
          }`}
        >
          امتیاز
        </button>
        {filterOptionDiscount.map(
          (item: any, index: any) => {
            return (
              <button
                key={index}
                onClick={() => handleDiscount(index)}
                className={`border-[1.5px] py-1 px-2 text-sm rounded-lg overflow-hidden border-[#0096f5]  ${
                  selected === index
                    ? "bg-[#0096f5] text-white"
                    : "text-[#808e9b]"
                }`}
              >
                {item.name}
              </button>
            );
          }
        )}

        {filterOptionCredit.map((item: any, index: any) => {
          return (
            <button
              key={index}
              onClick={() => handleCredit(index)}
              className={`border-[1.5px] py-1 px-2 text-sm rounded-lg overflow-hidden border-[#0096f5]  ${
                selectedCredit === index
                  ? "bg-[#0096f5] text-white"
                  : "text-[#808e9b]"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      {isOpneRate && (
        <MinAndMaxRate
          rate={rate}
          handleRateOnChaange={handleRateOnChaange}
        />
      )}
      <div className="flex justify-center my-4">
        <button
          onClick={verifyFilterButton}
          className="bg-[#0096f5] py-1 px-4 border border-white shadow-sm text-white rounded-lg text-sm"
        >
          اعمال
        </button>
      </div>
    </Modal>
  );
};
