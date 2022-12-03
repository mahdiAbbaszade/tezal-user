import { useQuery } from "react-query";
import { getCodeApi } from "../utils/API";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {useRecoilValue} from "recoil"
import { phoneNumber } from "../atom/atom";
interface props {
  dataLogin?: any;
  sendAgain?: boolean;
  setError: React.Dispatch<React.SetStateAction<string>>;
}
export const useGetCodeSms = ({
  dataLogin,
  sendAgain = true,
  setError,
}: props) => {
  const  phone  = useRecoilValue(phoneNumber)
  const navigate = useNavigate();
  // get code
  const getCode = useQuery(["getcode", phone], () => getCodeApi(phone), {
    enabled: false,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    retry: 2,
    cacheTime: 1,
    onSuccess: async (data) => {
      const response = data.data;
      if (response.codeSystemAction === "ACTION_OK" && sendAgain) {
        await navigate("/user/verify", { state: { data: dataLogin } });
        getCode.remove();
      } else if (response.codeSystemAction === "ERROR_IN_REQUEST_TIME") {
        setError("لطفا یه دقیقه دیگر تلاش کنید");
      } else if (response.codeSystemAction === "ERROR_SEND_SMS") {
        setError("در ارسال اسم ام اس مشکلی پیش امده است");
      }
    },
    onError: (err: any) => {
      if (err.response.status === 429) {
        setError(
          "بیش از حد تلاش کرده اید ، برای دریافت کد فعالسازی لطفا یه دقیقه صبر کنید"
        );
      } else {
        setError("لطفا بعدا تلاش کنید");
      }
    },
  });
  return { getCode };
};
