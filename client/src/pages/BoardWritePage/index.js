import {
  Container,
  InputTitle,
  Label,
  SubmitButton,
  BoardHeader,
  Title,
  UpdateButton,
  DeleteButton,
  UpdateButtonContainer,
} from './styled';
import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import AlertModal from '../../components/AlertModal';

//postId가 존재하면 글을 수정하는 페이지로 전환된다
function BoardWritePage({ history, postId, changeTitle, changeDescription }) {
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState(changeTitle);
  const [description, setDescription] = useState(changeDescription);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessCreatePostModal, setShowSuccessCreatePostModal] =
    useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  //게시글 생성 요청
  const onSubmitCreatePost = () => {
    const paylaod = {
      nickname: user.authStatus.nickname,
      writer: user.authStatus.name,
      writerId: user.authStatus._id,
      email: user.authStatus.email,
      title: title,
      description: description,
    };

    axios
      .post('/api/board/create', paylaod)
      .then(({ data }) => {
        console.log('Create Post data >> ', data);
        setShowSuccessCreatePostModal(true);
        // history.push("/menu/board");
      })
      .catch((err) => {
        console.log('Create Post Error >> ', err);
      });
  };

  //게시글 수정 요청
  const onSubmitUpdatePost = () => {
    const paylaod = { _id: postId, title: title, description: description };

    axios
      .post('/api/board/update', paylaod)
      .then(({ data }) => {
        console.log('Update Post data >> ', data);
        history.push(`/menu/board/${postId}`);
      })
      .catch((err) => {
        console.log('Update Post Error >> ', err);
      });
  };

  //게시글 삭제 요청
  const onSubmitDeletePost = () => {
    const payload = { _id: postId };

    axios
      .post('/api/board/delete', payload)
      .then(({ data }) => {
        console.log('Delete Post data >> ', data);
        onCloseDeleteConfirmModal();
        history.push('/menu/board');
      })
      .catch((err) => {
        console.log('Delete Post Error >> ', err);
      });
  };

  const onCloseDeleteConfirmModal = () => {
    setShowConfirmModal(false);
  };

  const onClickDeleteConfirmModal = () => {
    setShowConfirmModal((prev) => !prev);
  };

  const onSubmitCreatePostModal = () => {
    history.push('/menu/board');
  };

  return (
    <Container>
      <Link to="/menu/board">뒤로가기</Link>
      <AlertModal
        show={showSuccessCreatePostModal}
        close={onSubmitCreatePostModal}
        modalHeader="성공"
        title="게시물 등록이 성공되었습니다"
        content="게시판으로 이동합니다"
        option="success"
        useCancelButton={false}
        confirm={onSubmitCreatePostModal}
      ></AlertModal>
      <BoardHeader>
        <Title>{postId ? '글수정하기' : '글쓰기'}</Title>

        <AlertModal
          show={showConfirmModal}
          close={onCloseDeleteConfirmModal}
          notice="게시물을 삭제하면 복구가 불가능합니다"
          modalHeader="게시글 삭제 주의사항"
          title="해당 게시글을 삭제하겠습니까?"
          option="warning"
          confirm={onSubmitDeletePost}
        ></AlertModal>

        <UpdateButtonContainer>
          {postId ? (
            <UpdateButton onClick={onSubmitUpdatePost}>수정완료</UpdateButton>
          ) : (
            <SubmitButton onClick={onSubmitCreatePost}>등록</SubmitButton>
          )}
          {postId && (
            <DeleteButton onClick={onClickDeleteConfirmModal}>
              삭제
            </DeleteButton>
          )}
        </UpdateButtonContainer>
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
        style={{}}
        onReady={(editor) => {
          editor.ui
            .getEditableElement()
            .parentElement.insertBefore(
              editor.ui.view.toolbar.element,
              editor.ui.getEditableElement()
            );
        }}
        onError={({ willEditorRestart }) => {
          if (willEditorRestart) {
            this.editor.ui.view.toolbar.element.remove();
          }
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
          console.log({ event, editor, data });
        }}
        editor={DecoupledEditor}
        data={description}
        // config={}
      />
    </Container>
  );
}

export default withRouter(BoardWritePage);
