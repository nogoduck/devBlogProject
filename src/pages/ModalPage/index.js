import React, { useState } from "react";
import { Container, Button } from "./styled";

import Modal from "./Modal";
import ModalParents from "./ModalParents";
import ModalChildren from "./ModalChildren";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const [showModalParents, setShowModalParents] = useState(false);
  const [showModalChildren, setShowModalChildren] = useState(false);

  const onClickModal = () => {
    console.log("showModal: ", showModal);
    setShowModal((prev) => !prev);
  };

  const onClickParents = () => {
    setShowModalParents((prev) => !prev);
  };

  const onClickChildren = () => {
    setShowModalChildren((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={onClickModal}>Modal Practice Button</Button>
        <button onClick={onClickParents}>303</button>
        <button onClick={onClickChildren}>41-3</button>
        {showModalParents && <ModalParents />}
        {showModalChildren && <ModalChildren />}

        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </Container>
    </>
  );
}

export default ModalPage;
