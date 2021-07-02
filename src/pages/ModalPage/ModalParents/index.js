import React from "react";
import { Modal } from "./styled";

function ModalParents({ show }) {
  const goChildren = () => {};

  if (!show) {
    return null;
  }
  return (
    <Modal>
      303
      <br />
      <button onClick={goChildren}>41-3으로 이동</button>
    </Modal>
  );
}

export default ModalParents;
