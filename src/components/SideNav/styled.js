import styled from "styled-components";

export const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: 220px;
  height: 100vh;
  border-right: 1px solid black;

  & ul {
    padding: 24px 0 24px 0;
  }

  & li {
    padding: 3px 24px;
    color: #000;
    font-size: 18px;
  }

  & li:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;
