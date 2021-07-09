import { Container, Table, WriteButton, Lodding } from "./styleds";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function BoardPage() {
  const [posts, setPosts] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5050/api/board/getall")
      .then(({ data }) => {
        setPosts(data.board);
        console.log("POST", posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!posts) {
    return <Lodding>로딩중</Lodding>;
  } else {
    return (
      <Container>
        게시판
        <hr />
        <Table>
          <thead>
            {/* <tr>
            <th>제목</th>
            <th>작성일</th>
          </tr> */}
          </thead>
          <tbody>
            {posts &&
              posts.map((post) => {
                return (
                  <tr>
                    <td>
                      <Link to={`/menu/board/${post._id}`}>{post.title}</Link>
                    </td>
                    <td>{post.createdAt}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
        <Link to="/menu/board/write">
          <WriteButton>글쓰기</WriteButton>
        </Link>
      </Container>
    );
  }
}

export default BoardPage;
