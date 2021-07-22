import React, { useCallback } from "react";
import { Container, MenuContainer } from "./styled";

function Menu({ children, show, close, style }) {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }

  return (
    <Container onClick={close}>
      <MenuContainer onClick={stopPropagation} style={style}>
        {/* <button onClick={close}>닫는다</button> */}
        {children}
      </MenuContainer>
    </Container>
  );
}

export default Menu;
