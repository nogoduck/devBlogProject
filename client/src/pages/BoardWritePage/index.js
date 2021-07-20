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
import { Link, withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { GiCheckMark } from "react-icons/gi";
import { RiAlarmWarningLine } from "react-icons/ri";

import ConfirmModal from "../../components/ConfirmModal";

//postId가 존재하면 글을 수정하는 페이지로 전환된다
function BoardWritePage({ history, postId, changeTitle, changeDescription }) {
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState(changeTitle);
  const [description, setDescription] = useState(changeDescription);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  //게시글 생성 요청
  const onSubmitCreatePost = () => {
    const paylaod = {
      writer: user.authStatus.name,
      email: user.authStatus.email,
      title: title,
      description: description,
    };

    axios
      .post("/api/board/create", paylaod)
      .then(({ data }) => {
        console.log("Create Post data >> ", data);

        alert("게시글이 성공적으로 등록되었습니다");
        history.push("/menu/board");
      })
      .catch((err) => {
        console.log("Create Post Error >> ", err);
      });
  };

  //게시글 수정 요청
  const onSubmitUpdatePost = () => {
    const paylaod = { _id: postId, title: title, description: description };

    axios
      .post("/api/board/update", paylaod)
      .then(({ data }) => {
        console.log("Update Post data >> ", data);
        history.push(`/menu/board/${postId}`);
      })
      .catch((err) => {
        console.log("Update Post Error >> ", err);
      });
  };

  //게시글 삭제 요청
  const onSubmitDeletePost = () => {
    const payload = { _id: postId };

    axios
      .post("/api/board/delete", payload)
      .then(({ data }) => {
        console.log("Delete Post data >> ", data);
        onCloseDeleteConfirmModal();
        history.push("/menu/board");
      })
      .catch((err) => {
        console.log("Delete Post Error >> ", err);
      });
  };

  const onCloseDeleteConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const onClickDeleteConfirmModal = () => {
    setShowConfirmModal((prev) => !prev);
  };

  return (
    <Container>
      <Link to="/menu/board">뒤로가기</Link>
      <ConfirmModal
        show={false}
        content="hi"
        style={{ backgroundColor: "transparent", padding: "300px" }}
      >
        <GiCheckMark style={{ color: "green" }} />
        게시글이 등록되었습니다
      </ConfirmModal>
      <BoardHeader>
        <Title>{postId ? "글수정하기" : "글쓰기"}</Title>
        {postId && (
          <DeleteButton onClick={onClickDeleteConfirmModal}>삭제</DeleteButton>
        )}
        {postId && (
          <ConfirmModal
            style={{ padding: "30px", backgroundColor: "yellow" }}
            show={showConfirmModal}
            close={onCloseDeleteConfirmModal}
            content="게시글을 삭제하면 복구가 불가능합니다"
          >
            <RiAlarmWarningLine style={{ color: "red" }} />
            <DeleteModalCancelButton onClick={onCloseDeleteConfirmModal}>
              취소
            </DeleteModalCancelButton>
            <DeleteModalSubmitButton onClick={onSubmitDeletePost}>
              확인
            </DeleteModalSubmitButton>
          </ConfirmModal>
        )}

        {postId ? (
          <UpdateButton onClick={onSubmitUpdatePost}>수정완료</UpdateButton>
        ) : (
          <SubmitButton onClick={onSubmitCreatePost}>등록</SubmitButton>
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
      <Label For="title">첨부파일 (구현안됌)</Label>&nbsp;
      <Box>
        <AddButton>추가</AddButton>
        <CancelButton>삭제</CancelButton>
        <BoxFile>example.png</BoxFile>
      </Box>
    </Container>
  );
}

export default withRouter(BoardWritePage);
