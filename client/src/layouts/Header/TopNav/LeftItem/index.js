import { withRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Container, CurrentPage, NULL } from './styled.js';
import { useMediaQuery } from 'react-responsive';

import Logo from './Logo';

function LeftItem({ match }) {
  let isMobile = useMediaQuery({ query: '(max-width:920px)' });
  const [isScroll, setIsScroll] = useState(false);
  let activePath = match.params.menu;

  const getPageName = (path) => {
    switch (path) {
      case 'home':
        return <Logo style={{ top: '-8px', left: '-48px' }} />;
      case 'about':
        return '계획';
      case 'card':
        return '사진';
      case 'board':
        return '게시판';
      case 'experiment':
        return '실험실';
      case 'video':
        return '영상';
      default:
        return <Logo style={{ top: '-8px', left: '-48px' }} />;
    }
  };

  const pageName = getPageName(activePath);
  const startScroll = () => {
    setIsScroll(window.pageYOffset > 16);
  };

  // console.log(activePath);

  useEffect(() => {
    window.addEventListener('scroll', startScroll);
  }, []);

  return (
    <Container>
      {isMobile && <NULL />}

      <CurrentPage id={isScroll && 'active'}>{pageName}</CurrentPage>
    </Container>
  );
}

export default withRouter(LeftItem);
