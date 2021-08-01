import { withRouter } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../_actions/user_actions';

// eslint-disable-next-line import/no-anonymous-default-export
export default function (ArgsComponent, option, admin = null) {
  function AuthenticationCheck({ history }) {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (option) {
        } else {
        }
        if (res.payload.isAuth) {
          //로그인이 된 상황
          if (option) {
            //optione === true
            //로그인이 된 상태에서 출입 불가능한 페이지
            // history.push("/");
          } else {
            //optione === false
            // history.push("/");
          }
        } else {
          //로그인이 안된 상황
          if (option) {
            //optione === true
            //로그인이 안된 상태에서 출입 불가능한 페이지
            history.push('/');
          } else {
            //optione === false
            // history.push("/");
          }
        }
      });
    }, []);

    return <ArgsComponent />;
  }

  return withRouter(AuthenticationCheck);
}
