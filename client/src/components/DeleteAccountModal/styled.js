import styled from "styled-components";

export const DeleteAccountForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 97%;
  padding: 5px 0px 5px 7px;
  font-size: 16px;
  border-radius: 8px;
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
