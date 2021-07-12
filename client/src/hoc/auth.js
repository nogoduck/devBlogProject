import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../_actions/user_actions";
import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (ArgsComponent, option, admin = null) {
  function AuthenticationCheck(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        console.log("auth::: ", res);

        if (res.payload.isAuth) {
          if (option) {
            console.log("페이지 접근 금지 처리");
            //props.history 사용예정
          }
        } else {
        }
      });
    }, []);

    return <ArgsComponent />;
  }

  return AuthenticationCheck;
}
