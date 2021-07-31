// ########################################
// 버그 : 모바일 or 태블릿 모드에서 랜딩페이지
// 로 이동후 메뉴 항목 이동하면 메뉴가 닫힘
// + 다른 페이지 내에서 메뉴 이동하면 정상 동작
// ########################################
import React, { useState, useEffect, useRef, useCallback } from 'react';
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
} from './styled';
import { AiFillPicture, AiTwotoneExperiment, AiFillHome } from 'react-icons/ai';
import { BiMenu } from 'react-icons/bi';
import { FaClipboardList, FaPhotoVideo, FaPaperPlane } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';

function SideNav() {
  //주로 사용하는 해상도
  //Desktop or PC"(min-width:1024px)", Tablet"(min-width:768px) and (max-width:1023px)", Mobile"(max-width:767px)"
  //반응형 (PC and Tablet <=> Mobile), 모바일로 전환되는 픽셀은 920px 으로 Firebase 홈페이지와 동일하게 세팅함
  const isDesktopAndTablet = useMediaQuery({ query: '(min-width:921px)' });
  const isMobile = useMediaQuery({ query: '(max-width:920px)' });
  const [useExtends, setUseExtends] = useState(false);
  const [useOpen, setUseOpen] = useState(false);

  //현재 페이지 목록 메뉴에 활성화
  const { pathname } = useLocation();
  let activePath = pathname.substring(5);

  const sideNavRef = useRef();

  // if (activePath === '') {
  //   activePath = 'null';
  // }

  const onClickToggleHidden = () => {
    setUseOpen((prev) => !prev);
  };
  const onClickToggleExtends = () => {
    setUseExtends((prev) => !prev);
  };

  const onCloseSideNav = useCallback(
    (e) => {
      console.log('window-click');
      console.log(e.target);
      if (useOpen && e.target) {
        console.log('모바일 메뉴 열림');
        setUseOpen(false);
      }
    },
    [useOpen]
  );

  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  useEffect(() => {
    if (isDesktopAndTablet) {
      console.log('PC설정');
      //모바일 상태에선 메뉴가 숨겨진 상태가 기본이다.
      setUseOpen(false);
    }
    if (isMobile) {
      console.log('모바일설정');
      setUseExtends(false);
    }
    //모바일 상태에서 메뉴 외부 클릭시 닫힘
    if (useOpen) {
      window.addEventListener('click', onCloseSideNav);
      return () => {
        window.removeEventListener('click', onCloseSideNav);
      };
    }
  }, [isMobile, isDesktopAndTablet, onCloseSideNav]);
  // console.log(isDesktop, isTablet, isMobile);

  return (
    <>
      <GlobalStyle />
      {isMobile && (
        <MenuButton onClick={onClickToggleHidden}>
          <BiMenu />
        </MenuButton>
      )}
      <Space className={useExtends && 'SideNavExtends'} />

      <Container
        onClick={stopPropagation}
        className={
          isDesktopAndTablet
            ? useExtends
              ? 'SideNavExtends'
              : ''
            : useOpen
            ? 'SideNavMobileOpen'
            : 'SideNavMobileHidden'
        }
        ref={sideNavRef}
      >
        <ul>
          <Link to="/menu/home">
            <li id={activePath.includes('null') && 'active'}>
              <MenuIcon>
                <AiFillHome />
              </MenuIcon>
              <MenuTitle
                className={isDesktopAndTablet && !useExtends && 'hidden'}
              >
                홈
              </MenuTitle>
            </li>
          </Link>

          <Link to="/menu/about">
            <li id={activePath.includes('about') && 'active'}>
              <MenuIcon>
                <FaPaperPlane />
              </MenuIcon>
              <MenuTitle
                className={isDesktopAndTablet && !useExtends && 'hidden'}
              >
                소개
              </MenuTitle>
            </li>
          </Link>

          <Link to="/menu/card">
            <li id={activePath.includes('card') && 'active'}>
              <MenuIcon>
                <AiFillPicture />
              </MenuIcon>
              <MenuTitle
                className={isDesktopAndTablet && !useExtends && 'hidden'}
              >
                사진
              </MenuTitle>
            </li>
          </Link>

          <Link to="/menu/board">
            <li id={activePath.includes('board') && 'active'}>
              <MenuIcon>
                <FaClipboardList />
              </MenuIcon>
              <MenuTitle
                className={isDesktopAndTablet && !useExtends && 'hidden'}
              >
                게시판
              </MenuTitle>
            </li>
          </Link>

          <Link to="/menu/experiment">
            <li id={activePath.includes('experiment') && 'active'}>
              <MenuIcon>
                <AiTwotoneExperiment />
              </MenuIcon>
              <MenuTitle
                className={isDesktopAndTablet && !useExtends && 'hidden'}
              >
                실험실
              </MenuTitle>
            </li>
          </Link>

          <Link to="/menu/video">
            <li id={activePath.includes('video') && 'active'}>
              <MenuIcon>
                <FaPhotoVideo />
              </MenuIcon>
              <MenuTitle
                className={isDesktopAndTablet && !useExtends && 'hidden'}
              >
                영상
              </MenuTitle>
            </li>
          </Link>
        </ul>

        {isDesktopAndTablet && (
          <ExtendsButton
            onClick={onClickToggleExtends}
            className={useExtends && 'ExtendsActive'}
          >
            <MdKeyboardArrowRight />
          </ExtendsButton>
        )}
      </Container>
    </>
  );
}

export default SideNav;
