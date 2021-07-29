import { withRouter } from "react-router-dom";
import React, { useState, useCallback } from "react";
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
  List,
  EditProfileImage,
  EditPicket,
  ProfileImage,
  UpdateNicknameButton,
  SettingProfileContainer,
} from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import axios from "axios";
import { RiImageEditFill } from "react-icons/ri";

import Menu from "../../components/Menu";
import EditProfileMenu from "../../components/EditProfileMenu";

//유효성 검사 12글자 이하, 공백 여부 추가 예정
//기존의 닉네임과 같은지 검사

function SettingProfilePage({ history }) {
  const user = useSelector((state) => state.user);
  const [userNickname, setUserNickname] = useState("");
  const [errorUpdateNickname, setErrorUpdateNickname] = useState({
    validation: false,
    void: false,
    trim: false,
    leng: false,
    special: false,
  });
  const [successUpdateNickname, setSuccessUpdateNickname] = useState(false);
  const [showEditProfileMenu, setShowEditProfileMenu] = useState(false);

  const onClickEditProfileMenu = () => {
    setShowEditProfileMenu((prev) => !prev);
  };

  const onCloseEditProfileMenu = () => {
    setShowEditProfileMenu(false);
  };

  const onChangeUserNickname = (e) => {
    setUserNickname(e.target.value);
  };

  const nicknameValidation = () => {
    //입력 안된 상태
    if (
      userNickname === "" ||
      userNickname === undefined ||
      userNickname === null
    ) {
      setErrorUpdateNickname({
        ...errorUpdateNickname,
        validation: true,
        void: true,
      });
      setTimeout(() => {
        setErrorUpdateNickname({ ...errorUpdateNickname, void: false });
      }, 5000);
      return true;
    }

    //공백체크 초기값이 -1이고 공백이 발견되면 인덱스를 반환
    if (userNickname.search(/\s/) > -1) {
      setErrorUpdateNickname({
        ...errorUpdateNickname,
        validation: true,
        trim: true,
      });
      setTimeout(() => {
        setErrorUpdateNickname({ ...errorUpdateNickname, trim: false });
      }, 5000);
      return true;
    }

    //글자 제한 초과
    if (userNickname.length > 12) {
      setErrorUpdateNickname({
        ...errorUpdateNickname,
        validation: true,
        leng: true,
      });
      setTimeout(() => {
        setErrorUpdateNickname({ ...errorUpdateNickname, leng: false });
      }, 5000);
      return true;
    }

    //공백, 검사와 중복되어 사용하지 못하고 있음
    //특수문자 검사
    const regExp = /^[가-힣a-zA-Z]+$/;
    console.log("reg > ", regExp.test(userNickname));
    if (!regExp.test(userNickname)) {
      setErrorUpdateNickname({
        ...errorUpdateNickname,
        validation: true,
        special: true,
      });
      setTimeout(() => {
        setErrorUpdateNickname({ ...errorUpdateNickname, special: false });
      }, 5000);
      return true;
    }
  };

  const onClickUpdateNickname = () => {
    //초기화
    setErrorUpdateNickname(false);

    // 유효성 검사
    if (nicknameValidation()) {
      console.log("유효성 부적절");
      return null;
    }

    const payload = {
      _id: user.authStatus._id,
      changeNickname: userNickname,
    };
    console.log("payload >> ", payload);

    axios
      .post("/api/users/update/nickname", payload)
      .then(({ data }) => {
        setSuccessUpdateNickname(true);
        console.log("data >> ", data);
        setTimeout(() => {
          setSuccessUpdateNickname(false);
          history.push("/setting/profile");
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
            {errorUpdateNickname && errorUpdateNickname.void && (
              <Message style={{ color: "#e74c3c" }}>
                닉네임이 입력되지 않았습니다.
              </Message>
            )}
            {errorUpdateNickname && errorUpdateNickname.trim && (
              <Message style={{ color: "#e74c3c" }}>
                닉네임에 공백이 포함되어 있습니다. <br />
                공백을 제거 후 다시 시도하세요
              </Message>
            )}
            {errorUpdateNickname && errorUpdateNickname.leng && (
              <Message style={{ color: "#e74c3c" }}>
                닉네임이 입력 최대범위를 초과했습니다 <br />
                12글자 이하로 입력해주세요
              </Message>
            )}
            {errorUpdateNickname && errorUpdateNickname.special && (
              <Message style={{ color: "#e74c3c" }}>
                특수문자가 포함되어 있습니다 <br />
                제거 후 다시 시도하세요.
              </Message>
            )}
            {successUpdateNickname && (
              <Message style={{ color: "#009432" }}>
                닉네임이 성공적으로 변경되었습니다. <br />
                페이지를 새로고침하면 반영되며 5초 후에 자동으로 새로고침
                됩니다.
              </Message>
            )}
            <UpdateNicknameButton onClick={onClickUpdateNickname}>
              닉네임 변경
            </UpdateNicknameButton>
          </NicknameContainer>
        </div>

        <div style={{ position: "relative" }}>
          <Label>프로필 사진</Label>

          <EditProfileImage onClick={onClickEditProfileMenu}>
            {user.authStatus.imagePath ? (
              <ProfileImage
                src={`https://devlog-ad.herokuapp.com/${user.authStatus.imagePath}`}
              />
            ) : (
              <Gravatar
                email={user.authStatus.email}
                size={250}
                default="wavatar"
                style={{
                  width: "250px",
                  height: "250px",
                  marginRight: "12px",
                  borderRadius: "50%",
                  border: "1px solid #d0d7de",
                }}
              />
            )}
            <EditPicket>
              <RiImageEditFill
                style={{ fontSize: "20px", marginRight: "4px" }}
              />
              변경
            </EditPicket>
            <EditProfileMenu
              show={showEditProfileMenu}
              close={onCloseEditProfileMenu}
              style={{
                position: "relative",
                bottom: "24px",
              }}
            />
          </EditProfileImage>
        </div>
      </SettingProfileContainer>
    </Container>
  );
}

export default withRouter(SettingProfilePage);
