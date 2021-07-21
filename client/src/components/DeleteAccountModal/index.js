import React from "react";
import { Input, Label, Error, DeleteAccountForm } from "./styled";
import axios from "axios";

import AlertModal from "../AlertModal";

function DeleteAccountModal({ show, close }) {
  const onSubmitDeleteAccount = () => {
    console.log("delete user");
  };

  return (
    <AlertModal
      show={show}
      close={close}
      modalHeader="회원탈퇴 주의사항"
      notice="계정을 탈퇴하면 되돌릴 수 없습니다. 신중히 생각해주세요"
      content="아래 진행사항을 입력해주세요"
      option="danger"
      confirm={onSubmitDeleteAccount}
    >
      <hr />
      <DeleteAccountForm>
        <Label htmlFor="check-email">현재 로그인된 계정 이메일</Label>
        <Input type="text" id="check-email" />
        <Label htmlFor="check-email">현재 로그인된 계정 비밀번호</Label>
        <Input type="text" id="check-email" />
      </DeleteAccountForm>
    </AlertModal>
  );
}

export default DeleteAccountModal;
