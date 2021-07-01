import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 300px;
  border: 5px solid red;
`;

export const ModalContainer = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  background-color: blue;
  color: #fff;
  z-index: 1024;
  user-select: none;
  position: fixed;
  width: 200px;
  height: 300px;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 32px;
  color: yellow;
  position: absolute;
  top: 0px;
  right: 10px;
`;
