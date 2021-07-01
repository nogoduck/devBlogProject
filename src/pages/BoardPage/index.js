import { Table } from "./styleds";
import React from "react";

function BoardPage() {
  const post = {
    0: ["고추참치", 32, 5, "2021-07-02"],
    1: ["동원참치", 2, 0, "2021-07-02"],
    2: ["마일드참치", 172, 58, "2021-07-02"],
    3: ["야채참치", 9, 1, "2021-07-02"],
  };
  console.log(Object.keys(post).length);
  for (let i = 0; i < Object.keys(post).length; i++) {
    console.log(post[i]);
    post[i].map((v) => {
      console.log("v: ", v);
    });
  }
  return (
    <div>
      <Table style={{ border: "1px solid black" }}>
        <thead>
          <tr>
            <th>제목</th>
            <th>조회수</th>
            <th>좋아요</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BoardPage;
