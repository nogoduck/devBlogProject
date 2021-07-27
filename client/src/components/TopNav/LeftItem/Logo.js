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
        {/* 로고 위에 배치한 버그 아이콘 */}
        {/* <AiOutlineBug
          style={{
            color: "#757575d2dae2",
            fontSize: "8px",
            transform: "rotate(72deg)",
            position: "absolute",
            left: "55px",
            top: "10px",
          }}
        />
        <AiOutlineBug
          style={{
            fontSize: "12px",
            transform: "rotate(90deg)",
            position: "absolute",
            left: "72px",
            top: "9px",
          }}
        />
        <AiOutlineBug
          style={{
            fontSize: "16px",
            transform: "rotate(110deg)",
            position: "absolute",
            left: "90px",
            top: "12px",
          }}
        /> */}
      </div>
      <div className="initial">d</div>
      ev
      <span className="dot">.</span>
      <span>Log</span>
    </LogoContainer>
  );
}

export default Logo;
