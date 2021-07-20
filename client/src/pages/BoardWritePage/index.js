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
  EditorContainer,
} from "./styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import DocumentEditor from "@ckeditor/ckeditor5-build-decoupled-document";

function BoardWritePage({ history }) {
  const user = useSelector((state) => state.user);
  console.log("user > ", user);

  //글쓰기 함수 처리해줘야함 + 서버로 요청 보내서 db에 삽입하기
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  // const [File, setFile] = useState("")

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (editorState) => {
    console.log(editorState);
    setDescription(editorState);
  };

  console.log("email : ", user.authStatus.email);
  const onSubmit = () => {
    const data = {
      writer: user.authStatus.name,
      email: user.authStatus.email,
      title: title,
      description: description,
    };

    axios
      .post("/api/board/create", data)
      .then((res) => {
        console.log(res);
        alert("게시글이 성공적으로 등록되었습니다");
        history.push("/menu/board");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("desc > ", description);

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
      <EditorContainer>
        {/* <CKEditor
          editor={DocumentEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        /> */}
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
          onBlur={(event, editor) => {
            console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            console.log("Focus.", editor);
          }}
        />
      </EditorContainer>
      {description}
      <br />
      <InputDescription
        id="description"
        // value={description}
        // onChange={onChangeDescription}
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
