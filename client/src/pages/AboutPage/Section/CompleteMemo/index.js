import React, { useEffect, useState } from 'react';
import {
  Container,
  CompleteMemoContainer,
  MemoCompleteButton,
  DeleteAllButton,
  Title,
  RestoreButton,
  DeleteButton,
} from './styled';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const Index = ({ item, history }) => {
  const [isComplete, setIsComplete] = useState(false);
  const onDeleteCompleteMemo = () => {
    axios
      .delete('/api/todo//delete/completeMemoAll')
      .then(({ data }) => {
        if (data.success) {
          history.push('/about');
          return null;
        }
        alert('전체삭제에 실패했습니다.');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 복구할 메모의 카테고리가 존재하는지 검증
  const validationToCategory = (value) => {
    //value: categoryTo
    console.log('vali >> ', value);
    for (let i = 0; i < Object.keys(item).length; i++) {
      if (item[i]._id === value && !item[i].succeed) {
        return true;
      }
    }
    return false;
  };

  const onClickRestoreMemo = (e) => {
    //[0]: v._id, [1]: v.categoryTo
    const targetArr = e.target.value.split(',');

    console.log(targetArr);
    // return validationToCategory(e) && null;
    if (validationToCategory(targetArr[1])) {
      const payload = {
        _id: targetArr[0],
        succeed: false,
      };

      axios.patch('/api/todo/update/state', payload).then(({ data }) => {
        if (data.success) {
          history.push('/about');
          return null;
        }
        alert('복구에 실패했습니다.');
      });
    } else {
      alert('복구할 메모의 카테고리가 존재하지 않습니다.');
      return null;
    }
  };

  const onClickDeleteMemo = (e) => {
    const payload = {
      _id: e.target.value,
    };

    console.log('payload >> ', payload);

    axios
      .delete('/api/todo/delete/memo', {
        data: {
          payload,
        },
      })
      .then(({ data }) => {
        if (data.success) {
          history.push('/about');
          return null;
        }
        alert('완료된 항목 삭제에 실패했습니다.');
      });
  };

  return (
    <Container>
      <Title>
        완료됨
        <MemoCompleteButton>✔</MemoCompleteButton>
      </Title>

      {item &&
        item.map((v) => (
          <div>
            {v.succeed && (
              <CompleteMemoContainer>
                {v.memo}
                <RestoreButton
                  value={`${v._id},${v.categoryTo}`}
                  onClick={onClickRestoreMemo}
                >
                  ♻
                </RestoreButton>
                <DeleteButton value={v._id} onClick={onClickDeleteMemo}>
                  ➖
                </DeleteButton>

                <br />
              </CompleteMemoContainer>
            )}
          </div>
        ))}
      {item && (
        <DeleteAllButton onClick={onDeleteCompleteMemo}>
          완료된 항목 전체삭제
        </DeleteAllButton>
      )}
    </Container>
  );
};

export default withRouter(Index);
