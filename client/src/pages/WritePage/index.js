import { Container } from "./styled";
import React, { useState, useCallback } from "react";
import axios from "axios";

function WritePage() {
  //글쓰기 함수 처리해줘야함 + 서버로 요청 보내서 db에 삽입하기

  return (
    <Container>
      <h3>글쓰기</h3>
      <label For="title">제목</label>
      <input type="text" id="title" />
      <label For="description">내용</label>
      <input type="text" id="description" />
      <div id="file">
        <label For="title">첨부파일</label>
        <input type="text" id="file" />
        <button>추가</button>
        <button>삭제</button>
      </div>
      <button>등록</button>
    </Container>
  );
}

export default WritePage;
