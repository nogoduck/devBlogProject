import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Container, ContainerMobile, MenuButton } from "./styled";
import { BiMenu } from "react-icons/bi";

function SideNav() {
  // const isDesktop = useMediaQuery({ query: "(min-width:1024px)" });
  const isTabletAndDesktop = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width:767px)" });
  const { pathname } = useLocation();
  const activePath = pathname.substring(5);
  const [hiddenMenu, setHiddenMenu] = useState(false);
  console.log(hiddenMenu);
  const onClickToggleMenu = () => {
    setHiddenMenu((prev) => !prev);
  };

  return (
    <>
      {isTabletAndDesktop && (
        <Container>
          <ul>
            <Link to="/menu/about">
              <li className={activePath.includes("about") && "active"}>소개</li>
            </Link>
            <Link to="/menu/card">
              <li className={activePath.includes("card") && "active"}>카드</li>
            </Link>
            <Link to="/menu/board">
              <li className={activePath.includes("board") && "active"}>
                게시판
              </li>
            </Link>
            <Link to="/menu/modal">
              <li className={activePath.includes("modal") && "active"}>모달</li>
            </Link>
            <Link to="/menu/video">
              <li className={activePath.includes("video") && "active"}>영상</li>
            </Link>
          </ul>
        </Container>
      )}
      {isMobile && (
        <>
          <MenuButton onClick={onClickToggleMenu}>
            <BiMenu />
          </MenuButton>
          <ContainerMobile id={hiddenMenu && "hidden"}>
            <ul>
              <Link to="/menu/about">
                <li className={activePath.includes("about") && "active"}>
                  소개
                </li>
              </Link>
              <Link to="/menu/card">
                <li className={activePath.includes("card") && "active"}>
                  카드
                </li>
              </Link>
              <Link to="/menu/board">
                <li className={activePath.includes("board") && "active"}>
                  게시판
                </li>
              </Link>
              <Link to="/menu/modal">
                <li className={activePath.includes("modal") && "active"}>
                  모달
                </li>
              </Link>
              <Link to="/menu/video">
                <li className={activePath.includes("video") && "active"}>
                  영상
                </li>
              </Link>
            </ul>
          </ContainerMobile>
        </>
      )}
    </>
  );
}

export default SideNav;
