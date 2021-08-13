import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  #SideNavExtends{
    width:200px;
  }
  #ExtendsActive{
    left:0;
    transform:rotate(180deg);
    padding: 6px 164px 0px 16px;
  }
  #SideNavMobileHidden{
    width:0px;
    left:-100px;
  }
  #SideNavMobileOpen{
    width:200px;
  }
    
`;

export const Container = styled.div`
  top: 0;
  left: 0px;
  flex: none;
  width: 48px;
  height: 100%;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
  z-index: 2048;
  position: fixed;
  transition: 0.2s ease-in-out;
  //overflow: hidden; //사용하면 hover메뉴 사용 불가능
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //tablet
  }

  @media screen and (max-width: 767px) {
    //mobile
  }

  & ul {
    padding: 64px 0 24px 0px;
  }

  & li {
    margin: 8px 0;
    padding: 5px 15px;
    color: #2f3640;
    font-size: 16px;
    transition: 0s 0s ease-in-out;
    position: relative;
    display: flex;
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

  & .menu_item:hover .menu_hover {
    //color: red;
    display: block;
  }

  & .menu_hover {
    display: none;
  }
`;

export const Space = styled.div`
  transition: 0.2s;
  position: relative;
  width: 48px;
  flex: none;

  @media screen and (max-width: 920px) {
    //mobile
    width: 0px;
  }
`;
export const MenuButtonContainer = styled.div`
  left: -6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  cursor: pointer;
  width: 46px;
  height: 46px;
  z-index: 2050;
  position: fixed;
  & #close::before {
    transform: translateY(0px) rotate(45deg);
    box-shadow: 0 0 0 #757575;
  }
  & #close::after {
    transform: translateY(0px) rotate(-45deg);
  }
`;
export const MenuButton = styled.div`
  &::before {
    transition: 0.2s;
    content: '';
    width: 18px;
    height: 2px;
    background: #757575;
    position: absolute;
    transform: translateY(-6px);
    box-shadow: 0 6px 0 #757575;
  }

  &::after {
    transition: 0.2s;
    content: '';
    width: 18px;
    height: 2px;
    background: #757575;
    position: absolute;
    transform: translateY(6px);
  }
  //position: fixed;
  //color: #757575;
  //background-color: transparent;
  //font-size: 24px;
  //top: 6px;
  //left: 8px;
  //border: none;
  //z-index: 2050;
  //&:hover {
  //  cursor: pointer;
  //}
`;

export const MenuIcon = styled.span`
  padding-right: 8px;
`;

export const MenuTitle = styled.span`
  white-space: nowrap;
`;

export const ExtendsButton = styled.button`
  position: absolute;
  top: 8px;
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
export const HoverItem = styled.div`
  background-color: #414c5d;
  color: #ebecee;
  white-space: nowrap;
  padding: 2px 8px;
  font-size: 12px;
  position: absolute;
  top: 8px;
  left: 64px;
  border-radius: 4px;
  z-index: 5000;
`;
