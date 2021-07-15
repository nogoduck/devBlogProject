import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import useInput from "../../hooks/useInput";
import Modal from "../../components/Modal";

import { Container, Input, Label, SubmitButton, CancelButton } from "./styled";

function AboutPage() {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);

  const [category, setCategory, onChangeCategory] = useInput();
  const [todo, setTodo] = useState();

  const onSubmitCategory = () => {
    if (category === "") {
      alert("내용을 입력해주세요");
    } else {
      console.log("전송");
      const data = {
        title: category,
      };
      axios
        .post("/api/todo/category/create", data)
        .then((res) => {
          console.log(res);
          //응답이 오면 내용 초기화 후 모달 닫기
          setCategory("");
          onCloseCreateCategoryModal();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const onClickCreateCategoryModal = () => {
    setShowCreateCategoryModal((prev) => !prev);
  };
  const onCloseCreateCategoryModal = () => {
    setShowCreateCategoryModal(false);
  };

  useEffect(() => {
    axios
      .get("/api/todo")
      .then(({ data }) => {
        console.log(data);
        setTodo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    //모달이 닫혀있으면 입력된 내용 초기화
    if (!showCreateCategoryModal) {
      setCategory("");
    }
  });

  console.log("todo > ", todo);
  return (
    <Container>
      <button onClick={onClickCreateCategoryModal}>카테고리 추가+</button>

      {/* <Modal show={showCreateCategoryModal}>ddd</Modal> */}
      {showCreateCategoryModal && (
        <Modal
          useCloseButton={false}
          show={showCreateCategoryModal}
          close={onClickCreateCategoryModal}
          style={{ padding: "0px 20px 20px 20px", width: "400px" }}
        >
          <br />
          <SubmitButton onClick={onSubmitCategory}>확인</SubmitButton>
          <CancelButton onClick={onCloseCreateCategoryModal}>취소</CancelButton>
          <Label for="add_category">카테고리 추가</Label>
          <Input
            type="text"
            id="add_category"
            value={category}
            onChange={onChangeCategory}
          ></Input>
        </Modal>
      )}
      <button>리스트 추가+</button>

      <hr />
      {todo &&
        todo.category.map((v) => {
          return <div>{v.title}</div>;
        })}
    </Container>
  );
}
export default withRouter(AboutPage);
