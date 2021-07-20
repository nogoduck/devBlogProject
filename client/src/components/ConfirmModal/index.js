import React from "react";
import Modal from "../Modal";

import { ModalContent } from "./styled";

function ConfirmModal({ children, show, close, content }) {
  return (
    <Modal
      show={show}
      close={close}
      useCloseButton={false}
      style={{ padding: "30px" }}
    >
      <ModalContent>{content}</ModalContent>
      {children}
    </Modal>
  );
}

export default ConfirmModal;
