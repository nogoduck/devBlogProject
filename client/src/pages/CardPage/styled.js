import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.div`
  width: 160px;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  & b:nth-child(1) {
    width: 20px;
    height: 20px;
    border: 1px solid black;
    position: absolute;
    top: 0;
    left: 0;
    border: 5px ridge #0652dd;
    border-width: 5px 0 0 5px;
  }

  & b:nth-child(2) {
    width: 20px;
    height: 20px;
    border: 1px outset black;
    position: absolute;
    bottom: 0;
    right: 0;
    border: 5px groove #0652dd;
    border-width: 0 5px 5px 0;
  }
`;
