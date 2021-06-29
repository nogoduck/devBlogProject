import styled from "styled-components";

export const Input = styled.input`
  width: 291px;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  transition: 0.3s;

  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 800;
  color: #000;
  position: relative;
  top: 7px;
`;

export const Error = styled.div`
  margin: 5px 0 0 0;
  font-size: 14px;
  font-weight: 800;
  color: #ff3f34;
`;

export const ErrorInput = styled.div`
  & > input {
    width: 291px;
    padding: 5px 0px 5px 7px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid #ff3f34;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
  }
`;
export const SubmitButton = styled.button`
  margin: 15px 0 40px 0;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  background: linear-gradient(135deg, #ffdd59 0%, #ffa801 100%);
  border: 1px solid #ffa801;
  transition: 0.3s;
  &:hover {
    background: #ffdd59;
    cursor: pointer;
  }
  &:active {
    background: #ffa801;
    box-shadow: 0px 0px 5px 1px #ffa801;
  }
`;

export const Line = styled.fieldset`
  font-size: 14px;
  font-weight: 800;
  color: #7f8fa6;
  border: 1px solid #7f8fa6;
  border-width: 1px 0px 0px 0px;
  position: absolute;
  bottom: 55px;
  width: 275px;
  & > legend {
    text-align: center;
  }
`;

export const Button = styled.button`
  width: 300px;

  height: 30px;
  border-radius: 3px;
  background: #dff9fb;
  border: 1px solid #ffa801;
  transition: 0.3s;
  position: absolute;
  bottom: 35px;
  &:hover {
    background: #d2dae2;
    cursor: pointer;
  }
  &:active {
    background: #808e9b;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
  }
`;

export const Footer = styled.div`
  position: absolute;
  bottom: 40px;
  font-size: 14px;
  font-weight: 800;
  color: #7f8fa6;

  & > span {
    color: #4b7bec;
  }
  & > span:hover {
    color: #fa8231;
    cursor: pointer;
  }
`;
