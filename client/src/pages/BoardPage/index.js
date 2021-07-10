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
  const [boardCnt, setBoardCnt] = useState(0);
  const totalPageCnt = Math.floor(boardCnt / 10) + 1;
  const [currentPage, setCurrentPage] = useState(5);
  const paging = pagiNation(totalPageCnt, currentPage);

  useEffect(() => {
    let variable = {
      currentPage: currentPage,
    };
    axios
      .post("http://localhost:5050/menu/board", variable)
      .then(({ data }) => {
        setPosts(data.board);
        setBoardCnt(data.boardCount);
        console.log("effect Data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onClickCurrentPage = (e) => {
    e.preventDefault();
    console.log("page: ", e.target.value);
    setCurrentPage(e.target.value);
    let variable = {
      currentPage: currentPage,
    };

    axios
      .post("http://localhost:5050/menu/board", variable)
      .then(({ data }) => {
        setPosts(data.board);
        setBoardCnt(data.boardCount);
        console.log("effect Data", data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <Link to="http://localhost:5050/menu/board/write">
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
        <input type="hidden" name="page" value="1" />
        <div style={{ display: "flex" }}>
          <form method="GET">
            {paging &&
              paging.map((v) => {
                return (
                  <input
                    type="submit"
                    value={v}
                    name="page"
                    onClick={onClickCurrentPage}
                  />
                );
              })}
          </form>
        </div>
      </Container>
    );
  }
}

export default BoardPage;
