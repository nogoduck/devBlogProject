import styled from "styled-components";

export const MenuItems = styled.div`
  border-radius: 0 0 10px 10px;
  background-color: #3498db;
  top: 60px;
  right: 60px;
  border: 1px solid #3498db;
  border-width: 0 1px 1px 1px;
  transition: 0.2s 0s ease-in-out;
  font-size: 16px;
  font-weight: 12px;
  color: #fff;
  z-index: 10;
  & a {
    color: #fff;
  }

  & li {
    padding: 6px 0;
    cursor: pointer;
    width: 100%;
    border-bottom: 1px solid #fff;
    text-align: center;
    transition: 0.2s;
    color: #fff;
  }
  & li:last-child {
    border: none;
  }
  & li:last-child:hover {
    border: none;
    color: #fff;
  }

  & #clock:hover {
    border-radius: 0 0 10px 10px;
  }
  & li:hover {
    box-shadow: 0px 0px 5px 3px #2980b9 inset;
    color: #fff;
  }
`;
