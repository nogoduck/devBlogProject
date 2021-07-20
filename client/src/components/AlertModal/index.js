import React, { useCallback } from "react";
import {
  Container,
  ModalContainer,
  CloseButton,
  ModalHeader,
  ModalNotice,
  ContentContainer,
  ModalTitle,
  ModalContent,
  ButtonContainer,
} from "./styled";
import PropTypes from "prop-types";

import { IoIosCheckmarkCircle } from "react-icons/io";
import { TiWarning } from "react-icons/ti";

// [Alert Modal Document]==================================
//
//  - children : 버튼을 넣을 공간
//  - show : (true, false) 불리언 값만 받으며 모달을 켜주고 꺼준다
//  - close : show를 관리하는 함수를 받는다
//            ex)
//            const [showModal, setShowModal]
//            const onClickShowModal = () => { setShowModal(false) }
//            위의 훅과 함수가 모달을 관리 한다고 할 때 onClickShowModal
//            함수를 인자로 넣어준다.
//  - style : 디자인이 된 알림창 모달이므로 거의 사용할 일은 없을 것이지만 커스텀이 가능하다
//  - useCloseButton : (true, false) 불리언 값을 받으며 닫기버튼 사용여부를 받는다
//  - modalHeader : 모달의 제일 상단부분의 제목
//  - notice : 모달 제목아래에 주의문구를 추가하여 강조를 줄 수 있다. 입력하지 않으면 보이지 않는다
//  - title : 알림창의 제목
//  - content : 알림창의 세부내용
//  - option : ("success", "failed", "warning", "danger")을 각각 인자로 받으며 옵션마다 ModalHeader
//            에 제일 좌측 모서리에 표시되는 아이콘이 바뀐다.
//
// ========================================================

function Modal({
  children,
  show,
  close,
  style,
  useCloseButton,
  modalHeader,
  notice,
  title,
  content,
  option,
}) {
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
        <ModalHeader>
          <IoIosCheckmarkCircle
            style={{
              color: "green",
              padding: "2px 4px 0 8px",
              fontSize: "20px",
            }}
          />
          {modalHeader}
        </ModalHeader>

        {notice && (
          <ModalNotice>
            <TiWarning />
            &nbsp;
            {notice}
          </ModalNotice>
        )}

        <ContentContainer>
          <ModalTitle>{title}</ModalTitle>
          <ModalContent>{content}</ModalContent>
        </ContentContainer>
        <ButtonContainer>{children}</ButtonContainer>
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
