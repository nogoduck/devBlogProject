import React, { useEffect, useState } from "react";
import { Container } from "./styled";
import { getClock } from "./func";
function Clock() {
  // console.log("clock >> ", getClock());
  const [currentTime, setCurrentTime] = useState(getClock);

  useEffect(() => {
    setInterval(() => {
      setCurrentTime(getClock);
    }, 1000);
  }, [currentTime]);

  return <Container>{currentTime}</Container>;
}

export default Clock;
