import styled from 'styled-components';

// index.js
export const Container = styled.div`
  float: left;
  margin-left: 10px;

  & #active {
    top: 12px;
  }
`;

export const NULL = styled.div`
  &::before {
    position: absolute;
    content: '[...]';
    font-size: 24px;
    left: 52px;
    top: 6px;
  }
`;

export const CurrentPage = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-size: 18px;
  top: 55px;
  color: #000;
  transition: 0.2s;
`;

export const LogoContainer = styled.div`
  position: absolute;
  margin: 1px 7px;
  font-size: 22px;
  letter-spacing: -1px;
  white-space: nowrap;
  padding: 0px 7px 0px 7px;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
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
