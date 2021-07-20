import styled from "styled-components";

export const DeleteAccountModalSubmitButton = styled.button`
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

export const DeleteAccountModalCancelButton = styled.button`
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
