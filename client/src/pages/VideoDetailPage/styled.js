import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  & a {
    color: #000;
  }
  & a:hover {
    color: #0984e3;
  }
  & video {
    margin: 12px 0;
  }
  & hr {
    width: 100%;
    border-top: 1px solid gray;
  }
`;
export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const VideoTitle = styled.div`
  & div {
    margin-bottom: 8px;
  }
  & .etc {
    font-size: 16px;
    color: gray;
  }
`;
export const VideoView = styled.span`
  &::before {
    content: '조회수 ';
  }
  &::after {
    content: '회';
  }
`;
export const VideoCreatedAt = styled.span`
  &::before {
    content: ' · ';
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex: none;
  margin-right: 10px;

  & > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 4px;
  }
`;
export const VideoDescription = styled.div``;
