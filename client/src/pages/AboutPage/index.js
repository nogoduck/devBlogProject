import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import useInput from "../../hooks/useInput";
import Modal from "../../components/Modal";

import { Container, Input, Label, SubmitButton, CancelButton } from "./styled";

function AboutPage() {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);

  const [category, setCategory, onChangeCategory] = useInput("ff");

  const onSubmitCategory = () => {
    axios.post("");
  };

  const onClickCreateCategoryModal = () => {
    setShowCreateCategoryModal((prev) => !prev);
  };
  const onCloseCreateCategoryModal = () => {
    setShowCreateCategoryModal(false);
  };

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
          <SubmitButton onCLick={onSubmitCategory}>확인</SubmitButton>
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
    </Container>
  );
}
export default withRouter(AboutPage);
