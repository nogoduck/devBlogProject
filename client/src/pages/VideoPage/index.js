import { withRouter } from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios";

import VideoUploadPage from "../VideoUploadPage";

function VideoPage() {
  const[video, setVideo] = useState([])

  useEffect(() => {
    axios.get('/getAll').then((({data}) => {

    })).catch((err) => {
      console.log(err);

    })
  }, [])

  return <div>Movie, drama, docu
    <VideoUploadPage></VideoUploadPage>
  </div>;

}

export default withRouter(VideoPage);
