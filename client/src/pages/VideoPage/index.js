import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import VideoUploadPage from '../VideoUploadPage';
import Static from '../../setupStatic';

function VideoPage() {
  const [video, setVideo] = useState([]);

  useEffect(() => {
    axios
      .get('/getAll')
      .then(({ data }) => {})
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log(Static.URI);
  return (
    <div>
      Movie, drama, docu <br />
      <VideoUploadPage></VideoUploadPage>
    </div>
  );
}

export default withRouter(VideoPage);
