import { withRouter } from "react-router-dom";
import {
  Container,
  InputTitle,
  Label,
  SubmitButton,
  BoardHeader,
  Title,
  AddButton,
  CancelButton,
  Box,
  BoxFile,
  UpdateButton,
  DeleteModalSubmitButton,
  DeleteModalCancelButton,
  DeleteButton,
} from "./styled";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ConfirmModal from "../../components/ConfirmModal";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
// import DocumentEditor from "@ckeditor/ckeditor5-build-decoupled-document";

function BoardWritePage({ history, postId, changeTitle, changeDescription }) {
  const user = useSelector((state) => state.user);
  console.log("user > ", user);

  //글쓰기 함수 처리해줘야함 + 서버로 요청 보내서 db에 삽입하기
  const [title, setTitle] = useState(changeTitle);
  const [description, setDescription] = useState(changeDescription);
  // const [File, setFile] = useState("")
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const onCloseConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const onClickConfirmModal = () => {
    setShowConfirmModal(true);
  };

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

  const onClickPostUpdateComplete = () => {
    //DB에 업데이트 요청
    const variable = { _id: postId, title: title, description: description };
    console.log("post update, variable :: ", variable);
    axios
      .post("/api/board/update", variable)
      .then(({ data }) => {
        console.log("detail data :: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickPostDelete = () => {
    //DB로부터 삭제요청
    const deleteId = {
      _id: postId,
    };
    axios
      .post("/api/board/delete", deleteId)
      .then(({ data }) => {
        console.log("delete result :: ", data);
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
        <Title>{changeTitle ? "글수정하기" : "글쓰기"}</Title>
        {changeTitle && (
          <DeleteButton onClick={onClickConfirmModal}>삭제</DeleteButton>
        )}
        {changeTitle && (
          <ConfirmModal show={showConfirmModal} close={onCloseConfirmModal}>
            <DeleteModalCancelButton>취소</DeleteModalCancelButton>
            <DeleteModalSubmitButton onClick={onClickPostDelete}>
              확인
            </DeleteModalSubmitButton>
            게시글을 삭제하면 복구가 불가능합니다
          </ConfirmModal>
        )}

        {changeTitle ? (
          <UpdateButton onClick={onClickPostUpdateComplete}>
            수정완료
          </UpdateButton>
        ) : (
          <SubmitButton onClick={onSubmit}>등록</SubmitButton>
        )}
      </BoardHeader>
      <Label For="title">제목</Label>
      <InputTitle
        type="text"
        id="title"
        value={title}
        onChange={onChangeTitle}
      />
      <Label For="description">내용</Label>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
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
