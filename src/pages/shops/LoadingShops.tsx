import React from "react";
import Skeleton, {
  SkeletonTheme,
} from "react-loading-skeleton";

export const LoadingShops = () => {
  return (
    <SkeletonTheme
      baseColor="#f1f2f6"
      highlightColor="#dcdde1"
    >
      <div
        className={`pt-2 pb-3 mt-3 flex flex-col gap-2 bg-white rounded-2xl shadow-lg card_shops`}
      >
        {/* card img name off */}
        <div className="flex justify-between px-2 items-center  ">
          <div className="flex  items-center gap-2">
            <Skeleton
              count={1}
              width="6rem"
              height="4.5rem"
            />

            <div className="flex flex-col mr-3">
              <p className=" nameJob">
                <Skeleton
                  count={1}
                  width="7rem"
                  height="1.2rem"
                />
              </p>
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <Skeleton count={1} width="2rem" />
                  <span>
                    <Skeleton count={1} />
                  </span>
                </div>
                <p></p>
                <div className="flex  items-center container_rate_start">
                  <Skeleton count={1} width="2rem" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p>
              <span className="text-xl ">
                <Skeleton count={1} width="2rem" />
              </span>
            </p>
          </div>
        </div>

        {/* border */}
        <p className="border-b-[1.5px] py-1 opacity-30 border-separate border-dashed border-[#808e9b]"></p>
        <div className="flex items-center justify-between px-2 mt-2 ">
          <p className="pr-5 loans_from_to">
            <Skeleton
              count={1}
              width="7rem"
              height="1.2rem"
            />
          </p>
          <div>
            <p className=" flex items-center relative">
              <Skeleton
                count={1}
                width="7rem"
                height="1.2rem"
              />
            </p>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};
