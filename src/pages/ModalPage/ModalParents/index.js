import React from "react";
import { Modal } from "./styled";

function ModalParents({ show, children }) {
  if (!show) {
    return null;
  }
  return (
    <Modal>
      303
      <br />
      {children}💨
    </Modal>
  );
}

export default ModalParents;
