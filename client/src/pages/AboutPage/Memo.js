import React from 'react';
import {
  Content,
  ListETCButtonContainer,
  ListEditButton,
  ListDeleteButton,
} from './styled';
import { FaEdit } from 'react-icons/fa';
import { IoMdRemoveCircle } from 'react-icons/io';
import axios from 'axios';
const Memo = ({ currentCategory, item }) => {
  const deleteItem = (e) => {
    const clickId = e.target.value;
    console.log(clickId);

    const payload = {
      _id: clickId,
    };

    axios
      .delete('/api/todo/delete', {
        data: {
          payload,
        },
      })
      .then(({ data }) => {
        if (data.success) {
          console.log('투두 삭제 결과 >> ', data);
          return null;
        }
        alert('삭제에 실패했습니다.');
      })
      .catch((err) => {
        console.log('Delete Account Error >> ', err);
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
                <ListEditButton>
                  <FaEdit />
                </ListEditButton>
                <ListDeleteButton value={v._id} onClick={deleteItem}>
                  <IoMdRemoveCircle />
                </ListDeleteButton>
              </ListETCButtonContainer>
              <Content>{v.memo}</Content>
            </>
          )}
        </>
      ))}
    </>
  );
};

export default Memo;
