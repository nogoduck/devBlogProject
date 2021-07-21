import React, { useCallback } from "react";
import { Container, MenuContainer, CloseButton } from "./styled";

function Menu({ children, show, close, style, useCloseButton }) {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Container onClick={close}>
      <MenuContainer onClick={stopPropagation} style={style}>
        {useCloseButton && <CloseButton onClick={close}>&times;</CloseButton>}
        {children}
      </MenuContainer>
    </Container>
  );
}

Menu.defaultProps = {
  useCloseButton: true,
};

export default Menu;
