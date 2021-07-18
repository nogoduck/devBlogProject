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

export const SubmitButton = styled.button`
  /* float: right; */
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #cce6ff;
  border: 1px solid #c3cfe0;
  transition: 0.1s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px #73b7fa inset;
  }
  &:active {
    background: #73b7fa;
    color: #fff;
  }
`;

export const CancelButton = styled.button`
  /* float: right; */
  font-weight: 800;
  width: 80px;
  height: 30px;
  border-radius: 3px;
  background: #ffe3de;
  border: 1px solid #c3cfe0;
  transition: 0.1s;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px #ff9785 inset;
  }
  &:active {
    background: #ff9785;
    color: #fff;
  }
`;
