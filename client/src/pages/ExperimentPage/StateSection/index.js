import Static from '../../../setupStatic';
import React from 'react';

const StateSection = () => {
  return (
    <>
      <h3>연결 상태</h3>
      <div>Static.URI : {Static.URI}</div>
      <div>env : {process.env.NODE_ENV}</div>
      <div>base : {process.env.BASE_URL}</div>
    </>
  );
};

export default StateSection;
