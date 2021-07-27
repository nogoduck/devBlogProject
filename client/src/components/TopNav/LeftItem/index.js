import React from "react";
import { Link } from "react-router-dom";
import { Container, LogoContainer } from "./styled.js";
import { AiOutlineBug } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import Logo from "./Logo";

function LeftItem() {
  const isDesktop = useMediaQuery({ query: "(min-width:1024px)" });

  return (
    <Container id={!isDesktop && "isMobileTopNav"}>
      <Link to="/" style={{ color: "#fff", zIndex: "2025" }}>
        <Logo style={{ top: "2px" }} />
      </Link>
    </Container>
  );
}

export default LeftItem;
