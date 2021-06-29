import styled from "styled-components";

// index.js
export const Container = styled.div`
  float: left;
`;

export const Logo = styled.div`
  margin: 10px;
  border: 1px solid #fff;
  font-size: 32px;
  letter-spacing: 2px;
  padding: 1px 7px 4px 7px;

  & > div {
    display: inline-block;
    font-size: 44px;
  }

  & > span {
    font-size: 24px;
  }
`;
