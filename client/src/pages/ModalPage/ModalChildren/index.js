import React, { useState } from "react";
import ModalParents from "../ModalParents";
import { Modal } from "./styled";

function ModalChildren({ show, children }) {
  const [showModal] = useState(false);

  if (!show) {
    return null;
  }
  return (
    <>
      <Modal>
        41-3 <br />
        {children}::
        <ModalParents show={showModal}></ModalParents>
      </Modal>
    </>
  );
}

export default ModalChildren;
