import { withRouter } from 'react-router-dom';
import React from 'react';
import { Container, Title, Body, IMG } from './styled';
import { Notice } from './styled';
function CardPage() {
  return (
    <Container>
      <Title>사진</Title>
      <Notice>미구현 (개발예정)</Notice>

      <Body>
        <IMG>
          <img src="http://placehold.it/500x500" alt="img" />
        </IMG>

        <b></b>
        <b></b>
      </Body>
    </Container>
  );
}

export default withRouter(CardPage);
