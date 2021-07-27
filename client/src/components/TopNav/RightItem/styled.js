import styled from "styled-components";

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

export const SignIn = styled.div`
  font-size: 14px;
  font-weight: 800;
  margin: 6px 16px 0 0;
  padding: 8px 12px;
  border-radius: 5px;
  color: #1a73e8;
  &:hover {
    cursor: pointer;
    background-color: #e8f0fe;
  }
`;

export const Profile = styled.div`
  margin: 5px 25px 0 0;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
  & img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;

export const Right = styled.div`
  & .active {
    background-color: rgba(0, 0, 0, 0.2);
  }
  position: relative;
  display: flex;
  justify-content: flex-end;
`;
