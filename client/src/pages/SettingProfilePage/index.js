import { withRouter } from "react-router-dom";
import React from "react";
import { Container, Profile, Menu } from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

function SettingProfilePage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Container>
      <h3>프로필 설정</h3>
      <hr />
      프로필 사진 변경
      <br />
      프로필 닉네임 변경
    </Container>
  );
}

export default withRouter(SettingProfilePage);
