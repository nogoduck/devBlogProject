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
import WritePage from "../WritePage";

function LandingPage() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex" }}>
        <SideNav />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingContent} />
            <Route path="/menu/about" component={AboutPage} />
            <Route path="/menu/board/write" component={WritePage} />
            <Route path="/menu/board" component={BoardPage} />
            <Route path="/menu/card" component={CardPage} />
            <Route path="/menu/modal" component={ModalPage} />
            <Route path="/menu/video" component={VideoPage} />
          </Switch>
        </Content>
      </div>
    </>
  );
}

export default LandingPage;
