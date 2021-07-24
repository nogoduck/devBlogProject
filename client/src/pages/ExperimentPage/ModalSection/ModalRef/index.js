import React, { useRef, useEffect, useCallback } from "react";
import { Modal } from "./styled";

function ModalRef({ children, style, showModal, setShowModal, close }) {
  const refValue = useRef();
  console.log("refValue >> ", refValue);
  console.log("refValue.current >> ", refValue.current);

  // const closeModal = (e) => {
  //   if (modalRef.current === e.target) {
  //     setShowModal(false);
  //   }
  // };

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

  const onClickModal = (e) => {
    console.log("modal ref click [true]");
  };

  return (
    <>
      <Modal style={style} ref={refValue} onClick={onClickModal}>
        <button onClick={() => setShowModal((prev) => !prev)}>&times;</button>
        <button onClick={close}>Close Parents Modal</button>
        Modal Ref
        {children}
      </Modal>
    </>
  );
}

export default ModalRef;
