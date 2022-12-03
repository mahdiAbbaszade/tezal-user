import React from "react";
import Modal from "./../../components/Modal";
import ReactLoading from "react-loading";
import { BsCheckAll } from "react-icons/bs";
import Button from "./../../components/Button";
import { RiCloseLine } from "react-icons/ri";
interface props {
  getCode: any;
  isOpen: boolean;
  close: () => void;
  error:string
}
const ResultGetCodeAgain = ({ getCode, isOpen, close , error}: props) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="flex flex-col justify-around items-center h-full">
        {getCode.isLoading ? (
          // @ts-ignore
          <ReactLoading
            type="spinningBubbles"
            color="#0096f5"
            width={80}
            height={80}
          />
        ) : getCode.isSuccess ? (
          <>
            <div className="border rounded-full bg-green-400 p-3">
              <BsCheckAll color="#fff" size={100} />
            </div>
            <div>
              <h6 className="yekanBold text-md md:text-lg text-gray-700 ">
                کد ورود با موفقیت ارسال شد
              </h6>
              <Button
                onClick={() => close()}
                container="flex justify-center pt-8"
                name="متوجه شدم"
              />
            </div>
          </>
        ) : getCode.isError ? (
          <>
            <div className="border rounded-full bg-[#ea2027] p-3">
              <RiCloseLine color="white" size={100} />
            </div>
            <div>
              <h6 className="yekanBold text-center text-md md:text-lg text-[#1e272e] ">
                {error}
              </h6>
              <Button
                onClick={() => close()}
                container="flex justify-center pt-8"
                name="متوجه شدم"
              />
            </div>
          </>
        ) : null}
      </div>
    </Modal>
  );
};

export default ResultGetCodeAgain;
