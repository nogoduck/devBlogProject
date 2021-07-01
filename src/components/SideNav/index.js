import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./styled";

function SideNav() {
  return (
    <Container>
      <ul>
        <Link to="/menu/about">
          <li>소개</li>
        </Link>
        <Link to="/menu/card">
          <li>카드</li>
        </Link>
        <Link to="/menu/board">
          <li>게시판</li>
        </Link>
        <Link to="/menu/modal">
          <li>모달</li>
        </Link>
        <Link to="/menu/video">
          <li>영상관</li>
        </Link>
      </ul>
    </Container>
  );
}

export default SideNav;
