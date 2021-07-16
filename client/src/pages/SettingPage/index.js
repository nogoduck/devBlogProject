import { Route, Switch, withRouter, Link, useLocation } from "react-router-dom";

import React, { useEffect } from "react";
import { Container, Profile, Menu, Content } from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

import SettingProfilePage from "../SettingProfilePage";
import SettingAccountPage from "../SettingAccountPage";

function SettingPage({ history }) {
  const user = useSelector((state) => state.user);
  console.log(user);

  console.log("SettingPage Landering");

  const { pathname } = useLocation();
  let activePath = pathname.substring(9);
  console.log(activePath);
  console.log(typeof activePath);

  if (activePath === "") {
    activePath = null;
  }
  console.log("if > ", activePath);

  useEffect(() => {
    if (!user.authStatus.isAuth) {
      history.push("/");
    }
  });

  return (
    <Container>
      <Profile>
        <Gravatar
          email={user.authStatus.email}
          size={50}
          default="wavatar"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "5px",
            borderRadius: "25%",
          }}
        />
        {user.authStatus.name}
      </Profile>
      <Menu>
        <ul>
          <li>
            <div id="title">설정</div>
          </li>
          <li className={activePath === "profile" ? "active" : ""}>
            <Link to="/setting/profile">
              <div>프로필</div>
            </Link>
          </li>
          <li className={activePath === "account" ? "active-last" : ""}>
            <Link to="/setting/account">
              <div>계정</div>
            </Link>
          </li>
        </ul>
      </Menu>
      <Content>
        <Switch>
          <Route path="/setting/profile" component={SettingProfilePage} />
          <Route path="/setting/account" component={SettingAccountPage} />
        </Switch>
      </Content>
    </Container>
  );
}

export default withRouter(SettingPage);
