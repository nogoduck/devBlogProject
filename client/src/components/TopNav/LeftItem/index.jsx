import React from "react";
import { Link } from "react-router-dom";
import { Container, LogoContainer } from "./styled.js";
import { AiOutlineBug } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

function LeftItem() {
  const isDesktop = useMediaQuery({ query: "(min-width:1024px)" });

  return (
    <Container id={!isDesktop && "isMobileTopNav"}>
      <Link to="/" style={{ color: "#fff", zIndex: "2025" }}>
        <LogoContainer>
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "-13px",
            }}
          >
            <AiOutlineBug
              style={{
                color: "#d2dae2",
                fontSize: "16px",
                fontColor: "#ff3f34",
                transform: "rotate(72deg)",
                position: "absolute",
                left: "55px",
                top: "7px",
              }}
            />
            <AiOutlineBug
              style={{
                fontSize: "20px",
                transform: "rotate(110deg)",
                position: "absolute",
                left: "72px",
                top: "7px",
              }}
            />
            <AiOutlineBug
              style={{
                fontSize: "24px",
                transform: "rotate(90deg)",
                position: "absolute",
                left: "100px",
                top: "7px",
              }}
            />
          </div>
          <div>d</div>
          ev
          <span style={{ fontSize: "44px", color: "red" }}>.</span>
          <span>Log</span>
        </LogoContainer>
      </Link>
    </Container>
  );
}

export default LeftItem;
