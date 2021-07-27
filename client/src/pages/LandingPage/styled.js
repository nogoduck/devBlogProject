import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;

  & .full {
    margin: 0px;
  }
`;

export const Content = styled.div`
  margin: 24px;
  padding: 24px;
  width: 100%;
  user-select: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
`;
