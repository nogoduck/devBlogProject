import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../_actions/user_actions";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (component, option, admin = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log("auth::: ", res);
      });
    }, []);

    return <component />;
  }

  return AuthenticationCheck;
}
