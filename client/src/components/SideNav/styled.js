import styled from "styled-components";

export const Container = styled.div`
  flex: none;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 100vh;
  border: none;
  background-color: #fff;
  box-shadow: 0 0 4px 1px #c8cbcd;
  z-index: 1500;
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    //tablet
    width: 64px;
  }

  @media screen and (max-width: 767px) {
    //mobile
    /* display: none; */
  }
  & ul {
    padding: 24px 0 24px 8px;
  }

  & li {
    margin: 8px 0;
    padding: 5px 15px;
    color: #2f3640;
    font-size: 16px;
    transition: 0s 0s ease-in-out;
    position: relative;
  }

  & .active {
    /* background: rgba(0, 0, 0, 0.1); */
    background: #fff;
    border-radius: 12px 0 0 12px;
    color: #000;
  }

  & li:hover {
    /* background: rgba(0, 0, 0, 0.1); */
    background: #fff;
    border-radius: 12px 0 0 12px;
  }

  & li b:nth-child(1) {
    border: none;
    /* border: 1px solid black; */
    width: 10px;
    height: 10px;
    background: #fff;
    position: absolute;
    right: 0px;
    top: -10px;
    display: none;
  }

  & li b:nth-child(1)::before {
    content: "";
    position: absolute;
    border-bottom-right-radius: 12px;
    width: 100%;
    height: 100%;
    background: #ced6e0;
  }

  & li b:nth-child(2) {
    border: none;
    width: 10px;
    height: 10px;
    background: #fff;
    position: absolute;
    right: 0px;
    bottom: -10px;
    display: none;
  }

  & li b:nth-child(2)::before {
    content: "";
    position: absolute;
    border-top-right-radius: 12px;
    width: 100%;
    height: 100%;
    background: #ced6e0;
  }

  /* & li:hover b:nth-child(1), */
  & li:hover b:nth-child(2),
  /* & .active b:nth-child(1), */
  & .active b:nth-child(2) {
    display: block;
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
