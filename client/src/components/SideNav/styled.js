import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  border-right: 1px solid #e5e5e5;
  & ul {
    padding: 24px 0 24px 0;
  }

  & li {
    padding: 3px 24px;
    color: #2f3640;
    font-size: 18px;
    transition: 0s 0s ease-in-out;
  }

  & .active {
    background: rgba(0, 0, 0, 0.1);
    color: #000;
  }

  & li:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const ContainerMobile = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 100vh;
  border-right: 1px solid black;

  & ul {
    padding: 24px 0 24px 0;
  }
  & li {
    padding: 3px 24px;
    color: #2f3640;
    font-size: 18px;
    transition: 0s 0s ease-in-out;
  }
  & .active {
    background: rgba(0, 0, 0, 0.1);
    color: #000;
  }
  & li:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuButton = styled.button`
  position: absolute;
  color: #d2dae2;
  background-color: #1e272e;
  font-size: 24px;
  top: 16px;
  left: 8px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;