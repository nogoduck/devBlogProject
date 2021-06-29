import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Input, SubmitButton } from "./styled";
import Menu from "../Menu";

function SignInModal() {
  const [showSignInModal, setShowSignInModal] = useState(false);

  const onClickSignInModal = () => {
    setShowSignInModal((prev) => !prev);
    console.log("Login Click: ", showSignInModal);
  };
  const onCloseSignInModal = (e) => {
    console.log("Login Close");
    e.stopPropagation();
    setShowSignInModal(false);
  };
  return (
    <div>
      <span onClick={onClickSignInModal}>
        <button>Login</button>
        {showSignInModal && (
          <Menu
            showModal={showSignInModal}
            onCloseModal={onCloseSignInModal}
            style={{
              padding: "30px",
              left: "50%",
              width: "300px",
              marginLeft: "-180px",
              top: "50%",
              height: "400px",
              marginTop: "-200px",
            }}
          >
            로그인
            <form>
              <Input type="email" label autoFocus />
              <Input type="password" />
              <SubmitButton>확인</SubmitButton>
            </form>
          </Menu>
        )}
      </span>
    </div>
  );
}

export default SignInModal;
