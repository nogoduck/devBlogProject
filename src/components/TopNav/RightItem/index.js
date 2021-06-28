import React, { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../../../components/Menu";
function RightItem() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const onClickLoginModal = () => {
    setShowLoginModal((prev) => !prev);
    console.log("Login Click: ", showLoginModal);
  };
  const onCloseLoginModal = (e) => {
    console.log("Login Close");
    e.stopPropagation();
    setShowLoginModal(false);
  };
  return (
    <div style={{ float: "right" }}>
      <span onClick={onClickLoginModal}>
        <button>Login</button>
        {showLoginModal && (
          <Menu
            showModal={showLoginModal}
            onCloseModal={onCloseLoginModal}
            style={{ padding: "15px", top: "77px", right: "20px" }}
          >
            로그인
            <br />
            <input type="text" name="email" id="email" />
            <br />
            <input type="password" name="password" id="password" />
          </Menu>
        )}
      </span>
      <button>Register</button>
    </div>
  );
}

export default RightItem;
