import React from "react";
import { Container, Logo } from "./styled.js";
import { AiOutlineBug } from "react-icons/ai";
function Logo() {
  return (
    <Logo>
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
      <div>d</div>
      ev
      <span style={{ fontSize: "32px", color: "#ff3f34" }}>.</span>
      <span>Log</span>
    </Logo>
  );
}

export default Logo;
