import React from "react";
import { Link } from "react-router-dom";
import { Container, Logo } from "./styled.js";
import { AiOutlineBug } from "react-icons/ai";
import createGlobalStyle from "./font/font";
function LeftItem() {
  return (
    <Container>
      <createGlobalStyle />
      <Link to="/" style={{ color: "#fff", zIndex: "2025" }}>
        <Logo>
          <div
            style={{
              position: "absolute",
              top: "12px",
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
        </Logo>
      </Link>
    </Container>
  );
}

export default LeftItem;
