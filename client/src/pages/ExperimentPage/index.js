import axios from "axios";
import { withRouter } from "react-router-dom";
import React, { useState } from "react";
// import { Container } from "./styled";

import ModalSection from "./ModalSection";

function ExperimentPage({ history }) {
  const resetPage = () => {
    history.push("/menu/experiment");
  };
  const [blobURL, setBlobURL] = useState("");
  const [fileURL, setFileURL] = useState("");
  function inputFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();

    formData.append("file", file);

    let blob = new Blob([file], {
      type: "image/png",
    });

    console.log("blob >> ", blob);

    const blobURL = window.URL.createObjectURL(blob);
    setBlobURL(window.URL.createObjectURL(blob));
    const fileURL = window.URL.createObjectURL(file);
    console.log("convert blob >> ", blobURL);
    console.log("convert file >> ", fileURL);

    const config = {
      header: {
        processData: false,
        "content-type": false,
      },
    };

    console.log("formData >> ", formData);

    axios
      .post("/api/users/update/image", formData, config)
      .then(({ data }) => {
        console.log("save file success...");
        console.log("data >> ", data);
      })
      .catch((err) => {
        console.log("save file failed...");
      });
  }

  return (
    <>
      <button onClick={resetPage}>Page Reset</button>
      <h3>blob data 처리</h3>
      <h4>파일 입력 후 blob 변환</h4>
      <input type="file" onChange={inputFile} />
      <h4>blob 데이터 입력 후 출력</h4>
      <input type="file" />
      <div>{blobURL}</div>
      <img src={`${blobURL}`} />
      <hr />

      <ModalSection />
    </>
  );
}

export default withRouter(ExperimentPage);
