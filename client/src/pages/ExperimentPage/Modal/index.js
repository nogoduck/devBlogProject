import React, { useRef, useEffect, useCallback } from "react";
import { Container, ModalContainer, CloseButton } from "./styled";

function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal === true) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);
  return (
    <>
      <Container onClick={closeModal} ref={modalRef}>
        {showModal && (
          <ModalContainer>
            <CloseButton onClick={() => setShowModal((prev) => !prev)}>
              &times;
            </CloseButton>
            True Modal
          </ModalContainer>
        )}
      </Container>
    </>
  );
}

export default Modal;
