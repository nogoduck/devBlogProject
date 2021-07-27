import React from "react";
import { LogoContainer } from "./styled.js";

function Logo({ style }) {
  return (
    <LogoContainer style={style}>
      <div className="initial">d</div>
      ev
      <span className="dot">.</span>
      <span>Log</span>
    </LogoContainer>
  );
}

export default Logo;
