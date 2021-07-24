import axios from "axios";
import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import { Container, Button } from "./styled";

import Modal from "./Modal";
import ModalParents from "./ModalParents";
import ModalChildren from "./ModalChildren";
function ExperimentPage({ history }) {
  const [showModal, setShowModal] = useState(false);
  const [showModalParents, setShowModalParents] = useState(false);
  const [showModalChildren, setShowModalChildren] = useState(false);

  const onClickModal = () => {
    console.log("showModal: ", showModal);
    setShowModal((prev) => !prev);
  };

  const onClickParents = () => {
    setShowModalParents((prev) => !prev);
  };

  const onClickChildren = () => {
    setShowModalChildren((prev) => !prev);
  };
  const goParents = () => {
    setShowModalChildren(false);
    setShowModalParents(true);
  };
  const goChildren = () => {
    setShowModalParents(false);
    setShowModalChildren(true);
  };

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
      <ol>
        <li style={{ listStyle: "unset" }}>모달간에 전환</li>
        <li style={{ listStyle: "unset" }}>
          모달의 자식모달 호출, 자식모달의 자식 호출
        </li>
      </ol>
      <Container>
        <Button onClick={onClickModal}>Modal Practice Button</Button>
        <button onClick={onClickParents}>
          303 <hr /> (Parent)
        </button>
        <button onClick={onClickChildren}>
          41-3 <hr /> (Children)
        </button>
        <ModalParents show={showModalParents}>
          <button onClick={goChildren}>41-3으로 이동합니다</button>
        </ModalParents>
        <ModalChildren show={showModalChildren}>
          <button onClick={goParents}>303으로 이동</button>
        </ModalChildren>
        <Modal showModal={showModal} setShowModal={setShowModal}></Modal>
      </Container>
    </>
  );
}

export default withRouter(ExperimentPage);
