import "./FormRequestLoan.css";
import { optionJobs } from "./data";
import VerifyEvidenceJob from "./VerifyEvidenceJob";
import { useForm } from "react-hook-form";
import TypeLoan from "./TypeLoan";
import { BsArrowLeftShort } from "react-icons/bs";
import Select from "../../components/Select";
import CheckBox from "../../components/CheckBox";
import { setRecoil, getRecoil } from "recoil-nexus";
import {
  loanInfoRequestKey,
  stepsRequestLoan,
} from "../../atom/atom";
import { HiOutlineArrowRight } from "react-icons/hi";

const FormRequestLoan = () => {
  const infoLoan = getRecoil(loanInfoRequestKey);
  const {
    formState: { errors },
    register,
    handleSubmit,
    control,
  } = useForm();
  const submitform = async (e: any) => {
    await setRecoil(loanInfoRequestKey, {
      infoLoan,
      formData: e,
    });
    setRecoil(stepsRequestLoan, 3);
  };

  return (

      <form className="flex flex-col justify-between h-[96%]" onSubmit={handleSubmit(submitform)}>
        <div className="made-up mt-10 ">
          <Select
            name="job"
            control={control}
            option={optionJobs}
            placeholder="لطفا شغل متقاضی را مشخص کنید"
            error={errors.job && errors.job.message}
          />
          <VerifyEvidenceJob control={control} />

          <TypeLoan
            labelCount="count"
            error={errors.name && errors.name.message}
            label="name"
            register={register}
            required
          />

          <CheckBox
            control={control}
            label="شماره همراه حتما به نام فرد متقاضی می باشد"
            name="verifyPhone"
          />
          <CheckBox
            control={control}
            label="داری ضامن می باشد"
            name="verifyGuarantor"
          />
        </div>
        <div className="flex items-center px-4 justify-between">
          <button
            onClick={() => setRecoil(stepsRequestLoan, 1)}
            className="flex justify-center items-center gap-1 yekanBold border-2 text-[#808e9b] py-2 w-32 rounded-lg border-[#808e9b]"
          >
            <HiOutlineArrowRight className="" size={17} />
            <span>بازگشت</span>
          </button>
          <button
            className="shadow-md w-32 py-2 text-white bg-[#0096f5] flex justify-center items-center yekanBold bg text-md  px-4 rounded-lg "
            type="submit"
          >
            بعدی
            <BsArrowLeftShort size={30} />
          </button>
        </div>
      </form>

  );
};

export default FormRequestLoan;
