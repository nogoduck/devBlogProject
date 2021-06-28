import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 1024;
  & > div {
    display: inline-block;
    position: absolute;
    color: #000;
    border: 2px solid black;
  }
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  top: 2px;
  right: 5px;
  /* color: yellow; */
`;
