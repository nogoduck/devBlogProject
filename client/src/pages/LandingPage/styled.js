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
