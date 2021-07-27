import React from "react";
import { Container, LogoContainer } from "./styled";
import { AiOutlineBug } from "react-icons/ai";

function Footer() {
  return (
    <Container>
      <LogoContainer>
        <div className="initial">d</div>
        ev
        <span className="dot">.</span>
        <span>Log</span>
      </LogoContainer>
      footer
      <AiOutlineBug />
      <AiOutlineBug
        style={{
          color: "#757575",
          fontSize: "8px",
          transform: "rotate(72deg)",
          position: "absolute",
        }}
      />
      <AiOutlineBug
        style={{
          fontSize: "12px",
          transform: "rotate(90deg)",
          position: "absolute",
        }}
      />
      <AiOutlineBug
        style={{
          fontSize: "16px",
          transform: "rotate(110deg)",
          position: "absolute",
        }}
      />
    </Container>
  );
}

export default Footer;
