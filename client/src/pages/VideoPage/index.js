import { Link, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Container,
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
  Notice,
  UploadLink,
} from './styled';
import Static from '../../setupStatic';
import dayjs from 'dayjs';
import Gravatar from 'react-gravatar';
import { changeTime2 } from '../../utils/Time';
import PulseLoader from 'react-spinners/PulseLoader';
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
        console.log('NULL Videos', err);
      });
  }, []);

  const videoCards = videoList.map((v) => {
    let momentVideoLength = dayjs(1000 * v.videoLength).format(`m : ss`);
    let momentCreatedAt = changeTime2(v.createdAt);
    return (
      <VideoCardContainer>
        <Link to={`/video/${v._id}`}>
          <ImageContainer>
            <img src={`${Static.URI}${v.thumbnailPath}`} alt="thumbnail_IMG" />
            <VideoLength>{momentVideoLength}</VideoLength>
          </ImageContainer>

          <VideoInfoContainer>
            <ProfileImage>
              {v.publisher && v.publisher.imagePath ? (
                <img
                  src={`${Static.URI}${v.publisher.imagePath}`}
                  alt="profile_image"
                />
              ) : (
                <Gravatar
                  email={v.publisher && v.publisher.email}
                  size={50}
                  default="wavatar"
                />
              )}
            </ProfileImage>
            <VideoInfo>
              <VideoTitle>{v.title}</VideoTitle>
              <VideoArticle>{v.publisher && v.publisher.name}</VideoArticle>
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
    <Container>
      <Title>영상</Title> <br />
      <Notice>
        배포한 서버에 썸네일 생성 관련 라이브러리가 설치되어 있지 않아서 영상
        업로드가 불가능합니다.
      </Notice>
      <VideoContainer>
        {videoCards ? (
          videoCards
        ) : (
          <PulseLoader color="gray" size={8} margin={4} />
        )}
      </VideoContainer>
      <UploadLink>
        <Link to="/video/upload">영상 등록</Link>
      </UploadLink>
    </Container>
  );
}

export default withRouter(VideoPage);
