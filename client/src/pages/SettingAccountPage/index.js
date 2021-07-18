import { withRouter } from "react-router-dom";
import React, { useState } from "react";
import { Container, Profile, Menu, DeleteAccountButton } from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";
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
      <h3>계정 설정</h3>
      <hr />
      비밀번호 변경
      <h4>회원탈퇴</h4>
      <hr />
      회원탈퇴한 계정은 되돌릴 수 없습니다. 다시 한번 생각해주세요
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
