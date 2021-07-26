import React, { useRef, useEffect, useState, useCallback } from "react";
import { Container, MenuContainer } from "./styled";

function Menu({ children, style, show, close }) {
  const modalRef = useRef();

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onCloseModal = useCallback(
    (e) => {
      // if (!show) {
      //   console.log("show false - close");
      //   close();
      // }

      console.log("modalRef.current >> ", modalRef.current);
      console.log("e.target >> ", e.target);
      if (e.target) {
        console.log("target[true]");
      } else {
        console.log("target[false]");
      }

      console.log("Menu show > ", show);
      if (show && e.target) {
        console.log("Menu close...");
        close();
      }
    },
    [show]
  );

  useEffect(() => {
    console.log("window add click event ");
    window.addEventListener("click", onCloseModal);

    return () => {
      console.log("window remove click event ");
      window.removeEventListener("click", onCloseModal);
    };
  }, [onCloseModal]);

  console.log("show, close", show, close);
  if (!show) {
    window.removeEventListener("click", onCloseModal);
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
