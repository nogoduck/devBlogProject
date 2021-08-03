import { Link, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Title,
  ProfileImage,
  VideoCardContainer,
  VideoContainer,
  VideoInfo,
  VideoArticle,
  VideoInfoContainer,
  VideoTitle,
  VideoLength,
  VideoView,
  VideoCreatedAt,
  ImageContainer,
} from './styled';
import VideoUploadPage from '../VideoUploadPage';
import Static from '../../setupStatic';
import dayjs from 'dayjs';
import Gravatar from 'react-gravatar';
import { changeTime2 } from '../../utils/Time';
import DefaultProfile from '../../components/DefaultProfile';
function VideoPage() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/video/getAll')
      .then(({ data }) => {
        if (data.success) {
          setVideoList(data.videos);
        } else {
          // alert('영상을 불러올 수 없습니다.');
          console.log('NULL Videos');
        }
      })
      .catch((err) => {
        // alert('영상을 불러올 수 없습니다.' + err);
        console.log('NULL Videos');
      });
  }, []);

  const videoCards = videoList.map((v) => {
    let momentVideoLength = dayjs(1000 * v.videoLength).format(`m : ss`);
    let momentCreatedAt = changeTime2(v.createdAt);
    return (
      <VideoCardContainer>
        <Link to={`/menu/video/${v._id}`}>
          <ImageContainer>
            <img src={`${Static.URI}${v.thumbnailPath}`} alt="thumbnail_IMG" />
            <VideoLength>{momentVideoLength}</VideoLength>
          </ImageContainer>

          <VideoInfoContainer>
            <ProfileImage>
              {v.publisher.imagePath ? (
                <img
                  src={`${Static.URI}${v.publisher.imagePath}`}
                  alt="profile_image"
                />
              ) : (
                <Gravatar
                  email={v.publisher.email}
                  size={50}
                  default="wavatar"
                />
              )}
            </ProfileImage>
            <VideoInfo>
              <VideoTitle>{v.title}</VideoTitle>
              <VideoArticle>{v.publisher.name}</VideoArticle>
              <VideoArticle>
                <VideoView>{v.views}</VideoView>
                <VideoCreatedAt>{momentCreatedAt}</VideoCreatedAt>
              </VideoArticle>
            </VideoInfo>
          </VideoInfoContainer>
        </Link>
      </VideoCardContainer>
    );
  });

  return (
    <>
      <Title>영상</Title> <br />
      <VideoContainer>{videoCards}</VideoContainer>
      <Link to="/menu/video/upload">영상 등록</Link>
      <DefaultProfile useName={true} />
    </>
  );
}

export default withRouter(VideoPage);
