import React from 'react';
import { CompleteMemoContainer, MemoCompleteButton, Title } from './styled';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
const CompleteMemo = ({ item, history }) => {
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

  return (
    <>
      <Title>
        완료됨
        <MemoCompleteButton>✔</MemoCompleteButton>
      </Title>

      <button onClick={onDeleteCompleteMemo}>완료된 항목 전체삭제</button>
      {item &&
        item.map((v) => (
          <div>
            {v.succeed && (
              <CompleteMemoContainer>
                {v.memo} <br />
              </CompleteMemoContainer>
            )}
          </div>
        ))}
    </>
  );
};

export default withRouter(CompleteMemo);
