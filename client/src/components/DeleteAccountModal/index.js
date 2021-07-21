import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, Label, Error, DeleteAccountForm } from "./styled";
import axios from "axios";

import useInput from "../../hooks/useInput";
import AlertModal from "../AlertModal";

function DeleteAccountModal({ show, close }) {
  const user = useSelector((state) => state.user);

  const [email, setEmail, onChangeEmail] = useInput();
  const [password, setPassword, onChangePassword] = useInput();
  console.log("v >> ", email, password);

  const onSubmitDeleteAccount = () => {
    console.log(email, password);
    console.log(user.authStatus._id);
    const payload = {
      _id: user.authStatus._id,
      email: email,
      password: password,
    };

    axios
      .delete("/api/users/deleteaccount", {
        data: {
          payload,
        },
        withCredentials: true,
      })
      .then(({ data }) => {
        console.log("Delete Post data >> ", data);
      })
      .catch((err) => {
        console.log("Delete Post Error >> ", err);
      });
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
        <Input
          type="text"
          id="check-email"
          value={email}
          onChange={onChangeEmail}
        />
        <Label htmlFor="check-email">현재 로그인된 계정 비밀번호</Label>
        <Input
          type="password"
          id="check-email"
          value={password}
          onChange={onChangePassword}
        />
      </DeleteAccountForm>
    </AlertModal>
  );
}

export default withRouter(DeleteAccountModal);
