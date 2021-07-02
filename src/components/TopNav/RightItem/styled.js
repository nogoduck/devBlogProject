import styled from "styled-components";

export const LinkToGitHub = styled.a`
  color: #d2dae2;
  position: absolute;
  font-size: 16px;
  right: 220px;
  top: 20px;
  transition: 0.2s 0s ease-in-out;
  &:hover {
    color: #fff;
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
