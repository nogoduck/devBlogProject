import { withRouter } from 'react-router-dom';
import React from 'react';
import LandingContentVer20 from './LandingContentVer20';

function LandingContent() {
  return (
    <>
      <LandingContentVer20 />
    </>
  );
}

export default withRouter(LandingContent);
