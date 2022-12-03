import React from "react";
import "./Modal.css";
import ReactModal from "react-modal";

interface props {
  children?: React.ReactNode | any;
  isOpen:boolean;
}
const Modal = ({ children ,isOpen}: props) => {
  return (
    <ReactModal
      className="modal"
      isOpen={isOpen}
      overlayClassName="overlay-class"
    >
      {children}
    </ReactModal>
  );
};

export default Modal;
