import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled.js";
function LeftItem() {
  return (
    <Container>
      <Link to="/" style={{ color: "#fff", zIndex: "2025" }}>
        🚲devLog
      </Link>
    </Container>
  );
}

export default LeftItem;
