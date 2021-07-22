import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputHidden = styled.input`
  display: none;
`;

export const InputLabel = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 800;
  width: 100%;

  font-weight: 800;
  height: 30px;
  border-radius: 3px;
  background: #dff9fb;
  border: 1px solid #7f8fa6;
  transition: 0.1s;
  text-align: center;
  line-height: 30px;
  &:hover {
    background: #d2dae2;
    cursor: pointer;
  }
  &:active {
    background: #dff9fb;
    box-shadow: 0px 0px 3px 1px #ea8685 inset;
  }
`;
