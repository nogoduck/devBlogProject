import { withRouter } from "react-router-dom";
import React from "react";

function Profile() {
  return (
    <div>
      <h3>내 이름</h3>
      <h2>내 프로필 번경</h2>
      <h2>내 닉네임 변경ㅇ</h2>
      <h2>비밀번호 변경</h2>
      <h2>회원탈퇴</h2>
    </div>
  );
}

export default withRouter(Profile);
