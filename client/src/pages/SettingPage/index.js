import { withRouter } from "react-router-dom";
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
            <span>프로필</span>
          </li>
          <li>
            <span>계정</span>
          </li>
        </ul>
      </Menu>
    </Container>
  );
}

export default withRouter(SettingPage);
