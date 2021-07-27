import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  border: 5px solid yellow;
  /* border-top: 1px solid #dadce0; */
  height: 300px;
  padding: 24px;
  /* width: 100%; */
  z-index: 512;
`;

export const LogoContainer = styled.div`
  /* position: absolute; */
  margin: 1px 7px;
  font-size: 22px;
  letter-spacing: -1px;
  padding: 0px 7px 0px 7px;
  z-index: 1000;
  font-family: "Roboto", sans-serif;
  color: #757575;
  &:hover {
    cursor: pointer;
  }

  & > .initial {
    display: inline-block;
    font-size: 28px;
  }
  & > .dot {
    font-size: 32px;
    color: red;
  }
  & > span {
    font-size: 18px;
  }
`;
