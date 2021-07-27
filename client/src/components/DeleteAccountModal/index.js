import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, Label, DeleteAccountForm } from "./styled";
import axios from "axios";

import useInput from "../../hooks/useInput";
import AlertModal from "../AlertModal";

function DeleteAccountModal({ history, show, close }) {
  const user = useSelector((state) => state.user);

  const [email, setEmail, onChangeEmail] = useInput();
  const [password, setPassword, onChangePassword] = useInput();
  const [showSuccessDeleteAccountModal, setShowSuccessDeleteAccountModal] =
    useState(false);

  // console.log("show > ", show);
  // console.log("close > ", close);

  const onSubmitDeleteAccount = () => {
    const payload = {
      _id: user.authStatus._id,
      email: email,
      password: password,
      imagePath: user.authStatus.imagePath,
    };

    axios
      .delete("/api/users/delete/account", {
        data: {
          payload,
        },
        withCredentials: true,
      })
      .then(({ data }) => {
        //회원탈퇴 성공
        if (data.deleteAccount) {
          console.log("Delete Account Succeess >> ", data);
          close();
          setShowSuccessDeleteAccountModal(true);
        }
      })
      .catch((err) => {
        console.log("Delete Account Error >> ", err);
      });
  };

  const onSubmitSuccessDeleteAccount = () => {
    setShowSuccessDeleteAccountModal(false);
    history.push("/");
  };

  return (
    <div>
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
      <AlertModal
        show={showSuccessDeleteAccountModal}
        close={onSubmitSuccessDeleteAccount}
        modalHeader="회원탈퇴"
        title="회원탈퇴에 성공했습니다"
        content="이용해주셔서 감사합니다"
        option="success"
        useCancelButton={false}
        confirm={onSubmitSuccessDeleteAccount}
      ></AlertModal>
    </div>
  );
}

export default withRouter(DeleteAccountModal);
