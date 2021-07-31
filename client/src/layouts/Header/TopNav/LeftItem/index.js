import { Link } from 'react-router-dom';
import React from 'react';
import { Container } from './styled.js';
import { useMediaQuery } from 'react-responsive';

import Logo from './Logo';

function LeftItem() {
  const isMobile = useMediaQuery({ query: '(max-width:920px)' });

  return (
    <Container>
      {isMobile && (
        <Link to="/">
          <Logo style={{ top: '2px', left: '32px' }} />
        </Link>
      )}
    </Container>
  );
}

export default LeftItem;
