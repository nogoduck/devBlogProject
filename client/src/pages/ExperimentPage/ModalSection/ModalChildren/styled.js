import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border: 5px dashed green;
  &::before {
    content: "Container";
    position: absolute;
    top: 0;
    left: 0;
    margin: 0px 8px;
    font-size: 32px;
    font-weight: 800;
    color: green;
  }
`;

export const Modal = styled.div`
  border: 3px solid blue;
  padding: 30px;
  &::before {
    content: "Modal";
    position: absolute;
    top: 0;
    left: 0;
    margin: 0px 8px;
    font-size: 24px;
    font-weight: 800;
    color: blue;
  }
`;
