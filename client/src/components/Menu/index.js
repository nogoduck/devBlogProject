import React, { useRef, useEffect, useState, useCallback } from "react";
import { Container, MenuContainer } from "./styled";

function Menu({ children, style, show, close }) {
  const modalRef = useRef();

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const onCloseModal = useCallback(
    (e) => {
      console.log("modalRef.current >> ", modalRef.current);
      console.log("e.target >> ", e.target);
      console.log("modal click!");
      if (e.target) {
        console.log("etrue");
      } else {
        console.log("efalse");
      }

      console.log("sshow > ", show);
      if (show && e.target) {
        console.log("IF");
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

  const cs = () => {
    console.log("cs click");
    close();
  };

  if (!show) {
    return null;
  }
  console.log("show and close >> ", show, close);

  return (
    <>
      <MenuContainer onClick={stopPropagation} ref={modalRef} style={style}>
        {children}
      </MenuContainer>
    </>
  );
}

export default Menu;
