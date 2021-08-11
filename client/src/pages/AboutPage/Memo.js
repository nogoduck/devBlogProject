import React from 'react';
import {
  Content,
  ListETCButtonContainer,
  ListEditButton,
  ListDeleteButton,
} from './styled';
import { FaEdit } from 'react-icons/fa';
import { IoMdRemoveCircle } from 'react-icons/io';
const Memo = ({ currentCategory, item }) => {
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
                <ListDeleteButton>
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
