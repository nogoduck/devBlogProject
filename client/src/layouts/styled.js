import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  position: relative;
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  & .full {
    margin: 0px;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Content = styled.div`
  //z-index: 32;
  flex: none;
  margin: 24px;
  padding: 24px;
  user-select: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
`;
export const Notice = styled.div`
  text-align: center;
  border: 2px solid cornflowerblue;
  padding: 12px 16px;
  font-size: 24px;
  border-radius: 4px;
  margin: 8px 24px;
`;
