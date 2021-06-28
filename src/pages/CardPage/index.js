import React, { useState } from "react";
import { Container, Button } from "./styled";
import Modal from "./Modal";
function CardPage() {
  const [showModal, setShowModal] = useState(false);

  const onClickModal = () => {
    console.log("showModal: ", showModal);
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Container>
        <Button onClick={onClickModal}>Modal Practice Button</Button>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </Container>
    </>
  );
}

export default CardPage;
