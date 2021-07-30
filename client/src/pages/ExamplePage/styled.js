import styled from 'styled-components';

export const Container = styled.div`
  border: 2px solid purple;
  position: relative;
  display: flex;
`;
export const TopSpace = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
`;
export const TopNav = styled.div`
  z-index: 1;
  position: fixed;
  border: 2px solid #34ace0;
  width: 100%;
  height: 48px;
  background-color: #fff;
`;
export const Main = styled.div`
  position: relative;
  border: 2px solid #227093;
  display: flex;
  flex-direction: column;
`;
export const SideNav = styled.div`
  flex: none;
  position: fixed;
  border: 2px solid #33d9b2;
  width: 120px;
  height: 100vh;
  transition: 0.5s;
`;
export const SideSpace = styled.div`
  flex: none;
  position: relative;
  width: 120px;
  height: 100vh;
`;
export const Content = styled.div`
  position: relative;
  border: 2px solid #ffb142;
  width: 100%;
`;
export const Article = styled.div`
  margin: 24px;
  padding: 24px;
  position: relative;
  border: 2px solid #ff793f;
  /* width: 100%; */
  display: flex;
  & li {
    width: 50px;
    height: 50px;
    border: 1px solid gray;
  }
  /* flex-wrap: wrap; */
`;
export const Footer = styled.div`
  position: relative;
  border: 2px solid #ff5252;
`;
export const Test = styled.div`
  color: green;
  font-size: 32px;
  position: absolute;
  left: -170px;
  border: 5px solid green;
  transition: 1s ease-in-out;
`;

export const SideNavToggleButton = styled.input`
  width: 50px;
  height: 50px;
  position: fixed;
  z-index: 200;
  left: 0;
  transition: 0.5s;
  &:checked {
    left: 250px;
  }
  &:checked + div {
    width: 320px;
  }
`;
