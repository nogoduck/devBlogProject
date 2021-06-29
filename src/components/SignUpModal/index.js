import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { TiWarning } from "react-icons/ti";
import { Input, SubmitButton, Button, Label, Error, Line } from "./styled";
import Menu from "../Menu";

function SignUpModal() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const onSubmit = (data) => {
    console.log("data: ", data);
  };

  const onClickSignUpModal = () => {
    setShowSignUpModal((prev) => !prev);
  };
  const onCloseSignUpModal = (e) => {
    e.stopPropagation();
    setShowSignUpModal(false);
  };
  return (
    <div>
      <span onClick={onClickSignUpModal}>
        <button>회원가입</button>
        {showSignUpModal && (
          <Menu
            showModal={showSignUpModal}
            onCloseModal={onCloseSignUpModal}
            style={{ padding: "15px", top: "77px", right: "20px" }}
          >
            회원가입
            <br />
            <input type="text" name="email" id="email" />
            <br />
            <input type="password" name="password" id="password" />
          </Menu>
        )}
      </span>
    </div>
  );
}

export default SignUpModal;
