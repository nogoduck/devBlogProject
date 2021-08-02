import styled from 'styled-components';
import backgroundImg from './BackgroundImage.png';

export const LandingContainer = styled.div`
  border: 20px solid rgba(45, 112, 182, 1);
  border-radius: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Background = styled.div`
  background-color: cornflowerblue;
  opacity: 0.5;
  //color: red;
  border: 3px solid red;
  width: 100%;
  height: 300px;
  position: absolute;
  top: 0;
  //z-index: 10;
`;

export const DIV = styled.div`
  width: 10px;
  height: 10px;
  border: 1px solid greenyellow;
  &:hover {
    cursor: pointer;
  }
  z-index: 10;
`;
//적용안됌
export const Title = styled.div`
  font-size: 160px;
  background: linear-gradient(
    142deg,
    rgba(16, 250, 43, 1) 0%,
    rgba(45, 112, 182, 1) 50%,
    rgba(255, 1, 1, 1) 100%
  );
  --webkit-background-clip: text;
  color: transparent;
  font-weight: 800;
  margin-bottom: 32px;
`;
