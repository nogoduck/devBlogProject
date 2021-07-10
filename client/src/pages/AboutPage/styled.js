import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & hr {
    width: 100%;
  }
  & ul {
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px 32px 4px 32px;
  }

  & li {
    list-style: decimal;
    margin-bottom: 4px;
  }
`;
