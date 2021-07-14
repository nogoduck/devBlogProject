import React, { useCallback } from "react";
import { Container, ModalContainer, CloseButton } from "./styled";
import PropTypes from "prop-types";

function Modal({ children, show, close, style, useCloseButton }) {
  const stopPropagation = useCallback((e) => {
    // console.log("Modal, stopPropagation!");
    e.stopPropagation();
    //HTML에서는 이벤트 버블링(자식의 클릭이벤트가 부모까지 전달이 된다)이 있는데 이걸 부모태그로 버블링이 되지 않게함
  }, []);

  if (!show) {
    return null;
  }

  return (
    //Container는 화면 전체 영역이다
    <Container onClick={close}>
      <ModalContainer onClick={stopPropagation} style={style}>
        {useCloseButton && <CloseButton onClick={close}>&times;</CloseButton>}
        {children}
      </ModalContainer>
    </Container>
  );
}

Modal.defaultProps = {
  useCloseButton: true,
  //props 의 기본값을 지정, 보내는 컴포넌트 측에서 값을 넣어주지 않아도
  // defaultProps의 값을 대입해줌
  // 입력사항이 없는 알림창 모달 같은 경우에 버튼을 사용하지 않기 위해 인자를 받음
};

Modal.propTypes = {
  show: PropTypes.bool,
  close: PropTypes.func,
  style: PropTypes.any,
};

export default Modal;
