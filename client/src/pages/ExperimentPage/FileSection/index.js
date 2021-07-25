import axios from "axios";
import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import { Container, Table1, Table2, Image } from "./styled";

function ExperimentPage({ history }) {
  const resetPage = () => {
    history.push("/menu/experiment");
  };
  const [blobURL, setBlobURL] = useState("");
  const [fileURL, setFileURL] = useState("");
  const [outputURL1, setOutputURL1] = useState(true);
  const [outputURL2, setOutputURL2] = useState(true);

  function inputFile(e) {
    const file = e.target.files[0];
    const formData = new FormData();

    let blob = new Blob([file], {
      type: "image/png",
    });

    console.log("blob >> ", blob);

    const blobURL = window.URL.createObjectURL(blob);
    setBlobURL(window.URL.createObjectURL(blob));
    const fileURL = window.URL.createObjectURL(file);
    console.log("convert blob >> ", blobURL);
    console.log("convert file >> ", fileURL);

    formData.append("file", blob);
    const config = {
      // header: {
      //   processData: false,
      //   "content-type": false,
      // },
      header: {
        "Content-Type": "multipart/form-data",
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

  const outputFile = (e) => {
    const reader = new FileReader();
    // const readAsDataURL = reader.readAsDataURL(e.target.files[0]);
    // const creteObjectURL = window.URL.createObjectURL(e.target.files[0]);
    setOutputURL1(reader.readAsDataURL(e.target.files[0]));
    setOutputURL2(window.URL.createObjectURL(e.target.files[0]));
    console.log("readAsDataURL > ", outputURL1);
    console.log("creteObjectURL >> ", outputURL2);
  };

  const getBlobFile = () => {
    axios
      .post("/api/test")
      .then(({ data }) => {
        console.log("data >> ", data);
        // console.log(window.URL.createObjectURL(data));
        setOutputURL2(window.URL.createObjectURL(data));

        const reader = new FileReader();
        // console.log(reader.readAsDataURL(data));
        setOutputURL1(reader.readAsDataURL(data));
      })
      .catch((err) => {
        console.log("err >> ", err);
      });
  };

  return (
    <Container>
      <Table1>
        <button onClick={resetPage}>Page Reset</button>
        <button onClick={getBlobFile}>파일 가져오기</button>
        <h3>File 처리</h3>
        <h4>파일 입력 후 blob 변환</h4>
        <input type="file" onChange={inputFile} />
        <h4>blob 데이터 입력 후 출력</h4>
        <input type="file" onChange={outputFile} />
      </Table1>
      <Table2>
        <Image>
          <span>
            blob URL : <br />
            {blobURL}
          </span>
          <img src={`${blobURL}`} width="150px" height="150px" />
        </Image>
        <Image>
          <span>1</span>
          {outputURL1 && (
            <img src={`${outputURL1}`} width="150px" height="150px" />
          )}
        </Image>
        <Image>
          <span>2</span>
          {outputURL2 && (
            <img src={`${outputURL2}`} width="150px" height="150px" />
          )}
        </Image>
      </Table2>
    </Container>
  );
}

export default withRouter(ExperimentPage);
