// ########################################
// 버그 : 모바일 or 태블릿 모드에서 랜딩페이지
// 로 이동후 메뉴 항목 이동하면 메뉴가 닫힘
// + 다른 페이지 내에서 메뉴 이동하면 정상 동작
// ########################################
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Container, Space, MenuButton, MenuIcon, MenuTitle } from './styled';
import { AiFillPicture, AiTwotoneExperiment, AiFillHome } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { FaClipboardList, FaPhotoVideo, FaPaperPlane } from 'react-icons/fa';

function SideNav() {
  //Desktop or PC"(min-width:1024px)", Tablet"(min-width:768px) and (max-width:1023px)", Mobile"(max-width:767px)"
  //반응형 (PC <=> Tablet and Mobile)
  const isDesktop = useMediaQuery({ query: '(min-width:1024px)' });
  const isTablet = useMediaQuery({
    query: '(min-width:768px) and (max-width:1023px)',
  });
  const isMobile = useMediaQuery({ query: '(max-width:767px)' });
  const [hiddenMenu, setHiddenMenu] = useState(false);
  //현재 페이지 목록 메뉴에 활성화
  const { pathname } = useLocation();
  let activePath = pathname.substring(5);

  const sideNavRef = useRef();

  if (activePath === '') {
    activePath = 'null';
  }

  const onClickToggleMenu = () => {
    setHiddenMenu((prev) => !prev);
  };

  useEffect(() => {
    // setHiddenMenu(isMobile ? true : false);
    // 해당 파일 상단에 적어둔 버그가 있어서 사용하지 않음
  }, []);
  // console.log(isDesktop, isTablet, isMobile);
  return (
    <>
      {!isDesktop && (
        <MenuButton onClick={onClickToggleMenu}>
          <BiMenu />
        </MenuButton>
      )}
      <Space />

      <Container id={hiddenMenu && 'hiddenSideNav'} ref={sideNavRef}>
        <ul>
          <Link to="/">
            <li id={activePath.includes('null') && 'active'}>
              <MenuIcon>
                <AiFillHome />
              </MenuIcon>
              <MenuTitle id={isTablet && 'hidden'}>홈</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/about">
            <li id={activePath.includes('about') && 'active'}>
              <MenuIcon>
                <FaPaperPlane />
              </MenuIcon>
              <MenuTitle id={isTablet && 'hidden'}>소개</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/card">
            <li id={activePath.includes('card') && 'active'}>
              <MenuIcon>
                <AiFillPicture />
              </MenuIcon>
              <MenuTitle id={isTablet && 'hidden'}>사진</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/board">
            <li id={activePath.includes('board') && 'active'}>
              <MenuIcon>
                <FaClipboardList />
              </MenuIcon>
              <MenuTitle id={isTablet && 'hidden'}>게시판</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/experiment">
            <li id={activePath.includes('experiment') && 'active'}>
              <MenuIcon>
                <AiTwotoneExperiment />
              </MenuIcon>
              <MenuTitle id={isTablet && 'hidden'}>실험실</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/video">
            <li id={activePath.includes('video') && 'active'}>
              <MenuIcon>
                <FaPhotoVideo />
              </MenuIcon>
              <MenuTitle id={isTablet && 'hidden'}>영상</MenuTitle>
            </li>
          </Link>
        </ul>
      </Container>
    </>
  );
}

export default SideNav;
