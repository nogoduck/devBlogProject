import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;
export const Notice = styled.div`
  border: 2px solid orange;
  border-radius: 5px;
  padding: 16px;
  font-weight: 800;
  margin: 8px 0;
`;
export const Title = styled.div`
  font-size: 20px;
  margin-bottom: 12px;
`;

export const UploadLink = styled.div`
  position: absolute;
  bottom: 0px;
  right: 0;
  & a {
    color: #636e72;
  }
  & a:hover {
    color: #0984e3;
  }
`;

export const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 12px;
`;
export const VideoCardContainer = styled.div`
  position: relative;

  @media screen and (max-width: 670px) {
    width: 100%;
  }

  & img {
    aspect-ratio: 16/9;
    width: 100%;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
`;
export const VideoLength = styled.div`
  position: absolute;
  bottom: 10px;
  right: 5px;
  background-color: #000;
  color: #fff;
  //font-weight: 800;
  font-size: 11px;
  padding: 0 3px;
  border-radius: 3px;
`;
export const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2px;
`;
export const VideoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;
export const VideoTitle = styled.div`
  font-size: 15px;
  color: #000;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  width: 200px;
  line-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const VideoArticle = styled.div`
  font-size: 14px;
  color: gray;
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
export const ProfileImage = styled.span`
  flex: none;
  color: red;
  margin-right: 10px;

  & > img {
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;
