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

import Auth from "../../hoc/auth";

function LandingPage() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex" }}>
        <SideNav />
        <Content>
          <Switch>
            <Route exact path="/" component={Auth(LandingContent, null)} />
            <Route path="/menu/about" component={Auth(AboutPage, null)} />
            <Route
              path="/menu/board/write"
              component={Auth(BoardWritePage, null)}
            />
            <Route
              path="/menu/board/:postId"
              component={Auth(BoardDetailPage, null)}
            />
            <Route path="/menu/board" component={Auth(BoardPage, null)} />
            <Route path="/menu/card" component={Auth(CardPage, null)} />
            <Route path="/menu/modal" component={Auth(ModalPage, null)} />
            <Route path="/menu/video" component={Auth(VideoPage, null)} />
          </Switch>
        </Content>
      </div>
    </>
  );
}

export default LandingPage;
