import { withRouter, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Static from '../../setupStatic';
import {
  Container,
  VideoInfo,
  VideoTitle,
  Profile,
  VideoDescription,
  VideoView,
  VideoCreatedAt,
} from './styled';
import { timeFormat } from '../../utils/Time';
import Gravatar from 'react-gravatar';

function VideoDetailPage({ match }) {
  const videoId = match.params.videoId;
  const [video, setVideo] = useState({});

  useEffect(() => {
    const payload = {
      videoId,
    };
    axios.post('/api/video/detailVideo', payload).then(({ data }) => {
      if (data.success) {
        console.log('v >> ', data);
        setVideo(data.getVideo);
      } else {
        alert('영상을 불러올 수 없습니다.');
      }
    });
  }, []);
  console.log('video >> ', video);

  if (video.publisher) {
    return (
      <Container>
        <Link to="/menu/video">뒤로가기</Link>
        <video
          style={{ width: '100%' }}
          src={`${Static.URI}${video.videoPath}`}
          controls
        />

        <VideoInfo>
          <VideoTitle>
            <div>{video.title}</div>
            <div className="etc">
              <VideoView>{video.views}</VideoView>
              <VideoCreatedAt>{timeFormat(video.createdAt)}</VideoCreatedAt>
            </div>
          </VideoTitle>
          <hr />
          <Profile>
            {video.publisher.imagePath ? (
              <img
                src={`${Static.URI}${video.publisher.imagePath}`}
                alt="profile_image"
              />
            ) : (
              <Gravatar
                email={video.publisher.email}
                size={250}
                default="wavatar"
              />
            )}
            {video.publisher.name}
          </Profile>
          <VideoDescription>{video.description}</VideoDescription>
        </VideoInfo>
      </Container>
    );
  } else {
    return <>영상 불러오는중...</>;
  }
}

export default withRouter(VideoDetailPage);
