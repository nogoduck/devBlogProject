import styled from "styled-components";

export const List = styled.div`
  font-size: 14px;
  color: #000;
  border: 1px solid #d0d7de;
  border-radius: 5px;
  background-color: #fff;
  hr {
    border: none;
    border-top: 1px solid #d0d7de;
  }
  a {
    color: #000;
  }
  & li {
    padding: 4px 20px;
  }
  & li:first-child {
    margin-top: 8px;
  }
  & li:last-child {
    margin-bottom: 6px;
  }
  & li:hover {
    background-color: #0969da;
    color: #fff;
    cursor: pointer;
  }
  & li:nth-child(-n + 2) {
    background-color: #fff;
    color: #000;
    cursor: default;
    text-align: center;
  }
  & li:nth-child(-n + 2):hover {
    background-color: #fff;
    color: #000;
    cursor: default;
  }
`;
