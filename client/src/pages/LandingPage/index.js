import React, { useEffect } from "react";
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

import axios from "axios";

function LandingPage() {
  useEffect(() => {
    axios.get("/", (req, res) => {
      console.log("요청");
      console.log(req.data);
    });
  }, []);

  const onSubmit = () => {
    console.log("object");
    axios.get("http://localhost:5050").then((res) => {
      console.log("응답");
      console.log(res.data.cookie);
    });
  };

  return (
    <>
      <button onClick={onSubmit}>dd</button>
      <TopNav />
      <div style={{ display: "flex" }}>
        <SideNav />
        <Content>
          <Switch>
            <Route exact path="/" component={LandingContent} />
            <Route path="/menu/about" component={AboutPage} />
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
