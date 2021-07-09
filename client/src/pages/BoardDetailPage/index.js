import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Lodding } from "./styled";
import axios from "axios";

function BoardDetailPage() {
  const [detailPost, setDetailPost] = useState("");
  const { pathname } = useLocation();
  const postId = pathname.substring(12);
  const args = {
    _id: postId,
  };

  useEffect(() => {
    axios
      .post("http://localhost:5050/api/board/detail", args)
      .then(({ data }) => {
        setDetailPost(data);
        console.log("detail data :: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!detailPost) {
    return <Lodding>로딩중</Lodding>;
  } else {
    return (
      <Container>
        {detailPost && <button>수정하기</button>}
        <br />
        <Link to="/menu/board">뒤로가기</Link>
        <h3>{detailPost.data.title}</h3>

        <p>{detailPost.data.description}</p>
      </Container>
    );
  }
}

export default BoardDetailPage;
