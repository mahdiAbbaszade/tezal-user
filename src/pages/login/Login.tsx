import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/InputSL";
import { Logo } from "../../components/Logo";
//@ts-ignore
import Tel from "./../../assests/img/tel1.svg";
//@ts-ignore
import Lock from "./../../assests/img/lock.svg";
import { useMutation } from "react-query";
import "./Login.css";
import ForgetPassword from "./ForgetPassword";
import {
  forgetpasswordApi,
  loginApi,
} from "./../../utils/API";
import { useModal } from "../../customHook/useModal";
import { useGetCodeSms } from "../../customHook/useGetCodeSms";
import { phoneNumber } from "../../atom/atom";
import { useRecoilValue } from "recoil";
import { focusInputContext } from "../../contexts/FocusInput";

export const Login = () => {
  const [error, setError] = useState<string>("");
  const [dataLogin, setDataLogin] = useState();
  const phone = useRecoilValue(phoneNumber);
  const { focus } = useContext(focusInputContext);

  const { isOpen, handleToggleModal } = useModal();
  const { getCode } = useGetCodeSms({
    dataLogin,
    setError,
  });
  const navigate = useNavigate();
  useEffect(() => {
    window.document.title = "ورود کاربر";
    if (phone === "") {
      navigate("/user");
    }
  }, []);
  // reset password mutate
  const resetPassord = useMutation(() =>
    forgetpasswordApi(phone)
  );

  // click forget password button
  const forgetPassword = async () => {
    await handleToggleModal();
    await resetPassord.mutate();
  };

  // mutate form login
  const loginSubmitMutate = useMutation(
    (data: any) => loginApi(data),
    {
      onSuccess: async (data) => {
        await setDataLogin(data.data);
        getCode.refetch();
      },
      onError: (err: any) => {
        if (err.response.status === 401)
          return setError(err.response.data);
        if (err.response.status === 403)
          return setError("حساب کاربری شما فعال نمی باشد");
        if (err.response.status === 500)
          return setError("ارور سرور");
      },
    }
  );

  // form control && validate
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // submit form login
  const submitLogin = async (data: any) => {
    await setError("");
    loginSubmitMutate.mutate({
      username: data.username,
      password: data.password,
    });
  };

  return (
    <>
      <div className="container-login">
        <div className="mt-10">
          <Logo />
          <div className="container-signup-login mt-10">
            <form
              onSubmit={handleSubmit(submitLogin)}
              className="w-full md:w-8/12 lg:w-6/12"
            >
              <Text />
              <Input
                label="username"
                type="text"
                src={Tel}
                className="bg-transparent border-login-signup-input ltr"
                register={register}
                error={
                  errors.username && errors.username.message
                }
                container="mt-10"
                onKeyDown={() => setError("")}
                required
              />
              <Input
                label="password"
                type="password"
                src={Lock}
                className="bg-transparent border-login-signup-input ltr"
                register={register}
                error={
                  errors.password && errors.password.message
                }
                container="mt-10"
                classImg="w-4"
                onKeyDown={() => setError("")}
                required
              />

              <p className="yekanBold text-red-500 text-xs">
                {error}
              </p>

              <Button
                loading={
                  loginSubmitMutate.isLoading ||
                  getCode.isLoading
                }
                name="بعدی"
                className="mt-8"
              />
            </form>
          </div>
        </div>
        <p
          onClick={() => forgetPassword()}
          className={`${
            focus
              ? "hidden"
              : "text-center w-fit  mx-auto yekanBold text-sm text-[#0096f5] cursor-pointer"
          }`}
        >
          فراموش کردن رمز عبور
        </p>
      </div>
      <ForgetPassword
        close={handleToggleModal}
        isOpen={isOpen}
        resetPassword={resetPassord}
      />
    </>
  );
};

const Text = () => {
  return (
    <>
      <p className="extraBold text-right text-lg cTel">
        ورود به حساب کاربری
      </p>
      <p className="yekanBold text-right text-sm cTel pt-2">
        برای ورود نام کاربری و رمز عبور خو را وارد کنید
      </p>
    </>
  );
};
