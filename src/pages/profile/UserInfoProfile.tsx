import React from "react";
import { BiUserPin } from "react-icons/bi";
import { FiEdit3, FiPhoneCall } from "react-icons/fi";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { loginInfoState } from "../../atom/atom";
import { getMyWalletApi } from "../../utils/API";
import { digitsEnToFa } from "@persian-tools/persian-tools";
export const UserInfoProfile = () => {
  const { phone, username } =
    useRecoilValue(loginInfoState);

  const getMyWallet = useQuery(
    ["getMyWallet"],
    () => getMyWalletApi(),
    {
      retry: 10,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 1,
    }
  );

  return (
    <div className="sticky z-50 -bottom-23 mt-6 w-full px-4  ">
      <div className="rounded-xl pb-[0.15rem] bg-[#fefefe] card_info_profile">
        <div className="mx-6 text-[#808e9b] space-y-6 text-sm pt-4">
          <div className="flex justify-between items-center ">
            <p className="">نام کاربر</p>

            <p className="flex-1 pr-11 username_profile">
              {username}
            </p>

            <BiUserPin size={26} className="" />
          </div>
          <div className="flex justify-between items-center ">
            <p className="">شماره همراه</p>

            <p className="flex-1 pr-[1.2rem]">{phone}</p>

            <FiPhoneCall size={23} className="" />
          </div>
        </div>
        <div className="flex justify-center mt-3 ">
          <button className="flex justify-center p-2 px-4 rounded-lg items-center gap-2 bg-[#0096f5] text-white">
            تکمیل یا ویرایش پروفایل
            <FiEdit3 size={23} />
          </button>
        </div>

        <div className="px-[0.15rem]">
          <button className="flex justify-center w-full py-3 mt-4 rounded-b-xl items-center gap-2 bg-[#4cd137] text-white">
            <span>موجودی اعتبار قابل برداشت:</span>
            <p className="flex gap-3">
              <span>
                {getMyWallet.isSuccess &&
                  digitsEnToFa(
                    getMyWallet.data?.data.Balance
                  )}
              </span>
              <span>تومان</span>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};
