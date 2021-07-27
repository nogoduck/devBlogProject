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
  border: 5px solid green;
  display: flex;
  flex-direction: column;
`;
export const Content = styled.div`
  flex: none;
  width: 100%;
  /* padding: 24px; */
  /* margin: 24px; */
  /* border: 5px solid red; */
  user-select: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
`;
