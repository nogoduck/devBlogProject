import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
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
    setTitle(detailPost.data.title);
    setDescription(detailPost.data.description);
    setUpadteMode(true);
  };
  const onClickPostDelete = () => {
    getDelete();
    confirmAlert({
      title: "게시글 삭제",
      message: "게시글을 삭제하시겠습니까? 삭제후엔 복구할 수 없습니다.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            const deleteId = {
              _id: postId,
            };
            console.log(deleteId);
            axios
              .post("http://localhost:5050/api/board/delete", deleteId)
              .then(({ data }) => {
                console.log("delete result :: ", data);
              })
              .catch((err) => {
                console.log(err);
              });
          },
        },
        {
          label: "No",
          onClick: () => false,
        },
      ],
    });
    console.log("Delete");
  };
  const onClickPostUpdateComplete = () => {
    //DB에 업데이트 요청
    setUpadteMode(false);
    const variable = { _id: postId, title: title, description: description };
    console.log("post update, variable :: ", variable);
    axios
      .post("http://localhost:5050/api/board/update", variable)
      .then(({ data }) => {
        setDetailPost(data);
        console.log("detail data :: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDelete = () => {
    const tId = {
      _id: "3004121111222",
    };
    console.log(tId);
    axios
      .post("http://localhost:5050/api/board/delete", tId)
      .then(({ data }) => {
        console.log("delete result :: ", data);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <h3>{detailPost.data._id}</h3>

          <p>{detailPost.data.description}</p>
        </Container>
      );
    } else {
      return (
        <Container>
          {detailPost && (
            <button onClick={onClickPostUpdateComplete}>수정완료</button>
          )}{" "}
          <br />
          <button onClick={onClickPostDelete}>삭제하기</button>
          <br />
          <Link to="/menu/board">뒤로가기</Link> <br />
          <input type="text" value={title} onChange={onChangeTitle} /> <br />
          <input
            type="text"
            value={description}
            onChange={onChangeDescription}
          />
        </Container>
      );
    }
  }
}

export default BoardDetailPage;
