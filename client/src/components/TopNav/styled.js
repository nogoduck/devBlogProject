import styled from "styled-components";

export const Header = styled.div`
  color: #d2dae2;
  position: fixed;
  background-color: #fff;
  font-size: 30px;
  height: 48px;
  width: 100%;
  z-index: 2048;
`;

export const Space = styled.div`
  height: 48px;
  width: 100%;
  & .scroll {
    box-shadow: 0 0 4px 2px #a8b6bd;
  }
`;
