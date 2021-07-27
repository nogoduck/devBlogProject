import styled from "styled-components";

export const Container = styled.div`
  border: 2px solid purple;
  position: relative;
`;
export const TopNav = styled.div`
  position: relative;
  border: 2px solid #34ace0;
  width: 100%;
  height: 48px;
`;
export const Main = styled.div`
  position: relative;
  border: 2px solid #227093;
  display: flex;
  flex-direction: row;
`;
export const SideNav = styled.div`
  position: relative;
  border: 2px solid #33d9b2;
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
