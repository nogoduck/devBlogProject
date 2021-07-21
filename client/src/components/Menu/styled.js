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

export const MenuContainer = styled.div`
  display: inline-block;
  position: absolute;
  color: #000;
  border: 1px solid #808e9b;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px #7f8fa6;
`;

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  font-size: 32px;
  position: absolute;
  top: 2px;
  right: 5px;
`;
