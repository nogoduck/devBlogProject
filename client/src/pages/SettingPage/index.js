import { Route, Switch, withRouter, Link } from "react-router-dom";

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
          <li>
            <Link to="/setting/profile">
              <div>프로필</div>
            </Link>
          </li>
          <li>
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
