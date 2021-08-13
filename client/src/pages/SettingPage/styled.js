import styled from 'styled-components';

export const Container = styled.div``;

export const Profile = styled.div`
  /* border: 1px dashed red; */
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0px;
  font-size: 24px;
  font-weight: 800;
`;

export const Menu = styled.div`
  font-size: 16px;
  margin: 16px 8px;
  & div {
    padding: 6px 16px;
    color: #000;
  }
  & ul {
    border: 1px solid #fff;
    border-radius: 6px;
  }
  & li #title {
    font-weight: 800;
    color: #fff;
    background-color: #3498db;
    border-radius: 6px 6px 0 0;
  }
  & li {
    list-style: none;
    border-bottom: 1px solid #bdc3c7;
  }
  & li:hover {
    cursor: pointer;
    background-color: #ecf0f1;
  }
  & li:first-child {
    cursor: default;
    border: none;
    background-color: transparent;
  }
  & li:first-child:hover {
    /* border: none; */
    /* outline: none; */
  }
  & li:last-child:hover {
    cursor: pointer;
    border-radius: 0 0 6px 6px;
    background-color: #ecf0f1;
  }
  & li:last-child {
    border: none;
  }
  & .active {
    background-color: #ecf0f1;
  }
  & .active-last {
    border-radius: 0 0 6px 6px;
    background-color: #ecf0f1;
  }
`;

export const Content = styled.div`
  margin: 0 8px;
`;

export const NameBox = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 1px solid black; */
  height: 64px;

  & > div:first-child {
    font-size: 24px;
    font-weight: 800;
  }
  & > div:nth-child(2) {
    font-size: 16px;
    font-weight: 400;
    color: #57606a;
  }
`;
