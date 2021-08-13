import React, { useState } from 'react';
import {
  MemoContent,
  MemoETCButtonContainer,
  MemoEditButton,
  MemoDeleteButton,
  MemoCompleteButton,
  MemoContainer,
} from './styled';
import { FaEdit } from 'react-icons/fa';
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { IoTrash } from 'react-icons/io5';
import Modal from '../../../../components/Modal';
import { CancelButton, Input, Label, SubmitButton } from '../../styled';

const Index = ({ history, currentCategory, item, showETCButton }) => {
  const [showUpdateMemoModal, setShowUpdateMemoModal] = useState(false);
  const [selectId, setSelectId] = useState('');

  const [memo, setMemo] = useState('');

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };

  const onClickUpdateMemoModal = (e) => {
    setSelectId(e.target.value);
    for (let i = 0; i < Object.keys(item).length; i++) {
      if (item[i]._id === e.target.value) {
        console.log('동일');
        setMemo(item[i].memo);
      }
    }

    console.log(selectId);
    setShowUpdateMemoModal((prev) => !prev);
  };

  const onCloseUpdateMemoModal = () => {
    setShowUpdateMemoModal(false);
  };

  const onClickCompleteMemo = (e) => {
    const payload = {
      _id: e.target.value,
      succeed: true,
    };

    axios.patch('/api/todo/update/state', payload).then(({ data }) => {
      setSelectId('');
      if (data.success) {
        // console.log('상태 변경 결과 >> ', data);
        history.push('/about');
        return null;
      }
      alert('상태 변경에 실패했습니다.');
    });
  };
  const onClickDeleteMemo = (e) => {
    const payload = {
      _id: e.target.value,
    };

    // console.log('payload >> ', payload);

    axios
      .delete('/api/todo/delete/memo', {
        data: {
          payload,
        },
      })
      .then(({ data }) => {
        setSelectId('');
        if (data.success) {
          // console.log('메모 삭제 결과 >> ', data);
          history.push('/about');
          return null;
        }
        alert('메모 삭제에 실패했습니다.');
      });
  };

  const onClickUpdateMemo = () => {
    const payload = {
      _id: selectId,
      memo,
    };

    axios.patch('/api/todo/update/item', payload).then(({ data }) => {
      setSelectId('');
      if (data.success) {
        console.log('투두 변경 결과 >> ', data);
        history.push('/about');
        return null;
      }
      alert('변경에 실패했습니다.');
    });
  };

  return (
    <>
      {item.map((v) => (
        <>
          {currentCategory === v.categoryTo && !v.succeed && (
            <MemoContainer>
              <MemoContent>{v.memo}</MemoContent>
              <MemoETCButtonContainer>
                {showETCButton && (
                  <MemoDeleteButton value={v._id} onClick={onClickDeleteMemo}>
                    ⛔{/*<IoTrash />*/}
                  </MemoDeleteButton>
                )}
                {/*onClick={() => this.move}>*/}
                {showETCButton && (
                  <MemoEditButton
                    value={v._id}
                    onClick={onClickUpdateMemoModal}
                  >
                    🔨
                    {/*<FaEdit/>*/}
                  </MemoEditButton>
                )}

                <MemoCompleteButton value={v._id} onClick={onClickCompleteMemo}>
                  ✔
                </MemoCompleteButton>
              </MemoETCButtonContainer>
            </MemoContainer> //currentCategory === v.categoryTo
          )}
        </> //item.map
      ))}

      {showUpdateMemoModal && (
        <Modal
          useCloseButton={false}
          show={onClickUpdateMemoModal}
          close={onCloseUpdateMemoModal}
          style={{ padding: '0px 20px 20px 20px', width: '400px' }}
        >
          <br />
          <SubmitButton onClick={onClickUpdateMemo}>확인</SubmitButton>
          <CancelButton onClick={onCloseUpdateMemoModal}>취소</CancelButton>
          <Label htmlFor="update_memo">메모 수정</Label>
          <Input
            type="text"
            id="update_memo"
            spellCheck="false"
            value={memo}
            onChange={onChangeMemo}
          ></Input>
        </Modal>
      )}
    </> //return()
  );
};

export default withRouter(Index);
