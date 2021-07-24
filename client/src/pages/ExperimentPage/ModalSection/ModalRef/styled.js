import styled from "styled-components";

export const Container = styled.div`
  /* position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 5px dashed yellow; */
`;

export const ModalContainer = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  background-color: blue;
  color: #fff;
  /* z-index: 1024; */
  user-select: none;
  /* position: fixed; */
  position: absolute;
  display: inline-block;
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

export const Modal = styled.div`
  border: 3px solid purple;
  padding: 16px;
`;
