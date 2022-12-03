import React from "react";
import { Logo } from "../Logo";
import Modal from "../Modal";
import { setRecoil } from "recoil-nexus";
import { loginInfoState } from "../../atom/atom";
interface prosp {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Out = ({ isOpen, setIsOpen }: prosp) => {
  return (
    <Modal isOpen={isOpen}>
      <div className="h-full flex flex-col justify-center gap-10">
        <Logo className="h-32" />
        <p className="text-[#1e272e] text-center">
          آیا میخواهید از برنامه خارج شوید؟
        </p>
        <div className="flex justify-around items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="py-[.40rem] px-10 border rounded-lg"
          >
            خیر
          </button>
          <button
            onClick={async () => {
              await setIsOpen(false);
              setRecoil(loginInfoState, {});
            }}
            className="py-[.40rem] px-10 border rounded-lg bg-[#ea2027] text-white"
          >
            بله
          </button>
        </div>
      </div>
    </Modal>
  );
};
