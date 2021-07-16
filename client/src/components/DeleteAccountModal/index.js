import React from "react";
import { Container, Warning } from "./styled";
import Modal from "../Modal";
function DeleteAccountModal() {
  return (
    <Modal show={true} close={true} style={{ width: "200px", height: "300px" }}>
      <h5>정말로 진행하시겠습니까?</h5>
      <Warning>Warning >> 아래 항목들을 입력해주세요</Warning>
      <hr />
    </Modal>
  );
}

export default DeleteAccountModal;
