import { withRouter } from 'react-router-dom';
import React, { useState } from 'react';

import { LandingContainer } from './styled';
import { AiOutlineBug } from 'react-icons/ai';
import axios from 'axios';
import Static from '../../setupStatic';

function LandingContent() {
  const [result, setResult] = useState('');
  const [result2, setResult2] = useState('');

  const connectServer = () => {
    axios
      .get('/api/test')
      .then(({ data }) => {
        setResult(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const connectServer2 = () => {
    axios
      .get('https://devlog-ad.herokuapp.com/api/test')
      .then(({ data }) => {
        setResult2(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <LandingContainer>
      <button onClick={connectServer}>
        Result connect to server : /api/test
      </button>
      <div>{result}</div>
      <button onClick={connectServer2}>
        Result connect to server2 : https://devlog-ad.herokuapp.com/api/test
      </button>
      <div>{result2}</div>
      <div>
        <div>{Static.URI}</div>
        <div>{process.env.NODE_ENV}</div>
        <div>{process.env.STATIC_URI}</div>
        <div
          style={{
            fontSize: '160px',
            background:
              'linear-gradient(142deg, rgba(16,250,43,1) 0%, rgba(45,112,182,1) 50%, rgba(255,1,1,1) 100%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: '800',
            marginBottom: '32px',
            textAlign: 'center',
          }}
        >
          Bug
        </div>
        <AiOutlineBug
          style={{
            fontSize: '400px',
            background:
              'linear-gradient(142deg, rgba(16,250,43,1) 0%, rgba(45,112,182,1) 50%, rgba(255,1,1,1) 100%)',
            color: '#fff',
            borderRadius: '32px',
            marginBottom: '32px',
          }}
        />
      </div>
    </LandingContainer>
  );
}

export default withRouter(LandingContent);
