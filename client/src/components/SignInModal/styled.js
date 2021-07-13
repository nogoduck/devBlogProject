import styled from "styled-components";

export const SignInButton = styled.div`
  position: absolute;
  right: 60px;
  font-size: 12px;
  height: 60px;
  width: 140px;
  background: #eb2f06;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 800;
  transition: 0.2s;
  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 5px 3px #b32304 inset;
    color: #fff;
  }
`;

export const Input = styled.input`
  width: 291px;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid #7f8fa6;
  transition: 0.3s;
  margin-top: 4px;
  &:focus {
    box-shadow: 0px 0px 5px 1px #7f8fa6;
  }
`;

export const Label = styled.label`
  margin-top: 16px;
  padding: 0 0 0 4px;
  font-size: 14px;
  font-weight: 800;
  color: #000;
  position: relative;
  display: inline-block;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
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
  font-weight: 800;
  margin: 15px 0 40px 0;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  background: linear-gradient(135deg, #ffdd59 0%, #ffa801 100%);
  border: 1px solid #ffa801;
  /* transition: 0.3s; */
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
  font-weight: 800;
  height: 30px;
  border-radius: 3px;
  background: #dff9fb;
  border: 1px solid #7f8fa6;
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
    color: #fff;
  }
`;

export const ErrorBox = styled.div`
  width: 291px;
  padding: 5px 0px 5px 7px;
  border-radius: 3px;
  border: 1px solid red;
  transition: 0.3s;
`;
