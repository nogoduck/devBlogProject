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
  Notice,
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
  MemoButton,
  MemoContainer,
  CategoryTitle,
  CategoryETCButtonContainer,
  CategoryDeleteButton,
} from './styled';
import { useSelector } from 'react-redux';
import Memo from './Section/Memo/index';
import CompleteMemo from './Section/CompleteMemo';

//AboutPage는 블로그 소개를 목적으로 추가했으나 현재는 투두리스트로 사용하고 있다.
function AboutPage({ history }) {
  const user = useSelector((state) => state.user);
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [category, setCategory, onChangeCategory] = useInput();
  const [memo, setMemo, onChangeMemo] = useInput();
  const [todo, setTodo] = useState();
  const [clickCategoryId, setClickCategoryId] = useState('');
  const [showETCButton, setShowETCButton] = useState(false);
  const [showUpdateCategory, setShowUpdateCategory] = useState(false);

  const onClickETCButton = useCallback(() => {
    setShowETCButton((prev) => !prev);
  }, []);

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
        // console.log(res);
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

  const initialRequest = () => {
    axios
      .get('/api/todo/getAll')
      .then(({ data }) => {
        // console.log('data > ', data.doc);
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

  const deleteCategory = (e) => {
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
          // console.log('카테고리 삭제 결과 >> ', data);
          history.push('/about');
          return null;
        }
        alert('카테고리 삭제에 실패했습니다.');
      });
  };

  //카테고리 안에 내용이 있는지 검증
  const onClickCategoryDelete = (e) => {
    let isEmptyCatrgory = false;
    for (let i = 0; i < Object.keys(todo).length; i++) {
      if (todo[i].categoryTo === e.target.value && !todo[i].succeed) {
        alert('카테고리내에 내용이 없어야 삭제가 가능합니다.');
        isEmptyCatrgory = true;
        break;
      }
    }
    if (!isEmptyCatrgory) deleteCategory(e);
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
                            <CategoryDeleteButton
                              value={v._id}
                              onClick={onClickCategoryDelete}
                            >
                              ➖{/*<IoTrash />*/}
                            </CategoryDeleteButton>
                          )}

                          {showETCButton ? (
                            <CategorySettingButton
                              value={v._id}
                              onClick={onClickETCButton}
                            >
                              ❌{/*<GrClose />*/}
                            </CategorySettingButton>
                          ) : (
                            <CategorySettingButton
                              value={v._id}
                              onClick={onClickETCButton}
                            >
                              <AiFillSetting
                                style={{
                                  fontSize: '16px',
                                  position: 'absolute',
                                  top: '13px',
                                  right: '11px',
                                }}
                              />
                            </CategorySettingButton>
                          )}
                        </CategoryETCButtonContainer>
                      </CategorySection1>
                      {v.length > 0 && <hr />}
                      <MemoContainer>
                        {v.category && (
                          <>
                            <Memo
                              currentCategory={v._id}
                              item={todo}
                              showETCButton={showETCButton}
                            />
                            <MemoButton
                              onClick={onClickCreateListModal}
                              value={v._id}
                            >
                              <IoMdAddCircle />
                              &nbsp;할 일을 입력해주세요 !
                            </MemoButton>
                          </>
                        )}
                      </MemoContainer>
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
              placeholder="변경이 불가능 하므로 신중히 입력해주세요."
              spellCheck="false"
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
              spellCheck="false"
              value={memo}
              onChange={onChangeMemo}
            ></Input>
          </Modal>
        )}
      </Container>

      <CompleteMemo item={todo} />
    </>
  );
}
export default withRouter(AboutPage);
