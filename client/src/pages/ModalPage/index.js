import { withRouter } from "react-router-dom";
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
  const goParents = () => {
    setShowModalChildren(false);
    setShowModalParents(true);
  };
  const goChildren = () => {
    setShowModalParents(false);
    setShowModalChildren(true);
  };

  return (
    <>
      <ol>
        <li style={{ listStyle: "unset" }}>모달간에 전환</li>
        <li style={{ listStyle: "unset" }}>
          모달의 자식모달 호출, 자식모달의 자식 호출
        </li>
      </ol>
      <Container>
        <Button onClick={onClickModal}>Modal Practice Button</Button>
        <button onClick={onClickParents}>
          303 <hr /> (Parent)
        </button>
        <button onClick={onClickChildren}>
          41-3 <hr /> (Children)
        </button>
        <ModalParents show={showModalParents}>
          <button onClick={goChildren}>41-3으로 이동합니다</button>
        </ModalParents>
        <ModalChildren show={showModalChildren}>
          <button onClick={goParents}>303으로 이동</button>
        </ModalChildren>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </Container>
    </>
  );
}

export default withRouter(ModalPage);
