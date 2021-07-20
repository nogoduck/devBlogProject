import React from "react";
import {
  DeleteAccountModalCancelButton,
  DeleteAccountModalSubmitButton,
} from "./styled";

import AlertModal from "../AlertModal";

function DeleteAccountModal({ show, close }) {
  return (
    <AlertModal
      show={true}
      // close={}
      modalHeader="회원탈퇴 주의사항"
      notice="계정을 탈퇴하면 되돌릴 수 없습니다. 신중히 생각해주세요"
      content="아래 진행사항을 입력해주세요"
      option="danger"
    >
      <label htmlFor="check-email">이메일</label>
      <input type="text" id="check-email" />
      <br />
      <label htmlFor="check-email">비밀번호</label>
      <input type="text" id="check-email" />

      <DeleteAccountModalCancelButton
      // onClick={ }
      >
        취소
      </DeleteAccountModalCancelButton>
      <DeleteAccountModalSubmitButton
      // onClick={}
      >
        확인
      </DeleteAccountModalSubmitButton>
    </AlertModal>
  );
}

export default DeleteAccountModal;
