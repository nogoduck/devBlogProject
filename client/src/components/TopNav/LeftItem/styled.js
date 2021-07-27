import styled from "styled-components";

// index.js
export const Container = styled.div`
  float: left;
  margin-left: 10px;
`;

export const LogoContainer = styled.div`
  position: absolute;
  margin: 1px 7px;
  font-size: 22px;
  letter-spacing: -1px;
  padding: 0px 7px 0px 7px;
  font-family: "Roboto", sans-serif;
  color: #757575;
  &:hover {
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
