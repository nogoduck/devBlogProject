import React from "react";
import Modal from "../Modal";
import axios from "axios";
import { SubmitButton, CancelButton } from "./styled";

function SignOutModal({ history, show, close }) {
  const onClickSignOut = () => {
    console.log("로그아웃 시도");
    axios
      .get("/api/users/signout")
      .then((res) => {
        //로그아웃 성공

        if (res.data.success) {
          show = false;
          history.push("/");
        }
      })
      .catch((err) => {
        alert("로그아웃에 실패했습니다.");
      });
  };

  return (
    <Modal show={show} close={close} useCloseButton={false}>
      <div>로그아웃을 하겠습니까?</div>
      <CancelButton onClick={close}>취소</CancelButton>
      <SubmitButton onClick={onClickSignOut}>확인</SubmitButton>
    </Modal>
  );
}

export default SignOutModal;
