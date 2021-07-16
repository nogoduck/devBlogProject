import { withRouter } from "react-router-dom";
import React from "react";
import { Container, Profile, Menu } from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

function SettingAccountPage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return <Container>setAccount</Container>;
}

export default withRouter(SettingAccountPage);
