import { withRouter } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Container,
  Lodding,
  UpdateButton,
  BoardHeader,
  Title,
  BoardInfo,
  Profile,
} from "./styled";
import axios from "axios";
import Gravatar from "react-gravatar";
import HtmlReactParser from "html-react-parser";

import { timeFormat } from "../BoardPage/_utils";
import BoardWritePage from "../BoardWritePage";

function BoardDetailPage() {
  useEffect(() => {
    axios
      .post("/api/board/detail", args)
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

  //확인, 취소 모달
  const onClickPostUpdate = () => {
    setTitle(detailPost.data.title);
    setDescription(detailPost.data.description);
    setUpadteMode(true);
  };

  if (!detailPost) {
    return <Lodding>로딩중</Lodding>;
  } else {
    if (!upadteMode) {
      return (
        <Container>
          <Link to="/menu/board">뒤로가기</Link>
          <BoardHeader>
            <Title>{detailPost.data.title}</Title>
            {detailPost && (
              <UpdateButton onClick={onClickPostUpdate}>수정하기</UpdateButton>
            )}
          </BoardHeader>
          <BoardInfo>
            <tr>
              <td>
                <Profile style={{ fontSize: "15px" }}>
                  <Gravatar
                    email={detailPost.data.email}
                    size={30}
                    default="wavatar"
                    style={{
                      width: "30px",
                      height: "30px",
                      marginRight: "5px",
                      borderRadius: "25%",
                    }}
                  />
                  {detailPost.data.nickname}
                </Profile>
              </td>
              <td>작성일&nbsp;&nbsp;{timeFormat(detailPost.data.createdAt)}</td>
              <td>
                최근 수정일&nbsp;&nbsp;
                {detailPost.data.updatedAt
                  ? timeFormat(detailPost.data.updatedAt)
                  : "수정 안함"}
              </td>
            </tr>
          </BoardInfo>
          <p>{HtmlReactParser(detailPost.data.description)}</p>
        </Container>
      );
    } else {
      return (
        <Container>
          <BoardWritePage
            postId={postId}
            changeTitle={title}
            changeDescription={description}
          />
        </Container>
      );
    }
  }
}

export default withRouter(BoardDetailPage);
