import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Container, Lodding } from "./styled";
import axios from "axios";

function BoardDetailPage() {
  useEffect(() => {
    axios
      .post("http://localhost:5050/api/board/detail", args)
      .then(({ data }) => {
        setDetailPost(data);
        setTitle(data.title);
        setDescription(data.description);
        console.log("detail data :: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const [detailPost, setDetailPost] = useState("");
  const { pathname } = useLocation();
  const postId = pathname.substring(12);
  const args = {
    _id: postId,
  };

  const [upadteMode, setUpadteMode] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClickPostUpdate = () => {
    setUpadteMode(true);
  };

  const onClickPostUpdateComplete = () => {
    setUpadteMode(false);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  if (!detailPost) {
    return <Lodding>로딩중</Lodding>;
  } else {
    if (!upadteMode) {
      return (
        <Container>
          {detailPost && <button onClick={onClickPostUpdate}>수정하기</button>}
          <br />
          <Link to="/menu/board">뒤로가기</Link>
          <h3>{detailPost.data.title}</h3>

          <p>{detailPost.data.description}</p>
        </Container>
      );
    } else {
      return (
        <Container>
          {detailPost && (
            <button onClick={onClickPostUpdateComplete}>수정완료</button>
          )}
          <br />
          <Link to="/menu/board">뒤로가기</Link>
          <h3>{detailPost.data.title}</h3>
          <input type="text" value={title} onChange={onChangeTitle} />
          <input
            type="text"
            value={description}
            onChange={onChangeDescription}
          />

          <p>{detailPost.data.description}</p>
        </Container>
      );
    }
  }
}

export default BoardDetailPage;
