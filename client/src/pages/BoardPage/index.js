import { withRouter } from "react-router-dom";
import {
  Container,
  BoardHeader,
  Table,
  WriteButton,
  Lodding,
  Title,
  PagingContainer,
} from "./styleds";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import { pagiNation } from "./pagiNation";

function BoardPage() {
  const [posts, setPosts] = useState("");
  const [boardCnt, setBoardCnt] = useState(0);
  const totalPageCnt = Math.floor(boardCnt / 10) + 1;
  const [currentPage, setCurrentPage] = useState(1);
  const paging = pagiNation(totalPageCnt, currentPage);

  useEffect(() => {
    let variable = {
      currentPage: (currentPage - 1) * 10,
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

    setCurrentPage(e.target.value);
    const currentNum = e.target.value;

    let variable = {
      currentPage: (currentNum - 1) * 10,
    };

    axios
      .post("http://localhost:5050/menu/board", variable)
      .then(({ data }) => {
        setPosts(data.board);
        console.log("Click Data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        <PagingContainer>
          {paging &&
            paging.map((v) => {
              return (
                <button
                  onClick={onClickCurrentPage}
                  value={v}
                  className={currentPage == v && "active"}
                >
                  {v}
                </button>
              );
            })}
        </PagingContainer>
      </Container>
    );
  }
}

export default withRouter(BoardPage);
