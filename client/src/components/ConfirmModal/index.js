import React from "react";
import Modal from "../Modal";

import { ModalContent } from "./styled";

function ConfirmModal({ children, style, show, close, content }) {
  return (
    <Modal show={show} close={close} useCloseButton={false} style={style}>
      <ModalContent>{content}</ModalContent>
      {children}
    </Modal>
  );
}

export default ConfirmModal;
