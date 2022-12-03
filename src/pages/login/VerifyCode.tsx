import { useEffect, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "./../../components/Button";
import Input from "./../../components/InputSL";
import { Logo } from "./../../components/Logo";
//@ts-ignore
import Tel from "./../../assests/img/tel1.svg";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { verifyCodeApi } from "./../../utils/API";
import CountDown from "./CountDown";
import {
  loginInfoState,
  phoneNumber,
} from "../../atom/atom";
import { useRecoilValue, useRecoilState } from "recoil";

const VerifyCode = () => {
  let location = useLocation() as any;
  const dataLogin = location.state.data;
  const phone = useRecoilValue(phoneNumber);
  const [loginInfo, setLoginInfo] =
    useRecoilState(loginInfoState);

  const [error, setError] = useState("");

  const navigate = useNavigate();
  // تغیر عنوان صحفه
  useEffect(() => {
    window.document.title = "تائید  کد";
    if (location.state === null || phone === "") {
      navigate("/user");
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const config = {
    headers: {
      "x-access-token": dataLogin && dataLogin.token,
      "Content-Type": "application/json",
    },
  };
  const verifycode = useMutation(
    (data: any) => verifyCodeApi(data, config),
    {
      onSuccess: async (data) => {
        const response = data.data;

        if (
          data.data.codeSystemAction ===
          "VERIFICATION_CODE_SMS"
        ) {
          await setLoginInfo({
            token: data.data.token,
            phone: dataLogin.phoneNumber,
            username: dataLogin.username,
            userId:dataLogin.userId,
          });
          navigate("/user/shops");
        } else if (
          response.data.codeSystemAction === "NOT_CURRECT"
        ) {
          return setError("کد وارد شده اشتباه است ");
        } else if (
          response.data.codeSystemAction === "EXPIRED"
        ) {
          setError("کد منقضی شده است");
        } else if (
          response.data.codeSystemAction ===
          "TOKEN_NOT_EXIST"
        ) {
          setError("لطفا بعدا تلاش کنید");
        } else if (
          response.data.codeSystemAction === "NOT_FOUND"
        ) {
          setError("شماره یا کد صحیح نیست");
        } else {
          setError("مشکلی پیش امده است");
        }
      },
      onError: () => {
        setError("مشکل از سرور");
      },
    }
  );
  const submitForm = (data: any) => {
    const dataVerify = {
      phoneNumber: phone,
      Code: data.code,
    };
    verifycode.mutate(dataVerify);
  };
  return (
    <>
      <div className="mt-20">
        {/* لوگو */}
        <Logo />
        {/* فرم  */}
        <div className="container-signup-login mt-6">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="w-full md:w-8/12 lg:w-6/12"
          >
            <p className="yekanBold text-center text-sm cTel">
              لطفا کد ارسال شده را وارد کنید
            </p>
            <Input
              label="code"
              type="text"
              src={Tel}
              className="bg-transparent border-login-signup-input ltr"
              register={register}
              minLength={5}
              message="لطفا کد ارسالی رو واد کنید"
              maxLength={5}
              error={errors.code && errors.code.message}
              container="mt-20"
              autoComplete="one-time-code"
              onKeyDown={() => setError("")}
              autoFocus
              required
            />
            <CountDown />
            <p className="yekanBold text-red-500 text-xs">
              {error}
            </p>

            <Button
              loading={verifycode.isLoading}
              name="بعدی"
              className="mt-8"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
