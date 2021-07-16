import { withRouter } from "react-router-dom";
import React from "react";
import { Route, Switch } from "react-router-dom";

import { Content } from "./styled";
import TopNav from "../../components/TopNav";
import SideNav from "../../components/SideNav";

import LandingContent from "./LangdingContent";
import AboutPage from "../AboutPage";
import BoardPage from "../BoardPage";
import CardPage from "../CardPage";
import ModalPage from "../ModalPage";
import VideoPage from "../VideoPage";
import BoardWritePage from "../BoardWritePage";
import BoardDetailPage from "../BoardDetailPage";
import SettingPage from "../SettingPage";
import SettingProfilePage from "../SettingProfilePage";
import SettingAccountPage from "../SettingAccountPage";

import Auth from "../../hoc/auth";

// Auth 매개변수:
// (1, 2, 3) :
// 1: 컴포넌트
// 2: null(로그인 여부 상관 없음),
//   true(로그인 한 유저만 랜더링),
//   false(로그인 안한 유저는 접근제한)
// 3: 값을 넘기지 않으면 기본값 null, 유저등급 지정
// ex) 0 = 1 = admin, 2 = guest
function LandingPage() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex" }}>
        <SideNav />
        <Content>
          <Switch>
            <Route exact path="/" component={Auth(LandingContent, null)} />
            <Route path="/menu/about" component={Auth(AboutPage, false)} />
            <Route
              true
              path="/menu/board/write"
              component={Auth(BoardWritePage, true)}
            />
            <Route
              path="/menu/board/:postId"
              component={Auth(BoardDetailPage, null)}
            />
            <Route path="/menu/board" component={Auth(BoardPage, null)} />
            <Route path="/menu/card" component={Auth(CardPage, null)} />
            <Route path="/menu/modal" component={Auth(ModalPage, null)} />
            <Route path="/menu/video" component={Auth(VideoPage, null)} />
            <Route
              path="/setting/profile"
              component={Auth(SettingProfilePage, true)}
            />
            <Route
              path="/setting/account"
              component={Auth(SettingAccountPage, true)}
            />
            <Route exact path="/setting" component={Auth(SettingPage, true)} />
          </Switch>
        </Content>
      </div>
    </>
  );
}

export default withRouter(LandingPage);
