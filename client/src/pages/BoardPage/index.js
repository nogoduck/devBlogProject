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

import { pagiNation } from "./pagiNation";

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

  const onClickPage = (e) => {
    // e.preventDefault();
  };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  // };

  if (!posts) {
    return <Lodding>로딩중</Lodding>;
  } else {
    return (
      <Container>
        <BoardHeader>
          <Title>게시판</Title>
          <Link to="/menu/board/write">
            <WriteButton>글쓰기</WriteButton>
          </Link>
        </BoardHeader>
        <Table>
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

        <div style={{ display: "flex" }}>
          <form method="GET">
            <input type="submit" value="1" name="page" onClick={onClickPage} />
            <input type="submit" value="2" name="page" onClick={onClickPage} />
            <input type="submit" value="3" name="page" onClick={onClickPage} />
            <input type="submit" value="4" name="page" onClick={onClickPage} />
          </form>
        </div>
      </Container>
    );
  }
}

export default BoardPage;
