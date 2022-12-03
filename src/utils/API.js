import axios from "axios";

export const checkphoneApi = (data) =>
  axios.post("/SignUp/User/CheckPhone", {
    phoneNumber: data,
  });
export const loginApi = (data) =>
  axios.post("/users/NormalUsers/Login", {
    username: data.username.toLowerCase(),
    password: data.password,
  });
export const getCodeApi = (phoneNumber) =>
  axios.get(
    `SignUp/User/GetCode?phoneNumber=${phoneNumber}`
  );

export const forgetpasswordApi = (data) =>
  axios.post("user/login/ResetPassword", {
    phone: data,
  });

export const verifyCodeApi = (data, config) =>
  axios.post("/SignUp/User/CheckCode", data, config);

export const shopsListApi = ({
  LiMIT = 200,
  skip,
  idCategory,
  query,
  filterOption,
}) =>
  axios.get(
    `/Businesses/ByCity?skip=0&limit=100&status=true&city=5fbd294a12a29c460cc2df67&state=5fbd18d55f2661402bf867a7
    `
  );
// export const shopsListApi = ({
//   LiMIT = 200,
//   skip,
//   idCategory,
//   query,
//   filterOption,
// }) =>
//   axios.get(
//     `Business/BusinessAndDiscounts?skip=${skip}&limit=${LiMIT}&Group=${idCategory}&q=${query}&minDiscount=${filterOption.discount.min}&maxDiscount=${filterOption.discount.max}&minRate=${filterOption.rate.min}&maxRate=${filterOption.rate.max}&CreditMaxDuration=${filterOption.credit}
//     `
//   );
export const getLoansAndDiscountsApi = ({ id }) =>
  axios.get(
    `Business/User/GetDetail?businessId=${id}&ShowLoansAdnDiscounts=true`
  );

export const loanGetByIdApi = ({ id }) =>
  axios.get(`loans/${id}`);
export const BusinessCategoriesApi = () =>
  axios.get(`/Groups`);
export const CreditRequestApi = ({ data }) =>
  axios.post(`/CreditRequest/Add_V3`, data);
export const getCreditRequestApi = ({
  skip = 0,
  limit = 100,
  query,
}) =>
  axios.get(
    `CreditRequest/getMyCreditRequest?skip=0&limit=100&q=${query}`
  );
export const myTransactionsApi = ({
  skip = 0,
  limit = 100,
  query,
}) =>
  axios.get(
    `Transactions/users/myTransactions?skip=0&limit=100&q=${query}`
  );
export const RequestPaymentApi = ({
  Amount,
  discount,
  ToBusiness,
}) =>
  axios.get(
    `RequestPayment?ToBusiness=${ToBusiness}&Amount=${
      Amount * 10
    }&discount=${discount}`
  );
export const getStatusByOrderIdApi = ({ id }) =>
  axios.get(`payments/${id}`);

export const getMyWalletApi = () =>
  axios.get(`Transactions/users/MyWallet`);
export const getMyNotificationsApi = () =>
  axios.get(
    `Notifications/users/myNotifications?skip=0&limit=100`
  );


export const get_Loan_Business = (id) => axios.get(`loans/public/business/${id}`)