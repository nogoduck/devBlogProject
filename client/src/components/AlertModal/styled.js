import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1024;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
`;

export const ModalContainer = styled.div`
  display: inline-block;
  position: absolute;
  color: #000;
  border: 1px solid #808e9b;
  border-radius: 5px;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 5px 1px #7f8fa6;
  min-width: 400px;
  max-width: 600px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 30px;
  position: absolute;
  top: 0px;
  right: 0px;
  padding: 0 8px;
  color: #9b9c9c;
  height: 32px;
  /* transition-property: background-color;
  transition-duration: 0.2s; */
  overflow: hidden;

  &:hover {
    color: #fff;
    background-color: #e81123;
    border-radius: 0 5px 0 0;
  }

  &:active {
    color: #fff;
    background-color: #f1707a;
    border-radius: 0 5px 0 0;
  }
`;

export const ModalHeader = styled.div`
  color: #000;
  background-color: #fff;
  width: 100%;
  height: 32px;
  border-radius: 5px 5px 0 0;
  display: flex;
  align-items: center;
`;

export const ModalNotice = styled.div`
  border: 1px solid red;
  border-width: 1px 0 1px 0;
  background-color: #ffe7e5;
  color: #dd5b63;
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled.div`
  border: 1px solid #e7e7e7;
  padding: 24px;
  margin: 5px;
  border-radius: 5px;
  background-color: #fff;
`;

export const ModalTitle = styled.div`
  color: #000;
  font-weight: 800;
  font-size: 24px;
  margin-bottom: 4px;
`;

export const ModalContent = styled.div`
  color: #000;
  font-size: 16px;
`;

export const ButtonContainer = styled.div`
  margin: 5px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
