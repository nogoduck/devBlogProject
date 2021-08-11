import React from 'react';
import { Content } from './styled';
const Memo = ({ currentCategory, item }) => {
  console.log('Memo items >> ', item);

  return (
    <>
      {item &&
        item.map((v) => (
          <>{currentCategory === v.categoryTo && <Content>{v.memo}</Content>}</>
        ))}
    </>
  );
};

export default Memo;
