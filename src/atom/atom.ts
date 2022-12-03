import { TypeinfoLoanRequest } from "./../type";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { TypeinfoShopData } from "../type";
const { persistAtom } = recoilPersist();

export const tremsOfUseInfoShop = atom({
  key: "modalTremsOfUseInfoShop",
  default: false,
});

export const listOpenTimeShops = atom({
  key: "listOpenTimeShops",
  default: false,
});
export const stepsRequestLoan = atom({
  key: "stepsRequestLoan",
  default: 1,
});

export const phoneNumber = atom({
  key: "phoneNumber",
  default: "",
});
export const toggleSidebar = atom({
  key: "toggleSidebar",
  default: false,
});

export const loginInfoState = atom({
  key: "loginInfo",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const getLoansAndDiscountsKey = atom({
  key: "getLoansAndDiscounts",
  default: {

  } as any,
});

export const loanInfoRequestKey = atom({
  key: "loanInfoRequestKey",
  default: {
    money: {},
    loanInfo: {},
    formData: {},
  } as any,
});
