import styled from 'styled-components';

export const Profile = styled.div`
  margin: 5px 25px 0 0;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
  & img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 8px;
  }
  & div {
    //white-space: nowrap;
    //overflow: hidden;
  }
`;
