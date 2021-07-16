import { withRouter, Link } from "react-router-dom";
import React from "react";
import { Container, Profile, Menu } from "./styled";
import { useSelector } from "react-redux";
import Gravatar from "react-gravatar";

function SettingPage() {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <Container>
      <Profile>
        <Gravatar
          email={user.authStatus.email}
          size={50}
          default="wavatar"
          style={{
            width: "50px",
            height: "50px",
            marginRight: "5px",
            borderRadius: "25%",
          }}
        />
        {user.authStatus.name}
      </Profile>
      <Menu>
        <ul>
          <li>
            <Link to="/setting/profile">
              <span>프로필</span>
            </Link>
          </li>
          <li>
            <Link to="/setting/account">
              <span>계정</span>
            </Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}

export default withRouter(SettingPage);
