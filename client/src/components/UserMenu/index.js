import { Link, withRouter } from "react-router-dom";
import React, { useState } from "react";
import { MenuItems } from "./styled";
import axios from "axios";
import { BiLinkExternal } from "react-icons/bi";

import Clock from "../Clock";
import Menu from "../Menu";
import AlertModal from "../AlertModal";
const UserMenu = ({ history, show, close }) => {
  const [showSignOutModal, setShowSignOutModal] = useState(false);

  const onClickSignoutButton = () => {
    setShowSignOutModal((prev) => !prev);
  };

  const onClickSignOut = () => {
    axios
      .get("/api/users/signout")
      .then((res) => {
        //로그아웃 성공

        if (res.data.success) {
          history.push("/");
        }
      })
      .catch((err) => {
        alert("로그아웃에 실패했습니다.");
      });
  };

  return (
    <Menu
      show={show}
      close={close}
      style={{
        position: "absolute",
        width: "140px",
        top: "60px",
        right: "60px",
      }}
    >
      <MenuItems>
        <ul>
          <Link to="/setting">
            <li>설정</li>
          </Link>
          <li onClick={onClickSignoutButton}>로그아웃</li>
          <li>
            GitHub
            <BiLinkExternal
              style={{ fontSize: "16px", display: "inline-block" }}
            />
          </li>
          <li id="clock">
            <Clock />
          </li>
        </ul>
      </MenuItems>
      <AlertModal
        show={showSignOutModal}
        close={onClickSignoutButton}
        modalHeader="로그아웃"
        title="로그아웃 하시겠습니까?"
        content="로그아웃 하시겠습니까?"
        option="warning"
        confirm={onClickSignOut}
      ></AlertModal>
    </Menu>
  );
};

export default withRouter(UserMenu);
