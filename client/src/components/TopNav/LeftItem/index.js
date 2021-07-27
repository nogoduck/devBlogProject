import { Link } from "react-router-dom";
import React from "react";
import { Container } from "./styled.js";
import { useMediaQuery } from "react-responsive";

import Logo from "./Logo";

function LeftItem() {
  const isDesktop = useMediaQuery({ query: "(min-width:1024px)" });

  return (
    <Container id={!isDesktop && "isMobileTopNav"}>
      <Link to="/">
        <Logo style={{ top: "2px" }} />
      </Link>
    </Container>
  );
}

export default LeftItem;
