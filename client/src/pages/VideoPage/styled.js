import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  border: 2px solid green;
`;
export const VideoCardContainer = styled.div`
  //border: 2px solid red;
  position: relative;
  min-width: 250px;
  max-width: 200px;
  width: 100%;
  padding: 8px;
  & img {
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
  padding: 0px 3px;
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
