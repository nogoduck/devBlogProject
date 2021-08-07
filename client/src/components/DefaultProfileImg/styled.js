import styled from 'styled-components';

export const Profile = styled.div`
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  & img {
    width: 38px;
    height: 38px;
    border-radius: 50%;
  }
`;
