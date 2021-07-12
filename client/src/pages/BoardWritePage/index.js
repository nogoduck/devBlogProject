import { withRouter } from "react-router-dom";
import {
  Container,
  InputTitle,
  InputDescription,
  Label,
  SubmitButton,
  BoardHeader,
  Title,
  AddButton,
  CancelButton,
  Box,
  BoxFile,
} from "./styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BoardWritePage() {
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
      <Link to="/menu/board">뒤로가기</Link>
      <BoardHeader>
        <Title>글쓰기</Title>
        <SubmitButton onClick={onSubmit}>등록</SubmitButton>
      </BoardHeader>
      <Label For="title">제목</Label>
      <InputTitle
        type="text"
        id="title"
        value={title}
        onChange={onChangeTitle}
      />
      <Label For="description">내용</Label>
      <InputDescription
        id="description"
        value={description}
        onChange={onChangeDescription}
      />
      <Label For="title">첨부파일</Label>&nbsp;
      <Box>
        <AddButton>추가</AddButton>
        <CancelButton>삭제</CancelButton>
        <BoxFile>example.png</BoxFile>
      </Box>
    </Container>
  );
}

export default withRouter(BoardWritePage);
