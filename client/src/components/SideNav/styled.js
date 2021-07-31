import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body{
    .SideNavExtends{
      width:200px;
    }
    .SideNavHidden{
      left:-30px;
    }
    .ExtendsActive{
      left:0;
      transform:rotate(-180deg);
      padding: 6px 164px 0px 16px;
    }
  }
`;
export const Container = styled.div`
  top: 0;
  left: 0;
  flex: none;
  display: flex;
  flex-direction: column;
  width: 48px;
  height: 100%;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
  z-index: 2048;
  position: fixed;
  transition: 0.2s ease-in-out;
  overflow: hidden;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //tablet
  }

  @media screen and (max-width: 767px) {
    //mobile
  }

  & ul {
    padding: 90px 0 24px 0px;
  }

  & li {
    margin: 8px 0;
    padding: 5px 15px;
    color: #2f3640;
    font-size: 16px;
    transition: 0s 0s ease-in-out;
    position: relative;
  }

  & #active {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px 0 0 2px;
    color: #000;
  }

  & li:hover {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 2px 0 0 2px;
  }
`;

export const Space = styled.div`
  transition: 0.2s;
  position: relative;
  width: 48px;
  flex: none;
`;

export const MenuButton = styled.button`
  position: fixed;
  color: #757575;
  background-color: transparent;
  font-size: 24px;
  top: 12px;
  left: 8px;
  border: none;
  z-index: 2050;
  &:hover {
    cursor: pointer;
  }
`;

export const MenuIcon = styled.span`
  padding-right: 8px;
`;

export const MenuTitle = styled.span``;

export const ExtendsButton = styled.button`
  position: absolute;
  bottom: 8px;
  left: -1px;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 24px;
  overflow: hidden;
  transition: 0.2s;
  padding: 6px 20px 0px 14px;

  &:hover {
    cursor: pointer;
  }
`;
