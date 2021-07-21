import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import {
  Container,
  Label,
  Input,
  Title,
  Line,
  NicknameContainer,
  Message,
  Error,
  ErrorInput,
  UpdateNicknameButton,
  SettingProfileContainer,
} from "./styled";
import { useSelector } from "react-redux";

import Gravatar from "react-gravatar";
import axios from "axios";

//유효성 검사 12글자 이하, 공백 여부 추가 예정
//기존의 닉네임과 같은지 검사

function SettingProfilePage({ history }) {
  const user = useSelector((state) => state.user);
  const [userNickname, setUserNickname] = useState("");
  const [errorUpdateNickname, setErrorUpdateNickname] = useState(false);
  const [successUpdateNickname, setSuccessUpdateNickname] = useState(false);

  const onChangeUserNickname = (e) => {
    setUserNickname(e.target.value);
  };

  const onClickUpdateNickname = () => {
    const payload = {
      _id: user.authStatus._id,
      changeNickname: userNickname,
    };
    console.log("payload >> ", payload);

    axios
      .post("/api/users/updatenickname", payload)
      .then(({ data }) => {
        history.push("/setting/profile");
        setSuccessUpdateNickname(true);
        console.log("data >> ", data);
        setTimeout(() => {
          setSuccessUpdateNickname(false);
        }, 5000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Title>프로필 설정</Title>
      <Line />
      <SettingProfileContainer>
        <div>
          <NicknameContainer>
            <Label>닉네임</Label>
            <Input
              type="text"
              value={userNickname}
              onChange={onChangeUserNickname}
            ></Input>
            <Message>
              닉네임은 12글자 이하로 입력가능하며 공백은 허용하지 않습니다.
            </Message>
            {successUpdateNickname && (
              <Message style={{ color: "#009432" }}>
                닉네임이 성공적으로 변경되었습니다.
              </Message>
            )}
            <UpdateNicknameButton onClick={onClickUpdateNickname}>
              닉네임 변경
            </UpdateNicknameButton>
          </NicknameContainer>
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
