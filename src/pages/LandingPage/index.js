import React from "react";
import { Route, Switch } from "react-router-dom";
import TopNav from "../../components/TopNav";
import SideNav from "../../components/SideNav";

import AboutPage from "../AboutPage";
import BoardPage from "../BoardPage";
import CardPage from "../CardPage";
import VideoPage from "../VideoPage";
function LandingPage() {
  return (
    <>
      <TopNav />
      <div style={{ display: "flex" }}>
        <SideNav />

        <Switch>
          <Route path="/menu/about" component={AboutPage} />
          <Route path="/menu/board" component={BoardPage} />
          <Route path="/menu/card" component={CardPage} />
          <Route path="/menu/video" component={VideoPage} />
        </Switch>
      </div>
    </>
  );
}

export default LandingPage;
