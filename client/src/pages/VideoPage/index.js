import { Link, withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CardContainer, VideoContainer } from './styled';
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
          alert('영상을 불러올 수 없습니다.');
        }
      })
      .catch((err) => {
        alert('영상을 불러올 수 없습니다.' + err);
      });
  }, []);

  const videoCards = videoList.map((v) => {
    let momentVideoLength = moment
      .utc(1000 * v.videoLength)
      .format('H[h] mm[m] ss[s]');
    let momentCreatedAt = moment(v.createdAt).format('YY MMM Do ');
    console.log('videoPlayTime >> ', momentVideoLength);
    console.log('momentCreatedAt >> ', momentCreatedAt);

    return (
      <CardContainer>
        <Link to={`/menu/video/${v._id}`}>
          <img src={`${Static.URI}${v.thumbnailPath}`} alt="thumbnail_IMG" />
          <div className="duration__absolute">
            <div className="duration__relative">
              <span>{momentVideoLength}</span>
            </div>
          </div>
          <div className="video__info">
            <div className="title">
              <span className="profile__img">
                {v.publisher.imagePath ? (
                  <img
                    src={`${Static.URI}${v.publisher.imagePath}`}
                    alt="profile_image"
                  />
                ) : (
                  <Gravatar
                    email={v.publisher.email}
                    size={250}
                    default="wavatar"
                  />
                )}
              </span>
              <span className=" video__title">{v.title}</span>
            </div>
            <div className="video__article video__writerName">
              {v.publisher.name}
            </div>
            <div className="video__article video__date">
              {v.view} · {momentCreatedAt}
            </div>
          </div>
        </Link>
      </CardContainer>
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
