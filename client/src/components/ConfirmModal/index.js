import React from "react";
import Modal from "../Modal";
import { SubmitButton, CancelButton } from "./styled";

function ConfirmModal({ children, show, close }) {
  return (
    <Modal show={show} close={close} useCloseButton={false}>
      <div>{children}</div>
      {/* <CancelButton onClick={close}>취소</CancelButton>
      <SubmitButton>확인</SubmitButton> */}
    </Modal>
  );
}

export default ConfirmModal;
