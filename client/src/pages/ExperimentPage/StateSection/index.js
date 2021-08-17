import Static from '../../../setupStatic';
import React from 'react';

const StateSection = () => {
  return (
    <>
      <h3>연결 상태</h3>
      <div>
        Static.URI :
        <span style={{ color: 'green' }}>{Static.URI && ' Succeed ✔'}</span>
      </div>
      <div>env : {process.env.NODE_ENV}</div>
      <br />
    </>
  );
};

export default StateSection;
