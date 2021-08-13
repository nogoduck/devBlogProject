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

const Index = ({ history, currentCategory, item, showETCButton }) => {
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
        <div>
          <input type="text" value={memo} onChange={onChangeMemo} />
          <button onClick={onClickUpdateMemo}>변경</button>
        </div>
      )}
    </> //return()
  );
};

export default withRouter(Index);
