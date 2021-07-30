import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
  s & .full {
    margin: 0px;
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;

  //height: 100%;

  & .full {
    margin: 0px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 2px solid blueviolet;
`;
export const Content = styled.div`
  border: 2px solid blue;
  flex: none;
  margin: 24px;
  padding: 24px;
  user-select: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
`;
