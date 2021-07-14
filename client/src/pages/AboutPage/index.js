import React from "react";
import { withRouter } from "react-router-dom";

import { Container } from "./styled";

function AboutPage() {
  return (
    <Container>
      <button>카테고리 추가+</button>
      <button>리스트 추가+</button>
    </Container>
  );
}
export default withRouter(AboutPage);
