import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

import Modal from "../../components/Modal";

import { Container, Input, Label, SubmitButton, CancelButton } from "./styled";

function AboutPage() {
  const [showCreateCategoryModal, setShowCreateCategoryModal] = useState(false);

  const onClickCreateCategory = () => {
    setShowCreateCategoryModal((prev) => !prev);
  };

  return (
    <Container>
      <button onClick={onClickCreateCategory}>카테고리 추가+</button>

      {/* <Modal show={showCreateCategoryModal}>ddd</Modal> */}
      {showCreateCategoryModal && (
        <Modal
          show={showCreateCategoryModal}
          close={onClickCreateCategory}
          style={{ padding: "20px", width: "400px" }}
        >
          <br />
          <SubmitButton>확인</SubmitButton>
          <CancelButton>취소</CancelButton>
          <Label for="add_category">카테고리 추가</Label>
          <Input type="text" id="add_category"></Input>
        </Modal>
      )}
      <button>리스트 추가+</button>
    </Container>
  );
}
export default withRouter(AboutPage);
