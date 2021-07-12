import React from "react";
import { withRouter } from "react-router-dom";

import { Container } from "./styled";

function AboutPage() {
  return (
    <Container>
      <h4>버그발견시 블로그 게시판을 통해서 제보해주세요 😁</h4>
      <hr />
      <h3>- 수정할 버그 및 개선사항</h3>
      <ul>
        <li>페이지 네이션 가끔 0이 들어올때 0값 처리</li>
        <li>게시판 시간정보 오늘 기준으로 변경 ex) 5분전 1달전 3년전</li>
        <li>게시글 삭제시 확인, 취소 모달 생성후 요청</li>
        <li>
          게시글 작성시 확인후 정상적으로 등록이 되면 게시글 페이지로 넘기기
        </li>
        <li>
          로그인 되었을시 리덕스에 정보 생성 + <br />
          회원가입 버튼 제거, 유저 정보 표시, 유저 페이지 생성, 프로필 변경
        </li>
        <li>확인, 취소 모달 만들기</li>
        <li>게시글 제일 마지막 페이지 빈 페이지면 생성 안하기</li>
      </ul>
    </Container>
  );
}
export default withRouter(AboutPage);
