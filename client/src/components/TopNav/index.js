import React, { useState, useEffect } from "react";
import LeftItem from "./LeftItem";
import RightItem from "./RightItem";
import { Space, Header } from "./styled";

function TopNav() {
  const [isScroll, setIsScroll] = useState(false);

  const startScroll = () => {
    setIsScroll(window.pageYOffset > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", startScroll);
  }, []);

  return (
    <Space>
      <Header className={isScroll ? "scroll" : ""}>
        <LeftItem />
        <RightItem />
      </Header>
    </Space>
  );
}

export default TopNav;
