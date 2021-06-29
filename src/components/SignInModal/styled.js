import styled from "styled-components";

export const Input = styled.input`
  width: 291px;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  height: 28px;
  border-radius: 3px;
  background: linear-gradient(135deg, #ffdd59 0%, #ffa801 100%);
  border: 1px solid #ffa801;
  &:hover {
    background: #ffdd59;
  }
  &:active {
    background: #ffa801;
    box-shadow: 0px 0px 5px 1px #ffa801;
  }
`;
