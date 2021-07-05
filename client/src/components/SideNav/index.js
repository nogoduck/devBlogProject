// ########################################
// 버그 : 모바일 or 태블릿 모드에서 랜딩페이지
// 로 이동후 메뉴 항목 이동하면 메뉴가 닫힘
// + 다른 페이지 내에서 메뉴 이동하면 정상 동작
// ########################################
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Container, MenuButton } from "./styled";
import { BiMenu } from "react-icons/bi";

function SideNav() {
  //Desktop or PC"(min-width:1024px)", Tablet"(min-width:768px) and (max-width:1023px)", Mobile"(max-width:767px)"
  //반응형 (PC <=> Tablet and Mobile)
  const isDesktop = useMediaQuery({ query: "(min-width:1024px)" });
  const isTabletAndMobile = useMediaQuery({ query: "(max-width:1023px" });
  const [hiddenMenu, setHiddenMenu] = useState(false);
  //현재 페이지 목록 메뉴에 활성화
  const { pathname } = useLocation();
  const activePath = pathname.substring(5);
  console.log("Desktop::: ", isDesktop);
  console.log("isTabletAndMobile::: ", isTabletAndMobile);
  const onClickToggleMenu = () => {
    setHiddenMenu((prev) => !prev);
  };

  useEffect(() => {
    if (!isDesktop) {
      setHiddenMenu(true);
    }
    if (isDesktop) {
      setHiddenMenu(false);
    }
  }, [isDesktop]);

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
            <li className={activePath.includes("about") && "active"}>
              <b></b>
              <b></b>
              소개
            </li>
          </Link>
          <Link to="/menu/card">
            <li className={activePath.includes("card") && "active"}>
              <b></b>
              <b></b>
              카드
            </li>
          </Link>
          <Link to="/menu/board">
            <li className={activePath.includes("board") && "active"}>
              <b></b>
              <b></b>
              게시판
            </li>
          </Link>
          <Link to="/menu/modal">
            <li className={activePath.includes("modal") && "active"}>
              <b></b>
              <b></b>
              모달
            </li>
          </Link>
          <Link to="/menu/video">
            <li className={activePath.includes("video") && "active"}>
              <b></b>
              <b></b>
              영상
            </li>
          </Link>
        </ul>
      </Container>
    </>
  );
}

export default SideNav;
