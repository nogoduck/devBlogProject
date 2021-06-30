import React, { useState } from "react";
import { Link } from "react-router-dom";

import {} from "./styled.js";
import Menu from "../../../components/Menu";
import SignInModal from "../../SignInModal";
import SignUpModal from "../../SignUpModal";

function RightItem() {
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const onClickSignInModal = () => {
    setShowSignInModal((prev) => !prev);
  };

  const onClickSignUpModal = () => {
    setShowSignUpModal((prev) => !prev);
  };

  return (
    <div style={{ float: "right" }}>
      <SignInModal />
      <SignUpModal />
    </div>
  );
}

export default RightItem;
