import React, { useState } from 'react';
import {
  Content,
  ListETCButtonContainer,
  ListEditButton,
  ListDeleteButton,
  CompleteButton,
} from './styled';
import { FaEdit } from 'react-icons/fa';
import { IoMdRemoveCircle } from 'react-icons/io';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const Memo = ({ history, currentCategory, item }) => {
  const [showUpdateMemoModal, setShowUpdateMemoModal] = useState(false);
  const [selectId, setSelectId] = useState('');

  const [memo, setMemo] = useState('');

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };
  const onClickUpdateMemoModal = (e) => {
    console.log('log >> ', e.target.value);
    setSelectId(e.target.value);
    setShowUpdateMemoModal((prev) => !prev);
    console.log(selectId);
  };

  const onClickCompleteMemo = (e) => {
    console.log('done !! ', e.target.value);
  };
  const onClickDeleteMemo = (e) => {
    setSelectId(e.target.value);
    console.log(selectId);

    const payload = {
      _id: selectId,
    };

    axios
      .delete('/api/todo/delete/memo', {
        data: {
          payload,
        },
      })
      .then(({ data }) => {
        setSelectId('');
        if (data.success) {
          console.log('투두 삭제 결과 >> ', data);
          history.push('/about');
          return null;
        }
        alert('삭제에 실패했습니다.');
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
      <hr />
      {item.map((v) => (
        <>
          {currentCategory === v.categoryTo && (
            <>
              <ListETCButtonContainer>
                <CompleteButton value={v._id} onClick={onClickCompleteMemo}>
                  ✔
                </CompleteButton>
                <ListEditButton value={v._id} onClick={onClickUpdateMemoModal}>
                  🔨
                </ListEditButton>
                <ListDeleteButton value={v._id} onClick={onClickDeleteMemo}>
                  ➖
                </ListDeleteButton>
              </ListETCButtonContainer>
              <Content>{v.memo}</Content>
            </> //currentCategory === v.categoryTo
          )}
        </> //item.map
      ))}
      {showUpdateMemoModal && (
        <div>
          <input type="text" value={memo} onChange={onChangeMemo} />
          <button onClick={onClickUpdateMemo}>변경</button>
        </div>
      )}
    </> //return()
  );
};

export default withRouter(Memo);
