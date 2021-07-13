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
import { useSelector } from "react-redux";
import axios from "axios";

import { pagiNation, pagiTotalCalc2 } from "./pageutils";

function BoardPage({ history }) {
  const isLogin = useSelector((state) => state.user);

  const [posts, setPosts] = useState("");
  const [boardCnt, setBoardCnt] = useState(0);
  console.log(boardCnt);
  const totalPageCnt = pagiTotalCalc2(boardCnt);
  console.log(totalPageCnt);
  const [currentPage, setCurrentPage] = useState(1);
  const paging = pagiNation(totalPageCnt, currentPage);

  useEffect(() => {
    let variable = {
      currentPage: (currentPage - 1) * 10,
    };
    //게시물 가져오는 요청
    axios
      .post("/api/board", variable)
      .then(({ data }) => {
        setPosts(data.board);
      })
      .catch((err) => {
        console.log(err);
      });

    //총 게시물 갯수를 가져오는 요청
    axios
      .post("/api/board/totalcount")
      .then(({ data }) => {
        console.log("TOTAL >>> ", data.total);
        setBoardCnt(data.total);
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
      .post("/api/board", variable)
      .then(({ data }) => {
        setPosts(data.board);
        console.log("Click Data", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onClickWrite = () => {
    if (!isLogin.authStatus.isAuth) {
      alert("로그인 한 유저만 게시글을 작성할 수 있습니다.");
    } else {
      history.push("/menu/board/write");
    }
  };

  const editDate = (date) => {
    console.log("원본 데이터 : ", date);
    const getDate = new Date(date);

    console.log("등록시간 > ", getDate);
    // console.log(date);
    // console.log(Date.now);
    // console.log(typeof date);
    // console.log(typeof Date.now());
    // console.log(date - Date.now());
    const now = new Date();
    console.log("현재시간 > ", now);
    const timeDiff = now - getDate;
    console.log("현재시간 - 등록시간 >> ", timeDiff);

    const milliSecondTimeDiff = new Date(timeDiff);
    console.log("____ 시간차 ms>> ", milliSecondTimeDiff);

    const secondTimeDiff = milliSecondTimeDiff / 1000;
    console.log("____ 시간차 (s)>> ", secondTimeDiff);

    const minuteTimeDiff = secondTimeDiff / 60;
    console.log("____ 시간차 (m)>> ", minuteTimeDiff);

    const hourTimeDiff = minuteTimeDiff / 60;
    console.log("____ 시간차 (h)>> ", hourTimeDiff);

    // console.log(now);

    return date;
  };

  if (!posts) {
    return <Lodding>로딩중</Lodding>;
  } else {
    return (
      <Container>
        <BoardHeader>
          <Title>게시판</Title>
          <WriteButton onClick={onClickWrite}>글쓰기</WriteButton>
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
                    <td>{editDate(post.createdAt)}</td>
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
