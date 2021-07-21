import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import {
  Container,
  Title,
  Line,
  Label,
  Form,
  Input,
  Message,
  Error,
  ErrorInput,
  UpdatePasswordButton,
  DeleteAccountButton,
} from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

import useInput from "../../hooks/useInput";
import DeleteAccountModal from "../../components/DeleteAccountModal";

function SettingAccountPage() {
  const [showDeleteAccountModal, setShowDeleteAccountModal] = useState(false);

  const onClickDeleteAccountButton = () => {
    setShowDeleteAccountModal((prev) => !prev);
  };

  const onCloseDeleteAccountModal = () => {
    setShowDeleteAccountModal(false);
  };

  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Container>
      <Title>비밀번호 변경</Title>
      <Line />
      <Form>
        <Label for="currentPassword">현재 비밀번호</Label>
        <Input type="password" id="currentPassword" />
        <Label for="changePassword">변경할 비밀번호</Label>
        <Input type="password" id="changePassword" />
        <Label for="confirmChangePassword">변경할 비밀번호 확인</Label>
        <Input type="password" id="confirmChangePassword" />
        <Message>비밀번호는 6글자 이상으로 사용할 수 있습니다.</Message>
        <UpdatePasswordButton>비밀번호 변경</UpdatePasswordButton>
      </Form>
      <Title>회원탈퇴</Title>
      <Line />
      회원탈퇴한 계정은 되돌릴 수 없습니다. 다시 한번 생각해주세요
      <br />
      <DeleteAccountButton onClick={onClickDeleteAccountButton}>
        회원탈퇴
      </DeleteAccountButton>
      <DeleteAccountModal
        show={showDeleteAccountModal}
        close={onCloseDeleteAccountModal}
      />
    </Container>
  );
}

export default withRouter(SettingAccountPage);
