import { digitsEnToFa } from "@persian-tools/persian-tools";

export const checkzero = (data) => {
  if (data.startsWith("0")) {
    return data.slice(1, 11);
  }
  return data;
};
//  ایجاد ویرگول برای رقم ها
export const addCommas = (num) =>
  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

export const removeNonNumeric = (num) =>
  num.toString().replace(/[^0-9]/g, "");

export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const convertF = (x) => {
  if (x === undefined || x === null || !x)
    return digitsEnToFa("0");
 return  digitsEnToFa(numberWithCommas(x));
};
