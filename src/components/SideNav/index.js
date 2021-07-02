import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Container, ContainerMobile, MenuButton } from "./styled";
import { BiMenu } from "react-icons/bi";

function SideNav() {
  //Desktop or PC"(min-width:1024px)", Tablet"(min-width:768px) and (max-width:1023px)", Mobile"(max-width:767px)"
  //반응형 (PC <=> Tablet and Mobile)
  const isDesktop = useMediaQuery({ query: "(min-width:1024px)" });
  const isTabletAndMobile = useMediaQuery({ query: "(max-width:1023px" });
  const [hiddenMenu, setHiddenMenu] = useState(false);
  const [onceToggle, setOnceToggle] = useState(true);
  //현재 페이지 목록 메뉴에 활성화
  const { pathname } = useLocation();
  const activePath = pathname.substring(5);
  console.log("Desktop::: ", isDesktop);
  console.log("isTabletAndMobile::: ", isTabletAndMobile);
  const onClickToggleMenu = () => {
    setHiddenMenu((prev) => !prev);
  };

  //창 크기에 따라 한번만 실행되게 하는 코드들
  if (onceToggle & !isDesktop) {
    setHiddenMenu(true);
    setOnceToggle(false);
  }
  if (!onceToggle & isDesktop) {
    setHiddenMenu(false);
    setOnceToggle(true);
  }

  return (
    <>
      {!isDesktop && (
        <MenuButton onClick={onClickToggleMenu}>
          <BiMenu />
        </MenuButton>
      )}
      <Container id={hiddenMenu && "hiddenSideNav"}>
        <ul>
          <Link to="/menu/about">
            <li className={activePath.includes("about") && "active"}>소개</li>
          </Link>
          <Link to="/menu/card">
            <li className={activePath.includes("card") && "active"}>카드</li>
          </Link>
          <Link to="/menu/board">
            <li className={activePath.includes("board") && "active"}>게시판</li>
          </Link>
          <Link to="/menu/modal">
            <li className={activePath.includes("modal") && "active"}>모달</li>
          </Link>
          <Link to="/menu/video">
            <li className={activePath.includes("video") && "active"}>영상</li>
          </Link>
        </ul>
      </Container>
    </>
  );
}

export default SideNav;
