import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import useInput from "../../hooks/useInput";
import Modal from "../../components/Modal";

import {
  Container,
  Input,
  Label,
  SubmitButton,
  CancelButton,
  Category,
  CategoryId,
  CategoryContainer,
  CategoryButton,
  ListButton,
} from "./styled";

function AboutPage({ history }) {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [category, setCategory, onChangeCategory] = useInput();
  const [list, setList, onChangeList] = useInput();
  const [todo, setTodo] = useState();
  const [clickCategoryId, setClickCategoryId] = useState("");

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
          history.push("/menu/about");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const onSubmitList = () => {
    if (list === "") {
      alert("내용을 입력해주세요");
    } else {
      const args = {
        _id: clickCategoryId,
        memo: list,
      };
      axios
        .post("/api/todo/list/create", args)
        .then((res) => {
          console.log(res);
          //응답이 오면 내용 초기화 후 모달 닫기
          setList("");
          onCloseCreateListModal();
          history.push("/menu/about");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //카테고리 추가 모달 토글
  const onClickCreateCategoryModal = () => {
    setShowCreateCategoryModal((prev) => !prev);
  };
  //카테고리 추가 모달 닫기
  const onCloseCreateCategoryModal = () => {
    setShowCreateCategoryModal(false);
  };
  //리스트 추가 모달 토글
  const onClickCreateListModal = (e) => {
    //현재 클릭된 카테고리를 넣어준다
    setClickCategoryId(e.target.value);
    setShowCreateListModal((prev) => !prev);
  };
  //리스트 추가 모달 닫기
  const onCloseCreateListModal = () => {
    setShowCreateListModal(false);
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
    if (!showCreateListModal) {
      setList("");
    }
  }, [showCreateCategoryModal, showCreateListModal]);

  //---------------------------[ 수정 예정 사항 ]---------------------
  //input을 사용할 시 랜더링이 자주 일어나기 떄문에 따로 뺴줄 예정
  // console.log("todo > ", todo);
  //-----------------------------------------------------------
  return (
    <Container>
      <button onClick={onClickCreateCategoryModal}>카테고리 추가+</button>

      <hr />
      <CategoryContainer>
        {todo &&
          todo.category.map((v) => {
            return (
              <Category>
                {v.title}
                <ListButton onClick={onClickCreateListModal} value={v._id}>
                  ＋
                </ListButton>

                <ul>
                  <li>working list1</li>
                  <li>working list2</li>
                  <li>working list3</li>
                  <li>working list4</li>
                  <li>working list5</li>
                  <li>working list6</li>
                  <li>working list7</li>
                </ul>
              </Category>
            );
          })}
      </CategoryContainer>

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

      {showCreateListModal && (
        <Modal
          useCloseButton={false}
          show={showCreateListModal}
          close={onClickCreateListModal}
          style={{ padding: "0px 20px 20px 20px", width: "400px" }}
        >
          <br />
          <SubmitButton onClick={onSubmitList}>확인</SubmitButton>
          <CancelButton onClick={onCloseCreateListModal}>취소</CancelButton>
          <Label for="add_list">메모 추가</Label>
          <Input
            type="text"
            id="add_list"
            value={list}
            onChange={onChangeList}
          ></Input>
        </Modal>
      )}
    </Container>
  );
}
export default withRouter(AboutPage);
