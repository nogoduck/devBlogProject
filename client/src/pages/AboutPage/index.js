import React, { useState, useEffect, useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import useInput from '../../hooks/useInput';
import Modal from '../../components/Modal';

import { MdLibraryAdd } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { IoTrash } from 'react-icons/io5';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import { AiFillSetting } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';

import {
  Title,
  Container,
  Input,
  Label,
  SubmitButton,
  CancelButton,
  Category,
  CategorySection1,
  CategoryCreate,
  CategoryContainer,
  CategorySettingButton,
  CategoryAdd,
  ListButton,
  ListContainer,
  CategoryTitle,
  CategoryETCButtonContainer,
  Notice,
  CategoryEditButton,
  CategoryDeleteButton,
  MemoCompleteButton,
} from './styled';
import { useSelector } from 'react-redux';
import Memo from './Memo';
import CompleteMemo from './CompleteMemo';

//AboutPage는 블로그 소개를 목적으로 추가했으나 내 투두리스트를 작성하기도 하고 계획을 쓰기도 하여
//페이지명은 그대로 두고 다용도로 사용하고 있다.

function AboutPage({ history }) {
  const user = useSelector((state) => state.user);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [category, setCategory, onChangeCategory] = useInput();
  const [memo, setMemo, onChangeMemo] = useInput();
  const [todo, setTodo] = useState();
  const [clickCategoryId, setClickCategoryId] = useState('');
  const [showETCButton, setShowETCButton] = useState(false);

  const onClickETCButton = useCallback(() => {
    setShowETCButton((prev) => !prev);
  }, []);

  //카테고리, 리스트 마우스 호버시 클래스명 변경 변수
  //카테고리 버튼은 호버 사용 안할예정 21.07.16 -12:00
  // const [hoverCategory, setHoverCategory] = useState(false);
  const [hoverList, setHoverList] = useState(true);
  const onSubmit = () => {
    let payload = {};

    if (category === '' && memo === '') {
      alert('내용을 입력해주세요.');
      return null;
    }

    if (category) {
      payload = {
        writer: user.authStatus._id,
        category,
      };
    }
    if (memo) {
      payload = {
        categoryTo: clickCategoryId,
        writer: user.authStatus._id,
        memo,
      };
    }
    axios
      .post('/api/todo/save', payload)
      .then((res) => {
        console.log(res);
        //응답이 오면 내용 초기화 후 모달 닫기
        setCategory('');
        onCloseCreateCategoryModal();
        initialRequest();
        history.push('/about');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onSubmit1 = () => {
    if (memo === '') {
      alert('내용을 입력해주세요');
      return null;
    }

    const payload = {
      writer: user.authStatus._id,
      categoryTo: clickCategoryId,
      memo: memo,
    };

    axios
      .post('/api/todo/save', payload)
      .then((res) => {
        console.log(res);
        //응답이 오면 내용 초기화 후 모달 닫기
        setMemo('');
        onCloseCreateListModal();
        history.push('/about');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const initialRequest = () => {
    axios
      .get('/api/todo/getAll')
      .then(({ data }) => {
        console.log('data > ', data.doc);
        setTodo(data.doc);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //카테고리 추가 모달 토글
  const onClickCreateCategoryModal = () => {
    setShowCreateCategoryModal((prev) => !prev);
  };
  //카테고리 추가 모달 닫기
  const onCloseCreateCategoryModal = () => {
    setShowCreateCategoryModal(false);
  };
  //리스트 추가 모달 토글
  const onClickCreateListModal = (e) => {
    //현재 클릭된 카테고리를 넣어준다
    setClickCategoryId(e.target.value);
    setShowCreateListModal((prev) => !prev);
  };
  //리스트 추가 모달 닫기
  const onCloseCreateListModal = () => {
    setShowCreateListModal(false);
  };
  //카테고리명에 마우스 올렸을떄
  // const inCategoryMouse = () => {
  //   console.log("on");
  //   setHoverCategory(true);
  // };
  //카테고리명에 마우스 떠날때
  // const outCategoryMouse = () => {
  //   console.log("off");
  //   setHoverCategory(false);
  // };
  //리스트명에 마우스 올렸을때
  const inListMouse = () => {
    console.log('onList');
    setHoverList(true);
  };
  //리스트명에 마우스 떠날때
  const outListMouse = () => {
    console.log('offList');
    // setHoverList(false);
  };

  const onClickCategoryEdit = () => {};

  const onClickCategoryDelete = (e) => {
    todo.map((v) => {
      if (v.categoryTo === e.target.value) {
        alert('메모된 내용을 모두 완료하세요.');
      }
    });
    return null;

    const payload = {
      _id: e.target.value,
    };

    axios
      .delete('/api/todo/delete/categoryAll', {
        data: {
          payload,
        },
      })
      .then(({ data }) => {
        if (data.success) {
          console.log('카테고리 삭제 결과 >> ', data);
          history.push('/about');
          return null;
        }
        alert('카테고리 삭제에 실패했습니다.');
      });
  };

  useEffect(() => {
    initialRequest();
  }, []);

  useEffect(() => {
    //모달이 닫혀있으면 입력된 내용 초기화
    if (!showCreateCategoryModal) {
      setCategory('');
    }
    if (!showCreateListModal) {
      setMemo('');
    }
  }, [showCreateCategoryModal, showCreateListModal]);

  //---------------------------[ 수정 예정 사항 ]---------------------
  //input을 사용할 시 랜더링이 자주 일어나기 떄문에 따로 뺴줄 예정
  // console.log("todo > ", todo);
  //-----------------------------------------------------------
  return (
    <>
      <Title>계획</Title>
      <Container>
        <CategoryContainer>
          <CategoryCreate onClick={onClickCreateCategoryModal}>
            <CategoryAdd>카테고리 추가</CategoryAdd>
            <MdLibraryAdd style={{ fontSize: '48px', marginTop: '4px' }} />
          </CategoryCreate>
          {todo &&
            todo.map((v) => {
              return (
                <>
                  {v.category && (
                    <Category>
                      <CategorySection1>
                        <CategoryTitle>{v.category}</CategoryTitle>
                        <CategoryETCButtonContainer>
                          {showETCButton && (
                            <CategoryEditButton
                              value={v._id}
                              onClick={onClickCategoryEdit}
                            >
                              <FaEdit />
                            </CategoryEditButton>
                          )}
                          {showETCButton && (
                            <CategoryDeleteButton
                              value={v._id}
                              onClick={onClickCategoryDelete}
                            >
                              <IoTrash />
                            </CategoryDeleteButton>
                          )}
                          {showETCButton ? (
                            <CategorySettingButton
                              value={v._id}
                              onClick={onClickETCButton}
                            >
                              <GrClose />
                            </CategorySettingButton>
                          ) : (
                            <CategorySettingButton
                              value={v._id}
                              onClick={onClickETCButton}
                            >
                              <AiFillSetting />
                            </CategorySettingButton>
                          )}
                        </CategoryETCButtonContainer>
                      </CategorySection1>
                      {v.length > 0 && <hr />}
                      <ListContainer>
                        {v.category && (
                          <>
                            <Memo
                              currentCategory={v._id}
                              item={todo}
                              showETCButton={showETCButton}
                            />
                            <ListButton
                              onClick={onClickCreateListModal}
                              value={v._id}
                            >
                              <IoMdAddCircle />
                              &nbsp;할 일을 입력해주세요 !
                            </ListButton>
                          </>
                        )}
                      </ListContainer>
                    </Category>
                  )}
                </>
              );
            })}
        </CategoryContainer>

        {showCreateCategoryModal && (
          <Modal
            useCloseButton={false}
            show={showCreateCategoryModal}
            close={onClickCreateCategoryModal}
            style={{ padding: '0px 20px 20px 20px', width: '400px' }}
          >
            <br />
            <SubmitButton onClick={onSubmit}>확인</SubmitButton>
            <CancelButton onClick={onCloseCreateCategoryModal}>
              취소
            </CancelButton>
            <Label htmlFor="add_category">카테고리 추가</Label>
            <Input
              type="text"
              id="add_category"
              value={category}
              onChange={onChangeCategory}
            ></Input>
          </Modal>
        )}

        {showCreateListModal && (
          <Modal
            useCloseButton={false}
            show={showCreateListModal}
            close={onClickCreateListModal}
            style={{ padding: '0px 20px 20px 20px', width: '400px' }}
          >
            <br />
            <SubmitButton onClick={onSubmit}>확인</SubmitButton>
            <CancelButton onClick={onCloseCreateListModal}>취소</CancelButton>
            <Label htmlFor="add_memo">메모 추가</Label>
            <Input
              type="text"
              id="add_memo"
              value={memo}
              onChange={onChangeMemo}
            ></Input>
          </Modal>
        )}
      </Container>
      <Title style={{ fontSize: '16px' }}>
        완료됨
        <MemoCompleteButton>✔</MemoCompleteButton>
      </Title>

      <CompleteMemo item={todo} />
    </>
  );
}
export default withRouter(AboutPage);
