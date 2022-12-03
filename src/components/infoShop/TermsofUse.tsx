import React from "react";
import Modal from "react-modal";
import "./ListTimeOpenShop.css";
import { IoMdClose } from "react-icons/io";
import { MdWatchLater } from "react-icons/md";
import { CSSTransition } from "react-transition-group";
import { useRecoilValue } from "recoil";
import { getRecoil, setRecoil } from "recoil-nexus";
import { tremsOfUseInfoShop } from "./../../atom/atom";

export const TermsofUse = ({}) => {
  const isOpen = useRecoilValue(tremsOfUseInfoShop);
  const toggleModal = getRecoil(tremsOfUseInfoShop);

  return (
    <CSSTransition in={isOpen} timeout={300} classNames="dialog">
      <Modal
        closeTimeoutMS={500}
        className="modalListTimeOpenShop"
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.2)",
          },
          content: {
            position: "absolute",
            top: "35%",
            left: "0px",
            right: "0px",
            bottom: "0px",
            border: "hidden",
            background: "#fff",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            outline: "none",
            padding: "20px",
          },
        }}
        isOpen={isOpen}
      >
        {/* title & close button*/}
        <div className="flex flex-row-reverse justify-center items-start">
          <p className="yekanBold text-[#808e9b] text-md text-center flex-1 ">
            شرایط استفاده
          </p>
          <IoMdClose
            onClick={() => setRecoil(tremsOfUseInfoShop, !toggleModal)}
            size={25}
            className="text-[#1e272e] justify-self-end  "
          />
        </div>
      </Modal>
    </CSSTransition>
  );
};
