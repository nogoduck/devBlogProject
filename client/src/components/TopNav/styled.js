import styled from 'styled-components';

export const Header = styled.div`
  color: #d2dae2;
  position: fixed;
  background-color: transparent;
  font-size: 30px;
  height: 48px;
  left: 0px;
  right: 0;
  z-index: 1024;
  padding-left: 200px;
  transition: 0.2s ease-in-out;

  //@media screen and (min-width: 768px) and (max-width: 1023px) {
  //  //tablet
  //  left: 48px;
  //}
`;

export const Space = styled.div`
  height: 48px;
  .scroll {
    box-shadow: 0 0 4px 2px #a8b6bd;
    background-color: #fff;
  }
`;
