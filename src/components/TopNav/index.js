import React from "react";
import LeftItem from "./LeftItem/";
import RightItem from "./RightItem";
import { Header } from "./styled";
function index() {
  return (
    <Header>
      <LeftItem />
      <RightItem />
    </Header>
  );
}

export default index;
