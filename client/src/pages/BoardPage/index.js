import {
  Container,
  BoardHeader,
  Table,
  WriteButton,
  Lodding,
  Title,
} from "./styleds";
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
        <BoardHeader>
          <Title>게시판</Title>
          <Link to="/menu/board/write">
            <WriteButton>글작성</WriteButton>
          </Link>
        </BoardHeader>
        {/* <hr /> */}
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
      </Container>
    );
  }
}

export default BoardPage;
