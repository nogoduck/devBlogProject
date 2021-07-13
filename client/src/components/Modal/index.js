import React, { useCallback } from "react";
import { Container, CloseButton } from "./styled";
import PropTypes from "prop-types";

function Menu({ children, show, close, style, useCloseButton }) {
  const stopPropagation = useCallback((e) => {
    // console.log("Menu, stopPropagation!");
    e.stopPropagation();
    //HTML에서는 이벤트 버블링(자식의 클릭이벤트가 부모까지 전달이 된다)이 있는데 이걸 부모태그로 버블링이 되지 않게함
  }, []);

  if (!show) {
    return null;
  }
  return (
    //Container는 화면 전체 영역이다
    <Container onClick={close}>
      <div onClick={stopPropagation} style={style}>
        {useCloseButton && <CloseButton onClick={close}>&times;</CloseButton>}
        {children}
      </div>
    </Container>
  );
}

Menu.defaultProps = {
  useCloseButton: true,
  //props 의 기본값을 지정, 보내는 컴포넌트 측에서 값을 넣어주지 않아도
  // defaultProps의 값을 대입해줌
};

Menu.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
  style: PropTypes.any,
};

export default Menu;
