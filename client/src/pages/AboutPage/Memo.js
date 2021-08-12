import React, { useState } from 'react';
import {
  Content,
  ListETCButtonContainer,
  ListEditButton,
  ListDeleteButton,
} from './styled';
import { FaEdit } from 'react-icons/fa';
import { IoMdRemoveCircle } from 'react-icons/io';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const Memo = ({ history, currentCategory, item }) => {
  const [showUpdateMemoModal, setShowUpdateMemoModal] = useState(false);
  const [memo, setMemo] = useState('');

  const onChangeMemo = (e) => {
    setMemo(e.target.value);
  };
  const onClickUpdateMemoModal = () => {
    setShowUpdateMemoModal((prev) => !prev);
  };

  const onClickDeleteMemo = (e) => {
    const memoId = e.target.value;
    console.log(memoId);

    const payload = {
      _id: memoId,
    };

    axios
      .delete('/api/todo/delete/memo', {
        data: {
          payload,
        },
      })
      .then(({ data }) => {
        if (data.success) {
          console.log('투두 삭제 결과 >> ', data);
          history.push('/about');
          return null;
        }
        alert('삭제에 실패했습니다.');
      });
  };

  const onClickUpdateMemo = (e) => {
    const memoId = e.target.value;
    console.log(memoId);

    const payload = {
      _id: memoId,
      memo,
    };

    axios.patch('/api/todo/update/item', payload).then(({ data }) => {
      if (data.success) {
        console.log('투두 삭제 결과 >> ', data);
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
                <ListEditButton onClick={onClickUpdateMemoModal}>
                  <FaEdit />
                </ListEditButton>
                <ListDeleteButton value={v._id} onClick={onClickDeleteMemo}>
                  <IoMdRemoveCircle />
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
