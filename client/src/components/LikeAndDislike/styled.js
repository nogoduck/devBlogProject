import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: #717171;
  font-size: 13px;
`;
export const LikeButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0 12px 0 0px;
  &:hover {
    color: #348dff;
  }
`;
export const DislikeButton = styled.div`
  padding: 0 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: #348dff;
  }
`;
