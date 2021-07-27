import styled from "styled-components";

export const Container = styled.div``;

export const List = styled.div`
  font-size: 15px;
  color: #000;
  border: 1px solid #d0d7de;
  border-radius: 5px;
  background-color: #fff;
  & li {
    padding: 4px 20px;
  }
  & li:first-child {
    margin-top: 8px;
  }
  & li:last-child {
    margin-bottom: 8px;
  }
  & li:hover {
    background-color: #0969da;
    color: #fff;
    cursor: pointer;
  }
`;
