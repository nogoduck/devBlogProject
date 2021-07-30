import { withRouter, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Static from '../../setupStatic';

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
      <div>
        <Link to="/menu/video">
          <button>뒤로가기</button>
        </Link>
        <video
          style={{ width: '100%' }}
          src={`${Static.URI}${video.videoPath}`}
          controls
        />
        <img src="http://placehold.it/50x50" alt="profile_image" />
        {video.publisher.name}
        {video.description}
      </div>
    );
  } else {
    return <>영상 불러오는중...</>;
  }
}

export default withRouter(VideoDetailPage);
