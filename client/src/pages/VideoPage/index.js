import { Link, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ProfileImage,
  VideoCardContainer,
  VideoContainer,
  VideoInfo,
  VideoArticle,
  VideoInfoContainer,
  VideoTitle,
  VideoLength,
  VideoView,
} from './styled';
import VideoUploadPage from '../VideoUploadPage';
import Static from '../../setupStatic';
import moment from 'moment';
import Gravatar from 'react-gravatar';
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
    let momentVideoLength = moment.utc(1000 * v.videoLength).format(`m : ss`);
    let momentCreatedAt = moment(v.createdAt).format('YY MMM Do ');
    console.log('videoPlayTime >> ', momentVideoLength);
    console.log('momentCreatedAt >> ', momentCreatedAt);

    return (
      <VideoCardContainer>
        <Link to={`/menu/video/${v._id}`}>
          <img src={`${Static.URI}${v.thumbnailPath}`} alt="thumbnail_IMG" />
          <VideoLength>{momentVideoLength}</VideoLength>

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
                <VideoView>{v.views}</VideoView>· {momentCreatedAt}
              </VideoArticle>
            </VideoInfo>
          </VideoInfoContainer>
        </Link>
      </VideoCardContainer>
    );
  });

  return (
    <div>
      Movie, drama, docu <br />
      <div>{Static.URI}</div>
      <VideoContainer>{videoCards}</VideoContainer>
      <Link to="/menu/video/upload">
        <button>영상 등록</button>
      </Link>
      <VideoUploadPage />
    </div>
  );
}

export default withRouter(VideoPage);
