// ########################################
// 버그 : 모바일 or 태블릿 모드에서 랜딩페이지
// 로 이동후 메뉴 항목 이동하면 메뉴가 닫힘
// + 다른 페이지 내에서 메뉴 이동하면 정상 동작
// ########################################
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import {
  Container,
  Space,
  MenuButton,
  MenuIcon,
  MenuTitle,
  GlobalStyle,
  ExtendsButton,
  BottomItems,
} from './styled';
import { AiFillPicture, AiTwotoneExperiment, AiFillHome } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { FaClipboardList, FaPhotoVideo, FaPaperPlane } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

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
  const [useExtends, setUseExtends] = useState(false);
  const { pathname } = useLocation();
  let activePath = pathname.substring(5);

  const sideNavRef = useRef();

  if (activePath === '') {
    activePath = 'null';
  }

  const onClickToggleMenu = () => {
    setHiddenMenu((prev) => !prev);
  };
  const onClickToggleExtends = () => {
    setUseExtends((prev) => !prev);
  };

  useEffect(() => {
    // setHiddenMenu(isMobile ? true : false);
    // 해당 파일 상단에 적어둔 버그가 있어서 사용하지 않음
  }, []);
  // console.log(isDesktop, isTablet, isMobile);
  return (
    <>
      <GlobalStyle />
      {!isDesktop && (
        <MenuButton onClick={onClickToggleMenu}>
          <BiMenu />
        </MenuButton>
      )}
      <Space className={useExtends && 'SideNavExtends'} />

      <Container className={useExtends && 'SideNavExtends'} ref={sideNavRef}>
        <ul>
          <Link to="/">
            <li id={activePath.includes('null') && 'active'}>
              <MenuIcon>
                <AiFillHome />
              </MenuIcon>
              <MenuTitle className={!useExtends && 'hidden'}>홈</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/about">
            <li id={activePath.includes('about') && 'active'}>
              <MenuIcon>
                <FaPaperPlane />
              </MenuIcon>
              <MenuTitle className={!useExtends && 'hidden'}>소개</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/card">
            <li id={activePath.includes('card') && 'active'}>
              <MenuIcon>
                <AiFillPicture />
              </MenuIcon>
              <MenuTitle className={!useExtends && 'hidden'}>사진</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/board">
            <li id={activePath.includes('board') && 'active'}>
              <MenuIcon>
                <FaClipboardList />
              </MenuIcon>
              <MenuTitle className={!useExtends && 'hidden'}>게시판</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/experiment">
            <li id={activePath.includes('experiment') && 'active'}>
              <MenuIcon>
                <AiTwotoneExperiment />
              </MenuIcon>
              <MenuTitle className={!useExtends && 'hidden'}>실험실</MenuTitle>
            </li>
          </Link>

          <Link to="/menu/video">
            <li id={activePath.includes('video') && 'active'}>
              <MenuIcon>
                <FaPhotoVideo />
              </MenuIcon>
              <MenuTitle className={!useExtends && 'hidden'}>영상</MenuTitle>
            </li>
          </Link>
        </ul>

        <ExtendsButton
          onClick={onClickToggleExtends}
          className={useExtends && 'ExtendsActive'}
        >
          <MdKeyboardArrowRight />
        </ExtendsButton>
      </Container>
    </>
  );
}

export default SideNav;
