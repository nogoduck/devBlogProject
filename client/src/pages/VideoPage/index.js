import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import VideoUploadPage from '../VideoUploadPage';
import Static from '../../setupStatic';

function VideoPage() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    axios
      .get('/api/video/getAll')
      .then(({ data }) => {
        if (data.success) {
          console.log('v >> ', data.videos);
          setVideoList(data.videos);
        } else {
          console.log('get Videos >> failed....');
        }
      })
      .catch((err) => {
        console.log('getVideo err > ', err);
      });
  }, []);

  return (
    <div>
      Movie, drama, docu <br />
      <div>{Static.URI}</div>
      <VideoUploadPage></VideoUploadPage>
    </div>
  );
}

export default withRouter(VideoPage);
