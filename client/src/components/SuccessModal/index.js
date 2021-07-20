import React from "react";
import Modal from "../Modal";

import { ModalNotice, ModalTitle, ModalContent } from "./styled";

import { GiCheckMark } from "react-icons/gi";
import { RiAlarmWarningLine } from "react-icons/ri";

function SuccessModal({ children, show, close, notice, title, content }) {
  return (
    <Modal
      show={show}
      close={close}
      useCloseButton={false}
      style={{
        border: "5px solid red",
        minWidth: "450px",
        minHeight: "250px",
      }}
    ></Modal>
  );
}

export default SuccessModal;
