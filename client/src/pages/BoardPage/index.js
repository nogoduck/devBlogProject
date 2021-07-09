import { Container, Table, WriteButton } from "./styleds";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BoardPage() {
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/board/getall")
      .then((res) => {
        console.log(res.data.board);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const goWriter = () => {};

  return (
    <Container>
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
      <Link to="/menu/board/write">
        <WriteButton onSubmit={goWriter}>글쓰기</WriteButton>
      </Link>
    </Container>
  );
}

export default BoardPage;
