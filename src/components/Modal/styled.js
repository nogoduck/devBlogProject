import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid black;
  border-radius: 6px;
  background-color: blue;
  z-index: 1024;
  user-select: none;
  position: fixed;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  top: 40px;
  right: 2px;
  color: yellow;
`;
