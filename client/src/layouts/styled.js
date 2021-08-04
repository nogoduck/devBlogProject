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
  position: relative;
  //overflow-y: hidden;
  //overflow-x: hidden;
  //z-index: 10;
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
export const ContainerHeaderImg = styled.img`
  width: 100%;
  position: absolute;
  top: -350px;
  transform: rotate(180deg);
  opacity: 0.3;
  //z-index: 0;
`;
