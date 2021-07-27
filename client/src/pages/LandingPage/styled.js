import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;

  & .full {
    margin: 0px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  /* position: relative; */
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  flex: none;
  margin: 24px;
  padding: 24px;
  user-select: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
`;
