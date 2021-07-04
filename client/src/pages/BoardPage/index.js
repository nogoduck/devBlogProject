import { Table } from "./styleds";
import React from "react";

function BoardPage() {
  const post = {
    0: ["고추참치", 32, 5, "2021-07-02"],
    1: ["동원참치", 2, 0, "2021-07-02"],
    2: ["마일드참치", 172, 58, "2021-07-02"],
    3: ["야채참치", 9, 1, "2021-07-02"],
    4: ["야채참치", 9, 1, "2021-07-02"],
    5: ["야채참치", 9, 1, "2021-07-02"],
    6: ["야채참치", 9, 1, "2021-07-02"],
    7: ["야채참치", 9, 1, "2021-07-02"],
    8: ["야채참치", 9, 1, "2021-07-02"],
    9: ["야채참치", 9, 1, "2021-07-02"],
    10: ["야채참치", 9, 1, "2021-07-02"],
    11: ["야채참치", 9, 1, "2021-07-02"],
    12: ["야채참치", 9, 1, "2021-07-02"],
    13: ["야채참치", 9, 1, "2021-07-02"],
    14: ["사조참치", 99, 99, "2021-07-02"],
  };
  console.log(Object.keys(post).length);

  return (
    <div>
      게시판
      <hr />
      <Table>
        <thead>
          {/* <tr>
            <th>제목</th>
            <th>조회수</th>
            <th>좋아요</th>
            <th>작성일</th>
          </tr> */}
        </thead>
        <tbody>
          {Object.keys(post).map((postIndex) => {
            return (
              <tr>
                {post[postIndex].map((v) => {
                  return <td>{v}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default BoardPage;