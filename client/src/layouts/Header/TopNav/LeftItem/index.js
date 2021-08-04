import { Link, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Container, CurrentPage } from './styled.js';
import { useMediaQuery } from 'react-responsive';

import Logo from './Logo';
import * as path from 'path';

function LeftItem() {
  let isMobile = useMediaQuery({ query: '(max-width:920px)' });
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation();
  let activePath = pathname.substring(6);

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

  console.log(activePath);

  useEffect(() => {
    window.addEventListener('scroll', startScroll);
  }, []);

  return (
    <Container>
      {isMobile && 'hi'}

      <CurrentPage id={isScroll && 'active'}>{pageName}</CurrentPage>
    </Container>
  );
}

export default LeftItem;
