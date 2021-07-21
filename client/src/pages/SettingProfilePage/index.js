import { withRouter } from "react-router-dom";
import React from "react";
import {
  Container,
  Label,
  Input,
  Title,
  Line,
  Form,
  Message,
  Error,
  ErrorInput,
  UpdateNicknameButton,
  SettingProfileContainer,
} from "./styled";
import { useSelector } from "react-redux";

import Gravatar from "react-gravatar";

function SettingProfilePage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Container>
      <Title>프로필 설정</Title>
      <Line />
      <SettingProfileContainer>
        <div>
          <Form>
            <Label>닉네임</Label>
            <Input type="text" value={user.authStatus.nickname}></Input>
            <Message>
              닉네임은 12글자 이하로 입력가능하며 공백은 허용하지 않습니다.
            </Message>
            <UpdateNicknameButton>닉네임 변경</UpdateNicknameButton>
          </Form>
        </div>

        <div>
          <Label>프로필 사진</Label>
          <Gravatar
            email={user.authStatus.email}
            size={250}
            default="wavatar"
            style={{
              width: "250px",
              height: "250px",
              marginRight: "12px",
              borderRadius: "25%",
            }}
          />
        </div>
      </SettingProfileContainer>
    </Container>
  );
}

export default withRouter(SettingProfilePage);
