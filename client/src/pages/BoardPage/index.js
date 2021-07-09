import { Container, Table, WriteButton } from "./styleds";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

async function BoardPage() {
  let posts;

  useEffect(() => {
    axios
      .get("http://localhost:5050/api/board/getall")
      .then((res) => {
        console.log(res.data.board);
        posts = res.data.board;
        console.log("POST", posts);
        console.log(posts.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [posts]);

  console.log(posts);
  if (!posts) {
    return <div>게시글 불러오는중</div>;
  } else {
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
            {posts &&
              posts.map((v) => {
                return (
                  <tr>
                    <td>{v.title}</td>
                    <td>{v.createdAt}</td>
                  </tr>
                );
              })}

            {/* {Object.keys(post).map((postIndex) => {
            return (
              <tr>
              {post[postIndex].map((v) => {
                return <td>{v}</td>;
              })}
              </tr>
              );
            })} */}
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
