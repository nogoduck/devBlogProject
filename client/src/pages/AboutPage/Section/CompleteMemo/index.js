import React, { useEffect, useState } from 'react';
import {
  Container,
  CompleteMemoContainer,
  MemoCompleteIcon,
  CompleteETCButton,
  DeleteAllButton,
  Title,
  RestoreButton,
  DeleteButton,
  CompleteText,
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
        <MemoCompleteIcon>
          <div>✔</div>
        </MemoCompleteIcon>
        완료됨
      </Title>

      {item &&
        item.map((v) => (
          <div>
            {v.succeed && (
              <CompleteMemoContainer>
                <CompleteText>{v.memo}</CompleteText>
                <CompleteETCButton>
                  <RestoreButton
                    value={`${v._id},${v.categoryTo}`}
                    onClick={onClickRestoreMemo}
                  >
                    ♻
                  </RestoreButton>
                  <DeleteButton value={v._id} onClick={onClickDeleteMemo}>
                    ⛔
                  </DeleteButton>
                </CompleteETCButton>
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
