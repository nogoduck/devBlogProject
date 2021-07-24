import React from "react";
import { Container, Modal } from "./styled";

function ModalParents({ children, style, show, close }) {
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  if (!show) {
    return null;
  }

  return (
    <Container onClick={close}>
      <Modal onClick={stopPropagation} style={style}>
        <button onClick={close}>Close Parents Modal</button>
        {children}
      </Modal>
    </Container>
  );
}

export default ModalParents;
