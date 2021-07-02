import React, { useState } from "react";
import ModalParents from "../ModalParents";
import { Modal } from "./styled";

function ModalChildren({ show }) {
  const [showModal, setShowModal] = useState(false);
  console.log("show: ", show);

  const goParents = () => {
    setShowModal(true);
    show = false;
  };
  if (!show) {
    return null;
  }
  return (
    <>
      <Modal>
        41-3 <br />
        <button onClick={goParents}>303으로 이동</button>
        <ModalParents show={showModal}></ModalParents>
      </Modal>
    </>
  );
}

export default ModalChildren;
