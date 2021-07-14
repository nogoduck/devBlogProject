import React, { useCallback } from "react";
import { Container, MenuContainer, CloseButton } from "./styled";

function Menu({ children, show, close }) {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <Container onClick={close}>
      <MenuContainer onClick={stopPropagation}>
        <CloseButton onClick={close}>&times;</CloseButton>
        {children}
      </MenuContainer>
    </Container>
  );
}

export default Menu;
