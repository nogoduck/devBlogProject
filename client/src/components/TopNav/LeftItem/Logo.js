import React from "react";
import { LogoContainer } from "./styled.js";
import { AiOutlineBug } from "react-icons/ai";
function Logo({ style }) {
  return (
    <LogoContainer style={style}>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "-13px",
        }}
      >
        <AiOutlineBug
          style={{
            color: "#757575d2dae2",
            fontSize: "12px",
            transform: "rotate(72deg)",
            position: "absolute",
            left: "55px",
            top: "14px",
          }}
        />
        <AiOutlineBug
          style={{
            fontSize: "16px",
            transform: "rotate(90deg)",
            position: "absolute",
            left: "72px",
            top: "9px",
          }}
        />
        <AiOutlineBug
          style={{
            fontSize: "18px",
            transform: "rotate(110deg)",
            position: "absolute",
            left: "90px",
            top: "12px",
          }}
        />
      </div>
      <div>d</div>
      ev
      <span style={{ fontSize: "44px", color: "red" }}>.</span>
      <span>Log</span>
    </LogoContainer>
  );
}

export default Logo;
