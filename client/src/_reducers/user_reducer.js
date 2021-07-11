import { SIGNIN_USER, SIGNUP_USER, AUTH_USER } from "../_actions/types.js";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case SIGNIN_USER:
      return { ...state, signinSuccess: action.payload };
    case SIGNUP_USER:
      return { ...state, signupSuccess: action.payload };
    case AUTH_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
