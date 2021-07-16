import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import useInput from "../../hooks/useInput";
import Modal from "../../components/Modal";

import { MdLibraryAdd } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoTrash } from "react-icons/io5";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

import {
  Container,
  Input,
  Label,
  SubmitButton,
  CancelButton,
  Category,
  CategoryCreate,
  CategoryContainer,
  CategoryAdd,
  ListButton,
  ListContainer,
  List,
  Title,
  CategoryETCButtonContainer,
  ListETCButtonContainer,
} from "./styled";

function AboutPage({ history }) {
  // 리스트 추가 멘트 랜덤으로 넣을 예정 (우선순위 > 최하위)
  // const ListCreateMent = [];

  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);
  const [showCreateListModal, setShowCreateListModal] = useState(false);
  const [category, setCategory, onChangeCategory] = useInput();
  const [list, setList, onChangeList] = useInput();
  const [todo, setTodo] = useState();
  const [clickCategoryId, setClickCategoryId] = useState("");

  //카테고리, 리스트 마우스 호버시 클래스명 변경 변수
  //카테고리 버튼은 호버 사용 안할예정 21.07.16 -12:00
  // const [hoverCategory, setHoverCategory] = useState(false);
  const [hoverList, setHoverList] = useState(true);

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
          initialRequest();
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

  const initialRequest = () => {
    axios
      .get("/api/todo")
      .then(({ data }) => {
        console.log("data > ", data);
        setTodo(data);
      })
      .catch((err) => {
        console.log(err);
      });
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
  //카테고리명에 마우스 올렸을떄
  // const inCategoryMouse = () => {
  //   console.log("on");
  //   setHoverCategory(true);
  // };
  //카테고리명에 마우스 떠날때
  // const outCategoryMouse = () => {
  //   console.log("off");
  //   setHoverCategory(false);
  // };
  //리스트명에 마우스 올렸을때
  const inListMouse = () => {
    console.log("onList");
    setHoverList(true);
  };
  //리스트명에 마우스 떠날때
  const outListMouse = () => {
    console.log("offList");
    // setHoverList(false);
  };

  useEffect(() => {
    initialRequest();
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

  console.log("todo >> ", todo);
  // todo.map((v) => {
  //   console.log(v);
  // });
  // console.log("todo list >> ", todo.category);

  //---------------------------[ 수정 예정 사항 ]---------------------
  //input을 사용할 시 랜더링이 자주 일어나기 떄문에 따로 뺴줄 예정
  // console.log("todo > ", todo);
  //-----------------------------------------------------------
  return (
    <Container>
      <hr />
      <CategoryContainer>
        {todo &&
          todo.category.map((vCategory) => {
            return (
              <Category>
                {true && (
                  <CategoryETCButtonContainer>
                    <button>
                      <FaEdit />
                    </button>
                    <button>
                      <IoTrash />
                    </button>
                  </CategoryETCButtonContainer>
                )}
                <Title>{vCategory.title}</Title>

                {/* dummpy Start  */}

                <List onMouseOver={inListMouse} onMouseOut={outListMouse}>
                  1번 고기
                  <input type="checkbox" name="" id="list-checkbox" />
                  {hoverList && (
                    <ListETCButtonContainer>
                      <button>
                        <FaEdit />
                      </button>
                      <button>
                        <IoMdRemoveCircle />
                      </button>
                    </ListETCButtonContainer>
                  )}
                  {/* {vList.memo && vList.memo} */}
                </List>
                <List onMouseOver={inListMouse} onMouseOut={outListMouse}>
                  1번 고기
                  <input type="checkbox" name="" id="list-checkbox" />
                  {hoverList && (
                    <ListETCButtonContainer>
                      <button>
                        <FaEdit />
                      </button>
                      <button>
                        <IoMdRemoveCircle />
                      </button>
                    </ListETCButtonContainer>
                  )}
                  {/* {vList.memo && vList.memo} */}
                </List>
                <List onMouseOver={inListMouse} onMouseOut={outListMouse}>
                  1번 고기
                  <input type="checkbox" name="" id="list-checkbox" />
                  {hoverList && (
                    <ListETCButtonContainer>
                      <button>
                        <FaEdit />
                      </button>
                      <button>
                        <IoMdRemoveCircle />
                      </button>
                    </ListETCButtonContainer>
                  )}
                  {/* {vList.memo && vList.memo} */}
                </List>

                {/* dummpy End  */}
                {vCategory.list.length > 0 && <hr />}
                <ListContainer>
                  {vCategory.list.length > 0 &&
                    vCategory.list.map((vList) => {
                      return (
                        <List
                          onMouseOver={inListMouse}
                          onMouseOut={outListMouse}
                        >
                          1번 고기
                          <input type="checkbox" name="" id="list-checkbox" />
                          {hoverList && (
                            <ListETCButtonContainer>
                              <button>
                                <FaEdit />
                              </button>
                              <button>
                                <IoMdRemoveCircle />
                              </button>
                            </ListETCButtonContainer>
                          )}
                          {/* {vList.memo && vList.memo} */}
                        </List>
                      );
                    })}
                  <ListButton
                    onClick={onClickCreateListModal}
                    value={vCategory._id}
                  >
                    <IoMdAddCircle />
                    &nbsp;할 일을 입력해주세요 !
                  </ListButton>
                </ListContainer>
              </Category>
            );
          })}
        <CategoryCreate onClick={onClickCreateCategoryModal}>
          <CategoryAdd>카테고리 추가</CategoryAdd>
          <MdLibraryAdd style={{ fontSize: "48px", marginTop: "4px" }} />
        </CategoryCreate>
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
