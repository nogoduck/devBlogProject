import styled from "styled-components";

export const Container = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 0 auto;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
  z-index: 1500;
  /* position: fixed; */
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //tablet
    width: 48px;
  }

  @media screen and (max-width: 767px) {
    //mobile
    /* display: none; */
    top: 48px;
    border-radius: 0 0 16px 0;
  }

  & ul {
    padding: 24px 0 24px 0px;
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
