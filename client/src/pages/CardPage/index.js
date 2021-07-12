import { withRouter } from "react-router-dom";
import React from "react";
import { Container, Title } from "./styled";
function CardPage() {
  return (
    <Container>
      <Title>
        <b></b>
        <b></b>
        카드 예시
      </Title>
    </Container>
  );
}

export default withRouter(CardPage);
