import { Container } from "./styled";
import React, { useState, useCallback } from "react";
import axios from "axios";

function WritePage() {
  //글쓰기 함수 처리해줘야함 + 서버로 요청 보내서 db에 삽입하기
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [File, setFile] = useState("")

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onSubmit = () => {
    const data = {
      title: title,
      description: description,
    };

    console.log(data);

    axios
      .post("http://localhost:5050/api/board/create", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const

  return (
    <Container>
      {/* <form action=""></form> */}
      <h3>글쓰기</h3>
      <label For="title">제목</label>
      <input type="text" id="title" value={title} onChange={onChangeTitle} />
      <label For="description">내용</label>
      <input
        type="text"
        id="description"
        value={description}
        onChange={onChangeDescription}
      />
      <div id="file">
        <label For="title">첨부파일</label>
        <input type="text" id="file" />
        <button>추가</button>
        <button>삭제</button>
      </div>
      <button onClick={onSubmit}>등록</button>
    </Container>
  );
}

export default WritePage;
