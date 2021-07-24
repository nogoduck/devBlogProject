import React, { useRef, useEffect, useState, useCallback } from "react";
import { Modal } from "./styled";

function ModalRef({ children, style, shows, close }) {
  const refValue = useRef();
  const [show, setShow] = useState(false);

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const onCloseModal = useCallback(
    (e) => {
      console.log("--- [click] --------------");
      console.log("refValue.current >> ", refValue.current);
      console.log("windows e.target >> ", e.target);

      if (show && refValue.current !== e.target) {
        console.log("동일함");
        setShow(false);
      }
    },
    [show, setShow]
  );

  const keyPress = useCallback(
    (e) => {
      console.log("키 눌림");
      if (e.key === "Escape" && show === true) {
        setShow(false);
      }
    },
    [show, setShow]
  );

  useEffect(() => {
    window.addEventListener("click", onCloseModal);
    window.addEventListener("keydown", keyPress);
    return () => {
      window.removeEventListener("click", onCloseModal);
      window.removeEventListener("keydown", keyPress);
    };
  }, [onCloseModal, keyPress]);
  console.log("show > ", show);

  return (
    <>
      <button onClick={() => setShow((prev) => !prev)}>show</button>
      {show && (
        <Modal style={style} ref={refValue} onClick={stopPropagation}>
          <button onClick={() => setShow((prev) => !prev)}>&times;</button>
          <button onClick={close}>Close Parents Modal</button>
          Modal Ref
          {children}
        </Modal>
      )}
    </>
  );
}

export default ModalRef;
