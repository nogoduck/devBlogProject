import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import { getClock } from "./func";
function Clock() {
  console.log("clock >> ", getClock());
  const [currentTime, setCurrentTime] = useState("00 : 00 : 00");

  useEffect(() => {
    setCurrentTime(setInterval(getClock, 1000));
  });
  // useEffect(() => {
  //   setCurrentTime(setInterval(getClock, 1000));
  // }, []);

  return <Container>{currentTime}</Container>;
}

export default Clock;
