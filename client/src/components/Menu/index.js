import React, { useRef, useEffect, useState, useCallback } from "react";
import { Container, MenuContainer } from "./styled";

function Menu({ children, style, show, close }) {
  const modalRef = useRef();

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onCloseModal = useCallback(
    (e) => {
      if (show && e.target) {
        close();
      }
    },
    [show]
  );

  useEffect(() => {
    window.addEventListener("click", onCloseModal);
    return () => {
      window.removeEventListener("click", onCloseModal);
    };
  }, [onCloseModal]);

  if (!show) {
    return null;
  }

  return (
    <>
      <MenuContainer onClick={stopPropagation} ref={modalRef} style={style}>
        {children}
      </MenuContainer>
    </>
  );
}

export default Menu;
