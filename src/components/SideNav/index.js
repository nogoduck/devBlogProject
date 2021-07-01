import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container } from "./styled";

function SideNav() {
  const { pathname } = useLocation();
  const activeMenu = pathname.substring(5);
  console.log(activeMenu);

  return (
    <Container>
      <ul>
        <Link to="/menu/about">
          <li className={activeMenu.includes("about") && "active"}>소개</li>
        </Link>
        <Link to="/menu/card">
          <li className={activeMenu.includes("card") && "active"}>카드</li>
        </Link>
        <Link to="/menu/board">
          <li className={activeMenu.includes("board") && "active"}>게시판</li>
        </Link>
        <Link to="/menu/modal">
          <li className={activeMenu.includes("modal") && "active"}>모달</li>
        </Link>
        <Link to="/menu/video">
          <li className={activeMenu.includes("video") && "active"}>영상</li>
        </Link>
      </ul>
    </Container>
  );
}

export default SideNav;
