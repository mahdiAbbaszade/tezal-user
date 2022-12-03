import {
  useLayoutEffect,
  useState,
  useContext,
} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import Input from "../../components/InputSL";
import { Logo } from "../../components/Logo";
//@ts-ignore
import Tel from "./../../assests/img/tel1.svg";
import "./CheckPhone.css";
import { checkphoneApi } from "../../utils/API";
import { useMutation } from "react-query";
import { checkzero } from "../../utils/helper";
import { useRecoilState } from "recoil";
import { phoneNumber } from "../../atom/atom";

export const CheckPhone = () => {
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const [phone, setPhone] = useRecoilState(phoneNumber);

  // تغیر عنوان صحفه
  useLayoutEffect(() => {
    window.document.title = "چک شماره تلفن";
  }, []);

  // api برای چک کردن شماره تلفن
  const checkphone = useMutation((data) =>
    checkphoneApi(data)
  );

  // submit فرم برای فرستادن اطلاعات به سرور
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const submitForm = (data: any) => {
    const tel = checkzero(data.tel);
    checkphone.mutate(tel, {
      onSuccess: (data) => {
        if (
          data.data.codeSystemAction === "EXIST" &&
          data.data.resultAction === "OK"
        ) {
          navigate("/user/login");
          setPhone(tel);
        } else if (
          data.data.codeSystemAction ===
            "ERROR_IN_RECEIVED_DATA" &&
          data.data.resultAction === "ERROR"
        ) {
          setError("شماره تلفن صحیح نیست");
        } else if (
          data.data.codeSystemAction === "ERROR_IN_QUERY" &&
          data.data.resultAction === "ERROR"
        ) {
          setError("مشکلی ‍‍پیش امده است");
        } else if (
          data.data.codeSystemAction === "NOT_FOUND" &&
          data.data.resultAction === "OK"
        ) {
          setError("کاربری با این شماره تلفن وجود ندارد");
        } else {
          setError("مشکلی ‍‍پیش امده است");
        }
      },
      onError: (err) => {
        setError("مشکلی پیش امده است");
      },
    });
  };
  return (
    <>
      <div className="mt-20">
        {/* لوگو */}
        <Logo />
        {/* فرم  */}
        <div className="container-signup-login mt-4">
          <form
            onSubmit={handleSubmit(submitForm)}
            className="w-full md:w-8/8 lg:w-12/12"
          >
            <p className="yekanBold text-center text-sm cTel">
              برای ورود لطفا شماره تلفن همراه خود را وارد
              کنید
            </p>
            <Input
              label="tel"
              type="tel"
              src={Tel}
              className="bg-transparent border-login-signup-input ltr "
              register={register}
              minLength={10}
              message="شماره تلفن همراه اشتباه است"
              maxLength={11}
              error={errors.tel && errors.tel.message}
              container="mt-20"
              onKeyDown={() => setError("")}
              required
            />

            <p className="yekanBold text-red-500 text-xs">
              {error}
            </p>

            <Button
              loading={checkphone.isLoading}
              name="بعدی"
              className="mt-8"
            />
          </form>
        </div>
      </div>

      <Outlet/>
    </>
  );
};
