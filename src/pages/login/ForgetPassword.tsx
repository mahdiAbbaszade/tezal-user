import {useContext} from "react";
import Modal from "../../components/Modal";
import ReactLoading from "react-loading";
import { BsCheckAll } from "react-icons/bs";
import { RiCloseLine } from "react-icons/ri";
import Button from "../../components/Button";

interface props {
  resetPassword: any;
  isOpen:boolean;
  close:()=>void
}
const ForgetPassword = ({ resetPassword,isOpen , close}: props) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col justify-around items-center h-full">
        {resetPassword.isLoading ? (
          // @ts-ignore
          <ReactLoading
            type="spinningBubbles"
            color="#0096f5"
            width={80}
            height={80}
          />
        ) : resetPassword.isSuccess ? (
          <>
            <div className="border rounded-full bg-[#4cd137] p-3">
              <BsCheckAll color="#fff" size={100} />
            </div>
            <div>
              <h6 className="yekanBold text-center text-md md:text-lg text-[#1e272e] ">
                نام کاربری و رمز عبور به شماره تلفن همراه شما ارسال شد
              </h6>
              <Button onClick={()=>close()} container="flex justify-center pt-8" name="متوجه شدم" />
            </div>
          </>
        ) : resetPassword.isError ? (
          <>
            <div className="border rounded-full bg-red-500 p-3">
              <RiCloseLine color="white" size={100} />
            </div>
            <div>
              <h6 className="yekanBold text-md md:text-lg text-gray-700 ">
                مشکلی رخ داده است، لطفا دوباره تلاش کنید
              </h6>
              <Button onClick={()=>close()} container="flex justify-center pt-8" name="متوجه شدم" />
            </div>
          </>
        ) : null}
      </div>
    </Modal>
  );
};

export default ForgetPassword;
