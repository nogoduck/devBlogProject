import styled from "styled-components";

export const Container = styled.div`
  & li {
    border-bottom: 1px solid black;
    padding: 4px 0;
  }

  & li:last-child {
    border: none;
  }

  & span:hover {
    border-bottom: 4px solid blue;
    color: blue;
    cursor: pointer;
    padding: 0;
  }

  & > h3:hover {
    color: red;
    /* text-decoration: underline; */
    /* text-decoration: line-through; */
  }
`;

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
  /* border: 1px dashed red; */
  font-size: 20px;
  margin: 8px 0 0 8px;
  & > span {
    color: green;
    margin: 10px 0;
  }
`;
